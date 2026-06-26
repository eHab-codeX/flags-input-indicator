
## **v5 — Modern GNOME 50 Rewrite (2026‑06‑26)**
- Rewrote entire extension using **GNOME Shell ES module API**  
- Added full support for **GNOME Shell 50+**  
- Implemented robust flag mapping for XKB layout IDs and short codes  
- Added automatic updates on:
  - `sources-changed`
  - `current-source-changed`
  - input source indicator rebuild  
- Improved hooking logic for the keyboard indicator  
- Added fallback behavior for unknown layouts  
- Cleaned up internal signals and memory handling  
- Improved performance and reduced overhead  
- Updated metadata.json and project structure  
- Prepared for publishing on extensions.gnome.org  

---

## **v4 — Extended Layout Support**
- Added flags for additional languages (Arabic, Japanese, Chinese, Korean, etc.)  
- Improved fallback logic for short codes  
- Fixed issues with some XKB layout variants  
- Cleaned up internal code structure  

---

## **v3 — Menu + Top Bar Integration**
- Added support for showing flags in both:
  - the **top bar indicator**
  - the **input source menu**  
- Improved update logic when switching layouts  
- Fixed issues with external input sources  

---

## **v2 — Initial Flag Mapping**
- Added basic mapping for:
  - 🇺🇸 US  
  - 🇬🇧 UK  
  - 🇳🇴 Norway  
  - 🇷🇺 Russia  
- Implemented simple update logic  
- Added initial keyboard indicator hook  

---

## **v1 — First Release**
- Basic GNOME Shell extension structure  
- Displayed simple flag for current layout  
- Manual installation only  

