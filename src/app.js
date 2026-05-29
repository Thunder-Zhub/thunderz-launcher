// ===================================
// ThunderZ Launcher - app.js
// ===================================

// ===== i18n Translations =====
const i18n = {
  th: {
    'app.name': 'ThunderZ',
    'nav.main': 'หลัก',
    'nav.home': 'หน้าหลัก',
    'nav.launchers': 'Launchers',
    'nav.servers': 'เซิร์ฟเวอร์',
    'nav.manage': 'จัดการ',
    'nav.settings': 'ตั้งค่า',
    'home.welcome': 'ยินดีต้อนรับ, ThunderZ',
    'home.subtitle': 'เลือก Launcher และเริ่มเล่น Minecraft ได้เลย',
    'home.launch': 'เริ่มเกม',
    'home.active': 'กำลังใช้งาน',
    'home.ready': 'พร้อมใช้งาน',
    'home.chooseServer': 'เลือกเซิร์ฟเวอร์',
    'home.recent': 'Launchers ล่าสุด',
    'home.seeAll': 'ดูทั้งหมด',
    'stat.launchers': 'Launchers',
    'stat.servers': 'เซิร์ฟเวอร์',
    'stat.playtime': 'เวลาเล่น',
    'stat.theme': 'ธีม',
    'launchers.title': 'จัดการ Launchers',
    'launchers.subtitle': 'เพิ่มและจัดการ Launcher ของคุณ',
    'launchers.add': 'เพิ่ม Launcher',
    'servers.title': 'เซิร์ฟเวอร์',
    'servers.subtitle': 'จัดการและเชื่อมต่อเซิร์ฟเวอร์ Minecraft',
    'servers.add': 'เพิ่มเซิร์ฟเวอร์',
    'settings.title': 'ตั้งค่า',
    'settings.general': 'ทั่วไป',
    'settings.theme': 'ธีม',
    'settings.language': 'ภาษา',
    'settings.files': 'ไฟล์',
    'settings.autostart': 'เริ่มอัตโนมัติ',
    'settings.autostart.desc': 'เปิด launcher เมื่อเปิดเครื่อง',
    'settings.minimize': 'ย่อเมื่อเริ่มเกม',
    'settings.minimize.desc': 'ซ่อน launcher เมื่อเริ่มเล่นเกม',
    'settings.version': 'เวอร์ชัน Launcher',
    'settings.gamedir': 'โฟลเดอร์เกม',
    'settings.javadir': 'Java Path',
    'settings.ram': 'RAM สูงสุด',
    'settings.browse': 'เลือก',
    'status.online': 'ออนไลน์',
    'modal.addLauncher': 'เพิ่ม Launcher',
    'modal.addServer': 'เพิ่มเซิร์ฟเวอร์',
    'modal.chooseServer': 'เลือกเซิร์ฟเวอร์',
    'modal.chooseServer.desc': 'เลือกเซิร์ฟเวอร์ที่ต้องการเข้าเล่น หรือข้ามหากต้องการเข้า Launcher เฉยๆ',
    'modal.noServer': 'เข้าเกมเฉยๆ',
    'modal.launchServer': 'เข้าเกม + เซิร์ฟเวอร์',
    'form.name': 'ชื่อ Launcher',
    'form.path': 'Path ไฟล์ (.exe)',
    'form.icon': 'ไอคอน (Emoji)',
    'form.browse': 'เลือก',
    'form.cancel': 'ยกเลิก',
    'form.confirm': 'ยืนยัน',
    'form.serverName': 'ชื่อเซิร์ฟเวอร์',
    'form.serverIP': 'IP เซิร์ฟเวอร์',
    'form.serverPort': 'Port',
    'theme.dark': 'ดำ',
    'theme.red': 'แดง',
    'theme.blue': 'ฟ้า',
    'theme.lightblue': 'ฟ้าอ่อน',
    'theme.purple': 'ม่วง',
    'theme.white': 'ขาว',
    'theme.darkblue': 'ฟ้าดำ',
    'theme.bluered': 'ฟ้าแดง',
    'theme.bluenavy': 'ฟ้าน้ำเงิน',
    'theme.green': 'เขียวดำ',
  },
  en: {
    'app.name': 'ThunderZ',
    'nav.main': 'Main',
    'nav.home': 'Home',
    'nav.launchers': 'Launchers',
    'nav.servers': 'Servers',
    'nav.manage': 'Manage',
    'nav.settings': 'Settings',
    'home.welcome': 'Welcome, ThunderZ',
    'home.subtitle': 'Choose a Launcher and start playing Minecraft',
    'home.launch': 'Launch Game',
    'home.active': 'Active',
    'home.ready': 'Ready',
    'home.chooseServer': 'Choose Server',
    'home.recent': 'Recent Launchers',
    'home.seeAll': 'See All',
    'stat.launchers': 'Launchers',
    'stat.servers': 'Servers',
    'stat.playtime': 'Play Time',
    'stat.theme': 'Theme',
    'launchers.title': 'Manage Launchers',
    'launchers.subtitle': 'Add and manage your launchers',
    'launchers.add': 'Add Launcher',
    'servers.title': 'Servers',
    'servers.subtitle': 'Manage and connect to Minecraft servers',
    'servers.add': 'Add Server',
    'settings.title': 'Settings',
    'settings.general': 'General',
    'settings.theme': 'Theme',
    'settings.language': 'Language',
    'settings.files': 'Files',
    'settings.autostart': 'Auto Start',
    'settings.autostart.desc': 'Open launcher on system startup',
    'settings.minimize': 'Minimize on Launch',
    'settings.minimize.desc': 'Hide launcher when game starts',
    'settings.version': 'Launcher Version',
    'settings.gamedir': 'Game Folder',
    'settings.javadir': 'Java Path',
    'settings.ram': 'Max RAM',
    'settings.browse': 'Browse',
    'status.online': 'Online',
    'modal.addLauncher': 'Add Launcher',
    'modal.addServer': 'Add Server',
    'modal.chooseServer': 'Choose Server',
    'modal.chooseServer.desc': 'Choose a server to join, or skip to open the launcher only.',
    'modal.noServer': 'Open Launcher Only',
    'modal.launchServer': 'Launch + Join Server',
    'form.name': 'Launcher Name',
    'form.path': 'File Path (.exe)',
    'form.icon': 'Icon (Emoji)',
    'form.browse': 'Browse',
    'form.cancel': 'Cancel',
    'form.confirm': 'Confirm',
    'form.serverName': 'Server Name',
    'form.serverIP': 'Server IP',
    'form.serverPort': 'Port',
    'theme.dark': 'Dark',
    'theme.red': 'Red',
    'theme.blue': 'Blue',
    'theme.lightblue': 'Light Blue',
    'theme.purple': 'Purple',
    'theme.white': 'White',
    'theme.darkblue': 'Dark Blue',
    'theme.bluered': 'Blue Red',
    'theme.bluenavy': 'Navy Blue',
    'theme.green': 'Green Black',
  },
  ru: {
    'app.name': 'ThunderZ',
    'nav.main': 'Главная',
    'nav.home': 'Главная',
    'nav.launchers': 'Лаунчеры',
    'nav.servers': 'Серверы',
    'nav.manage': 'Управление',
    'nav.settings': 'Настройки',
    'home.welcome': 'Добро пожаловать, ThunderZ',
    'home.subtitle': 'Выберите лаунчер и начните играть в Minecraft',
    'home.launch': 'Запустить',
    'home.active': 'Активен',
    'home.ready': 'Готов',
    'home.chooseServer': 'Выбрать сервер',
    'home.recent': 'Последние лаунчеры',
    'home.seeAll': 'Все',
    'stat.launchers': 'Лаунчеры',
    'stat.servers': 'Серверы',
    'stat.playtime': 'Время игры',
    'stat.theme': 'Тема',
    'launchers.title': 'Управление лаунчерами',
    'launchers.subtitle': 'Добавляйте и управляйте лаунчерами',
    'launchers.add': 'Добавить',
    'servers.title': 'Серверы',
    'servers.subtitle': 'Управление серверами Minecraft',
    'servers.add': 'Добавить сервер',
    'settings.title': 'Настройки',
    'settings.general': 'Общие',
    'settings.theme': 'Тема',
    'settings.language': 'Язык',
    'settings.files': 'Файлы',
    'settings.autostart': 'Автозапуск',
    'settings.autostart.desc': 'Открывать лаунчер при запуске',
    'settings.minimize': 'Свернуть при запуске',
    'settings.minimize.desc': 'Скрыть лаунчер во время игры',
    'settings.version': 'Версия лаунчера',
    'settings.gamedir': 'Папка игры',
    'settings.javadir': 'Путь Java',
    'settings.ram': 'Макс. RAM',
    'settings.browse': 'Обзор',
    'status.online': 'Онлайн',
    'modal.addLauncher': 'Добавить лаунчер',
    'modal.addServer': 'Добавить сервер',
    'modal.chooseServer': 'Выбрать сервер',
    'modal.chooseServer.desc': 'Выберите сервер или пропустите, чтобы открыть лаунчер.',
    'modal.noServer': 'Только лаунчер',
    'modal.launchServer': 'Запуск + сервер',
    'form.name': 'Название лаунчера',
    'form.path': 'Путь к файлу (.exe)',
    'form.icon': 'Иконка (Emoji)',
    'form.browse': 'Обзор',
    'form.cancel': 'Отмена',
    'form.confirm': 'Подтвердить',
    'form.serverName': 'Название сервера',
    'form.serverIP': 'IP сервера',
    'form.serverPort': 'Порт',
    'theme.dark': 'Тёмная',
    'theme.red': 'Красная',
    'theme.blue': 'Синяя',
    'theme.lightblue': 'Голубая',
    'theme.purple': 'Фиолетовая',
    'theme.white': 'Белая',
    'theme.darkblue': 'Тёмно-синяя',
    'theme.bluered': 'Сине-красная',
    'theme.bluenavy': 'Тёмно-синяя',
    'theme.green': 'Зелёно-чёрная',
  }
};

