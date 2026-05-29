# ⚡ ThunderZ Launcher

Minecraft Hub Launcher — เปิด Launcher ต่างๆ ได้ในที่เดียว

## ✨ Features

- 🎨 **9 ธีม** — ดำ, แดง, ฟ้า, ฟ้าอ่อน, ม่วง, ขาว, ฟ้าดำ, ฟ้าแดง, ฟ้าน้ำเงิน
- 🌐 **3 ภาษา** — ไทย, อังกฤษ, รัสเซีย
- 🚀 **Hub Launcher** — เพิ่ม Launcher ได้ไม่จำกัด (Lunar, CurseForge, Official ฯลฯ)
- 🌍 **เซิร์ฟเวอร์** — บันทึกเซิร์ฟเวอร์และเข้าเซิร์ฟอัตโนมัติเมื่อเริ่มเกม
- 🖥️ **Custom UI** — ไม่ใช้ Windows default titlebar ออกแบบเอง
- 🔤 **ฟอนต์ Itim** — ออกแบบโดย Cadson Demak ทุกธีม

---

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)

### Setup

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รัน dev mode
npm start

# 3. Build เป็น .exe (Windows)
npm run build
```

ไฟล์ `.exe` จะอยู่ใน `dist/` folder

---

## 🎮 วิธีใช้

### เพิ่ม Launcher
1. ไปที่แท็บ **Launchers**
2. กด **"เพิ่ม Launcher"**
3. ใส่ชื่อ, path ของ .exe, และ emoji icon
4. กด **"ยืนยัน"**

### เพิ่มเซิร์ฟเวอร์
1. ไปที่แท็บ **เซิร์ฟเวอร์**
2. กด **"เพิ่มเซิร์ฟเวอร์"**
3. ใส่ชื่อ, IP, Port
4. กด **"ยืนยัน"**

### เริ่มเกม
1. เลือก Launcher ที่ต้องการ (กด ✓ เลือก)
2. กด **"เริ่มเกม"** ในหน้าหลัก
3. เลือกเซิร์ฟเวอร์ (หรือข้ามได้)
4. กด **"เข้าเกม + เซิร์ฟเวอร์"** — เปิดเกมแล้วเข้าเซิร์ฟอัตโนมัติ

### ปรับธีม
ไปที่ **ตั้งค่า → ธีม** — เลือกได้ 9 สี ฟอนต์ปรับอัตโนมัติ

### เปลี่ยนภาษา
ไปที่ **ตั้งค่า → ภาษา** — รองรับ ไทย / English / Русский

---

## 📁 โครงสร้างโฟลเดอร์

```
ThunderZ-Launcher/
├── main.js          ← Electron main process
├── preload.js       ← Secure IPC bridge
├── package.json     ← App config & build settings
├── assets/
│   └── icon.ico     ← App icon (ใส่ไฟล์ ico ของคุณที่นี่)
└── src/
    ├── index.html   ← Main UI
    ├── style.css    ← All themes & styles
    └── app.js       ← All functionality
```

---

## 🎨 ใส่ Icon

1. วางไฟล์ `Thunder-Photoroom.ico` ใน `assets/icon.ico`
2. Rebuild หรือ restart

---

## 🔧 Build Options

```bash
# Windows 64-bit
npm run build

# Windows 32+64-bit
npm run build -- --ia32

# สร้างโฟลเดอร์ (ไม่ติดตั้ง installer)
npm run pack
```

---

*Made with ⚡ by ThunderZ*
