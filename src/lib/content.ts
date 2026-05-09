export const siteConfig = {
  name: "Murry's Maid Service",
  tagline: "Sparkling homes, by Sarah & Hannah",
  phone: "(314) 333-9958",
  phoneHref: "tel:+13143339958",
  email: "murrysmaidservice@outlook.com",
  facebook: "https://www.facebook.com/MurrysMaidService",
  address: "Greater St. Louis & Metro East",
  hours: {
    weekday: "Mon — Sat · 8am to 6pm",
    weekend: "Sundays by appointment",
  },
};

export const heroWords = [
  "sparkle.",
  "glow.",
  "sing.",
  "breathe.",
  "shine.",
  "smile.",
];

export const heroStats = [
  { value: "842", label: "FB followers" },
  { value: "5.0", label: "Avg rating" },
  { value: "2", label: "Sister-owned" },
];

export const ribbonItems = [
  "Sparkling Bathrooms",
  "Polished Kitchens",
  "Family-Owned",
  "St. Louis & Metro East",
  "Move-In Ready",
  "Top to Bottom",
];

export const services = [
  {
    num: "01",
    title: "Standard Clean",
    desc: "The weekly tune-up. Bathrooms, kitchen, dust, vacuum, mop, made-up beds.",
    items: [
      "All bathrooms scrubbed",
      "Kitchen surfaces & appliances",
      "Dust, vacuum, mop",
      "Trash & linens",
    ],
    note: "a fresh reset!",
    bg: "bg-cream",
  },
  {
    num: "02",
    title: "Deep Clean",
    desc: "The full reset. We get the corners that 'Standard' politely walks past.",
    items: [
      "Baseboards & trim",
      "Inside oven & fridge",
      "Vents, fans & fixtures",
      "Cabinet exteriors",
    ],
    note: "our favorite!",
    bg: "bg-pale-leaf",
  },
  {
    num: "03",
    title: "Move In / Out",
    desc: "Hand the keys over with a home that smells & feels brand new.",
    items: [
      "Inside all cabinets & drawers",
      "Inside all appliances",
      "Walls spot-cleaned",
      "Every nook, every corner",
    ],
    note: "keys-ready \u273F",
    bg: "bg-[#fde8d4]",
  },
  {
    num: "04",
    title: "Recurring Visits",
    desc: "Weekly, bi-weekly, or monthly — same trusted sister, every time.",
    items: [
      "10% off every visit",
      "Same cleaner each time",
      "Locked-in pricing",
      "Cancel anytime",
    ],
    note: "most loved!",
    bg: "bg-cream",
  },
  {
    num: "05",
    title: "Airbnb Turnover",
    desc: "Photo-ready resets between guests. Linens, restock, the whole deal.",
    items: [
      "Linen & towel laundry",
      "Photo-ready staging",
      "Restock essentials",
      "Same-day turnover",
    ],
    note: "5-star resets",
    bg: "bg-cream",
  },
  {
    num: "06",
    title: "Post-Construction",
    desc: "Fine-dust removal & the final polish pass that finishes the job.",
    items: [
      "Fine drywall dust",
      "Window & track cleaning",
      "Floor protection & polish",
      "Punch-list ready",
    ],
    note: "contractors love us",
    bg: "bg-[#fef3c8]",
  },
];

export const reviews = [
  {
    text: "So fresh and so clean, clean! Sarah did an AMAZING job on my home. She was super timely, reliable, and really did clean top to bottom. 10/10 recommend!",
    by: "Ashley K.",
    source: "Verified \u00B7 Facebook",
    short: false,
  },
  {
    text: "Sarah did a fantastic job at my house! She made sure to use safe products on my floors for my 7-month-old baby. Can\u2019t wait to have her back!!!",
    by: "Ashley C.",
    source: "Verified \u00B7 Facebook",
    short: false,
  },
  {
    text: "top notch detailed cleaning at an affordable price \u2726",
    by: "Joe S.",
    source: "Verified \u00B7 Facebook",
    short: true,
  },
  {
    text: "I cannot say enough good things. Outstanding service! The kind that makes you brag to the neighbors.",
    by: "Tiffany B.",
    source: "Verified \u00B7 Facebook",
    short: false,
  },
  {
    text: "\u201Cthe kind of clean you can feel.\u201D",
    by: "— a recent client",
    source: "St. Louis, MO",
    short: true,
  },
  {
    text: "Sweet, professional, on time. They got behind the toilet — like really behind it. I cried a little.",
    by: "Repeat client",
    source: "Webster Groves",
    short: false,
  },
];

export const galleryImages = [
  { src: "/images/livingroom.jpg", caption: "living room glow-up" },
  { src: "/images/bedroom.jpg", caption: "just-made bed \u273F" },
  { src: "/images/cabinet.jpg", caption: "cabinet refresh" },
  { src: "/images/bathtub.jpg", caption: "tub, scrubbed" },
  { src: "/images/sarah.jpg", caption: "— Sarah on the job" },
];

export const counters = [
  { value: 842, label: "following along", sub: "on Facebook" },
  { value: 500, suffix: "+", label: "happy homes", sub: "since day one" },
  {
    value: 100,
    suffix: "%",
    label: "family-owned",
    sub: "two sisters, one promise",
  },
  {
    value: 5.0,
    fixed: true,
    label: "average review",
    sub: "verified facebook",
  },
];

export const serviceAreas = {
  missouri: [
    "St. Louis City & County",
    "Kirkwood",
    "Webster Groves",
    "Chesterfield",
    "Florissant",
    "Arnold",
    "Wentzville",
    "St. Charles",
    "O'Fallon",
    "Wildwood",
    "Creve Coeur",
    "Maryland Heights",
    "Ballwin \u00B7 Eureka",
    "Jefferson Co.",
    "Franklin Co.",
  ],
  illinois: [
    "Belleville",
    "Columbia",
    "Fairview Heights",
    "O'Fallon, IL",
    "Waterloo",
    "Edwardsville",
    "East St. Louis",
    "Alton",
    "Granite City",
    "Millstadt",
    "Mascoutah",
    "Red Bud",
    "Monroe Co.",
    "St. Clair Co.",
  ],
};

export const servicePackages = [
  { value: "standard", name: "Standard", desc: "weekly tune-up" },
  { value: "deep", name: "Deep Clean", desc: "full reset" },
  { value: "movein", name: "Move In/Out", desc: "keys-ready" },
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Before / After" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Service Area" },
];

export const footerLinks = {
  visit: [
    { href: "#services", label: "Services" },
    { href: "#story", label: "Our Story" },
    { href: "#reviews", label: "Reviews" },
    { href: "#area", label: "Service Area" },
  ],
  connect: [
    { href: "tel:+13143339958", label: "(314) 333-9958" },
    { href: "mailto:murrysmaidservice@outlook.com", label: "Email us" },
    {
      href: "https://www.facebook.com/MurrysMaidService",
      label: "Facebook",
      external: true,
    },
  ],
};
