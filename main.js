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

// ===== Launch helpers (รองรับ Linux / Manjaro) =====
// สาเหตุที่ Play เปิดไม่ได้บน Linux ในเวอร์ชันก่อนหน้า:
//  1) spawn() ไม่มี handler ของ event 'error' และตอบ success ทันที ทั้งที่โปรแกรมอาจไม่ได้รันจริง
//     (EACCES / ENOENT / ENOEXEC จะเกิดทีหลังแบบ async) และ stdio: 'ignore' ทำให้มองไม่เห็น error เลย
//  2) AppImage ที่โหลดมาจากเบราว์เซอร์ไม่มี +x bit และ Manjaro บางเครื่องไม่มี libfuse2
//  3) Lunar Client: shell.openExternal('lunarclient://...') บน Linux ต้องมี MIME handler ซึ่งมักไม่ถูกลงทะเบียน
//  4) Prism: instances อาจอยู่ในโฟลเดอร์ที่ผู้ใช้ตั้งเอง (InstanceDir ใน prismlauncher.cfg)

// libfuse2 จำเป็นสำหรับรัน AppImage ตรงๆ (Manjaro รุ่นใหม่ๆ ไม่ได้ติดตั้งมาให้เสมอไป)
function hasFuse2() {
  const libs = [
    '/usr/lib/libfuse.so.2',
    '/usr/lib64/libfuse.so.2',
    '/usr/lib/x86_64-linux-gnu/libfuse.so.2',
    '/lib/libfuse.so.2',
    '/lib64/libfuse.so.2',
  ];
  return fs.existsSync('/dev/fuse') && libs.some((p) => fs.existsSync(p));
}

// ตรวจว่าไฟล์มีอยู่จริงและ "รันได้" — บน Linux ถ้าไม่มี +x จะลอง chmod +x ให้อัตโนมัติ
// (AppImage ที่โหลดจากเว็บไม่มี +x เป็นค่าเริ่มต้น)
function prepareExecutable(targetPath) {
  if (!targetPath || !fs.existsSync(targetPath)) {
    return { ok: false, error: `ไม่พบไฟล์: ${targetPath}` };
  }
  let stat;
  try {
    stat = fs.statSync(targetPath);
  } catch (err) {
    return { ok: false, error: err.message };
  }
  if (stat.isDirectory()) {
    return { ok: false, error: `path นี้เป็นโฟลเดอร์ ไม่ใช่ไฟล์โปรแกรม: ${targetPath}` };
  }
  if (process.platform !== 'win32') {
    try {
      fs.accessSync(targetPath, fs.constants.X_OK);
    } catch {
      try {
        fs.chmodSync(targetPath, stat.mode | 0o111);
        fs.accessSync(targetPath, fs.constants.X_OK);
      } catch {
        return {
          ok: false,
          error: `ไฟล์ไม่มีสิทธิ์รัน และตั้งสิทธิ์ให้อัตโนมัติไม่ได้ (ลอง chmod +x หรือเช็คว่าไม่ได้อยู่ในไดรฟ์ที่ mount แบบ noexec เช่น NTFS): ${targetPath}`,
        };
      }
    }
  }
  return { ok: true };
}

// ตัวแปร environment ที่จะส่งให้โปรแกรมลูก — กันค่าที่รั่วมาจาก Electron/AppImage ของ launcher นี้เอง
function buildLaunchEnv(exePath) {
  const env = { ...process.env };
  delete env.ELECTRON_RUN_AS_NODE; // ถ้าหลุดไป Lunar (Electron) จะกลายเป็น node เฉยๆ แล้วไม่เปิดหน้าต่าง
  delete env.ELECTRON_NO_ATTACH_CONSOLE;
  delete env.NODE_OPTIONS;
  if (process.platform === 'linux') {
    for (const k of ['APPIMAGE', 'APPDIR', 'ARGV0', 'OWD']) delete env[k];
    // ไม่มี FUSE2 → ให้ AppImage แตกไฟล์ไปรันเอง แทนที่จะพังเงียบๆ
    if (/\.appimage$/i.test(exePath) && !hasFuse2()) {
      env.APPIMAGE_EXTRACT_AND_RUN = '1';
    }
  }
  return env;
}