// ===== State =====
let state = {
  lang: 'th',
  theme: 'dark',
  launchers: [
    { id: 1, name: 'Lunar Client', path: 'C:\\Program Files\\Lunar Client\\launcher.exe', icon: '🌙', version: '3.2.7', active: true },
    { id: 2, name: 'CurseForge', path: 'C:\\Program Files\\Overwolf\\CurseForge.exe', icon: '🔥', version: '1.9.2' },
    { id: 4, name: 'Prism Launcher', path: 'C:\\Program Files\\Prism Launcher\\prismlauncher.exe', icon: '🔷', version: '9.1' },
  ],
  servers: [
    { id: 1, name: 'Hypixel', ip: 'mc.hypixel.net', port: 25565, icon: '👑' },
    { id: 2, name: 'Mineplex', ip: 'us.mineplex.com', port: 25565, icon: '🎮' },
    { id: 3, name: 'CubeCraft', ip: 'play.cubecraft.net', port: 25565, icon: '🎲' },
    { id: 4, name: 'Aternos Local', ip: '127.0.0.1', port: 25565, icon: '🏠' },
    { id: 5, name: 'ThunderZ Server', ip: 'thunder.example.com', port: 25565, icon: '⚡' },
  ],
  activeLauncher: 1,
  selectedServer: null,
  playtimeSeconds: 0,   // เก็บเป็นวินาที
  maxRam: 4,
  // ===== Path ของ Lunar และ CurseForge (บันทึกแยก บันทึกอัตโนมัติ) =====
  launcherPaths: {
    lunar: '',
    curse: '',
    prism: '',
  },
};

