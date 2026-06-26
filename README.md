
## **Flags Input Indicator**
A GNOME Shell extension that replaces keyboard layout labels (EN, NO, RU…) with **country flags** in both the **top bar** and the **input source menu**.

This extension is designed for multilingual users who prefer visual flags instead of text codes. It supports GNOME Shell **50+** and integrates cleanly with the built‑in keyboard indicator.

---

## **Features**
- Shows **country flags** for keyboard layouts  
- Works in **top bar** and **input source menu**  
- Supports **XKB layout IDs** and **short codes**  
- Automatically updates when switching layouts  
- Lightweight and fast — no background daemons  
- Compatible with GNOME Shell **50+**

---

## **Supported Layouts**
The extension includes flags for many common layouts:

- 🇺🇸 US / EN  
- 🇳🇴 Norwegian (nb, nn, no)  
- 🇷🇺 Russian  
- 🇯🇵 Japanese  
- 🇫🇷 French  
- 🇩🇪 German  
- 🇸🇦 Arabic  
- 🇪🇸 Spanish  
- 🇮🇹 Italian  
- 🇵🇹 Portuguese  
- 🇸🇪 Swedish  
- 🇵🇱 Polish  
- 🇳🇱 Dutch  
- 🇹🇷 Turkish  
- 🇨🇳 Chinese  
- 🇰🇷 Korean  
- 🇺🇦 Ukrainian  
- 🇨🇿 Czech  
- 🇭🇺 Hungarian  
- 🇷🇴 Romanian  
- 🇹🇭 Thai  
- 🇻🇳 Vietnamese  
- 🇪🇬 Egyptian Arabic  
- 🇦🇪 UAE Arabic  

…and many more.

---

## **Installation**
### **Manual installation**
Clone or copy the extension into:

```
~/.local/share/gnome-shell/extensions/flags-input@ehab/
```

Restart GNOME Shell:

- Wayland → log out and log in  
- X11 → press `Alt + F2`, type `r`, press Enter  

Enable the extension:

```
gnome-extensions enable flags-input@ehab
```

---

## **Development**
This extension uses the modern GNOME Shell **ES module API** (`extension.js` with `export default class`).  
It hooks into the GNOME keyboard indicator and replaces layout labels with flags.

---

## **License**
This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

## **Source Code**
GitHub repository (recommended):

```
https://github.com/eHab-codeX/flags-input-indicator
```


