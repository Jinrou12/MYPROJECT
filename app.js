/* ==========================================================================
   NEXUS TECH SHOWCASE - APPLICATION LOGIC & INTERACTION ENGINE
   ========================================================================== */

// --- Pre-loaded Starter Web Apps Data ---
const DEFAULT_APPS = [
  {
    id: "app-jobslak",
    title: "ប្រព័ន្ធគ្រប់គ្រងស្លាកលេខ និងទីតាំង (Tag & Location Manager)",
    category: "Web",
    description: "ប្រព័ន្ធគ្រប់គ្រងស្លាកលេខ និងទីតាំងស្នាក់នៅ (Tag & Location Manager) គឺជា Web App ទំនើបសម្រាប់គ្រប់គ្រងបញ្ជីឈ្មោះ ទីតាំង និងត្រួតពិនិត្យវត្តមាន Real-time។ គាំទ្រ ផែនទីវត្តអន្តរកម្ម (Interactive Map), គ្រីសវត្តមាន, ស្កែន QR Code, និងការនាំចូល/ចេញទិន្នន័យជា Excel, CSV, PDF យ៉ាងរហ័ស។",
    descriptionEn: "Tag & Location Manager is an advanced Web Application for managing attendee lists, location tags, and real-time attendance check-ins. Features interactive satellite temple maps, QR code tagging, real-time analytics, and seamless Excel/CSV/PDF bulk import & export.",
    url: "https://jobslak.vercel.app/",
    imageUrl: "images/jobslak_banner.png",
    logoUrl: "images/jobslak_logo.jpg",
    tags: ["Web App", "Interactive Map", "QR Code", "Attendance", "Excel Import"],
    githubUrl: "https://github.com/visal/jobslak",
    views: 3627,
    likes: 184,
    featured: true,
    createdAt: "2026-09-04"
  },
  {
    id: "app-khemvoen",
    title: "ប្រព័ន្ធគ្រប់គ្រងអវត្តមានថ្នាក់បង្កង",
    category: "Web",
    description: "ប្រព័ន្ធគ្រប់គ្រងអវត្តមាន និងវត្តមានសិស្សថ្នាក់បង្កង (Khemvoen Attendance Management System) សម្រាប់តាមដានវត្តមានប្រចាំថ្ងៃ ប្រចាំខែ និងស្ថិតិស្វ័យប្រវត្តិ ជាមួយប្រព័ន្ធ Dashboard ពណ៌មាសយ៉ាងប្រណីត។",
    descriptionEn: "Khemvoen Attendance Management System — Advanced student attendance and absence tracking with daily/monthly automated analytics and luxury golden UI.",
    url: "https://khemvoen-attendance.vercel.app",
    imageUrl: "images/khemvoen_banner.png",
    logoUrl: "images/khemvoen_logo.png",
    tags: ["Web App", "Attendance", "Khmer UI", "Vercel", "Dashboard"],
    githubUrl: "",
    views: 4210,
    likes: 312,
    featured: true,
    createdAt: "2026-09-04"
  },
  {
    id: "app-1",
    title: "Bulk Poster Generator",
    category: "Tool",
    description: "Web App សម្រាប់បង្កើត Poster រាប់រយសន្លឹកដោយស្វ័យប្រវត្តិ (Bulk Mail Merge) ជាមួយទិន្នន័យ Excel គាំទ្រពុម្ពអក្សរខ្មែរ និងអាចទាញយកជា ZIP បានយ៉ាងងាយស្រួល។",
    descriptionEn: "Create hundreds of personalized posters in minutes — bulk mail merge with Excel data, Khmer font support, and ZIP export.",
    url: "https://bulk-poster-teal.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800&auto=format&fit=crop",
    logoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'><rect width='100' height='100' rx='20' fill='%23b91c1c'/><g transform='scale(2.5) translate(8, 8)'><polygon points='12 2 2 7 12 12 22 7 12 2' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><polyline points='2 12 12 17 22 12' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><polyline points='2 17 12 22 22 17' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></g></svg>",
    tags: ["React", "HTML Canvas", "Excel Parser", "ZIP Export"],
    githubUrl: "",
    views: 3420,
    likes: 184,
    featured: true,
    createdAt: "2026-09-04"
  },
  {
    id: "app-2",
    title: "VDO to Clip",
    category: "Tool",
    description: "Web App សម្រាប់កាត់វីដេអូ (Video Clipper) និងដាក់អក្សរខ្មែរ (Khmer Subtitles) មានភាពងាយស្រួល និងរហ័ស។",
    descriptionEn: "Video clipper and editor with built-in Khmer subtitle support and AI features.",
    url: "https://vdo-to-clip.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?q=80&w=800&auto=format&fit=crop",
    logoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'><rect width='100' height='100' rx='20' fill='%234f46e5'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-size='60'>🎬</text></svg>",
    tags: ["Video Editing", "Khmer Subtitles", "HTML Canvas"],
    githubUrl: "",
    views: 2890,
    likes: 142,
    featured: true,
    createdAt: "2026-09-04"
  },
  {
    id: "app-3",
    title: "Football Analysis Studio",
    category: "Tool",
    description: "AI-Powered Tactical Video Tracker & Vision Engine សម្រាប់វិភាគបាល់ទាត់ ដោយប្រើ AI (YOLOv8)។",
    descriptionEn: "AI-powered ball tracking and player analysis video engine.",
    url: "https://football-three-kohl.vercel.app/",
    imageUrl: "images/football_banner.jpg",
    logoUrl: "images/football_logo.svg",
    tags: ["AI", "Video Analysis", "YOLOv8", "Sports"],
    githubUrl: "",
    views: 4100,
    likes: 295,
    featured: true,
    isTesting: true,
    createdAt: "2026-08-15"
  },
  {
    id: "app-4",
    title: "NeoTrade Crypto & Stock Portfolio",
    category: "APP",
    description: "កម្មវិធីតាមដានតម្លៃ Cryptocurrencies & Stocks ជាមួយ Price Alerts, Live WebSocket Feeds, និង Portfolio Tracker.",
    descriptionEn: "Live cryptocurrency and equity asset tracker with WebSocket price streaming, technical indicators, and wallet sync.",
    url: "https://example.com/neotrade",
    imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop",
    tags: ["Vue.js", "Web3.js", "TradingView", "API"],
    githubUrl: "https://github.com/visal/neotrade-crypto",
    views: 1950,
    likes: 98,
    featured: false,
    isTesting: true,
    createdAt: "2026-08-24"
  },
  {
    id: "app-5",
    title: "LogoRemove Studio",
    category: "Tool",
    description: "AI-Powered Image & Video Logo Remover សម្រាប់លុប Watermark ឬ Logo ចេញពីរូបភាពនិងវីដេអូដោយស្វ័យប្រវត្តិ។",
    descriptionEn: "AI-Powered Image & Video Logo Remover tool.",
    url: "https://remove-logo.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1616588265050-8b093375815a?q=80&w=800&auto=format&fit=crop",
    logoUrl: "",
    tags: ["AI", "Video Editor", "Tool"],
    githubUrl: "",
    views: 5200,
    likes: 412,
    featured: true,
    createdAt: "2026-08-10"
  },
  {
    id: "app-6",
    title: "Omni Store - Smart E-Commerce Platform",
    category: "Web",
    description: "ហាងទំនិញអនឡាញទំនើប ជាមួយ Cart System, Dark/Light Mode, Filter ទំនិញលឿន, និង QR Code Payment Integration.",
    descriptionEn: "Ultra-fast headless e-commerce store with dynamic cart state, instant facet filtering, and digital wallet checkout.",
    url: "https://example.com/omni-store",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Stripe API", "Redux", "Tailwind"],
    githubUrl: "https://github.com/visal/omni-ecommerce",
    views: 1680,
    likes: 87,
    featured: false,
    createdAt: "2026-08-25"
  },
  {
    id: "app-7",
    title: "ResizVdo - Video Converter",
    category: "Tool",
    description: "កម្មវិធីសម្រាប់ប្ដូរទំហំវីដេអូទៅជា 1920x1080 (Video Converter) ងាយស្រួលប្រើ។",
    descriptionEn: "1920x1080 Video Converter and resizing utility.",
    url: "https://resize-vdo.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1535016120720-40c746a5047b?q=80&w=800&auto=format&fit=crop",
    logoUrl: "",
    tags: ["Video Converter", "Tool"],
    githubUrl: "",
    views: 840,
    likes: 42,
    featured: false,
    isTesting: true,
    createdAt: "2026-09-04"
  }
];

