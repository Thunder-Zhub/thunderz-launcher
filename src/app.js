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
    'settings.launcherPath': 'Launcher Path',
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
    'common.start': 'เริ่ม',
    'common.select': 'เลือก',
    'common.delete': 'ลบ',
    'common.open': 'เปิด',
    'common.clear': 'ล้าง',
    'common.connect': 'เชื่อมต่อ',
    'common.loading': 'กำลังโหลด...',
    'common.notSet': 'ยังไม่ได้ตั้งค่า',
    'common.readyConfigured': '✓ ตั้งค่าแล้ว — พร้อมใช้งาน',
    'empty.launchers.none': 'ยังไม่มี Launcher',
    'empty.launchers.addGuide': 'ยังไม่มี Launcher<br>กดปุ่ม "เพิ่ม Launcher" เพื่อเริ่มต้น',
    'empty.servers.none': 'ยังไม่มีเซิร์ฟเวอร์',
    'empty.servers.modal': 'ยังไม่มีเซิร์ฟเวอร์ที่บันทึกไว้',
    'launcher.path.title': 'ตั้งค่า Path Launchers',
    'launcher.path.note': '💾 Path บันทึกอัตโนมัติ — ไม่ต้องเลือกใหม่ทุกครั้ง',
    'launcher.path.status.empty': 'ยังไม่ได้ตั้งค่า',
    'launcher.path.status.ready': '✓ ตั้งค่าแล้ว — พร้อมใช้งาน',
    'launcher.path.lunar.launch': 'เปิด Lunar Client',
    'launcher.path.curse.launch': 'เปิด CurseForge',
    'launcher.path.prism.launch': 'เปิด Prism Launcher',
    'launcher.path.lunar.save': 'บันทึก path Lunar Client แล้ว',
    'launcher.path.curse.save': 'บันทึก path CurseForge แล้ว',
    'launcher.path.prism.save': 'ตั้งค่า Prism Launcher Path แล้ว',
    'launcher.path.lunar.clear': 'ล้าง path Lunar Client แล้ว',
    'launcher.path.curse.clear': 'ล้าง path CurseForge แล้ว',
    'launcher.path.lunar.required': 'กรุณาตั้งค่า Path ของ Lunar Client ใน Settings → Launcher Path ก่อน',
    'launcher.path.curse.required': 'กรุณาตั้งค่า Path ของ CurseForge ใน Settings → Launcher Path ก่อน',
    'launcher.path.prism.required': 'กรุณาตั้งค่า Path ของ Prism Launcher ใน Settings → Launcher Path ก่อน',
    'launcher.path.open': 'เปิด',
    'modal.instance.prism': 'เลือก Instance (Prism)',
    'modal.instance.curse': 'เลือก Modpack (CurseForge)',
    'modal.instance.desc': 'เลือก instance ที่ต้องการเปิด',
    'modal.instance.descWithServer': 'จะเข้าเซิร์ฟเวอร์ {ip} หลังเปิด instance',
    'modal.instance.loading': 'กำลังโหลด...',
    'modal.instance.launch': 'เปิด',
    'common.launching': 'กำลังเปิด {name}',
    'common.launchingToServer': 'กำลังเปิด {name} → เข้า {server} ({ip})',
    'toast.theme.changed': 'เปลี่ยนธีมเป็น "{name}"',
    'toast.launcher.add': 'เพิ่ม "{name}" แล้ว',
    'toast.launcher.select': 'เลือก "{name}" เป็น Launcher หลักแล้ว',
    'toast.launcher.delete': 'ลบ "{name}" แล้ว',
    'toast.launcher.requireOne': 'ต้องมี Launcher อย่างน้อย 1 ตัว',
    'toast.launcher.missing': 'ไม่พบ Launcher',
    'toast.launcher.addMissingName': 'กรุณาใส่ชื่อ Launcher',
    'toast.launcher.addMissingPath': 'กรุณาใส่ Path ของ Launcher',
    'toast.launcher.previewOnly': 'ฟีเจอร์นี้ใช้ได้เฉพาะใน Electron App',
    'toast.server.added': 'เพิ่มเซิร์ฟเวอร์ "{name}" แล้ว',
    'toast.server.delete': 'ลบ "{name}" แล้ว',
    'toast.server.addMissingName': 'กรุณาใส่ชื่อเซิร์ฟเวอร์',
    'toast.server.addMissingIp': 'กรุณาใส่ IP เซิร์ฟเวอร์',
    'toast.launcher.chooseInstance': 'กรุณาเลือก instance ก่อน',
    'toast.launcher.launchFailed': 'เปิดไม่ได้: {error}',
    'toast.launcher.launchGeneric': 'เปิด Launcher ไม่สำเร็จ',
    'toast.launcher.opened': 'เปิด {name}: {instance}{server}',
    'toast.launcher.pathSaved': 'บันทึก path {name} แล้ว',
    'toast.launcher.pathCleared': 'ล้าง path {name} แล้ว',
    'toast.launcher.requiredPath': 'กรุณาตั้งค่า path ของ {name} ก่อน',
    'toast.launcher.opening': 'กำลังเปิด {name}...',
    'toast.app.ready': 'ThunderZ Launcher พร้อมใช้งาน!',
    'toast.app.updateAvailable': 'มีเวอร์ชันใหม่ v{version} กำลังดาวน์โหลด...',
    'toast.app.updateFailed': 'อัพเดทล้มเหลว: {message}',
    'toast.app.updateReady': 'ดาวน์โหลดเสร็จแล้ว พร้อม Restart',
    'toast.app.restartInstall': 'Restart & Install',
    'toast.lang.th': 'เปลี่ยนภาษาเป็นไทย',
    'toast.lang.en': 'Language changed to English',
    'toast.lang.ru': 'Язык изменён на русский',
    'titlebar.minimize': 'ย่อหน้าต่าง',
    'titlebar.maximize': 'ขยายหน้าต่าง',
    'titlebar.close': 'ปิด',
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
    'settings.launcherPath': 'Launcher Path',
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
    'common.start': 'Start',
    'common.select': 'Select',
    'common.delete': 'Delete',
    'common.open': 'Open',
    'common.clear': 'Clear',
    'common.connect': 'Connect',
    'common.loading': 'Loading...',
    'common.notSet': 'Not configured yet',
    'common.readyConfigured': '✓ Configured — Ready',
    'empty.launchers.none': 'No Launchers yet',
    'empty.launchers.addGuide': 'No Launchers yet<br>Press "Add Launcher" to get started',
    'empty.servers.none': 'No servers yet',
    'empty.servers.modal': 'No saved servers yet',
    'launcher.path.title': 'Launcher Path Settings',
    'launcher.path.note': '💾 Paths are saved automatically — no need to re-select each time',
    'launcher.path.status.empty': 'Not configured yet',
    'launcher.path.status.ready': '✓ Configured — Ready',
    'launcher.path.lunar.launch': 'Open Lunar Client',
    'launcher.path.curse.launch': 'Open CurseForge',
    'launcher.path.prism.launch': 'Open Prism Launcher',
    'launcher.path.lunar.save': 'Lunar Client path saved',
    'launcher.path.curse.save': 'CurseForge path saved',
    'launcher.path.prism.save': 'Prism Launcher path saved',
    'launcher.path.lunar.clear': 'Lunar Client path cleared',
    'launcher.path.curse.clear': 'CurseForge path cleared',
    'launcher.path.lunar.required': 'Please set the Lunar Client path in Settings → Launcher Path first',
    'launcher.path.curse.required': 'Please set the CurseForge path in Settings → Launcher Path first',
    'launcher.path.prism.required': 'Please set the Prism Launcher path in Settings → Launcher Path first',
    'launcher.path.open': 'Open',
    'modal.instance.prism': 'Select Instance (Prism)',
    'modal.instance.curse': 'Select Modpack (CurseForge)',
    'modal.instance.desc': 'Choose the instance to open',
    'modal.instance.descWithServer': 'Will join server {ip} after opening the instance',
    'modal.instance.loading': 'Loading...',
    'modal.instance.launch': 'Open',
    'common.launching': 'Opening {name}',
    'common.launchingToServer': 'Opening {name} → joining {server} ({ip})',
    'toast.theme.changed': 'Theme changed to "{name}"',
    'toast.launcher.add': 'Added "{name}"',
    'toast.launcher.select': 'Selected "{name}" as the main launcher',
    'toast.launcher.delete': 'Deleted "{name}"',
    'toast.launcher.requireOne': 'You need at least 1 launcher',
    'toast.launcher.missing': 'Launcher not found',
    'toast.launcher.addMissingName': 'Please enter a launcher name',
    'toast.launcher.addMissingPath': 'Please enter the launcher path',
    'toast.launcher.previewOnly': 'This feature is available only in the Electron app',
    'toast.server.added': 'Added server "{name}"',
    'toast.server.delete': 'Deleted server "{name}"',
    'toast.server.addMissingName': 'Please enter a server name',
    'toast.server.addMissingIp': 'Please enter a server IP',
    'toast.launcher.chooseInstance': 'Please select an instance first',
    'toast.launcher.launchFailed': 'Could not open: {error}',
    'toast.launcher.launchGeneric': 'Failed to launch launcher',
    'toast.launcher.opened': 'Opened {name}: {instance}{server}',
    'toast.launcher.pathSaved': '{name} path saved',
    'toast.launcher.pathCleared': '{name} path cleared',
    'toast.launcher.requiredPath': 'Please set the path for {name} first',
    'toast.launcher.opening': 'Opening {name}...',
    'toast.app.ready': 'ThunderZ Launcher is ready!',
    'toast.app.updateAvailable': 'A new version v{version} is being downloaded...',
    'toast.app.updateFailed': 'Update failed: {message}',
    'toast.app.updateReady': 'Download complete and ready to restart',
    'toast.app.restartInstall': 'Restart & Install',
    'toast.lang.th': 'เปลี่ยนภาษาเป็นไทย',
    'toast.lang.en': 'Language changed to English',
    'toast.lang.ru': 'Язык изменён на русский',
    'titlebar.minimize': 'Minimize window',
    'titlebar.maximize': 'Maximize window',
    'titlebar.close': 'Close',
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
    'settings.launcherPath': 'Путь лаунчера',
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
    'common.start': 'Запустить',
    'common.select': 'Выбрать',
    'common.delete': 'Удалить',
    'common.open': 'Открыть',
    'common.clear': 'Очистить',
    'common.connect': 'Подключиться',
    'common.loading': 'Загрузка...',
    'common.notSet': 'Ещё не настроено',
    'common.readyConfigured': '✓ Настроено — готово',
    'empty.launchers.none': 'Лаунчеров ещё нет',
    'empty.launchers.addGuide': 'Лаунчеров ещё нет<br>Нажмите "Добавить лаунчер", чтобы начать',
    'empty.servers.none': 'Серверов ещё нет',
    'empty.servers.modal': 'Сохранённых серверов нет',
    'launcher.path.title': 'Настройки пути лаунчера',
    'launcher.path.note': '💾 Пути сохраняются автоматически — не нужно выбирать заново',
    'launcher.path.status.empty': 'Ещё не настроено',
    'launcher.path.status.ready': '✓ Настроено — готово',
    'launcher.path.lunar.launch': 'Открыть Lunar Client',
    'launcher.path.curse.launch': 'Открыть CurseForge',
    'launcher.path.prism.launch': 'Открыть Prism Launcher',
    'launcher.path.lunar.save': 'Путь Lunar Client сохранён',
    'launcher.path.curse.save': 'Путь CurseForge сохранён',
    'launcher.path.prism.save': 'Путь Prism Launcher сохранён',
    'launcher.path.lunar.clear': 'Путь Lunar Client очищен',
    'launcher.path.curse.clear': 'Путь CurseForge очищен',
    'launcher.path.lunar.required': 'Сначала укажите путь Lunar Client в Настройки → Путь лаунчера',
    'launcher.path.curse.required': 'Сначала укажите путь CurseForge в Настройки → Путь лаунчера',
    'launcher.path.prism.required': 'Сначала укажите путь Prism Launcher в Настройки → Путь лаунчера',
    'launcher.path.open': 'Открыть',
    'modal.instance.prism': 'Выбрать экземпляр (Prism)',
    'modal.instance.curse': 'Выбрать модпак (CurseForge)',
    'modal.instance.desc': 'Выберите экземпляр для запуска',
    'modal.instance.descWithServer': 'После запуска будет подключён сервер {ip}',
    'modal.instance.loading': 'Загрузка...',
    'modal.instance.launch': 'Открыть',
    'common.launching': 'Открытие {name}',
    'common.launchingToServer': 'Открытие {name} → подключение к {server} ({ip})',
    'toast.theme.changed': 'Тема изменена на "{name}"',
    'toast.launcher.add': 'Добавлен "{name}"',
    'toast.launcher.select': 'Выбран "{name}" как основной лаунчер',
    'toast.launcher.delete': 'Удалён "{name}"',
    'toast.launcher.requireOne': 'Нужен хотя бы 1 лаунчер',
    'toast.launcher.missing': 'Лаунчер не найден',
    'toast.launcher.addMissingName': 'Введите название лаунчера',
    'toast.launcher.addMissingPath': 'Введите путь лаунчера',
    'toast.launcher.previewOnly': 'Эта функция доступна только в приложении Electron',
    'toast.server.added': 'Добавлен сервер "{name}"',
    'toast.server.delete': 'Удалён сервер "{name}"',
    'toast.server.addMissingName': 'Введите название сервера',
    'toast.server.addMissingIp': 'Введите IP сервера',
    'toast.launcher.chooseInstance': 'Сначала выберите экземпляр',
    'toast.launcher.launchFailed': 'Не удалось открыть: {error}',
    'toast.launcher.launchGeneric': 'Не удалось запустить лаунчер',
    'toast.launcher.opened': 'Открыт {name}: {instance}{server}',
    'toast.launcher.pathSaved': 'Путь {name} сохранён',
    'toast.launcher.pathCleared': 'Путь {name} очищен',
    'toast.launcher.requiredPath': 'Сначала укажите путь для {name}',
    'toast.launcher.opening': 'Открытие {name}...',
    'toast.app.ready': 'ThunderZ Launcher готов!',
    'toast.app.updateAvailable': 'Новая версия v{version} загружается...',
    'toast.app.updateFailed': 'Обновление не удалось: {message}',
    'toast.app.updateReady': 'Загрузка завершена, готово к перезапуску',
    'toast.app.restartInstall': 'Перезапустить и установить',
    'toast.lang.th': 'Переключено на тайский',
    'toast.lang.en': 'Language changed to English',
    'toast.lang.ru': 'Язык изменён на русский',
    'titlebar.minimize': 'Свернуть окно',
    'titlebar.maximize': 'Развернуть окно',
    'titlebar.close': 'Закрыть',
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
      const { launchers, servers, launcherPaths, ...rest } = parsed;
      state = { ...state, ...rest };
      // Bug fix: restore user-saved launchers (was silently discarded before)
      if (launchers && Array.isArray(launchers) && launchers.length > 0) state.launchers = launchers;
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
function t(key, params = {}) {
  let text = (i18n[state.lang] && i18n[state.lang][key]) || i18n['th'][key] || key;
  Object.entries(params).forEach(([name, value]) => {
    text = text.replace(new RegExp(`\\{${name}\\}`, 'g'), value);
  });
  return text;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (key) el.title = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (key) el.placeholder = t(key);
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

const themeNamesRu = {
  dark: 'Тёмная', red: 'Красная', blue: 'Синяя', lightblue: 'Голубая',
  purple: 'Фиолетовая', white: 'Белая', darkblue: 'Тёмно-синяя', bluered: 'Сине-красная', bluenavy: 'Тёмно-синяя', green: 'Зелёно-чёрная'
};

function applyTheme(theme) {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
  document.body.classList.add(`theme-${theme}`);
  state.theme = theme;

  document.querySelectorAll('.theme-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.theme === theme);
  });

  const tLabel = state.lang === 'en'
    ? (themeNamesEn[theme] || theme)
    : (state.lang === 'ru' ? (themeNamesRu[theme] || theme) : (themeNames[theme] || theme));
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
  // Bug fix: ping interval only makes sense while the Servers page is visible —
  // stop it when leaving so it doesn't keep polling in the background forever
  else stopPingAutoRefresh();
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
      ${isActive ? `<div class="lc-active-dot" title="${t('home.active')}"></div>` : ''}
    </div>
    <div class="lc-name">${launcher.name}</div>
    <div class="lc-path">${launcher.path}</div>
    <div class="lc-actions">
      <button class="lc-btn primary" data-launch="${launcher.id}">▶ ${t('common.start')}</button>
      <button class="lc-btn" data-setactive="${launcher.id}">✓ ${t('common.select')}</button>
      <button class="lc-delete" data-delete="${launcher.id}" title="${t('common.delete')}">✕</button>
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
    showToast('✓', t('toast.launcher.select', { name: launcher.name }), 'success');
  });

  card.querySelector(`[data-delete]`).addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.launchers.length <= 1) { showToast('⚠', t('toast.launcher.requireOne'), 'error'); return; }
    state.launchers = state.launchers.filter(l => l.id !== launcher.id);
    if (state.activeLauncher === launcher.id) state.activeLauncher = state.launchers[0].id;
    saveState();
    renderHomeGrid();
    renderLaunchersGrid();
    updateActiveLauncherUI();
    updateStats();
    showToast('🗑', t('toast.launcher.delete', { name: launcher.name }));
  });

  return card;
}