// ===== Load state from localStorage =====
function loadState() {
  try {
    const saved = localStorage.getItem('thunderz-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      const { launchers: _l, servers, launcherPaths, ...rest } = parsed;
      state = { ...state, ...rest };
      if (servers && Array.isArray(servers)) state.servers = servers;
      if (launcherPaths) state.launcherPaths = { ...state.launcherPaths, ...launcherPaths };
      // migrate จาก playtime เก่า (หน่วยชั่วโมง) → playtimeSeconds
      if (parsed.playtime && !parsed.playtimeSeconds) {
        state.playtimeSeconds = Math.round(parsed.playtime * 3600);
      }
    }
  } catch(e) {}
}

function saveState() {
  try { localStorage.setItem('thunderz-state', JSON.stringify(state)); } catch(e) {}
}

// ===== Translate =====
function t(key) {
  return (i18n[state.lang] && i18n[state.lang][key]) || i18n['th'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.documentElement.lang = state.lang === 'th' ? 'th' : (state.lang === 'ru' ? 'ru' : 'en');
}

// ===== Theme =====
const themeNames = {
  dark: 'ดำ', red: 'แดง', blue: 'ฟ้า', lightblue: 'ฟ้าอ่อน',
  purple: 'ม่วง', white: 'ขาว', darkblue: 'ฟ้าดำ', bluered: 'ฟ้าแดง', bluenavy: 'ฟ้าน้ำเงิน', green: 'เขียวดำ'
};

const themeNamesEn = {
  dark: 'Dark', red: 'Red', blue: 'Blue', lightblue: 'Light Blue',
  purple: 'Purple', white: 'White', darkblue: 'Dark Blue', bluered: 'Blue Red', bluenavy: 'Navy Blue', green: 'Green Black'
};

function applyTheme(theme) {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
  document.body.classList.add(`theme-${theme}`);
  state.theme = theme;

  document.querySelectorAll('.theme-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.theme === theme);
  });

  const tLabel = state.lang === 'en' ? (themeNamesEn[theme] || theme) : (themeNames[theme] || theme);
  const statEl = document.getElementById('stat-theme');
  if (statEl) statEl.textContent = tLabel;

  saveState();
}

// ===== Navigation =====
function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');

  const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');

  if (page === 'home') renderHomeGrid();
  if (page === 'launchers') renderLaunchersGrid();
  if (page === 'servers') renderServersList();
}

// ===== Render Launchers =====
function renderLauncherCard(launcher, isHome = false) {
  const isActive = state.activeLauncher === launcher.id;
  const card = document.createElement('div');
  card.className = `launcher-card ${isActive ? 'active-launcher' : ''}`;
  card.dataset.id = launcher.id;

  card.innerHTML = `
    <div class="lc-top">
      <div class="lc-icon">${launcher.icon}</div>
      ${isActive ? '<div class="lc-active-dot" title="กำลังใช้งาน"></div>' : ''}
    </div>
    <div class="lc-name">${launcher.name}</div>
    <div class="lc-path">${launcher.path}</div>
    <div class="lc-actions">
      <button class="lc-btn primary" data-launch="${launcher.id}">▶ เริ่ม</button>
      <button class="lc-btn" data-setactive="${launcher.id}">✓ เลือก</button>
      <button class="lc-delete" data-delete="${launcher.id}" title="ลบ">✕</button>
    </div>
  `;

  card.querySelector(`[data-launch]`).addEventListener('click', (e) => {
    e.stopPropagation();
    setActiveLauncherAndChooseServer(launcher.id);
  });

  card.querySelector(`[data-setactive]`).addEventListener('click', (e) => {
    e.stopPropagation();
    state.activeLauncher = launcher.id;
    saveState();
    updateActiveLauncherUI();
    renderHomeGrid();
    renderLaunchersGrid();
    showToast('✓', `เลือก "${launcher.name}" เป็น Launcher หลักแล้ว`, 'success');
  });

  card.querySelector(`[data-delete]`).addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.launchers.length <= 1) { showToast('⚠', 'ต้องมี Launcher อย่างน้อย 1 ตัว', 'error'); return; }
    state.launchers = state.launchers.filter(l => l.id !== launcher.id);
    if (state.activeLauncher === launcher.id) state.activeLauncher = state.launchers[0].id;
    saveState();
    renderHomeGrid();
    renderLaunchersGrid();
    updateActiveLauncherUI();
    updateStats();
    showToast('🗑', `ลบ "${launcher.name}" แล้ว`);
  });

  return card;
}

