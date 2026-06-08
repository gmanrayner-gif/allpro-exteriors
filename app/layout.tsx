import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "AllPro Exteriors | Window Cleaning & Exterior Cleaning Calgary",
    template: "%s | AllPro Exteriors Calgary",
  },
  description:
    "Calgary's top-rated window cleaning, gutter cleaning, and pressure washing company. 5-star rated, available 24/7. Call (403) 888-9458 for a free quote.",
  keywords: [
    "window cleaning Calgary",
    "exterior cleaning Calgary",
    "gutter cleaning Calgary",
    "pressure washing Calgary",
    "power washing Calgary",
    "window washing Calgary",
    "residential window cleaning Calgary",
    "commercial window cleaning Calgary",
    "AllPro Exteriors",
    "Calgary cleaning services",
  ],
  authors: [{ name: "AllPro Exteriors" }],
  creator: "AllPro Exteriors",
  publisher: "AllPro Exteriors",
  metadataBase: new URL("https://allproexteriors.ca"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://allproexteriors.ca",
    siteName: "AllPro Exteriors",
    title: "AllPro Exteriors | Window Cleaning & Exterior Cleaning Calgary",
    description:
      "5-star rated window cleaning, gutter cleaning, and pressure washing in Calgary. Available 24 hours. Get your free quote today!",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AllPro Exteriors - Calgary Exterior Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllPro Exteriors | Window Cleaning Calgary",
    description: "5-star exterior cleaning in Calgary. Window cleaning, gutters, pressure washing. Call (403) 888-9458.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  viewport: { width: "device-width", initialScale: 1 },
  themeColor: "#0ea5e9",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allproexteriors.ca",
  name: BUSINESS.name,
  description:
    "Professional window cleaning, gutter cleaning, and pressure washing services in Calgary, Alberta.",
  url: "https://allproexteriors.ca",
  telephone: BUSINESS.phoneHref.replace("tel:", "+1"),
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.province,
    addressCountry: BUSINESS.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  image: "https://allproexteriors.ca/og-image.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Airdrie" },
    { "@type": "City", name: "Cochrane" },
    { "@type": "City", name: "Chestermere" },
    { "@type": "City", name: "Okotoks" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Glass & Mirror Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