function renderHomeGrid() {
  const grid = document.getElementById('home-launcher-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const recent = state.launchers.slice(0, 4);
  if (recent.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🚀</div>${t('empty.launchers.none')}</div>`;
    return;
  }
  recent.forEach(l => grid.appendChild(renderLauncherCard(l, true)));
}

function renderLaunchersGrid() {
  const grid = document.getElementById('launchers-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (state.launchers.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🚀</div>${t('empty.launchers.addGuide')}</div>`;
    return;
  }
  state.launchers.forEach(l => grid.appendChild(renderLauncherCard(l)));
}

// ===== Server Ping System =====
// เพิ่มระบบตรวจสอบ ping จากตัวเครื่องไปหาเซิร์ฟเวอร์ Minecraft
// - ping ทุกเซิร์ฟเวอร์พร้อมกันแบบ batch (1 IPC call แทนที่จะยิงทีละตัว)
// - รีเฟรชอัตโนมัติทุก 10 วินาทีตอนอยู่หน้า Servers
// - เคลียร์ interval ทุกครั้งที่ออกจากหน้า กันไม่ให้ timer ค้าง/ซ้อนกัน (memory leak)
let _pingInterval = null;
const PING_REFRESH_MS = 10000;

function setPingUI(serverId, result, loading = false) {
  const pingEl = document.getElementById(`ping-${serverId}`);
  if (!pingEl) return;
  const dot = pingEl.querySelector('.ping-dot');
  const val = pingEl.querySelector('.ping-value');
  if (!dot || !val) return;

  if (loading) {
    dot.style.display = '';
    dot.style.background = 'var(--text2)';
    val.style.color = '';
    val.textContent = '...';
    return;
  }

  if (result && result.online) {
    val.style.color = '';
    val.textContent = result.ms + 'ms';
    dot.style.display = '';
    dot.style.background = result.ms < 150 ? 'var(--success)' : result.ms < 200 ? 'var(--warning)' : 'var(--danger)';
  } else {
    val.textContent = '✕';
    val.style.color = 'var(--danger)';
    dot.style.display = 'none';
  }
}

// ping เซิร์ฟเวอร์ทั้งหมดที่ส่งเข้ามาพร้อมกัน แล้วอัปเดต UI ของแต่ละตัว
async function refreshPings(servers, { showLoading = false } = {}) {
  if (!window.electronAPI || !servers || servers.length === 0) return;

  if (showLoading) servers.forEach(s => setPingUI(s.id, null, true));

  // ใช้ batch API ถ้ามี (เร็วกว่า) ไม่งั้น fallback เป็นยิงทีละตัว
  if (window.electronAPI.pingServers) {
    try {
      const results = await window.electronAPI.pingServers(
        servers.map(s => ({ id: s.id, ip: s.ip, port: s.port }))
      );
      servers.forEach(s => setPingUI(s.id, results[s.id]));
    } catch (e) {
      servers.forEach(s => setPingUI(s.id, { online: false }));
    }
  } else if (window.electronAPI.pingServer) {
    servers.forEach(server => {
      window.electronAPI.pingServer(server.ip, server.port).then(result => {
        setPingUI(server.id, result);
      });
    });
  }
}

function startPingAutoRefresh() {
  stopPingAutoRefresh();
  if (state.servers.length === 0) return;
  refreshPings(state.servers, { showLoading: true });
  _pingInterval = setInterval(() => {
    // Bug guard: re-read state.servers each tick (list may have changed since interval started)
    if (state.servers.length === 0) { stopPingAutoRefresh(); return; }
    refreshPings(state.servers);
  }, PING_REFRESH_MS);
}

function stopPingAutoRefresh() {
  if (_pingInterval) {
    clearInterval(_pingInterval);
    _pingInterval = null;
  }
}

// ===== Render Servers =====
function renderServersList() {
  const list = document.getElementById('servers-list');
  if (!list) return;
  list.innerHTML = '';

  if (state.servers.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🌐</div>${t('empty.servers.none')}</div>`;
    stopPingAutoRefresh();
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
        <button class="btn-outline small" data-connect="${server.id}">${t('common.connect')}</button>
        <button class="btn-outline small" data-del-server="${server.id}" style="color:var(--danger);border-color:var(--danger)">${t('common.delete')}</button>
      </div>
    `;

    item.querySelector(`[data-connect]`).addEventListener('click', () => {
      setActiveLauncherAndChooseServer(state.activeLauncher, server.id);
    });

    item.querySelector(`[data-del-server]`).addEventListener('click', () => {
      state.servers = state.servers.filter(s => s.id !== server.id);
      saveState();
      renderServersList();
      updateStats();
      showToast('🗑', t('toast.server.delete', { name: server.name }));
    });

    list.appendChild(item);
  });

  // เริ่ม/รีสตาร์ทระบบตรวจสอบ ping อัตโนมัติทุกครั้งที่ render list ใหม่
  startPingAutoRefresh();
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
  // Bug fix: use version from the launcher object directly before falling back to hardcoded map
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

  const tLabel = state.lang === 'en'
    ? (themeNamesEn[state.theme] || state.theme)
    : (state.lang === 'ru' ? (themeNamesRu[state.theme] || state.theme) : (themeNames[state.theme] || state.theme));
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
    list.innerHTML = `<div class="no-server-msg">${t('empty.servers.modal')}</div>`;
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
        <div class="server-ping" id="ping-modal-${server.id}">
          <div class="ping-dot"></div>
          <span class="ping-value">...</span>
        </div>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.sco-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        state.selectedServer = server.id;
      });
      list.appendChild(item);
    });

    // ping เซิร์ฟเวอร์ทั้งหมดในโมดัลเลือกเซิร์ฟเวอร์ด้วย (แยก element id จากหน้า Servers)
    if (window.electronAPI && window.electronAPI.pingServers) {
      window.electronAPI.pingServers(state.servers.map(s => ({ id: s.id, ip: s.ip, port: s.port })))
        .then(results => {
          state.servers.forEach(s => {
            const pingEl = document.getElementById(`ping-modal-${s.id}`);
            if (!pingEl) return;
            const dot = pingEl.querySelector('.ping-dot');
            const val = pingEl.querySelector('.ping-value');
            const result = results[s.id];
            if (result && result.online) {
              val.textContent = result.ms + 'ms';
              dot.style.background = result.ms < 150 ? 'var(--success)' : result.ms < 200 ? 'var(--warning)' : 'var(--danger)';
            } else {
              val.textContent = '✕';
              val.style.color = 'var(--danger)';
              dot.style.display = 'none';
            }
          });
        })
        .catch(() => {});
    }
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

  if (title) title.textContent = type === 'prism' ? `🔷 ${t('modal.instance.prism')}` : `🔥 ${t('modal.instance.curse')}`;
  if (desc) desc.textContent = server ? t('modal.instance.descWithServer', { ip: server.ip }) : t('modal.instance.desc');
  if (loading) { loading.style.display = 'block'; loading.textContent = `⏳ ${t('common.loading')}`; }
  if (list) list.style.display = 'none';

  openModal('modal-choose-instance');

  const api = window.electronAPI;
  const result = type === 'prism'
    ? await api.getPrismInstances(exePath)
    : await api.getCurseInstances(exePath);

  if (loading) loading.style.display = 'none';

  if (!result.success) {
    if (loading) { loading.style.display = 'block'; loading.textContent = `❌ ${result.error}`; }
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
  if (!launcher) { showToast('❌', t('toast.launcher.missing'), 'error'); return; }

  const server = serverId ? state.servers.find(s => s.id === serverId) : null;

  let msg = t('common.launching', { name: launcher.name });
  if (server) msg = t('common.launchingToServer', { name: launcher.name, server: server.name, ip: server.ip });

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
      showToast('⚠', t('launcher.path.lunar.required'), 'error');
      return;
    } else if (isCurse && state.launcherPaths.curse) {
      resolvedPath = state.launcherPaths.curse;
    } else if (isCurse && !state.launcherPaths.curse) {
      showToast('⚠', t('launcher.path.curse.required'), 'error');
      return;
    } else if (isPrism && state.launcherPaths.prism) {
      resolvedPath = state.launcherPaths.prism;
    } else if (isPrism && !state.launcherPaths.prism) {
      showToast('⚠', t('launcher.path.prism.required'), 'error');
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
        if (result && !result.success) showToast('❌', result.error || t('toast.launcher.launchGeneric'), 'error');
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
  showToast('🌐', lang === 'th' ? t('toast.lang.th') : lang === 'en' ? t('toast.lang.en') : t('toast.lang.ru'), 'success');
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

    if (!name) { showToast('⚠', t('toast.launcher.addMissingName'), 'error'); return; }
    if (!path) { showToast('⚠', t('toast.launcher.addMissingPath'), 'error'); return; }

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
    showToast('✓', t('toast.launcher.add', { name }), 'success');
  });

  // Browse launcher file (Electron only)
  document.getElementById('btn-browse-launcher')?.addEventListener('click', async () => {
    if (window.electronAPI) {
      const filePath = await window.electronAPI.browseFile('exe');
      if (filePath) document.getElementById('launcher-path').value = filePath;
    } else {
      showToast('ℹ', t('toast.launcher.previewOnly'), '');
    }
  });

  // Manual ping refresh button
  document.getElementById('btn-refresh-ping')?.addEventListener('click', (e) => {
    e.currentTarget.classList.add('spinning');
    refreshPings(state.servers, { showLoading: true }).finally(() => {
      setTimeout(() => e.currentTarget.classList.remove('spinning'), 400);
    });
  });

  // Add server
  document.getElementById('btn-add-server')?.addEventListener('click', () => openModal('modal-add-server'));

  document.getElementById('btn-confirm-add-server')?.addEventListener('click', () => {
    const name = document.getElementById('server-name').value.trim();
    const ip = document.getElementById('server-ip').value.trim();
    const port = parseInt(document.getElementById('server-port').value) || 25565;

    if (!name) { showToast('⚠', t('toast.server.addMissingName'), 'error'); return; }
    if (!ip) { showToast('⚠', t('toast.server.addMissingIp'), 'error'); return; }

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
    showToast('✓', t('toast.server.added', { name }), 'success');
  });

  // Launch with/without server
  document.getElementById('btn-launch-with-server')?.addEventListener('click', () => {
    doLaunch(state.activeLauncher, state.selectedServer);
  });

  // Instance modal launch button
  document.getElementById('btn-launch-with-instance')?.addEventListener('click', async () => {
    const { type, exePath, server, selected } = _instancePending;
    if (!selected) { showToast('⚠', t('toast.launcher.chooseInstance'), 'error'); return; }
    closeModal('modal-choose-instance');

    if (type === 'prism') {
      const ip = server ? server.ip : null;
      const port = server ? server.port : null;
      const result = await window.electronAPI.launchPrism(exePath, selected.id, ip, port);
      if (!result.success) showToast('❌', t('toast.launcher.launchFailed', { error: result.error }), 'error');
      else showToast('🚀', t('toast.launcher.opened', { name: 'Prism', instance: selected.name, server: server ? ` → ${server.ip}` : '' }), 'success');
    } else {
      // CurseForge: ใช้ launchCurse API ที่ส่ง --launch และ --server argument จริง
      const ip = server ? server.ip : null;
      const port = server ? server.port : null;
      const result = await window.electronAPI.launchCurse(exePath, selected.id, ip, port);
      if (!result.success) showToast('❌', t('toast.launcher.launchFailed', { error: result.error }), 'error');
      else showToast('🚀', t('toast.launcher.opened', { name: 'CurseForge', instance: selected.name, server: server ? ` → ${server.ip}` : '' }), 'success');
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
      const label = swatch.querySelector('span')?.textContent || swatch.dataset.theme;
      showToast('🎨', t('toast.theme.changed', { name: label }), 'success');
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
    if (status)  { status.textContent = t('launcher.path.status.ready'); status.className = 'lpc-status ok'; }
    if (indic)   indic.classList.add('active');
    if (launchBtn) launchBtn.disabled = false;
  } else {
    if (status)  { status.textContent = t('launcher.path.status.empty'); status.className = 'lpc-status'; }
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
      showToast('💾', t('launcher.path.lunar.save'), 'success');
    }
  });

  // --- Lunar: Clear ---
  document.getElementById('btn-clear-lunar')?.addEventListener('click', () => {
    state.launcherPaths.lunar = '';
    saveState();
    updateLauncherPathUI('lunar');
    showToast('🗑', t('launcher.path.lunar.clear'));
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
      showToast('💾', t('launcher.path.curse.save'), 'success');
    }
  });

  // --- CurseForge: Clear ---
  document.getElementById('btn-clear-curse')?.addEventListener('click', () => {
    state.launcherPaths.curse = '';
    saveState();
    updateLauncherPathUI('curse');
    showToast('🗑', t('launcher.path.curse.clear'));
  });

  // --- CurseForge: Launch ---
  document.getElementById('btn-launch-curse-settings')?.addEventListener('click', () => {
    doLaunchByPath('CurseForge', state.launcherPaths.curse);
  });

  document.getElementById('btn-browse-prism')?.addEventListener('click', async () => {
    let filePath = null;
    if (window.electronAPI) {
      filePath = await window.electronAPI.browseFile('exe');
    } else {
      filePath = prompt('(Preview) ใส่ path ทดสอบ:', 'C:\\Program Files\\PrismLauncher\\prismlauncher.exe');
    }
    if (filePath) {
      state.launcherPaths.prism = filePath;
      saveState();
      updateLauncherPathUI('prism');
      showToast('✅', t('launcher.path.prism.save'), 'success');
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
    showToast('⚠', t('toast.launcher.requiredPath', { name }), 'error');
    return;
  }
  showToast('🚀', t('toast.launcher.opening', { name }), 'success');
  if (window.electronAPI) {
    const result = await window.electronAPI.launchApp(exePath, []);
    if (!result.success) {
      showToast('❌', t('toast.launcher.launchFailed', { error: result.error }), 'error');
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
  // Bug fix: track elapsed time based on actual wall-clock difference
  // instead of blindly incrementing by 1 each tick (which drifts)
  let _lastSaved = state.playtimeSeconds || 0;
  _playtimeInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - _sessionStart) / 1000);
    state.playtimeSeconds = _lastSaved + elapsed;
    saveState();
    updateStats();
  }, 1000);
}