function renderHomeGrid() {
  const grid = document.getElementById('home-launcher-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const recent = state.launchers.slice(0, 4);
  if (recent.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🚀</div>ยังไม่มี Launcher</div>';
    return;
  }
  recent.forEach(l => grid.appendChild(renderLauncherCard(l, true)));
}

function renderLaunchersGrid() {
  const grid = document.getElementById('launchers-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (state.launchers.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🚀</div>ยังไม่มี Launcher<br>กดปุ่ม "เพิ่ม Launcher" เพื่อเริ่มต้น</div>';
    return;
  }
  state.launchers.forEach(l => grid.appendChild(renderLauncherCard(l)));
}

// ===== Render Servers =====
function renderServersList() {
  const list = document.getElementById('servers-list');
  if (!list) return;
  list.innerHTML = '';

  if (state.servers.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🌐</div>ยังไม่มีเซิร์ฟเวอร์</div>';
    return;
  }

  state.servers.forEach(server => {
    const item = document.createElement('div');
    item.className = 'server-item';
    item.innerHTML = `
      <div class="server-icon">${server.icon}</div>
      <div class="server-info">
        <div class="server-name">${server.name}</div>
        <div class="server-ip">${server.ip}:${server.port}</div>
      </div>
      <div class="server-ping" id="ping-${server.id}">
        <div class="ping-dot"></div>
        <span class="ping-value">...</span>
      </div>
      <div class="server-actions">
        <button class="btn-outline small" data-connect="${server.id}">เชื่อมต่อ</button>
        <button class="btn-outline small" data-del-server="${server.id}" style="color:var(--danger);border-color:var(--danger)">ลบ</button>
      </div>
    `;

    item.querySelector(`[data-connect]`).addEventListener('click', () => {
      setActiveLauncherAndChooseServer(state.activeLauncher, server.id);
    });

    // Real ping
    if (window.electronAPI && window.electronAPI.pingServer) {
      window.electronAPI.pingServer(server.ip, server.port).then(result => {
        const pingEl = document.getElementById(`ping-${server.id}`);
        if (!pingEl) return;
        const dot = pingEl.querySelector('.ping-dot');
        const val = pingEl.querySelector('.ping-value');
        if (result.online) {
          val.textContent = result.ms + 'ms';
          dot.style.background = result.ms < 150 ? 'var(--success)' : result.ms < 200 ? 'var(--warning)' : 'var(--danger)';
        } else {
          val.textContent = '✕';
          val.style.color = 'var(--danger)';
          dot.style.display = 'none';
        }
      });
    }

    item.querySelector(`[data-del-server]`).addEventListener('click', () => {
      state.servers = state.servers.filter(s => s.id !== server.id);
      saveState();
      renderServersList();
      updateStats();
      showToast('🗑', `ลบ "${server.name}" แล้ว`);
    });

    list.appendChild(item);
  });
}

// ===== Active Launcher UI =====
function updateActiveLauncherUI() {
  const active = state.launchers.find(l => l.id === state.activeLauncher) || state.launchers[0];
  if (!active) return;

  const nameEl = document.getElementById('active-launcher-name');
  const verEl = document.getElementById('active-launcher-version');
  if (nameEl) nameEl.textContent = active.name;
  if (verEl) verEl.textContent = `v${getVersion(active.name)}`;

  const serverInfo = document.getElementById('alc-server-info');
  const serverText = document.getElementById('alc-server-text');
  if (state.selectedServer && serverInfo && serverText) {
    const srv = state.servers.find(s => s.id === state.selectedServer);
    if (srv) {
      serverInfo.style.display = 'flex';
      serverText.textContent = `${srv.name} — ${srv.ip}`;
    }
  } else if (serverInfo) {
    serverInfo.style.display = 'none';
  }
}

function getVersion(name) {
  const active = state.launchers.find(l => l.name === name);
  if (active && active.version) return active.version;
  const versions = { 'Lunar Client': '3.2.7', 'CurseForge': '1.9.2', 'Official Launcher': '3.0.0' };
  return versions[name] || '1.0.0';
}

// ===== Stats =====
function formatPlaytime(totalSeconds) {
  if (!totalSeconds || totalSeconds < 60) return `${totalSeconds || 0}s`;
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

function updateStats() {
  const el = id => document.getElementById(id);
  if (el('stat-launchers')) el('stat-launchers').textContent = state.launchers.length;
  if (el('stat-servers')) el('stat-servers').textContent = state.servers.length;
  if (el('stat-playtime')) el('stat-playtime').textContent = formatPlaytime(state.playtimeSeconds);

  const tLabel = state.lang === 'en' ? (themeNamesEn[state.theme] || state.theme) : (themeNames[state.theme] || state.theme);
  if (el('stat-theme')) el('stat-theme').textContent = tLabel;
}

// ===== Launch Flow =====
function setActiveLauncherAndChooseServer(launcherId, preSelectedServer = null) {
  state.activeLauncher = launcherId;
  state.selectedServer = preSelectedServer;
  saveState();
  updateActiveLauncherUI();

  if (preSelectedServer) {
    doLaunch(launcherId, preSelectedServer);
  } else {
    openChooseServerModal(launcherId);
  }
}

function openChooseServerModal(launcherId) {
  const list = document.getElementById('server-choose-list');
  list.innerHTML = '';

  if (state.servers.length === 0) {
    list.innerHTML = '<div class="no-server-msg">ยังไม่มีเซิร์ฟเวอร์ที่บันทึกไว้</div>';
  } else {
    state.servers.forEach(server => {
      const item = document.createElement('div');
      item.className = 'sco-item';
      item.dataset.serverId = server.id;
      item.innerHTML = `
        <div class="sco-radio"><div class="sco-dot"></div></div>
        <div>
          <div class="sco-name">${server.icon} ${server.name}</div>
          <div class="sco-ip">${server.ip}:${server.port}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.sco-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        state.selectedServer = server.id;
      });
      list.appendChild(item);
    });
  }

  openModal('modal-choose-server');
}

// ===== Instance Picker Modal =====
let _instancePending = { type: null, exePath: null, server: null, selected: null };

async function openInstanceModal(type, exePath, server) {
  _instancePending = { type, exePath, server, selected: null };

  const title = document.getElementById('instance-modal-title');
  const desc = document.getElementById('instance-modal-desc');
  const loading = document.getElementById('instance-loading');
  const list = document.getElementById('instance-choose-list');

  if (title) title.textContent = type === 'prism' ? '🔷 เลือก Instance (Prism)' : '🔥 เลือก Modpack (CurseForge)';
  if (desc) desc.textContent = server ? `จะเข้าเซิร์ฟเวอร์ ${server.ip} หลังเปิด instance` : 'เลือก instance ที่ต้องการเปิด';
  if (loading) { loading.style.display = 'block'; loading.textContent = '⏳ กำลังโหลด...'; }
  if (list) list.style.display = 'none';

  openModal('modal-choose-instance');

  const api = window.electronAPI;
  const result = type === 'prism'
    ? await api.getPrismInstances(exePath)
    : await api.getCurseInstances(exePath);

  if (loading) loading.style.display = 'none';

  if (!result.success) {
    if (loading) { loading.style.display = 'block'; loading.textContent = '❌ ' + result.error; }
    return;
  }

  if (list) {
    list.style.display = 'flex';
    list.innerHTML = '';
    result.instances.forEach(inst => {
      const item = document.createElement('div');
      item.className = 'sco-item';
      item.innerHTML = `
        <div class="sco-radio"><div class="sco-dot"></div></div>
        <div>
          <div class="sco-name">${type === 'prism' ? '🔷' : '🔥'} ${inst.name}</div>
          <div class="sco-ip">instance: ${inst.id}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        list.querySelectorAll('.sco-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        _instancePending.selected = inst;
      });
      list.appendChild(item);
    });
  }
}

function doLaunch(launcherId, serverId = null) {
  const launcher = state.launchers.find(l => l.id === launcherId);
  if (!launcher) { showToast('❌', 'ไม่พบ Launcher', 'error'); return; }

  const server = serverId ? state.servers.find(s => s.id === serverId) : null;

  let msg = `กำลังเปิด ${launcher.name}`;
  if (server) msg += ` → เข้า ${server.name} (${server.ip})`;

  showToast('🚀', msg, 'success');
  closeModal('modal-choose-server');

  // เริ่มจับเวลาเซสชันนี้
  startPlaytimeSession();
  saveState();
  updateStats();

  // In Electron environment - launch the actual .exe
  if (typeof window !== 'undefined' && window.electronAPI) {
    const nameLower = launcher.name.toLowerCase();
    const isLunar = nameLower.includes('lunar');
    const isCurse = nameLower.includes('curse') || nameLower.includes('curseforge');
    const isPrism = nameLower.includes('prism');

    // ใช้ path จาก Settings ถ้ามี ถ้าไม่มีค่อย fallback ไป launcher.path
    let resolvedPath = launcher.path;
    if (isLunar && state.launcherPaths.lunar) {
      resolvedPath = state.launcherPaths.lunar;
    } else if (isLunar && !state.launcherPaths.lunar) {
      showToast('⚠', 'กรุณาตั้งค่า Path ของ Lunar Client ใน Settings → Launcher Path ก่อน', 'error');
      return;
    } else if (isCurse && state.launcherPaths.curse) {
      resolvedPath = state.launcherPaths.curse;
    } else if (isCurse && !state.launcherPaths.curse) {
      showToast('⚠', 'กรุณาตั้งค่า Path ของ CurseForge ใน Settings → Launcher Path ก่อน', 'error');
      return;
    } else if (isPrism && state.launcherPaths.prism) {
      resolvedPath = state.launcherPaths.prism;
    } else if (isPrism && !state.launcherPaths.prism) {
      showToast('⚠', 'กรุณาตั้งค่า Path ของ Prism Launcher ใน Settings → Launcher Path ก่อน', 'error');
      return;
    }

    if (isLunar && server) {
      // Lunar Client: ใช้ lunarclient://play protocol
      const query = new URLSearchParams({
        serverAddress: server.ip,
        serverPort: String(server.port || 25565)
      }).toString();
      const lunarUrl = `lunarclient://play?${query}`;
      window.electronAPI.launchApp(resolvedPath, [], { lunarUrl }).then(result => {
        if (result && !result.success) showToast('❌', result.error, 'error');
      });
    } else if (isLunar && !server) {
      // เปิด Lunar เฉยๆ
      window.electronAPI.launchApp(resolvedPath, [], {}).then(result => {
        if (result && !result.success) showToast('❌', result.error, 'error');
      });
    } else if (isCurse) {
      // CurseForge: เปิด instance picker
      openInstanceModal('curse', resolvedPath, server);
      return;
    } else if (isPrism) {
      // Prism: เปิด instance picker
      openInstanceModal('prism', resolvedPath, server);
      return;
    } else {
      // Launcher อื่น: spawn ปกติ
      const args = server ? ['--server', server.ip, '--port', String(server.port)] : [];
      window.electronAPI.launchApp(resolvedPath, args).then(result => {
        if (result && !result.success) showToast('❌', result.error || 'เปิด Launcher ไม่สำเร็จ', 'error');
      });
    }
  }
}

// ===== Modals =====
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); }
}

