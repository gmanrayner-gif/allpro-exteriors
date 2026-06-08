import { Phone, MapPin, Clock, Droplets, Star } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/content";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Get a Quote", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy-950 text-white"
      aria-label="Site footer"
    >
      {/* CTA Banner */}
      <div
        className="border-b border-white/8"
        style={{ background: "linear-gradient(90deg, #0b2252 0%, #0e3572 100%)" }}
      >
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-xl text-white">Ready to see a difference?</p>
            <p className="text-white/60 text-sm mt-0.5">Get your free quote today — we reply within the hour.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm active:scale-95"
              aria-label="Get a free quote from AllPro Exteriors"
            >
              Get a Free Quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/15 transition-all duration-200 text-sm active:scale-95"
              aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BUSINESS.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group" aria-label="AllPro Exteriors home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                AllPro <span className="text-sky-400">Exteriors</span>
              </span>
            </a>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Calgary's trusted exterior cleaning professionals. Window cleaning, gutter cleaning, and pressure washing done right.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/8 w-fit">
              <div className="flex gap-0.5" aria-label="5 star Google rating" role="img">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">5.0 on Google</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-sky-400 text-sm transition-colors duration-200"
                    aria-label={`Learn about ${s.title}`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-sky-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-3 text-white/60 hover:text-sky-400 transition-colors duration-200 group"
                aria-label={`Call AllPro Exteriors at ${BUSINESS.phone}`}
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-sky-400" aria-hidden="true" />
                <div>
                  <div className="text-white font-semibold text-sm">{BUSINESS.phone}</div>
                  <div className="text-xs text-white/40">Call or text anytime</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-white font-semibold text-sm">{BUSINESS.city}, {BUSINESS.province}</div>
                  <div className="text-xs text-white/40">Serving Calgary & area</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-white font-semibold text-sm">{BUSINESS.hours}</div>
                  <div className="text-xs text-white/40">7 days a week</div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/40 text-xs">
            © {year} {BUSINESS.name}. All rights reserved. {BUSINESS.city}, {BUSINESS.province}.
          </p>
          <p className="text-white/30 text-xs">
            Window Cleaning · Gutter Cleaning · Pressure Washing · Calgary
          </p>
        </div>
      </div>
    </footer>
  );
}