// --- Translation Dictionary (i18n: Khmer & English) ---
const TRANSLATIONS = {
  km: {
    search_placeholder: "ស្វែងរក Web App ឬ Tech Stack...",
    btn_add_app: "បន្ថែម App ថ្មី",
    hero_badge: "Next-Gen Web Applications Showcase",
    hero_title: 'បណ្តុំ <span class="gradient-text">Web Applications</span> & <span class="gradient-purple">UX/UI Innovations</span> <span style="display: block; font-size: 2.2rem; letter-spacing: 2px; color: var(--primary-cyan); margin-top: 0.6rem;">BY: VISAL</span>',
    hero_subtitle: "សូមស្វាគមន៍មកកាន់ Platform បង្ហាញ Web Apps ទំនើបៗ និងប្រព័ន្ធគ្រប់គ្រងសហសម័យ។ លោកអ្នកអាចធ្វើការតេស្តសាកល្បង Live Previews, ស្វែងរកមុខងារថ្មីៗ និងបន្ថែម Web App ផ្ទាល់ខ្លួនបានយ៉ាងងាយស្រួល។",
    stat_total_apps: "Web Apps សរុប",
    stat_total_views: "ការចូលទស្សនា",
    stat_categories: "ប្រភេទ (Categories)",
    sort_by: "រៀបតាម:",
    sort_featured: "ពិសេស (Featured)",
    sort_recent: "ថ្មីៗបំផុត (Recent)",
    sort_popular: "ការទស្សនាច្រើន (Popular)",
    sort_likes: "ការចូលចិត្តច្រើន (Most Liked)",
    dev_tagline: "FULL-STACK DEVELOPER & UX/UI DESIGNER",
    dev_name: "Visal Developer Portal",
    dev_bio: "ខ្ញុំប្តេជ្ញាចិត្តក្នុងការបង្កើត Web Applications ដែលមានសោភ័ណភាពខ្ពស់, ល្បឿនលឿន, និងផ្តល់បទពិសោធន៍ UX/UI លំដាប់ថ្នាក់ពិភពលោក។ ប្រសិនបើលោកអ្នកចង់បង្កើត Web App ផ្ទាល់ខ្លួន ឬចង់សហការ សូមទាក់ទងមកខ្ញុំបាន!",
    btn_contact_me: "ទាក់ទងមកខ្ញុំ (Contact Dev)",
    modal_add_title: "បន្ថែម Web App ថ្មី",
    form_app_name: "ឈ្មោះ Web App *",
    form_app_category: "ប្រភេទ (Category) *",
    form_app_desc: "ការពណ៌នាសង្ខេប (Description) *",
    form_app_demo_url: "Link ទៅកាន់ Live Web App (URL) *",
    form_app_image_url: "Link រូបភាព Screenshot (Image URL)",
    form_app_tags: "Tech Stack (ញែកដោយសញ្ញាក្បៀស ,)",
    form_app_github: "Github Repository Link (បើមាន)",
    btn_cancel: "បោះបង់",
    btn_save_app: "រក្សាទុក Web App",
    btn_open_tab: "បើកក្នុង Tab ថ្មី",
    about_app: "អំពី Web App នេះ",
    modal_contact_title: "ផ្ញើសារមកកាន់ Developer",
    form_your_name: "ឈ្មោះរបស់អ្នក",
    form_your_email: "អុីមែលរបស់អ្នក",
    form_your_msg: "សារ (Message)",
    btn_send_msg: "ផ្ញើសារឥឡូវនេះ",
    empty_title: "មិនទាន់មាន Web App ក្នុងប្រភេទនេះនៅឡើយទេ",
    btn_preview: "Open",
    btn_like: "ចូលចិត្ត",
    btn_manager: "គ្រប់គ្រង Apps (Manager)",
    manager_modal_title: "App Manager Dashboard (ផ្ទាំងគ្រប់គ្រង)",
    mgr_stat_total: "Web Apps សរុប",
    mgr_stat_featured: "Featured Apps",
    mgr_stat_views: "Views សរុប",
    mgr_stat_likes: "Likes សរុប",
    th_app: "Web App",
    th_category: "Category",
    th_stats: "Views / Likes",
    th_featured: "Featured",
    th_actions: "Actions",
    modal_edit_title: "កែប្រែ Web App",
    btn_update_app: "ធ្វើបច្ចុប្បន្នភាព App"
  },
  en: {
    search_placeholder: "Search Web Apps or Tech Stack...",
    btn_add_app: "Add New App",
    hero_badge: "Next-Gen Web Applications Showcase",
    hero_title: '<span class="gradient-text">Web Applications</span> & <span class="gradient-purple">UX/UI Innovations</span> <span style="display: block; font-size: 2.2rem; letter-spacing: 2px; color: var(--primary-cyan); margin-top: 0.6rem;">BY: VISAL</span>',
    hero_subtitle: "Welcome to the ultimate tech showcase platform. Test live web apps, explore cutting-edge UX design systems, and dynamically manage your web app portfolio.",
    stat_total_apps: "Total Web Apps",
    stat_total_views: "Total Views",
    stat_categories: "Categories",
    sort_by: "Sort By:",
    sort_featured: "Featured",
    sort_recent: "Recent",
    sort_popular: "Most Popular",
    sort_likes: "Most Liked",
    dev_tagline: "FULL-STACK DEVELOPER & UX/UI DESIGNER",
    dev_name: "Visal Developer Portal",
    dev_bio: "Passionate full-stack developer specializing in ultra-responsive web applications, rich cyberpunk UX/UI aesthetics, and modern web software development.",
    btn_contact_me: "Contact Developer",
    modal_add_title: "Add New Web App",
    form_app_name: "Web App Title *",
    form_app_category: "Category *",
    form_app_desc: "Description *",
    form_app_demo_url: "Live Web App Link (URL) *",
    form_app_image_url: "Screenshot Image URL",
    form_app_tags: "Tech Stack (separated by comma ,)",
    form_app_github: "Github Repo Link (Optional)",
    btn_cancel: "Cancel",
    btn_save_app: "Save Web App",
    btn_open_tab: "Open in New Tab",
    about_app: "About this Web App",
    modal_contact_title: "Contact Developer",
    form_your_name: "Your Name",
    form_your_email: "Your Email",
    form_your_msg: "Your Message",
    btn_send_msg: "Send Message Now",
    empty_title: "No Web Apps found in this category",
    btn_preview: "Live Preview",
    btn_like: "Like",
    btn_manager: "App Manager",
    manager_modal_title: "App Manager Dashboard",
    mgr_stat_total: "Total Web Apps",
    mgr_stat_featured: "Featured Apps",
    mgr_stat_views: "Total Views",
    mgr_stat_likes: "Total Likes",
    th_app: "Web App",
    th_category: "Category",
    th_stats: "Views / Likes",
    th_featured: "Featured",
    th_actions: "Actions",
    modal_edit_title: "Edit Web App",
    btn_update_app: "Update App"
  }
};