// ===== Toast =====
function showToast(icon, msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Toast พิเศษ — รองรับ HTML และกำหนด duration ได้
function showToastWithCopy(icon, htmlMsg, type = '', duration = 5000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type} toast-wide`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${htmlMsg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// ===== Settings Tabs =====
function initSettingsTabs() {
  document.querySelectorAll('.stab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.stab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const content = document.getElementById(`stab-${tab.dataset.stab}`);
      if (content) content.classList.add('active');
    });
  });
}

// ===== Language =====
function setLanguage(lang) {
  state.lang = lang;
  saveState();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.body.dataset.lang = lang;
  applyTranslations();
  updateStats();
  updateActiveLauncherUI();
  showToast('🌐', lang === 'th' ? 'เปลี่ยนภาษาเป็นไทย' : lang === 'en' ? 'Language changed to English' : 'Язык изменён на русский', 'success');
}

// ===== Titlebar Controls =====
function initTitlebar() {
  document.getElementById('btn-close')?.addEventListener('click', () => {
    if (window.electronAPI) window.electronAPI.closeWindow();
    else window.close();
  });

  document.getElementById('btn-minimize')?.addEventListener('click', () => {
    if (window.electronAPI) window.electronAPI.minimizeWindow();
  });

  document.getElementById('btn-maximize')?.addEventListener('click', () => {
    if (window.electronAPI) window.electronAPI.maximizeWindow();
  });
}

// ===== Event Bindings =====
function bindEvents() {
  // Nav
  document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => goToPage(btn.dataset.page));
  });

  // Page go links
  document.querySelectorAll('[data-page-go]').forEach(el => {
    el.addEventListener('click', () => goToPage(el.dataset.pageGo));
  });

  // Quick launch + main launch
  document.getElementById('quick-launch-btn')?.addEventListener('click', () => {
    setActiveLauncherAndChooseServer(state.activeLauncher);
  });

  document.getElementById('btn-launch-main')?.addEventListener('click', () => {
    setActiveLauncherAndChooseServer(state.activeLauncher);
  });

  document.getElementById('btn-change-server')?.addEventListener('click', () => {
    openChooseServerModal(state.activeLauncher);
  });

  // Add launcher
  document.getElementById('btn-add-launcher')?.addEventListener('click', () => openModal('modal-add-launcher'));

  document.getElementById('btn-confirm-add-launcher')?.addEventListener('click', () => {
    const name = document.getElementById('launcher-name').value.trim();
    const path = document.getElementById('launcher-path').value.trim();
    const icon = document.getElementById('launcher-icon').value.trim() || '🎮';

    if (!name) { showToast('⚠', 'กรุณาใส่ชื่อ Launcher', 'error'); return; }
    if (!path) { showToast('⚠', 'กรุณาใส่ Path ของ Launcher', 'error'); return; }

    const newLauncher = { id: Date.now(), name, path, icon, version: '1.0.0' };
    state.launchers.push(newLauncher);
    saveState();

    document.getElementById('launcher-name').value = '';
    document.getElementById('launcher-path').value = '';
    document.getElementById('launcher-icon').value = '';

    closeModal('modal-add-launcher');
    renderHomeGrid();
    renderLaunchersGrid();
    updateStats();
    showToast('✓', `เพิ่ม "${name}" แล้ว`, 'success');
  });

  // Browse launcher file (Electron only)
  document.getElementById('btn-browse-launcher')?.addEventListener('click', async () => {
    if (window.electronAPI) {
      const filePath = await window.electronAPI.browseFile('exe');
      if (filePath) document.getElementById('launcher-path').value = filePath;
    } else {
      showToast('ℹ', 'ฟีเจอร์นี้ใช้ได้เฉพาะใน Electron App', '');
    }
  });

  // Add server
  document.getElementById('btn-add-server')?.addEventListener('click', () => openModal('modal-add-server'));

  document.getElementById('btn-confirm-add-server')?.addEventListener('click', () => {
    const name = document.getElementById('server-name').value.trim();
    const ip = document.getElementById('server-ip').value.trim();
    const port = parseInt(document.getElementById('server-port').value) || 25565;

    if (!name) { showToast('⚠', 'กรุณาใส่ชื่อเซิร์ฟเวอร์', 'error'); return; }
    if (!ip) { showToast('⚠', 'กรุณาใส่ IP เซิร์ฟเวอร์', 'error'); return; }

    const icons = ['🌐', '⚔️', '🏰', '🎮', '🌍', '💎', '🛡️', '🗡️'];
    const icon = icons[Math.floor(Math.random() * icons.length)];

    state.servers.push({ id: Date.now(), name, ip, port, icon });
    saveState();

    document.getElementById('server-name').value = '';
    document.getElementById('server-ip').value = '';
    document.getElementById('server-port').value = '25565';

    closeModal('modal-add-server');
    renderServersList();
    updateStats();
    showToast('✓', `เพิ่มเซิร์ฟเวอร์ "${name}" แล้ว`, 'success');
  });

  // Launch with/without server
  document.getElementById('btn-launch-with-server')?.addEventListener('click', () => {
    doLaunch(state.activeLauncher, state.selectedServer);
  });

  // Instance modal launch button
  document.getElementById('btn-launch-with-instance')?.addEventListener('click', async () => {
    const { type, exePath, server, selected } = _instancePending;
    if (!selected) { showToast('⚠', 'กรุณาเลือก instance ก่อน', 'error'); return; }
    closeModal('modal-choose-instance');

    if (type === 'prism') {
      const ip = server ? server.ip : null;
      const port = server ? server.port : null;
      const result = await window.electronAPI.launchPrism(exePath, selected.id, ip, port);
      if (!result.success) showToast('❌', result.error, 'error');
      else showToast('🚀', `เปิด Prism: ${selected.name}${server ? ' → ' + server.ip : ''}`, 'success');
    } else {
      // CurseForge: ใช้ launchCurse API ที่ส่ง --launch และ --server argument จริง
      const ip = server ? server.ip : null;
      const port = server ? server.port : null;
      const result = await window.electronAPI.launchCurse(exePath, selected.id, ip, port);
      if (!result.success) showToast('❌', result.error, 'error');
      else showToast('🚀', `เปิด CurseForge: ${selected.name}${server ? ' → ' + server.ip : ''}`, 'success');
    }
  });

  document.getElementById('btn-launch-no-server')?.addEventListener('click', () => {
    doLaunch(state.activeLauncher, null);
  });

  // Close modals
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  // Click outside modal
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Theme swatches
  document.querySelectorAll('.theme-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      applyTheme(swatch.dataset.theme);
      showToast('🎨', `เปลี่ยนธีมเป็น "${swatch.querySelector('span').textContent}"`, 'success');
    });
  });

  // Language
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // RAM slider
  const ramSlider = document.getElementById('ram-slider');
  const ramDisplay = document.getElementById('ram-value-display');
  ramSlider?.addEventListener('input', () => {
    state.maxRam = parseInt(ramSlider.value);
    if (ramDisplay) ramDisplay.textContent = `${state.maxRam} GB`;
    saveState();
  });

  // Browse game dir / java (Electron only)
  document.getElementById('btn-browse-gamedir')?.addEventListener('click', async () => {
    if (window.electronAPI) {
      const dir = await window.electronAPI.browseDirectory();
      if (dir) document.getElementById('game-dir-display').textContent = dir;
    }
  });

  document.getElementById('btn-browse-java')?.addEventListener('click', async () => {
    if (window.electronAPI) {
      const file = await window.electronAPI.browseFile('exe');
      if (file) document.getElementById('java-dir-display').textContent = file;
    }
  });
}

// ===== Launcher Path Panel (Lunar & CurseForge) =====

function updateLauncherPathUI(type) {
  // type = 'lunar' | 'curse'
  const path    = state.launcherPaths[type] || '';
  const input   = document.getElementById(`${type}-path-input`);
  const status  = document.getElementById(`${type}-status-text`);
  const indic   = document.getElementById(`${type}-indicator`);
  const launchBtn = document.getElementById(`btn-launch-${type}-settings`);

  if (input)  input.value = path;

  if (path) {
    if (status)  { status.textContent = '✓ ตั้งค่าแล้ว — พร้อมใช้งาน'; status.className = 'lpc-status ok'; }
    if (indic)   indic.classList.add('active');
    if (launchBtn) launchBtn.disabled = false;
  } else {
    if (status)  { status.textContent = 'ยังไม่ได้ตั้งค่า'; status.className = 'lpc-status'; }
    if (indic)   indic.classList.remove('active');
    if (launchBtn) launchBtn.disabled = true;
  }
}

function initLauncherPathPanel() {
  // อัปเดต UI จาก state ที่โหลดมา
  updateLauncherPathUI('lunar');
  updateLauncherPathUI('curse');
  updateLauncherPathUI('prism');

  // --- Lunar: Browse ---
  document.getElementById('btn-browse-lunar')?.addEventListener('click', async () => {
    let filePath = null;
    if (window.electronAPI) {
      filePath = await window.electronAPI.browseFile('exe');
    } else {
      filePath = prompt('(Preview) ใส่ path ทดสอบ:', 'C:\\Program Files\\LunarClient.exe');
    }
    if (filePath) {
      state.launcherPaths.lunar = filePath;
      saveState();
      updateLauncherPathUI('lunar');
      showToast('💾', 'บันทึก path Lunar Client แล้ว', 'success');
    }
  });

  // --- Lunar: Clear ---
  document.getElementById('btn-clear-lunar')?.addEventListener('click', () => {
    state.launcherPaths.lunar = '';
    saveState();
    updateLauncherPathUI('lunar');
    showToast('🗑', 'ล้าง path Lunar Client แล้ว');
  });

  // --- Lunar: Launch ---
  document.getElementById('btn-launch-lunar-settings')?.addEventListener('click', () => {
    doLaunchByPath('Lunar Client', state.launcherPaths.lunar);
  });

  // --- CurseForge: Browse ---
  document.getElementById('btn-browse-curse')?.addEventListener('click', async () => {
    let filePath = null;
    if (window.electronAPI) {
      filePath = await window.electronAPI.browseFile('exe');
    } else {
      filePath = prompt('(Preview) ใส่ path ทดสอบ:', 'C:\\Program Files\\CurseForge.exe');
    }
    if (filePath) {
      state.launcherPaths.curse = filePath;
      saveState();
      updateLauncherPathUI('curse');
      showToast('💾', 'บันทึก path CurseForge แล้ว', 'success');
    }
  });

  // --- CurseForge: Clear ---
  document.getElementById('btn-clear-curse')?.addEventListener('click', () => {
    state.launcherPaths.curse = '';
    saveState();
    updateLauncherPathUI('curse');
    showToast('🗑', 'ล้าง path CurseForge แล้ว');
  });

  // --- CurseForge: Launch ---
  document.getElementById('btn-launch-curse-settings')?.addEventListener('click', () => {
    doLaunchByPath('CurseForge', state.launcherPaths.curse);
  });

  document.getElementById('btn-browse-prism')?.addEventListener('click', async () => {
    const filePath = await window.electronAPI.browseFile('exe');
    if (filePath) {
      state.launcherPaths.prism = filePath;
      saveState();
      updateLauncherPathUI('prism');
      showToast('✅', 'ตั้งค่า Prism Launcher Path แล้ว', 'success');
    }
  });

  document.getElementById('btn-clear-prism')?.addEventListener('click', () => {
    state.launcherPaths.prism = '';
    saveState();
    updateLauncherPathUI('prism');
  });

  document.getElementById('btn-launch-prism-settings')?.addEventListener('click', () => {
    doLaunchByPath('Prism Launcher', state.launcherPaths.prism);
  });
}

// เปิด .exe โดยตรงจาก path (ใช้กับ Launcher Path panel)
async function doLaunchByPath(name, exePath) {
  if (!exePath) {
    showToast('⚠', `กรุณาตั้งค่า path ของ ${name} ก่อน`, 'error');
    return;
  }
  showToast('🚀', `กำลังเปิด ${name}...`, 'success');
  if (window.electronAPI) {
    const result = await window.electronAPI.launchApp(exePath, []);
    if (!result.success) {
      showToast('❌', `เปิดไม่ได้: ${result.error}`, 'error');
    }
  }
}

// ===== Real Playtime Session Tracker =====
let _playtimeInterval = null;
let _sessionStart = null;

function startPlaytimeSession() {
  // ถ้ามี session เดิมอยู่ให้หยุดก่อน
  if (_playtimeInterval) {
    clearInterval(_playtimeInterval);
  }
  _sessionStart = Date.now();
  _playtimeInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - _sessionStart) / 1000);
    state.playtimeSeconds = (state.playtimeSeconds || 0) + 1;
    saveState();
    updateStats();
  }, 1000);
}

// ===== Init =====
function init() {
  loadState();
  applyTheme(state.theme);
  applyTranslations();
  setLanguage(state.lang);
  initTitlebar();
  initSettingsTabs();
  bindEvents();
  initLauncherPathPanel();

  renderHomeGrid();
  renderLaunchersGrid();
  renderServersList();
  updateActiveLauncherUI();
  updateStats();

  // Set RAM slider
  const ramSlider = document.getElementById('ram-slider');
  if (ramSlider) ramSlider.value = state.maxRam || 4;
  const ramDisplay = document.getElementById('ram-value-display');
  if (ramDisplay) ramDisplay.textContent = `${state.maxRam || 4} GB`;

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });

  showToast('⚡', 'ThunderZ Launcher พร้อมใช้งาน!', 'success');
}

document.addEventListener('DOMContentLoaded', init);