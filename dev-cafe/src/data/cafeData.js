export const CAFE_INFO = {
  name: "Dev Cafe",
  tagline: "Where Code Meets Craft Coffee",
  description: "A developer-focused sanctuary featuring 500Mbps Fiber Wi-Fi, power outlets at every desk, private meeting pods, an IT book lounge, and tabletop board games.",
  hours: "Mon - Sun: 7:00 AM - 11:00 PM",
  location: "102 Hackers Way, Tech District, Suite 404",
  phone: "+1 (555) 019-2048",
  wifiSpeed: "500 Mbps Fiber",
  outletsStatus: "Every Desk Equipped",
};

export const AMENITIES = [
  {
    id: "wifi",
    icon: "Wifi",
    title: "500Mbps Fiber Wi-Fi",
    description: "Ultra-fast symmetrical gigabit fiber optic internet engineered for seamless git pushes, video calls, and zero-lag remote work.",
    badge: "500 Mbps",
    color: "cyan"
  },
  {
    id: "outlets",
    icon: "Zap",
    title: "Power Outlets at Every Desk",
    description: "Surge-protected AC sockets & 100W USB-C PD fast chargers tailored for developer setups—open to all general customers.",
    badge: "100% Desk Seats",
    color: "amber"
  },
  {
    id: "meeting-rooms",
    icon: "Users",
    title: "Private Soundproof Pods",
    description: "Acoustically soundproof meeting rooms equipped with 4K displays, whiteboards, and conference mics for team standups and calls.",
    badge: "4 Pods Available",
    color: "emerald"
  },
  {
    id: "library-games",
    icon: "BookOpen",
    title: "IT Library & Board Games",
    description: "A curated collection of 150+ software engineering books alongside tabletop board games for relaxing during compile times.",
    badge: "150+ Books & Games",
    color: "purple"
  }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Async Espresso",
    category: "Developer Specials",
    price: 4.50,
    caffeine: "High",
    isVegan: true,
    popular: true,
    description: "Double shot single-origin Ethiopian espresso. Clean, non-blocking energy boost.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Single", modifier: 0 },
      { label: "Double", modifier: 1.00 },
      { label: "Quad", modifier: 2.25 }
    ]
  },
  {
    id: 2,
    name: "NullPointer Cold Brew",
    category: "Developer Specials",
    price: 5.75,
    caffeine: "Extreme",
    isVegan: true,
    popular: true,
    description: "Steeped for 24 hours. Smooth, low-acidity cold brew with subtle vanilla notes.",
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
    caffeine: "Medium",
    isVegan: false,
    popular: true,
    description: "Velvety micro-foamed milk poured over rich espresso with caramel drizzle.",
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
    caffeine: "High",
    isVegan: false,
    popular: false,
    description: "Equal parts espresso, steamed milk, and rich foam dusted with cocoa powder.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Standard (8oz)", modifier: 0 },
      { label: "Large (12oz)", modifier: 1.10 }
    ]
  },
  {
    id: 5,
    name: "Matcha Protocol Tea",
    category: "Teas & Refreshers",
    price: 5.50,
    caffeine: "Medium",
    isVegan: true,
    popular: false,
    description: "Ceremonial grade Uji matcha whisked with oat milk and raw agave.",
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
    description: "Flaky French butter croissant baked fresh every morning.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    sizes: [
      { label: "Single", modifier: 0 }
    ]
  },
  {
    id: 7,
    name: "Bug Free Avocado Toast",
    category: "Pastries & Brain Food",
    price: 8.50,
    caffeine: "None",
    isVegan: true,
    popular: true,
    description: "Thick-cut sourdough, smashed avocado, microgreens, and olive oil.",
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
    equipment: ["27-inch 4K Monitor", "USB-C Hub", "Glass Whiteboard", "500Mbps Wi-Fi"],
    description: "Ideal for pair programming, 1-on-1 code reviews, and remote calls.",
    status: "Available"
  },
  {
    id: "pod-201",
    name: "Room 201 Created",
    capacity: "4 - 6 People",
    hourlyRate: 25.00,
    equipment: ["55-inch 4K Smart TV", "Logitech MeetUp Video Cam", "Whiteboard", "Conference Mic"],
    description: "Designed for small engineering teams, sprint planning, and meetings.",
    status: "Available"
  },
  {
    id: "pod-304",
    name: "Silo 304 Modified",
    capacity: "6 - 8 People",
    hourlyRate: 35.00,
    equipment: ["Dual 65-inch Displays", "Jabra Conference Audio", "Magnetic Glass Wall"],
    description: "Spacious room for startup pitch sessions and architecture design reviews.",
    status: "Occupied"
  }
];

export const IT_BOOKS = [
  {
    id: "b1",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    field: "Systems Architecture",
    status: "Available"
  },
  {
    id: "b2",
    title: "Clean Code",
    author: "Robert C. Martin",
    field: "Software Engineering",
    status: "Available"
  },
  {
    id: "b3",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    field: "Software Development",
    status: "In Use"
  },
  {
    id: "b4",
    title: "Learning React",
    author: "Alex Banks & Eve Porcello",
    field: "Frontend & Web",
    status: "Available"
  },
  {
    id: "b5",
    title: "Grokking Algorithms",
    author: "Aditya Y. Bhargava",
    field: "Data Structures & CS",
    status: "Available"
  }
];

export const BOARD_GAMES = [
  {
    id: "g1",
    title: "Catan",
    players: "3 - 4 Players",
    duration: "60 mins",
    type: "Strategy"
  },
  {
    id: "g2",
    title: "Chess Classic",
    players: "2 Players",
    duration: "30 mins",
    type: "Tactical"
  },
  {
    id: "g3",
    title: "Ticket to Ride",
    players: "2 - 5 Players",
    duration: "45 mins",
    type: "Route Building"
  },
  {
    id: "g4",
    title: "Exploding Kittens",
    players: "2 - 5 Players",
    duration: "15 mins",
    type: "Card Game"
  }
];