// --- Application State ---
let currentLang = "km";
let appsData = [];
let activeCategory = "All";
let mgrActiveCategory = "All";
let searchQuery = "";
let sortBy = "featured";

// --- Website Logo & Favicon Extraction Helpers ---
function getLogoSources(url, size = 256, customLogoUrl = null) {
  if (!url || typeof url !== 'string') return customLogoUrl ? [customLogoUrl] : ['images/jobslak_logo.jpg'];
  try {
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }
    const domain = new URL(cleanUrl).hostname;
    if (!domain) return customLogoUrl ? [customLogoUrl] : ['images/jobslak_logo.jpg'];

    const sources = [];

    if (customLogoUrl && customLogoUrl.trim() !== '') {
      sources.push(customLogoUrl);
    }

    if (domain.includes('jobslak')) {
      sources.push('images/jobslak_logo.jpg');
    }

    if (domain.includes('khemvoen')) {
      sources.push('images/khemvoen_logo.png');
    }

    sources.push(
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      `https://${domain}/apple-touch-icon.png`,
      `https://${domain}/favicon.ico`,
      `https://unavatar.io/${domain}?fallback=false`,
      `https://logo.clearbit.com/${domain}`
    );

    return sources;
  } catch (e) {
    return customLogoUrl ? [customLogoUrl] : ['images/jobslak_logo.jpg'];
  }
}

function getFaviconUrl(url, size = 128) {
  const sources = getLogoSources(url, size);
  return sources.length > 0 ? sources[0] : '';
}

function getDomainName(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }
    return new URL(cleanUrl).hostname;
  } catch (e) {
    return '';
  }
}

