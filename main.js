const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');
const { autoUpdater } = require('electron-updater');
autoUpdater.logger = null;

// ===== App Settings =====
const ICON_PATH = path.join(__dirname, 'assets', 'icon.ico');

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

// Launch external app
ipcMain.handle('launch:app', async (event, exePath, args = [], options = {}) => {
  try {
    if (!exePath || exePath.trim() === '') {
      return { success: false, error: 'ไม่ได้ตั้งค่า path ของ Launcher' };
    }

    // Lunar Client: ใช้ shell.openExternal กับ lunarclient:// protocol
    if (options.lunarUrl) {
      await shell.openExternal(options.lunarUrl);
      return { success: true };
    }

    if (!fs.existsSync(exePath)) {
      return { success: false, error: `ไม่พบไฟล์: ${exePath}` };
    }

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
  const filters = ext === 'exe'
    ? [{ name: 'Executable', extensions: ['exe'] }, { name: 'All Files', extensions: ['*'] }]
    : [{ name: 'All Files', extensions: ['*'] }];

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
// Read Prism Launcher instances
ipcMain.handle('prism:getInstances', async (event, prismExePath) => {
  try {
    const path = require('path');
    // Prism stores instances next to the exe, or in AppData
    const possibleDirs = [
      path.join(path.dirname(prismExePath), 'instances'),
      path.join(require('os').homedir(), 'AppData', 'Roaming', 'PrismLauncher', 'instances'),
      path.join(require('os').homedir(), 'AppData', 'Local', 'Programs', 'Prism Launcher', 'instances'),
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
    const possibleDirs = [
      path.join(os.homedir(), 'curseforge', 'minecraft', 'Instances'),
      path.join(os.homedir(), 'Documents', 'curseforge', 'minecraft', 'Instances'),
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
    if (!fs.existsSync(exePath)) {
      return { success: false, error: `ไม่พบไฟล์: ${exePath}` };
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