function describeSpawnError(err, exePath) {
  switch (err && err.code) {
    case 'EACCES':
      return `ไม่มีสิทธิ์รันไฟล์ (chmod +x): ${exePath}`;
    case 'ENOENT':
      return `ไม่พบไฟล์ หรือไฟล์ขาด interpreter/ไลบรารีที่จำเป็น: ${exePath}`;
    case 'ENOEXEC':
      return `ไฟล์นี้ไม่ใช่โปรแกรมที่รันได้ (เลือกไฟล์ผิด หรือเป็นคนละสถาปัตยกรรม): ${exePath}`;
    default:
      return (err && err.message) || 'เปิดโปรแกรมไม่สำเร็จ';
  }
}

function readLogTail(file, fromOffset, maxChars = 300) {
  try {
    const text = fs.readFileSync(file).subarray(fromOffset).toString('utf-8');
    return text
      .replace(/[<>&]/g, ' ') // toast ใน renderer ใช้ innerHTML
      .trim()
      .replace(/\s*\n\s*/g, ' | ')
      .slice(-maxChars);
  } catch {
    return '';
  }
}

// เปิดโปรแกรมแบบ detached และ "รอดูผลจริง" ก่อนตอบกลับ
//  - spawn ล้มเหลว (EACCES/ENOENT/...) → success: false พร้อมข้อความที่อ่านรู้เรื่อง
//  - (Linux/macOS) โปรแกรมปิดตัวทันทีด้วย exit code != 0 ภายใน ~2.5 วิ → success: false พร้อม stderr ท้ายๆ
//  - output ถูกเก็บไว้ที่ <userData>/launch.log เพื่อใช้ debug
function launchDetached(exePath, args = []) {
  return new Promise((resolve) => {
    const prep = prepareExecutable(exePath);
    if (!prep.ok) return resolve({ success: false, error: prep.error });

    const watchExit = process.platform !== 'win32'; // Windows ใช้แบบเดิม ไม่เปลี่ยนพฤติกรรม
    let logFd = null;
    let logFile = null;
    let logStart = 0;
    if (watchExit) {
      try {
        logFile = path.join(app.getPath('userData'), 'launch.log');
        fs.mkdirSync(path.dirname(logFile), { recursive: true });
        try {
          if (fs.statSync(logFile).size > 1024 * 1024) fs.truncateSync(logFile, 0);
        } catch {}
        logFd = fs.openSync(logFile, 'a');
        logStart = fs.fstatSync(logFd).size;
      } catch {
        logFd = null;
      }
    }

    let child;
    try {
      child = spawn(exePath, args, {
        detached: true,
        stdio: logFd !== null ? ['ignore', logFd, logFd] : 'ignore',
        shell: false,
        env: buildLaunchEnv(exePath),
        cwd: path.dirname(exePath),
      });
    } catch (err) {
      if (logFd !== null) { try { fs.closeSync(logFd); } catch {} }
      return resolve({ success: false, error: describeSpawnError(err, exePath) });
    }
    child.unref();

    let settled = false;
    let timer = null;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      if (logFd !== null) { try { fs.closeSync(logFd); } catch {} }
      resolve(result);
    };

    // ต้องมี handler นี้เสมอ ไม่งั้น 'error' ที่เกิดทีหลังจะกลายเป็น uncaught exception ใน main process
    child.on('error', (err) => finish({ success: false, error: describeSpawnError(err, exePath) }));

    if (watchExit) {
      child.on('exit', (code, signal) => {
        if (code === 0) return finish({ success: true });
        const tail = logFile ? readLogTail(logFile, logStart) : '';
        const why = signal ? `signal ${signal}` : `exit code ${code}`;
        finish({ success: false, error: `โปรแกรมปิดตัวทันที (${why})${tail ? ` — ${tail}` : ''}` });
      });
      timer = setTimeout(() => finish({ success: true }), 2500);
    } else {
      child.on('spawn', () => finish({ success: true }));
    }
  });
}

