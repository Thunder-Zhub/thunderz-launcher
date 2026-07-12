const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeWindow: () => ipcRenderer.invoke('window:close'),
  minimizeWindow: () => ipcRenderer.invoke('window:minimize'),
  maximizeWindow: () => ipcRenderer.invoke('window:maximize'),

  // options = { lunarUrl: '...' } สำหรับ Lunar Client
  launchApp: (exePath, args = [], options = {}) => ipcRenderer.invoke('launch:app', exePath, args, options),

  browseFile: (ext) => ipcRenderer.invoke('dialog:openFile', ext),
  browseDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),
  pingServer: (host, port) => ipcRenderer.invoke('server:ping', host, port),
  getPrismInstances: (exePath) => ipcRenderer.invoke('prism:getInstances', exePath),
  getCurseInstances: (exePath) => ipcRenderer.invoke('curse:getInstances', exePath),
  launchPrism: (exePath, instance, ip, port) => ipcRenderer.invoke('prism:launch', exePath, instance, ip, port),
  launchCurse: (exePath, instance, ip, port) => ipcRenderer.invoke('curse:launch', exePath, instance, ip, port),

  // Auto Update
  checkUpdate: () => ipcRenderer.invoke('update:check'),
  installUpdate: () => ipcRenderer.invoke('update:install'),
  onUpdateAvailable: (cb) => ipcRenderer.on('update:available', (_, ver) => cb(ver)),
  onUpdateProgress: (cb) => ipcRenderer.on('update:progress', (_, pct) => cb(pct)),
  onUpdateReady: (cb) => ipcRenderer.on('update:ready', () => cb()),
  onUpdateNone: (cb) => ipcRenderer.on('update:none', () => cb()),
  onUpdateError: (cb) => ipcRenderer.on('update:error', (_, msg) => cb(msg)),

  // Bug fix: was handled in main but never exposed to renderer
  getAppVersion: () => ipcRenderer.invoke('app:getVersion'),
});