function handleLogoError(img, customDomain) {
  if (!img) return;
  const domain = customDomain || (img.dataset ? img.dataset.domain : '') || '';
  let sources = [];
  try {
    sources = img.dataset && img.dataset.logoSources ? JSON.parse(img.dataset.logoSources) : [];
  } catch (e) {
    sources = [];
  }

  let currentIndex = parseInt((img.dataset && img.dataset.sourceIdx) || '0', 10);
  currentIndex++;

  if (sources.length > 0 && currentIndex < sources.length) {
    if (img.dataset) img.dataset.sourceIdx = currentIndex;
    img.src = sources[currentIndex];
  } else {
    // Generate dynamic colorful SVG Monogram badge
    const titleText = img.alt || domain || 'W';
    const initial = titleText.trim().charAt(0).toUpperCase();
    
    const colors = [
      ['%234f46e5', '%23818cf8'], // Indigo
      ['%23b91c1c', '%23f87171'], // Red
      ['%230f766e', '%232dd4bf'], // Teal
      ['%23b45309', '%23fbbf24'], // Amber
      ['%237e22ce', '%23c084fc'], // Purple
      ['%23be185d', '%23f472b6']  // Pink
    ];
    let hash = 0;
    for (let i = 0; i < domain.length; i++) hash += domain.charCodeAt(i);
    const colorPair = colors[hash % colors.length];
    
    img.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><defs><linearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="${colorPair[0]}" /><stop offset="100%25" stop-color="${colorPair[1]}" /></linearGradient></defs><rect width="128" height="128" rx="28" fill="url(%23grad)"/><text x="50%25" y="58%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold" font-size="64">${initial}</text></svg>`;
    img.onerror = null;
  }
}

window.handleLogoError = handleLogoError;

// --- DOM Elements ---
const appsGrid = document.getElementById("apps-grid");
const searchInput = document.getElementById("search-input");
const categoriesContainer = document.getElementById("categories-container");
const sortSelect = document.getElementById("sort-select");
const langToggleBtn = document.getElementById("lang-toggle-btn");
const langText = document.getElementById("lang-text");

// Modals
const addAppModal = document.getElementById("add-app-modal");
const previewModal = document.getElementById("preview-modal");
const contactModal = document.getElementById("contact-modal");
const managerModal = document.getElementById("manager-modal");
const editAppModal = document.getElementById("edit-app-modal");

// Form & Buttons
const addAppForm = document.getElementById("add-app-form");
const contactForm = document.getElementById("contact-form");
const editAppForm = document.getElementById("edit-app-form");
const openAddAppBtn = document.getElementById("open-add-app-btn");
const openContactBtn = document.getElementById("open-contact-btn");
const openManagerBtn = document.getElementById("open-manager-btn");
const mgrSearchInput = document.getElementById("mgr-search-input");
const mgrAddBtn = document.getElementById("mgr-add-btn");
const footerResetData = document.getElementById("footer-reset-data");

// Stats Elements
const statTotalApps = document.getElementById("stat-total-apps");

// --- Manager Dashboard Logic ---
function renderManagerCategories() {
  const containers = [
    document.getElementById("mgr-categories-container"),
    document.getElementById("view-mgr-categories-container")
  ].filter(Boolean);

  if (containers.length === 0) return;

  const html = CATEGORIES.map(cat => {
    const isActive = cat === mgrActiveCategory ? 'active' : '';
    const label = cat === 'All' ? (currentLang === 'km' ? 'ទាំងអស់ (All)' : 'All Apps') : cat;
    return `<button class="cat-btn ${isActive}" data-mgr-cat="${cat}">${label}</button>`;
  }).join('');

  containers.forEach(c => {
    c.innerHTML = html;
  });

  document.querySelectorAll("[data-mgr-cat]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      mgrActiveCategory = e.target.dataset.mgrCat;
      renderManagerCategories();
      renderManagerTable();
    });
  });
}

function renderManagerTable() {
  const tableBodies = [
    document.getElementById("view-manager-table-body"),
    document.getElementById("manager-table-body")
  ].filter(Boolean);

  if (tableBodies.length === 0) return;

  const viewSearchInput = document.getElementById("view-mgr-search-input");
  const query = (viewSearchInput ? viewSearchInput.value : (mgrSearchInput ? mgrSearchInput.value : "")).toLowerCase().trim();

  let list = appsData.filter(app => {
    const matchesCat = mgrActiveCategory === "All" || app.category === mgrActiveCategory;
    const matchesSearch = !query || 
      app.title.toLowerCase().includes(query) ||
      app.category.toLowerCase().includes(query) ||
      app.tags.some(t => t.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  // Calculate manager stats
  const totalApps = appsData.length;
  const featuredApps = appsData.filter(a => a.featured).length;
  const totalViews = appsData.reduce((sum, a) => sum + (a.views || 0), 0);
  const totalLikes = appsData.reduce((sum, a) => sum + (a.likes || 0), 0);

  const formattedViews = totalViews >= 1000 ? (totalViews / 1000).toFixed(1) + 'K' : totalViews;

  ["mgr-stat-total", "view-mgr-stat-total"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = totalApps;
  });
  ["mgr-stat-featured", "view-mgr-stat-featured"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = featuredApps;
  });
  ["mgr-stat-views", "view-mgr-stat-views"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = formattedViews;
  });
  ["mgr-stat-likes", "view-mgr-stat-likes"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = totalLikes;
  });

  const rowHtml = list.length === 0 ? `
    <tr>
      <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">
        មិនមាន Web App រកឃើញឡើយ
      </td>
    </tr>
  ` : list.map(app => {
    const logoSources = getLogoSources(app.url, 128, app.logoUrl);
    const logoSourcesJson = JSON.stringify(logoSources).replace(/"/g, '&quot;');
    const domain = getDomainName(app.url);
    const mainImage = app.imageUrl || `https://icon.horse/icon/${domain}`;

    const featuredStar = app.featured 
      ? `<button class="btn btn-secondary btn-icon-sm toggle-featured-btn" data-id="${app.id}" title="Unmark Featured" style="color: var(--accent-amber);"><i data-lucide="star"></i></button>`
      : `<button class="btn btn-secondary btn-icon-sm toggle-featured-btn" data-id="${app.id}" title="Mark Featured" style="color: var(--text-dim);"><i data-lucide="star"></i></button>`;

    return `
      <tr>
        <td>
          <div class="table-app-info">
            <div class="table-app-img-wrapper">
              <img src="${mainImage}" class="table-app-thumb" alt="${app.title}" data-domain="${domain}" data-logo-sources="${logoSourcesJson}" data-source-idx="0" onerror="handleLogoError(this, '${domain}')">
              <img src="${logoSources[0] || ''}" class="table-favicon-badge" alt="${app.title}" title="Logo Website: ${domain}" data-domain="${domain}" data-logo-sources="${logoSourcesJson}" data-source-idx="0" onerror="handleLogoError(this, '${domain}')">
            </div>
            <div>
              <div style="font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
                <img src="${logoSources[0] || ''}" class="title-inline-favicon" alt="${app.title}" data-domain="${domain}" data-logo-sources="${logoSourcesJson}" data-source-idx="0" onerror="handleLogoError(this, '${domain}')">
                <span>${app.title}</span>
              </div>
              <div class="table-url-link-row">
                <i data-lucide="link-2" style="width: 12px; height: 12px; color: var(--primary-cyan); flex-shrink: 0;"></i>
                <a href="${app.url}" target="_blank" class="table-app-url" title="${app.url}">${app.url}</a>
              </div>
            </div>
          </div>
        </td>
        <td><span class="badge-cat">${app.category}</span></td>
        <td>
          <span style="color: var(--primary-cyan); font-weight: 600;">${app.views} Views</span> / 
          <span style="color: var(--accent-pink); font-weight: 600;">${app.likes} Likes</span>
        </td>
        <td>
          ${app.featured ? '<span style="color: var(--accent-emerald); font-weight: 600;">★ Featured</span>' : '<span style="color: var(--text-dim);">Standard</span>'}
        </td>
        <td>
          <div class="table-action-btns">
            ${featuredStar}
            <button class="btn btn-secondary btn-icon-sm preview-mgr-btn" data-id="${app.id}" title="Preview Sandbox"><i data-lucide="eye"></i></button>
            <button class="btn btn-secondary btn-icon-sm edit-mgr-btn" data-id="${app.id}" title="Edit Web App"><i data-lucide="edit-3"></i></button>
            <button class="btn btn-secondary btn-icon-sm delete-mgr-btn" data-id="${app.id}" title="Delete Web App" style="color: var(--accent-pink);"><i data-lucide="trash-2"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  tableBodies.forEach(tb => {
    tb.innerHTML = rowHtml;
  });

  if (window.lucide) lucide.createIcons();

  // Action Handlers inside table
  document.querySelectorAll(".toggle-featured-btn").forEach(b => {
    b.addEventListener("click", () => handleToggleFeatured(b.dataset.id));
  });
  document.querySelectorAll(".preview-mgr-btn").forEach(b => {
    b.addEventListener("click", () => {
      if (managerModal) closeModal(managerModal);
      openPreviewModal(b.dataset.id);
    });
  });
  document.querySelectorAll(".edit-mgr-btn").forEach(b => {
    b.addEventListener("click", () => openEditModal(b.dataset.id));
  });
  document.querySelectorAll(".delete-mgr-btn").forEach(b => {
    b.addEventListener("click", () => handleDeleteApp(b.dataset.id));
  });
}

function handleToggleFeatured(id) {
  const app = appsData.find(a => a.id === id);
  if (app) {
    app.featured = !app.featured;
    saveAppsData();
    renderApps();
    renderManagerTable();
    showToast(app.featured ? `Marked "${app.title}" as Featured!` : `Unmarked "${app.title}" from Featured.`);
  }
}

function handleDeleteApp(id) {
  const app = appsData.find(a => a.id === id);
  if (!app) return;
  if (confirm(`តើអ្នកពិតជាចង់លុប "${app.title}" ចេញមែនទេ?`)) {
    appsData = appsData.filter(a => a.id !== id);
    saveAppsData();
    updateStats();
    renderApps();
    renderManagerTable();
    showToast(currentLang === 'km' ? "បានលុប Web App ជោគជ័យ" : "App deleted successfully");
  }
}

function openEditModal(id) {
  const app = appsData.find(a => a.id === id);
  if (!app) return;

  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  const setCheck = (id, val) => { const el = document.getElementById(id); if (el) el.checked = val; };

  setVal("edit-app-id", app.id);
  setVal("edit-title-input", app.title);
  setVal("edit-cat-input", app.category);
  setVal("edit-desc-input", app.description);
  setVal("edit-url-input", app.url);
  setVal("edit-image-input", app.imageUrl || "");
  setVal("edit-logo-input", app.logoUrl || "");
  setVal("edit-tags-input", app.tags ? app.tags.join(", ") : "");
  setVal("edit-github-input", app.githubUrl || "");
  setCheck("edit-featured-input", !!app.featured);
  setCheck("edit-testing-input", !!app.isTesting);

  // Trigger live website logo preview
  const editUrlInput = document.getElementById("edit-url-input");
  if (editUrlInput) editUrlInput.dispatchEvent(new Event('input'));

  openModal(editAppModal);
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  loadAppsData();
  renderCategories();
  renderApps();
  renderManagerCategories();
  renderManagerTable();
  setupEventListeners();
  updateStats();
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

// --- Data Operations ---
function loadAppsData() {
  const saved = localStorage.getItem("nexus_web_apps_v5");
  if (saved) {
    try {
      appsData = JSON.parse(saved);
    } catch (e) {
      appsData = [...DEFAULT_APPS];
    }
  } else {
    appsData = [...DEFAULT_APPS];
  }

  // Ensure Jobslak app is configured with image 1 as banner and image 2 as logo
  let jobslakApp = appsData.find(a => a.id === "app-jobslak" || (a.url && a.url.includes("jobslak")));
  const defaultJobslak = DEFAULT_APPS.find(a => a.id === "app-jobslak");
  
  if (!jobslakApp && defaultJobslak) {
    appsData.unshift(defaultJobslak);
  } else if (jobslakApp && defaultJobslak) {
    jobslakApp.title = defaultJobslak.title;
    jobslakApp.description = defaultJobslak.description;
    jobslakApp.descriptionEn = defaultJobslak.descriptionEn;
    jobslakApp.tags = defaultJobslak.tags;
    jobslakApp.imageUrl = "images/jobslak_banner.png";
    jobslakApp.logoUrl = "images/jobslak_logo.jpg";
  }

  // Ensure Khemvoen Attendance app is configured with logo & banner assets
  let khemvoenApp = appsData.find(a => a.id === "app-khemvoen" || (a.url && (a.url.includes("khemvoen") || a.url.includes("attenden"))));
  const defaultKhemvoen = DEFAULT_APPS.find(a => a.id === "app-khemvoen");
  if (!khemvoenApp && defaultKhemvoen) {
    appsData.splice(1, 0, defaultKhemvoen);
  } else if (khemvoenApp && defaultKhemvoen) {
    khemvoenApp.title = defaultKhemvoen.title;
    if (!khemvoenApp.imageUrl || khemvoenApp.imageUrl.includes("unsplash")) {
      khemvoenApp.imageUrl = "images/khemvoen_banner.png";
    }
    khemvoenApp.logoUrl = "images/khemvoen_logo.png";
  }

  saveAppsData();
}

function saveAppsData() {
  localStorage.setItem("nexus_web_apps_v5", JSON.stringify(appsData));
}

// --- Categories Setup ---
const CATEGORIES = ["All", "APP", "Web", "Tool"];

function renderCategories() {
  if (!categoriesContainer) return;
  categoriesContainer.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat === activeCategory ? 'active' : '';
    const label = cat === 'All' ? (currentLang === 'km' ? 'ទាំងអស់ (All)' : 'All Apps') : cat;
    return `<button class="cat-btn ${isActive}" data-category="${cat}">${label}</button>`;
  }).join('');

  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      activeCategory = e.target.dataset.category;
      renderCategories();
      renderApps();
    });
  });
}

// --- Render Apps Grid ---
function renderApps() {
  if (!appsGrid) return;
  let filtered = appsData.filter(app => {
    const matchesCat = activeCategory === "All" || app.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      app.title.toLowerCase().includes(q) ||
      app.description.toLowerCase().includes(q) ||
      (app.descriptionEn && app.descriptionEn.toLowerCase().includes(q)) ||
      app.tags.some(tag => tag.toLowerCase().includes(q));
    
    return matchesCat && matchesSearch;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === "recent") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "views") return b.views - a.views;
    if (sortBy === "likes") return b.likes - a.likes;
    // Featured default
    const featuredDiff = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (featuredDiff !== 0) return featuredDiff;
    // Secondary sort: recent
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (filtered.length === 0) {
    const emptyText = TRANSLATIONS[currentLang].empty_title;
    appsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i data-lucide="layers-slash"></i></div>
        <h3>${emptyText}</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">សូមព្យាយាមស្វែងរកជាមួយ Keyword ផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង។</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  appsGrid.innerHTML = filtered.map(app => {
    const descriptionText = (currentLang === 'en' && app.descriptionEn) ? app.descriptionEn : app.description;
    const featuredBadge = app.featured ? `<span class="featured-tag">★ Featured</span>` : '';
    const testingBadge = app.isTesting ? `<span class="testing-tag" style="position: absolute; top: 12px; left: 12px; background: rgba(245, 158, 11, 0.9); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; z-index: 10; border: 1px solid rgba(255, 255, 255, 0.3);"><i data-lucide="flask-conical" style="width: 12px; height: 12px; display: inline-block; vertical-align: -2px; margin-right: 4px;"></i>Beta Test</span>` : '';
    const tagsHtml = app.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const btnPreviewText = TRANSLATIONS[currentLang].btn_preview;

    const logoSources = getLogoSources(app.url, 128, app.logoUrl);
    const logoSourcesJson = JSON.stringify(logoSources).replace(/"/g, '&quot;');
    const domain = getDomainName(app.url);
    const cardImage = app.imageUrl || (logoSources.length > 0 ? logoSources[0] : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800');

    return `
      <article class="app-card" data-id="${app.id}">
        <div class="app-thumbnail" data-id="${app.id}" style="cursor: pointer; position: relative;" title="Click to open ${app.title}">
          ${testingBadge}
          <img src="${cardImage}" alt="${app.title}" loading="lazy" data-domain="${domain}" data-logo-sources="${logoSourcesJson}" data-source-idx="0" onerror="handleLogoError(this, '${domain}')">
          <div class="thumbnail-overlay">
            <span class="badge-cat">${app.category}</span>
          </div>
          ${featuredBadge}
        </div>

        <div class="app-card-body">
          <div class="app-header-row">
            <div class="app-title-group">
              <img src="${logoSources[0] || ''}" class="card-site-favicon" alt="${app.title}" title="Website Logo (${domain})" data-domain="${domain}" data-logo-sources="${logoSourcesJson}" data-source-idx="0" onerror="handleLogoError(this, '${domain}')">
              <h3 class="app-title">${app.title}</h3>
            </div>
          </div>

          <p class="app-description">${descriptionText}</p>

          <div class="tech-stack">
            ${tagsHtml}
          </div>

          <div class="app-card-footer">
            <div class="card-stats">
              <div class="stat-group" title="Views">
                <i data-lucide="eye" style="width: 14px; height: 14px;"></i>
                <span>${app.views}</span>
              </div>
              <div class="stat-group" title="Likes">
                <i data-lucide="heart" style="width: 14px; height: 14px; color: var(--accent-pink);"></i>
                <span>${app.likes}</span>
              </div>
            </div>

            <div class="action-btns">
              <button class="btn btn-secondary btn-icon-only like-btn" data-id="${app.id}" title="Like App">
                <i data-lucide="heart" style="width: 16px; height: 16px;"></i>
              </button>
              <button class="btn btn-primary open-preview-btn" data-id="${app.id}">
                <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
                <span>${btnPreviewText}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();

  // Attach card event handlers
  document.querySelectorAll(".open-preview-btn, .app-thumbnail").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      const app = appsData.find(a => a.id === id);
      if (app && app.url) {
        // Increment view count since they are visiting the app
        app.views += 1;
        saveAppsData();
        updateStats();
        
        // Open web app directly in a new tab
        window.open(app.url, '_blank');
        
        // Refresh UI slightly later to show updated views
        setTimeout(renderApps, 500);
      }
    });
  });

  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      handleLikeApp(id);
    });
  });
}