// Launch external app
ipcMain.handle('launch:app', async (event, exePath, args = [], options = {}) => {
  try {
    if (!exePath || String(exePath).trim() === '') {
      return { success: false, error: 'ไม่ได้ตั้งค่า path ของ Launcher' };
    }
    exePath = String(exePath).trim();
    const safeArgs = Array.isArray(args) ? args.map(String) : [];

    // Lunar Client พร้อม server: ใช้ lunarclient:// protocol
    if (options && options.lunarUrl) {
      if (typeof options.lunarUrl !== 'string' || !options.lunarUrl.startsWith('lunarclient://')) {
        return { success: false, error: 'lunarclient URL ไม่ถูกต้อง' };
      }
      if (process.platform === 'linux') {
        // บน Linux shell.openExternal ต้องพึ่ง .desktop MIME handler ซึ่ง AppImage ของ Lunar มักไม่ได้ลงทะเบียน
        // (และ openExternal ไม่ error ให้เห็นแม้ไม่มี handler) จึงส่ง URL เป็น argument ให้ตัวโปรแกรมตรงๆ
        // ซึ่งเป็นวิธีเดียวกับที่ xdg-open เรียกผ่าน Exec=... %U
        return await launchDetached(exePath, [options.lunarUrl]);
      }
      await shell.openExternal(options.lunarUrl);
      return { success: true };
    }

    return await launchDetached(exePath, safeArgs);
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
    const os = require('os');
    const home = os.homedir();
    const exeDir = prismExePath ? path.dirname(prismExePath) : null;

    // โฟลเดอร์ข้อมูลของ Prism (ที่เก็บ prismlauncher.cfg + instances)
    // Manjaro ติดตั้งได้ 3 แบบ (แพ็กเกจ native/AUR, portable, Flatpak) แต่ละแบบอยู่คนละที่
    let dataDirs;
    if (process.platform === 'linux') {
      const xdgData = process.env.XDG_DATA_HOME || path.join(home, '.local', 'share');
      dataDirs = [
        path.join(xdgData, 'PrismLauncher'),
        path.join(xdgData, 'prismlauncher'),
        path.join(home, '.local', 'share', 'PrismLauncher'),
        // Flatpak (org.prismlauncher.PrismLauncher)
        path.join(home, '.var', 'app', 'org.prismlauncher.PrismLauncher', 'data', 'PrismLauncher'),
        exeDir, // portable / วางไว้ข้างไบนารี
      ];
    } else {
      dataDirs = [
        exeDir,
        path.join(home, 'AppData', 'Roaming', 'PrismLauncher'),
        path.join(home, 'AppData', 'Local', 'Programs', 'Prism Launcher'),
      ];
    }
    dataDirs = dataDirs.filter(Boolean);

    // ถ้าผู้ใช้ย้ายโฟลเดอร์ instances เอง Prism จะเก็บไว้ใน prismlauncher.cfg (InstanceDir=...)
    const possibleDirs = [];
    for (const d of dataDirs) {
      try {
        const cfg = fs.readFileSync(path.join(d, 'prismlauncher.cfg'), 'utf-8');
        const m = cfg.match(/^InstanceDir=(.+)$/m);
        if (m) {
          let custom = m[1].trim();
          if (custom.startsWith('~')) custom = path.join(home, custom.slice(1));
          if (!path.isAbsolute(custom)) custom = path.join(d, custom);
          possibleDirs.push(custom);
        }
      } catch {}
    }
    for (const d of dataDirs) possibleDirs.push(path.join(d, 'instances'));

    const seen = new Set();
    for (const dir of possibleDirs) {
      if (seen.has(dir)) continue;
      seen.add(dir);
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
    if (!exePath || String(exePath).trim() === '') {
      return { success: false, error: 'ไม่ได้ตั้งค่า path ของ Prism Launcher' };
    }
    const args = ['--launch', String(instanceName)];
    if (serverIp) args.push('--server', `${serverIp}:${serverPort || 25565}`);
    return await launchDetached(String(exePath).trim(), args);
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Launch CurseForge with specific instance + optional server
ipcMain.handle('curse:launch', async (event, exePath, instanceName, serverIp, serverPort) => {
  try {
    if (!exePath || String(exePath).trim() === '') {
      return { success: false, error: 'ไม่ได้ตั้งค่า path ของ CurseForge' };
    }
    // CurseForge รองรับ --launch "InstanceName" และ --server ip:port
    const args = ['--launch', String(instanceName)];
    if (serverIp) args.push('--server', `${serverIp}:${serverPort || 25565}`);
    return await launchDetached(String(exePath).trim(), args);
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