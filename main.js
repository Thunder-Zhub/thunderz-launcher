const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');
const { autoUpdater } = require('electron-updater');
autoUpdater.logger = null;

// ===== App Settings =====
// .ico only works reliably on Windows; Linux (and the BrowserWindow "icon" option
// in general) needs a .png. macOS ignores this option and uses the .icns bundled
// via electron-builder instead, so .png is a safe fallback there too.
const ICON_PATH = process.platform === 'win32'
  ? path.join(__dirname, 'assets', 'icon.ico')
  : path.join(__dirname, 'assets', 'icon.png');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 900,
    minHeight: 580,
    frame: false,
    titleBarStyle: 'hidden',
    transparent: false,
    backgroundColor: '#0d0d0f',
    icon: ICON_PATH,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
    },
    show: false,
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    setTimeout(() => autoUpdater.checkForUpdates(), 3000);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // ===== App ID สำหรับ Windows Taskbar icon =====
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.thunderz.launcher');
  }
  // บน Linux บาง desktop environment (เช่น GNOME/KDE บน Manjaro) ใช้ desktop file's
  // StartupWMClass ในการจับคู่ icon/taskbar entry แทน AppUserModelId ของ Windows
  // ค่านี้ต้องตรงกับ "appId" ที่ตั้งใน package.json > build เพื่อให้ .desktop ที่
  // electron-builder สร้าง จับคู่กับหน้าต่างได้ถูกต้อง
  if (process.platform === 'linux') {
    app.setName('ThunderZ Launcher');
  }
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ===== IPC Handlers =====

// Window controls
ipcMain.handle('window:close', () => { if (mainWindow) mainWindow.close(); });
ipcMain.handle('window:minimize', () => { if (mainWindow) mainWindow.minimize(); });
ipcMain.handle('window:maximize', () => {
  if (!mainWindow) return;
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});

// ตรวจสอบว่าไฟล์มีอยู่จริงและ "รันได้" — บน Linux ไฟล์ที่มีอยู่แต่ไม่มี +x
// bit จะ spawn ไม่สำเร็จด้วย EACCES ซึ่งข้อความ error เดิม (แค่เช็ค existsSync)
// ทำให้ผู้ใช้เข้าใจผิดว่าไฟล์หาย ทั้งที่จริงคือ permission
function checkExecutable(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return { ok: false, error: `ไม่พบไฟล์: ${targetPath}` };
  }
  if (process.platform !== 'win32') {
    try {
      fs.accessSync(targetPath, fs.constants.X_OK);
    } catch {
      return {
        ok: false,
        error: `ไฟล์ไม่มีสิทธิ์รัน (chmod +x): ${targetPath}`,
      };
    }
  }
  return { ok: true };
}

// Launch external app
ipcMain.handle('launch:app', async (event, exePath, args = [], options = {}) => {
  try {
    if (!exePath || exePath.trim() === '') {
      return { success: false, error: 'ไม่ได้ตั้งค่า path ของ Launcher' };
    }

    // Lunar Client: ใช้ shell.openExternal กับ lunarclient:// protocol
    // บน Linux โปรโตคอลนี้ต้องมี .desktop entry ที่ลงทะเบียน MIME handler ไว้
    // (ตัวติดตั้ง Lunar Client บน Linux จะลงทะเบียนให้เองตามปกติ)
    if (options.lunarUrl) {
      await shell.openExternal(options.lunarUrl);
      return { success: true };
    }

    const check = checkExecutable(exePath);
    if (!check.ok) {
      return { success: false, error: check.error };
    }

    // AppImage บน Linux มักถูกดับเบิลคลิกเปิดตรงๆ ได้เหมือน exe ปกติเมื่อมี +x
    // bit แล้ว จึง spawn ตรงได้โดยไม่ต้องผ่าน shell
    const child = spawn(exePath, args, {
      detached: true,
      stdio: 'ignore',
      shell: false,
    });

    child.unref();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Browse file dialog
ipcMain.handle('dialog:openFile', async (event, ext) => {
  let filters;
  if (ext === 'exe') {
    if (process.platform === 'win32') {
      filters = [{ name: 'Executable', extensions: ['exe'] }, { name: 'All Files', extensions: ['*'] }];
    } else if (process.platform === 'linux') {
      // บน Linux launcher มักเป็น AppImage หรือไบนารีที่ไม่มีนามสกุลไฟล์เลย
      // (สิทธิ์รันมาจาก +x bit ไม่ใช่นามสกุล) จึงโชว์ AppImage เป็นตัวเลือกแรก
      // แต่ต้องมี All Files ด้วยเพราะไบนารีส่วนใหญ่ไม่มีนามสกุลให้กรอง
      filters = [{ name: 'AppImage', extensions: ['AppImage'] }, { name: 'All Files', extensions: ['*'] }];
    } else {
      filters = [{ name: 'Applications', extensions: ['app'] }, { name: 'All Files', extensions: ['*'] }];
    }
  } else {
    filters = [{ name: 'All Files', extensions: ['*'] }];
  }

  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters,
  });

  return result.canceled ? null : result.filePaths[0];
});

// Browse directory dialog
ipcMain.handle('dialog:openDirectory', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });

  return result.canceled ? null : result.filePaths[0];
});

