export const BUSINESS = {
  name: "AllPro Exteriors",
  phone: "(403) 888-9458",
  phoneHref: "tel:4038889458",
  email: "info@allproexteriors.ca",
  city: "Calgary",
  province: "Alberta",
  country: "Canada",
  postalCode: "T2P 0A1",
  rating: 5.0,
  reviewCount: 13,
  hours: "Open 24 Hours",
  tagline: "Calgary's Trusted Window & Exterior Cleaning Pros",
  description:
    "5-star rated window cleaning, gutter cleaning, and pressure washing services for homes and businesses across Calgary.",
  googleReviewUrl: "https://www.google.com/search?q=AllPro+Exteriors+Calgary&ludocid=#lrd=,1,",
  googleMapsUrl: "https://www.google.com/maps/search/AllPro+Exteriors+Calgary",
};

export const SERVICES = [
  {
    id: "interior-window",
    title: "Interior Window Cleaning",
    icon: "Home",
    description:
      "Crystal-clear interior windows cleaned with professional solutions — no streaks, no residue, just perfect clarity inside your home or business.",
    cta: "Get a Quote",
  },
  {
    id: "exterior-window",
    title: "Exterior Window Cleaning",
    icon: "Sun",
    description:
      "We remove grime, hard water deposits, and environmental buildup from every exterior pane — leaving windows gleaming from the outside in.",
    cta: "Get a Quote",
  },
  {
    id: "glass-mirror",
    title: "Glass & Mirror Cleaning",
    icon: "Sparkles",
    description:
      "Frameless glass, shower enclosures, decorative mirrors — we treat every glass surface with specialized care for a flawless, smear-free finish.",
    cta: "Get a Quote",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    icon: "Droplets",
    description:
      "Clogged gutters cause costly water damage. We clear debris, flush downspouts, and inspect for issues — protecting your home year-round.",
    cta: "Get a Quote",
  },
];

export const WHY_CHOOSE = [
  {
    icon: "MapPin",
    title: "Locally Trusted in Calgary",
    description:
      "We're your neighbours — a Calgary-based team that understands local weather, homes, and what it takes to keep exteriors looking their best.",
  },
  {
    icon: "Star",
    title: "5-Star Rated Service",
    description:
      "Every visit ends with a smile. Our 5.0 Google rating reflects our commitment to quality, punctuality, and results you can see.",
  },
  {
    icon: "CheckCircle",
    title: "Streak-Free Results",
    description:
      "We use professional-grade squeegees, purified water systems, and eco-safe solutions for a perfectly clear, streak-free finish every time.",
  },
  {
    icon: "MessageCircle",
    title: "Reliable Communication",
    description:
      "We confirm appointments, show up on time, and keep you updated. No ghosting, no surprises — just dependable, professional service.",
  },
  {
    icon: "Shield",
    title: "Careful Around Your Property",
    description:
      "We treat your home like our own. Boots off at the door, furniture moved carefully, and every surface protected during our work.",
  },
  {
    icon: "Clock",
    title: "Available 24 Hours",
    description:
      "Need a quote at midnight or an early-morning clean before an event? We're always available — because your schedule comes first.",
  },
];

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const past = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  if (weeks < 5) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export const REVIEWS = [
  {
    name: "Arthur Spark",
    rating: 5,
    text: "Did an amazing job on my windows would definitely recommend!",
    date: "2026-06-07",
  },
  {
    name: "Cam Negrich",
    rating: 5,
    text: "AllPro Exteriors did an amazing job cleaning the windows on our house! Not a streak to be found! The price was extremely fair and actually less expensive than all of the other quotes we received! They performed the cleaning very quickly as well. Highly recommend!",
    date: "2026-06-05",
  },
  {
    name: "Kelly Negrich",
    rating: 5,
    text: "We used AllPro for our windows and we were impressed with the work done! It is clear that there is a level of pride in the work and customer service.",
    date: "2026-06-05",
  },
  {
    name: "Robert Craig",
    rating: 5,
    text: "Josh was very conscious of his work, job was completed and cleaned up with great attention to detail. Would definitely recommend him to anyone. Nice to see someone with the work ethic he demonstrated.",
    date: "2026-06-01",
  },
  {
    name: "Melina Lamb",
    rating: 5,
    text: "Josh was very efficient and prompt. He was very meticulous with the window washing. I would definitely recommend him.",
    date: "2026-05-25",
  },
  {
    name: "Julian Perez",
    rating: 5,
    text: "Did a great job on my house, very professional, definitely calling them back soon!",
    date: "2026-05-18",
  },
  {
    name: "Gillian Clark",
    rating: 5,
    text: "Josh did a wonderful job with my windows today. He took a lot of care and they are now sparkling. Josh is very polite and communicates well. I highly recommend getting AllPro Exteriors to clean your windows.",
    date: "2026-05-08",
  },
  {
    name: "Serena Negrich",
    rating: 5,
    text: "We had a great experience with AllPro Exteriors! He cleaned our windows and was very efficient with time! Great price for a great clean!",
    date: "2026-05-08",
  },
  {
    name: "Garreth Rayner",
    rating: 5,
    text: "Very professional, done within a timely manner and made my windows look like a new pane of glass 🤩. Would highly recommend.",
    date: "2026-05-08",
  },
  {
    name: "Arman Sidhu",
    rating: 5,
    text: "All Pro Exteriors did a great job on my interior and exterior windows. Super chill guys, showed up on time, worked clean, and my windows look crystal clear. Definitely recommend them.",
    date: "2026-05-08",
  },
];

export const FAQS = [
  {
    q: "Do you clean both interior and exterior windows?",
    a: "Yes! We offer full interior and exterior window cleaning services for both residential and commercial properties. You can book either service individually or as a combined package — just let us know what you need.",
  },
  {
    q: "Do you offer gutter cleaning?",
    a: "Absolutely. Our gutter cleaning service includes clearing all debris, flushing downspouts to ensure proper flow, and a basic visual inspection. We recommend gutter cleaning at least twice a year — spring and fall — especially in Calgary's climate.",
  },
  {
    q: "Are you available for commercial jobs?",
    a: "Definitely. We work with commercial property owners, building managers, and businesses throughout Calgary. Whether it's storefront windows, office glass, or large exterior surfaces, we can accommodate commercial-scale projects.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Usually within the hour. Fill out our quote form or call us directly at (403) 888-9458. Since we're available 24 hours a day, you can reach us any time and we'll respond quickly with a clear, no-obligation estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Calgary and its surrounding communities including Airdrie, Cochrane, Chestermere, Okotoks, and more. Not sure if we cover your area? Just call or send us a message — we'll let you know right away.",
  },
];

export const SERVICE_AREAS = [
  "Calgary (Primary)",
  "NW Calgary",
  "SW Calgary",
  "NE Calgary",
  "SE Calgary",
  "Nanaimo",
  "Salmon Arm",
];
