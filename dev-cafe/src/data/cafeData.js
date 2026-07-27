export const CAFE_INFO = {
  name: "Dev Cafe",
  tagline: "Where Code Meets Craft Coffee",
  description: "A developer-first sanctuary equipped with 500Mbps Fiber Wi-Fi, heavy-duty power outlets at every desk, private meeting pods, an IT book library, and board games for well-deserved breaks.",
  hours: "Mon - Sun: 7:00 AM - 11:00 PM",
  location: "102 Hackers Way, Tech District, Suite 404",
  phone: "+1 (555) 019-2048",
  wifiSpeed: "500 Mbps Fiber",
  outletsStatus: "100% Desk Coverage",
  meetingRoomsCount: "4 Private Pods",
};

export const AMENITIES = [
  {
    id: "wifi",
    icon: "Wifi",
    title: "Ultra-Fast 500Mbps Wi-Fi",
    tagline: "Gigabit Fiber Connection",
    description: "Dedicated dual-band fiber connection engineered for seamless video calls, large git pushes, continuous integration tasks, and zero-lag browsing.",
    highlights: ["Symmetrical 500 Mbps", "Developer & Guest SSIDs", "99.9% Uptime SLA", "WPA3 Enterprise Security"],
    badge: "Always Online",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    id: "outlets",
    icon: "Zap",
    title: "Dedicated Power Outlets",
    tagline: "Tailored for Devs, Open to All",
    description: "Every single seating position features multiple surge-protected AC outlets and 100W USB-C PD fast chargers. Perfect for dual-monitor laptops and setups.",
    highlights: ["Outlets at 100% of seats", "100W USB-C Power Delivery", "Surge Protected", "Welcoming to general customers"],
    badge: "Full Power",
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400"
  },
  {
    id: "meeting-rooms",
    icon: "Users",
    title: "Private Meeting Pods",
    tagline: "Soundproof & Tech-Equipped",
    description: "Reserve quiet meeting rooms equipped with 4K display monitors, glass whiteboards, screen-sharing cables, and high-quality conference microphones.",
    highlights: ["4 Private Pods (2-8 seats)", "4K Screen + Whiteboard", "Acoustic Soundproofing", "In-Room Coffee Service"],
    badge: "Bookable Online",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    id: "it-library",
    icon: "BookOpen",
    title: "Curated IT & Tech Library",
    tagline: "Deepen Your Knowledge",
    description: "Browse our physical bookshelf stocked with classical and cutting-edge software engineering literature spanning System Architecture, AI, Web Dev, DevOps, and UX.",
    highlights: ["150+ Physical Books", "Free to Read On-Site", "Book Swapping Corner", "Updated Monthly"],
    badge: "150+ Books",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    id: "board-games",
    icon: "Gamepad2",
    title: "Physical & Tabletop Games",
    tagline: "Recharge & Connect",
    description: "Take a break from debugging screen fatigue! Enjoy our collection of chess sets, strategy board games, card games, and quick party games with fellow patrons.",
    highlights: ["30+ Board & Card Games", "Chess & Strategy Lounge", "Relaxed Chill Zone", "Casual Game Nights"],
    badge: "Free to Play",
    color: "from-rose-500/20 to-orange-500/20",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-400"
  }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Async Espresso",
    category: "Developer Specials",
    price: 4.50,
    caffeine: "High (150mg)",
    isVegan: true,
    popular: true,
    description: "Double shot of single-origin Ethiopian espresso extracted under precise pressure. Non-blocking energy for heavy refactoring sessions.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Junior (Single)", modifier: 0 },
      { label: "Mid (Double)", modifier: 1.00 },
      { label: "Senior (Quad)", modifier: 2.25 }
    ]
  },
  {
    id: 2,
    name: "NullPointer Cold Brew",
    category: "Developer Specials",
    price: 5.75,
    caffeine: "Extreme (220mg)",
    isVegan: true,
    popular: true,
    description: "Steeped for 24 hours in cold filtered water. Smooth, chocolatey, low-acidity cold brew with a dash of vanilla syrup.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Regular (16oz)", modifier: 0 },
      { label: "Large (24oz)", modifier: 1.25 }
    ]
  },
  {
    id: 3,
    name: "StackOverflow Latte",
    category: "Artisan Coffee",
    price: 5.25,
    caffeine: "Medium (100mg)",
    isVegan: false,
    popular: true,
    description: "Velvety micro-foamed oat or dairy milk poured over dark roasted espresso with caramel drizzle and sea salt.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Standard (12oz)", modifier: 0 },
      { label: "Grand (16oz)", modifier: 0.90 }
    ]
  },
  {
    id: 4,
    name: "Git Commit Cappuccino",
    category: "Artisan Coffee",
    price: 4.85,
    caffeine: "High (140mg)",
    isVegan: false,
    popular: false,
    description: "Classic equal parts espresso, steamed milk, and rich micro-foam topped with cocoa powder dusting in binary pattern.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Standard (8oz)", modifier: 0 },
      { label: "Double Shot (12oz)", modifier: 1.10 }
    ]
  },
  {
    id: 5,
    name: "Matcha Protocol Green Tea",
    category: "Teas & Refreshers",
    price: 5.50,
    caffeine: "Medium (70mg)",
    isVegan: true,
    popular: false,
    description: "Ceremonial grade Uji matcha whisked with coconut milk and touch of raw agave. Focused calm without the jitters.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Standard (12oz)", modifier: 0 },
      { label: "Large (16oz)", modifier: 1.00 }
    ]
  },
  {
    id: 6,
    name: "Cache Miss Croissant",
    category: "Pastries & Brain Food",
    price: 3.95,
    caffeine: "None",
    isVegan: false,
    popular: true,
    description: "Warm, flaky French butter croissant baked fresh every morning. Pairs perfectly with any espresso drink.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Single", modifier: 0 },
      { label: "Pack of 3", modifier: 6.00 }
    ]
  },
  {
    id: 7,
    name: "Syntax Sugar Muffin",
    category: "Pastries & Brain Food",
    price: 4.25,
    caffeine: "None",
    isVegan: true,
    popular: false,
    description: "Blueberry lemon crumble muffin baked with organic flour and oat sugar topping. 100% plant-based.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Standard", modifier: 0 }
    ]
  },
  {
    id: 8,
    name: "Bug Free Avocado Toast",
    category: "Pastries & Brain Food",
    price: 8.50,
    caffeine: "None",
    isVegan: true,
    popular: true,
    description: "Thick-cut sourdough, smashed avocado, chili flakes, microgreens, and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Single Slice", modifier: 0 },
      { label: "Double Slice", modifier: 4.00 }
    ]
  }
];

