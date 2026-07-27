# ☕ Dev Cafe Showcase

A clean, modern React + Vite application showcasing **Dev Cafe**—a developer-first coffee shop featuring high-speed Wi-Fi, desk power outlets, private meeting pods, an IT tech library, and tabletop board games.

---

## 🌟 Cafe Amenities & Features

* 📡 **500Mbps Fiber Wi-Fi:** Fast symmetrical internet for seamless remote work and coding.
* 🔌 **Power Outlets at Every Desk:** AC sockets & 100W USB-C PD fast chargers (*Tailored for devs, open to all general customers*).
* 🚪 **Private Soundproof Pods:** Tech-equipped rooms (4K monitors & whiteboards) for team standups and calls.
* 📚 **IT Library & Tabletop Games:** 150+ software engineering books & board games for relaxing during compile times.

---

## 📁 File Structure

```
dev-cafe/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── components/      # Clean UI components
│   │   ├── Navbar.jsx          # Header navigation & cart count
│   │   ├── Hero.jsx            # Sleek hero section with key metrics
│   │   ├── Amenities.jsx       # 2x2 Clean grid of venue features
│   │   ├── Menu.jsx            # Drinks & pastry menu with dynamic pricing
│   │   ├── MeetingRooms.jsx    # Soundproof pods reservation modal
│   │   ├── LibraryAndGames.jsx # Tabbed IT books & board games lounge
│   │   ├── CartDrawer.jsx      # Slide-out cart & checkout simulation
│   │   └── Footer.jsx          # Minimalist footer & contact details
│   ├── data/
│   │   └── cafeData.js         # Centralized data structures
│   ├── App.jsx                 # App root component & state
│   ├── index.css               # Tailwind CSS v4 setup & custom scrollbars
│   └── main.jsx                # React DOM entry point
├── index.html           # HTML5 Entry with SEO Meta Tags
├── package.json         # Project dependencies & scripts
└── vite.config.js       # Vite & Tailwind CSS configuration
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