// --- Preview Sandbox Modal Logic ---
function openPreviewModal(id) {
  const app = appsData.find(a => a.id === id);
  if (!app) return;

  // Increment view
  app.views += 1;
  saveAppsData();
  updateStats();
  renderApps();

  document.getElementById("preview-app-title").textContent = app.title;
  document.getElementById("preview-app-cat").textContent = app.category;

  const previewAppIcon = document.getElementById("preview-app-icon");
  const faviconUrl = getFaviconUrl(app.url, 128);
  if (previewAppIcon && faviconUrl) {
    previewAppIcon.innerHTML = `<img src="${faviconUrl}" style="width: 22px; height: 22px; object-fit: contain;" alt="Website Logo">`;
  }
  document.getElementById("preview-app-desc").textContent = (currentLang === 'en' && app.descriptionEn) ? app.descriptionEn : app.description;
  document.getElementById("preview-direct-link").href = app.url;
  document.getElementById("sandbox-url-display").textContent = app.url;

  // Render Tags
  const tagsContainer = document.getElementById("preview-app-tags");
  tagsContainer.innerHTML = app.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

  // Github link
  const ghContainer = document.getElementById("preview-github-container");
  if (app.githubUrl) {
    ghContainer.innerHTML = `
      <a href="${app.githubUrl}" target="_blank" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.4rem 0.8rem;">
        <i data-lucide="github" style="width: 14px; height: 14px;"></i> View Code
      </a>
    `;
  } else {
    ghContainer.innerHTML = '';
  }

  // Load Iframe Preview (If blocked by X-Frame-Options in standard domains, fallback preview runner generated)
  const iframe = document.getElementById("sandbox-iframe");
  
  // Custom futuristic dynamic HTML preview page if external domain blocks iframe
  const mockHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin:0; background: #0b1120; color: #f1f5f9; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; padding: 2rem;}
        .card { background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 16px; padding: 2.5rem; max-width: 500px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        h2 { color: #00f2fe; margin-bottom: 0.8rem; font-size: 1.8rem; }
        p { color: #94a3b8; font-size: 1rem; line-height: 1.6; }
        .badge { background: #9d4edd; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase; font-weight: bold; }
        .btn { display: inline-block; margin-top: 1.5rem; padding: 0.8rem 1.6rem; background: linear-gradient(135deg, #00f2fe, #4facfe); color: #050b14; font-weight: bold; text-decoration: none; border-radius: 25px; transition: transform 0.2s; }
        .btn:hover { transform: scale(1.05); }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">${app.category}</span>
        <h2>${app.title}</h2>
        <p>${app.description}</p>
        <div style="margin-top: 1rem; font-size: 0.85rem; color: #00e676;">● Live Interactive Sandbox Mode Active</div>
        <a href="${app.url}" target="_blank" class="btn">Open Full Web App</a>
      </div>
    </body>
    </html>
  `;

  iframe.srcdoc = mockHtmlContent;

  openModal(previewModal);
  if (window.lucide) lucide.createIcons();
}

// --- Device Toggle Switcher in Sandbox ---
document.querySelectorAll(".device-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".device-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const device = btn.dataset.device;
    const wrapper = document.getElementById("iframe-wrapper");
    wrapper.className = `iframe-container device-${device}`;
  });
});

// --- Modal Helper Functions ---
function openModal(modal) {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// --- Real-time Website Logo & Screenshot Auto-Detection Listener ---
function setupUrlLogoListeners() {
  const urlInputs = [
    {
      inputId: "app-url-input",
      catId: "app-cat-input",
      logoInputId: "app-logo-input",
      previewId: "app-url-logo-preview",
      imgId: "app-url-logo-img",
      textId: "app-url-domain-text",
      targetImageInputId: "app-image-input",
      btnLogoId: "app-type-logo-btn",
      btnScreenshotId: "app-type-screenshot-btn"
    },
    {
      inputId: "edit-url-input",
      catId: "edit-cat-input",
      logoInputId: "edit-logo-input",
      previewId: "edit-url-logo-preview",
      imgId: "edit-url-logo-img",
      textId: "edit-url-domain-text",
      targetImageInputId: "edit-image-input",
      btnLogoId: "edit-type-logo-btn",
      btnScreenshotId: "edit-type-screenshot-btn"
    }
  ];

  urlInputs.forEach(({ inputId, catId, logoInputId, previewId, imgId, textId, targetImageInputId, btnLogoId, btnScreenshotId }) => {
    const input = document.getElementById(inputId);
    const catInput = document.getElementById(catId);
    const logoInput = document.getElementById(logoInputId);
    const preview = document.getElementById(previewId);
    const img = document.getElementById(imgId);
    const text = document.getElementById(textId);
    const targetImageInput = document.getElementById(targetImageInputId);
    const btnLogo = document.getElementById(btnLogoId);
    const btnScreenshot = document.getElementById(btnScreenshotId);

    if (!input || !preview || !img || !text) return;

    let activeMode = "logo"; // Default logo icon for App/Tool

    const updateModeButtons = () => {
      if (btnLogo && btnScreenshot) {
        if (activeMode === "logo") {
          btnLogo.classList.add("active");
          btnScreenshot.classList.remove("active");
        } else {
          btnScreenshot.classList.add("active");
          btnLogo.classList.remove("active");
        }
      }
    };

    const applySelectedImage = () => {
      const val = input.value.trim();
      const domain = getDomainName(val);
      if (!domain) {
        preview.style.display = "none";
        return;
      }

      const customLogoVal = logoInput ? logoInput.value.trim() : null;
      const sources = getLogoSources(val, 128, customLogoVal);
      const cleanUrl = val.startsWith('http') ? val : 'https://' + val;
      const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(cleanUrl)}?w=1200&h=800`;
      const selectedUrl = activeMode === "logo" ? (sources.length > 0 ? sources[0] : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`) : screenshotUrl;

      img.dataset.domain = domain;
      if (activeMode === "logo") {
        img.dataset.logoSources = JSON.stringify(sources);
        img.dataset.sourceIdx = "0";
      } else {
        img.dataset.logoSources = "[]";
        img.dataset.sourceIdx = "0";
      }

      img.src = selectedUrl;
      img.style.display = "block";
      text.textContent = activeMode === "logo" 
        ? `● Website Logo Icon (${domain})` 
        : `● Full Website Screenshot (${domain})`;

      preview.style.display = "flex";

      if (targetImageInput) {
        targetImageInput.value = selectedUrl;
      }
    };

    const autoSelectModeFromCat = () => {
      const category = catInput ? catInput.value : "APP";
      if (category === "Web") {
        activeMode = "screenshot";
      } else {
        activeMode = "logo";
      }
      updateModeButtons();
    };

    input.addEventListener("input", () => {
      autoSelectModeFromCat();
      applySelectedImage();
    });

    input.addEventListener("paste", () => {
      setTimeout(() => {
        autoSelectModeFromCat();
        applySelectedImage();
      }, 50);
    });

    if (catInput) {
      catInput.addEventListener("change", () => {
        autoSelectModeFromCat();
        applySelectedImage();
      });
    }

    if (logoInput) {
      logoInput.addEventListener("input", () => {
        if (activeMode === "logo") applySelectedImage();
      });
    }

    if (btnLogo) {
      btnLogo.addEventListener("click", () => {
        activeMode = "logo";
        updateModeButtons();
        applySelectedImage();
      });
    }

    if (btnScreenshot) {
      btnScreenshot.addEventListener("click", () => {
        activeMode = "screenshot";
        updateModeButtons();
        applySelectedImage();
      });
    }
  });
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Admin Login Logic
  const adminLoginOverlay = document.getElementById("admin-login-overlay");
  const adminLoginForm = document.getElementById("admin-login-form");
  const adminPasscodeInput = document.getElementById("admin-passcode");
  const loginErrorMsg = document.getElementById("login-error-msg");

  if (adminLoginOverlay) {
    const isLogged = sessionStorage.getItem("nexus_admin_logged_in") === "true";
    if (isLogged) {
      adminLoginOverlay.classList.add("hidden");
    }

    if (adminLoginForm) {
      adminLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const code = adminPasscodeInput.value;
        if (code === "admin123") {
          sessionStorage.setItem("nexus_admin_logged_in", "true");
          adminLoginOverlay.classList.add("hidden");
          loginErrorMsg.style.display = "none";
        } else {
          loginErrorMsg.style.display = "block";
          adminPasscodeInput.value = "";
        }
      });
    }
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderApps();
    });
  }

  // Live Website Logo Auto-Detection Preview
  setupUrlLogoListeners();

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderApps();
    });
  }

  // Open Modals
  if (openAddAppBtn) openAddAppBtn.addEventListener("click", () => openModal(addAppModal));
  if (openContactBtn) openContactBtn.addEventListener("click", () => openModal(contactModal));
  // View Switcher Buttons
  const navViewShowcase = document.getElementById("nav-view-showcase");
  const navViewManager = document.getElementById("nav-view-manager");
  const showcaseContainer = document.getElementById("showcase-view-container");
  const managerContainer = document.getElementById("manager-view-container");
  const viewAddAppBtn = document.getElementById("view-add-app-btn");

  if (navViewShowcase && navViewManager && showcaseContainer && managerContainer) {
    navViewShowcase.addEventListener("click", () => {
      navViewShowcase.classList.add("active");
      navViewManager.classList.remove("active");
      showcaseContainer.style.display = "block";
      managerContainer.style.display = "none";
    });

    navViewManager.addEventListener("click", () => {
      navViewManager.classList.add("active");
      navViewShowcase.classList.remove("active");
      showcaseContainer.style.display = "none";
      managerContainer.style.display = "block";
      renderManagerTable();
    });
  }

  if (viewAddAppBtn) {
    viewAddAppBtn.addEventListener("click", () => {
      openModal(addAppModal);
    });
  }

  const viewMgrSearchInput = document.getElementById("view-mgr-search-input");
  if (viewMgrSearchInput) {
    viewMgrSearchInput.addEventListener("input", () => {
      renderManagerTable();
    });
  }

  if (openManagerBtn) {
    openManagerBtn.addEventListener("click", () => {
      if (navViewManager) navViewManager.click();
      else {
        renderManagerTable();
        openModal(managerModal);
      }
    });
  }

  if (mgrSearchInput) {
    mgrSearchInput.addEventListener("input", () => {
      renderManagerTable();
    });
  }

  if (mgrAddBtn) {
    mgrAddBtn.addEventListener("click", () => {
      closeModal(managerModal);
      openModal(addAppModal);
    });
  }

  // Edit App Form Submit
  if (editAppForm) {
    editAppForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("edit-app-id").value;
      const app = appsData.find(a => a.id === id);
      if (!app) return;

      app.title = document.getElementById("edit-title-input").value.trim();
      app.category = document.getElementById("edit-cat-input").value;
      app.description = document.getElementById("edit-desc-input").value.trim();
      app.url = document.getElementById("edit-url-input").value.trim();
      app.imageUrl = document.getElementById("edit-image-input").value.trim() || app.imageUrl;
      app.logoUrl = document.getElementById("edit-logo-input").value.trim() || app.logoUrl;
      
      const tagsRaw = document.getElementById("edit-tags-input").value.trim();
      app.tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : app.tags;
      app.githubUrl = document.getElementById("edit-github-input").value.trim();
      app.featured = document.getElementById("edit-featured-input").checked;
      const editTestingCheckbox = document.getElementById("edit-testing-input");
      if (editTestingCheckbox) app.isTesting = editTestingCheckbox.checked;

      saveAppsData();
      renderApps();
      renderManagerTable();
      closeModal(editAppModal);
      showToast(currentLang === 'km' ? "បានធ្វើបច្ចុប្បន្នភាព App ជោគជ័យ!" : "Web App updated successfully!");
    });
  }

  // Close Modals
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = btn.closest(".modal-overlay");
      closeModal(modal);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Language Toggle
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "km" ? "en" : "km";
      updateLanguage();
    });
  }

  // Add App Form Submit
  if (addAppForm) {
    addAppForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("app-title-input").value.trim();
    const category = document.getElementById("app-cat-input").value;
    const description = document.getElementById("app-desc-input").value.trim();
    const url = document.getElementById("app-url-input").value.trim();
    const imageUrl = document.getElementById("app-image-input").value.trim();
    const logoUrl = document.getElementById("app-logo-input").value.trim();
    const tagsRaw = document.getElementById("app-tags-input").value.trim();
    const githubUrl = document.getElementById("app-github-input").value.trim();

    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()) : ["Web App", category];

    const newApp = {
      id: "app-" + Date.now(),
      title,
      category,
      description,
      descriptionEn: description,
      url,
      imageUrl: imageUrl || getFaviconUrl(url, 128) || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      logoUrl: logoUrl,
      tags,
      githubUrl,
      views: 1,
      likes: 0,
      featured: document.getElementById("app-featured-input") ? document.getElementById("app-featured-input").checked : false,
      isTesting: document.getElementById("app-testing-input") ? document.getElementById("app-testing-input").checked : false,
      createdAt: new Date().toISOString().split("T")[0]
    };

    appsData.unshift(newApp);
    saveAppsData();
    updateStats();
    renderApps();

    addAppForm.reset();
    const appUrlPreview = document.getElementById("app-url-logo-preview");
    if (appUrlPreview) appUrlPreview.style.display = "none";
    closeModal(addAppModal);
    showToast(currentLang === 'km' ? "បានបន្ថែម Web App ថ្មីជោគជ័យ!" : "Web App added successfully!");
    });
  }

  // Contact Form Submit
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.reset();
      closeModal(contactModal);
      showToast(currentLang === 'km' ? "សាររបស់អ្នកត្រូវបានផ្ញើជោគជ័យ! អរគុណសម្រាប់ការទាក់ទងមកកាន់យើងខ្ញុំ।" : "Message sent successfully! Thank you.");
    });
  }

  // Reset Data
  if (footerResetData) {
    footerResetData.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm(currentLang === 'km' ? "តើអ្នកពិតជាចង់កំណត់ទិន្នន័យដើមឡើងវិញ (Reset Default Apps) មែនទេ?" : "Reset to default demo data?")) {
        appsData = [...DEFAULT_APPS];
        saveAppsData();
        updateStats();
        renderApps();
        showToast("Reset demo data complete.");
      }
    });
  }
}

// --- Handle Like ---
function handleLikeApp(id) {
  const app = appsData.find(a => a.id === id);
  if (app) {
    app.likes += 1;
    saveAppsData();
    renderApps();
    showToast(currentLang === 'km' ? `អ្នកបានចូលចិត្ត "${app.title}"` : `Liked "${app.title}"`);
  }
}

// --- Stats Counter Update ---
function updateStats() {
  if (statTotalApps) {
    statTotalApps.textContent = appsData.length;
  }
  const statViews = document.getElementById("stat-total-views");
  if (statViews) {
    let totalViews = appsData.reduce((sum, app) => sum + (app.views || 0), 0);
    statViews.textContent = totalViews >= 1000 ? (totalViews / 1000).toFixed(1) + 'K' : totalViews;
  }
  const statCategories = document.getElementById("stat-categories");
  if (statCategories) {
    let uniqueCategories = new Set(appsData.map(app => app.category));
    statCategories.textContent = uniqueCategories.size;
  }
}

// --- Language Switcher Logic ---
function updateLanguage() {
  langText.textContent = currentLang === "km" ? "ខ្មែរ / EN" : "English / KM";
  
  const dict = TRANSLATIONS[currentLang];
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  renderCategories();
  renderApps();
  renderManagerCategories();
  renderManagerTable();
}

// --- Toast Notification System ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i data-lucide="check-circle" style="color: var(--primary-cyan);"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Interactive Futuristic Canvas Particles Background ---
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let particles = [];
  const particleCount = 45;
  const maxDistance = 140;

  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f2fe' : '#9d4edd';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          this.x += dx * 0.01;
          this.y += dy * 0.01;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / maxDistance) * 0.25;
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}