export const MEETING_ROOMS = [
  {
    id: "pod-200",
    name: "Pod 200 OK",
    capacity: "2 - 3 People",
    hourlyRate: 15.00,
    equipment: ["27-inch 4K Monitor", "HDMI/USB-C Hub", "Whiteboard", "High-Speed Wi-Fi"],
    description: "Ideal for pair programming, 1-on-1 code reviews, and remote job interviews.",
    status: "Available",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
  },
  {
    id: "pod-201",
    name: "Room 201 Created",
    capacity: "4 - 6 People",
    hourlyRate: 25.00,
    equipment: ["55-inch 4K Smart TV", "Logitech MeetUp Video Cam", "Glass Whiteboard", "Conference Mic"],
    description: "Designed for small engineering teams, sprint planning, and client presentations.",
    status: "Available",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
  },
  {
    id: "pod-304",
    name: "Silo 304 Modified",
    capacity: "6 - 8 People",
    hourlyRate: 35.00,
    equipment: ["Dual 65-inch 4K Displays", "Jabra Conference Audio", "Magnetic Glass Wall", "Surround Outlets"],
    description: "Spacious board room for startup pitch sessions, architecture design reviews, and workshops.",
    status: "Occupied until 3 PM",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30"
  }
];

export const IT_BOOKS = [
  {
    id: "b1",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    field: "Distributed Systems & Architecture",
    level: "Advanced",
    status: "Available on Shelf",
    coverColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  },
  {
    id: "b2",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    field: "Software Engineering & Best Practices",
    level: "Intermediate",
    status: "Available on Shelf",
    coverColor: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    id: "b3",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    field: "Career & Software Philosophy",
    level: "All Levels",
    status: "Checked Out (Returns 4 PM)",
    coverColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    id: "b4",
    title: "Learning React: Modern Patterns for Developing Applications",
    author: "Alex Banks & Eve Porcello",
    field: "Frontend & Web Development",
    level: "Beginner - Intermediate",
    status: "Available on Shelf",
    coverColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
  },
  {
    id: "b5",
    title: "Grokking Algorithms",
    author: "Aditya Y. Bhargava",
    field: "Computer Science & Data Structures",
    level: "Beginner",
    status: "Available on Shelf",
    coverColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  {
    id: "b6",
    title: "Deep Learning with Python",
    author: "François Chollet",
    field: "Artificial Intelligence & ML",
    level: "Intermediate - Advanced",
    status: "Available on Shelf",
    coverColor: "bg-rose-500/20 text-rose-300 border-rose-500/30"
  }
];

export const BOARD_GAMES = [
  {
    id: "g1",
    title: "Catan",
    players: "3 - 4 Players",
    duration: "60 - 90 mins",
    type: "Strategy & Resource Management",
    difficulty: "Medium",
    status: "In Lounge",
    badgeColor: "bg-amber-500/20 text-amber-300"
  },
  {
    id: "g2",
    title: "Chess Classic Wood Edition",
    players: "2 Players",
    duration: "20 - 45 mins",
    type: "Classic Tactical Strategy",
    difficulty: "All Levels",
    status: "In Lounge",
    badgeColor: "bg-slate-500/20 text-slate-300"
  },
  {
    id: "g3",
    title: "Ticket to Ride",
    players: "2 - 5 Players",
    duration: "45 - 60 mins",
    type: "Route Building",
    difficulty: "Easy - Medium",
    status: "In Lounge",
    badgeColor: "bg-blue-500/20 text-blue-300"
  },
  {
    id: "g4",
    title: "Exploding Kittens",
    players: "2 - 5 Players",
    duration: "15 mins",
    type: "Quick Card Game",
    difficulty: "Easy",
    status: "In Lounge",
    badgeColor: "bg-red-500/20 text-red-300"
  },
  {
    id: "g5",
    title: "Jenga Giant Stack",
    players: "2+ Players",
    duration: "15 mins",
    type: "Dexterity & Balance",
    difficulty: "Casual",
    status: "In Lounge",
    badgeColor: "bg-emerald-500/20 text-emerald-300"
  }
];