// Bug fix: server:ping handler was missing — preload exposed it but main never handled it
const net = require('net');

function pingHost(host, port, timeout = 3000) {
  return new Promise((resolve) => {
    const start = Date.now();
    const socket = new net.Socket();
    let settled = false;

    const finish = (result) => {
      if (settled) return; // Bug guard: avoid double-resolve if multiple events fire
      settled = true;
      socket.destroy();
      resolve(result);
    };

    socket.setTimeout(timeout);

    socket.on('connect', () => {
      finish({ online: true, ms: Date.now() - start });
    });

    socket.on('timeout', () => {
      finish({ online: false, ms: null, error: 'timeout' });
    });

    socket.on('error', (err) => {
      finish({ online: false, ms: null, error: err.code || err.message });
    });

    try {
      socket.connect(port || 25565, host);
    } catch (err) {
      finish({ online: false, ms: null, error: err.message });
    }
  });
}

ipcMain.handle('server:ping', async (event, host, port) => {
  if (!host || typeof host !== 'string') {
    return { online: false, ms: null, error: 'invalid host' };
  }
  return pingHost(host, port);
});

// เพิ่มระบบตรวจสอบ ping หลายเซิร์ฟเวอร์พร้อมกันในครั้งเดียว (ลด IPC round-trip)
// servers: [{ id, ip, port }]
ipcMain.handle('server:pingBatch', async (event, servers) => {
  if (!Array.isArray(servers)) return {};
  const results = await Promise.all(
    servers.map(async (s) => {
      const res = await pingHost(s.ip, s.port);
      return [s.id, res];
    })
  );
  return Object.fromEntries(results);
});
// Read Prism Launcher instances
ipcMain.handle('prism:getInstances', async (event, prismExePath) => {
  try {
    const path = require('path');
    const os = require('os');
    const home = os.homedir();

    // Prism stores instances next to the exe on Windows, or in a
    // platform-specific config dir on Linux. Manjaro users can have Prism
    // installed 3 different ways (native package, AUR/manual, or Flatpak),
    // each with its own instances path, so we check all of them.
    const possibleDirs = process.platform === 'linux'
      ? [
          // instances folder shipped next to a portable/manually-placed binary
          path.join(path.dirname(prismExePath), 'instances'),
          // native package / manual install, follows XDG base dir spec
          path.join(process.env.XDG_DATA_HOME || path.join(home, '.local', 'share'), 'PrismLauncher', 'instances'),
          // some Prism builds use a lowercase, hyphenated dir name
          path.join(process.env.XDG_DATA_HOME || path.join(home, '.local', 'share'), 'prismlauncher', 'instances'),
          // Flatpak (org.prismlauncher.PrismLauncher), common on Manjaro/Arch via Flathub
          path.join(home, '.var', 'app', 'org.prismlauncher.PrismLauncher', 'data', 'PrismLauncher', 'instances'),
        ]
      : [
          path.join(path.dirname(prismExePath), 'instances'),
          path.join(home, 'AppData', 'Roaming', 'PrismLauncher', 'instances'),
          path.join(home, 'AppData', 'Local', 'Programs', 'Prism Launcher', 'instances'),
        ];

    for (const dir of possibleDirs) {
      if (fs.existsSync(dir)) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        const instances = entries
          .filter(e => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'))
          .map(e => ({ name: e.name, id: e.name }));
        if (instances.length > 0) return { success: true, instances };
      }
    }
    return { success: false, error: 'ไม่พบโฟลเดอร์ instances' };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Read CurseForge instances
ipcMain.handle('curse:getInstances', async (event, curseExePath) => {
  try {
    const path = require('path');
    const os = require('os');
    const home = os.homedir();

    // CurseForge (Overwolf app) on Linux is normally only available via
    // Flatpak/AUR wrappers, but users sometimes run the Windows build under
    // Wine/Lutris/Bottles, which nests the whole Windows-style home dir
    // under a Linux prefix path — so we check both real Linux locations and
    // common Wine prefix layouts.
    const possibleDirs = process.platform === 'linux'
      ? [
          path.join(home, 'curseforge', 'minecraft', 'Instances'),
          path.join(home, 'Documents', 'curseforge', 'minecraft', 'Instances'),
          path.join(home, '.local', 'share', 'curseforge', 'minecraft', 'Instances'),
          // common default Wine prefix (~/.wine) mapping the Windows user profile
          path.join(home, '.wine', 'drive_c', 'users', os.userInfo().username, 'curseforge', 'minecraft', 'Instances'),
          // Lutris default prefix location
          path.join(home, 'Games', 'curseforge', 'drive_c', 'users', os.userInfo().username, 'curseforge', 'minecraft', 'Instances'),
        ]
      : [
          path.join(home, 'curseforge', 'minecraft', 'Instances'),
          path.join(home, 'Documents', 'curseforge', 'minecraft', 'Instances'),
          path.join('C:', 'Users', os.userInfo().username, 'curseforge', 'minecraft', 'Instances'),
        ];

    for (const dir of possibleDirs) {
      if (fs.existsSync(dir)) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        const instances = entries
          .filter(e => e.isDirectory() && !e.name.startsWith('.'))
          .map(e => {
            // Try to read manifest.json for modpack name
            const manifestPath = path.join(dir, e.name, 'manifest.json');
            let displayName = e.name;
            try {
              if (fs.existsSync(manifestPath)) {
                const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
                displayName = manifest.name || e.name;
              }
            } catch {}
            return { name: displayName, id: e.name };
          });
        if (instances.length > 0) return { success: true, instances, dir };
      }
    }
    return { success: false, error: 'ไม่พบโฟลเดอร์ Instances ของ CurseForge' };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Launch Prism with specific instance + optional server
ipcMain.handle('prism:launch', async (event, exePath, instanceName, serverIp, serverPort) => {
  try {
    // Bug fix: prism:launch was missing the exePath existence check that curse:launch has,
    // causing a raw ENOENT spawn error instead of a friendly Thai message.
    // Also now checks the +x bit on Linux, not just existence — see checkExecutable().
    const check = checkExecutable(exePath);
    if (!check.ok) {
      return { success: false, error: check.error };
    }
    const args = ['--launch', instanceName];
    if (serverIp) args.push('--server', `${serverIp}:${serverPort || 25565}`);
    const child = spawn(exePath, args, { detached: true, stdio: 'ignore', shell: false });
    child.unref();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Launch CurseForge with specific instance + optional server
ipcMain.handle('curse:launch', async (event, exePath, instanceName, serverIp, serverPort) => {
  try {
    const check = checkExecutable(exePath);
    if (!check.ok) {
      return { success: false, error: check.error };
    }
    // CurseForge รองรับ --launch "InstanceName" และ --server ip:port
    const args = ['--launch', instanceName];
    if (serverIp) args.push('--server', `${serverIp}:${serverPort || 25565}`);
    const child = spawn(exePath, args, { detached: true, stdio: 'ignore', shell: false });
    child.unref();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// ===== Auto Updater =====
ipcMain.handle('update:check', () => {
  autoUpdater.checkForUpdates();
});

ipcMain.handle('update:install', () => {
  autoUpdater.quitAndInstall();
});

// Get real app version from package.json
ipcMain.handle('app:getVersion', () => {
  return app.getVersion();
});

autoUpdater.on('update-available', (info) => {
  if (mainWindow) mainWindow.webContents.send('update:available', info.version);
});

autoUpdater.on('download-progress', (progress) => {
  if (mainWindow) mainWindow.webContents.send('update:progress', Math.round(progress.percent));
});

autoUpdater.on('update-downloaded', () => {
  if (mainWindow) mainWindow.webContents.send('update:ready');
});

autoUpdater.on('update-not-available', () => {
  if (mainWindow) mainWindow.webContents.send('update:none');
});

autoUpdater.on('error', (err) => {
  if (mainWindow) mainWindow.webContents.send('update:error', err.message);
});