// ===== Auto Update UI =====
function initAutoUpdater() {
  if (!window.electronAPI) return;

  window.electronAPI.onUpdateAvailable((version) => {
    showToast('🔔', t('toast.app.updateAvailable', { version }), 'success');
    showUpdateBar(t('toast.app.updateAvailable', { version }), 0);
  });

  window.electronAPI.onUpdateProgress((percent) => {
    updateProgressBar(percent);
  });

  window.electronAPI.onUpdateReady(() => {
    showUpdateBarReady();
  });

  window.electronAPI.onUpdateNone(() => {
    console.log('App is already up to date');
  });

  window.electronAPI.onUpdateError((msg) => {
    showToast('⚠', t('toast.app.updateFailed', { message: msg }), 'error');
  });
}

function showUpdateBar(text, percent) {
  let bar = document.getElementById('update-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'update-bar';
    bar.innerHTML = `
      <div id="update-bar-text">${text}</div>
      <div id="update-bar-track">
        <div id="update-bar-fill" style="width:${percent}%"></div>
      </div>
      <button id="update-bar-close">✕</button>
    `;
    document.body.appendChild(bar);
    document.getElementById('update-bar-close').addEventListener('click', () => bar.remove());
  }
}

function updateProgressBar(percent) {
  const fill = document.getElementById('update-bar-fill');
  const text = document.getElementById('update-bar-text');
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${t('common.loading')} ${percent}%`;
}

function showUpdateBarReady() {
  const text = document.getElementById('update-bar-text');
  const track = document.getElementById('update-bar-track');
  if (text) text.textContent = '✅ ' + t('toast.app.updateReady');
  if (track) track.style.display = 'none';

  const bar = document.getElementById('update-bar');
  if (bar) {
    const btn = document.createElement('button');
    btn.id = 'update-install-btn';
    btn.textContent = t('toast.app.restartInstall');
    btn.addEventListener('click', () => window.electronAPI.installUpdate());
    bar.appendChild(btn);
  }
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

  // Bug fix: fetch real version from main process instead of relying on hardcoded HTML
  if (window.electronAPI && window.electronAPI.getAppVersion) {
    window.electronAPI.getAppVersion().then(ver => {
      const badge = document.getElementById('app-version-badge');
      const desc  = document.getElementById('app-version-desc');
      if (badge) badge.textContent = `v${ver}`;
      if (desc)  desc.textContent  = `ThunderZ Launcher v${ver}`;
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });

  showToast('⚡', t('toast.app.ready'), 'success');
  initAutoUpdater();
}

document.addEventListener('DOMContentLoaded', init);