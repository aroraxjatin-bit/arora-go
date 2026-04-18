import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Clock, MapPin, Users, Star, ChevronDown, X, MessageCircle } from "lucide-react";
import type { PackageData } from "@/data/packages";
import { PHONE_TEL, WHATSAPP } from "@/data/packages";

type Tab = "itinerary" | "photos" | "inclusions" | "exclusions";

export function PackageDetail({ pkg }: { pkg: PackageData }) {
  const [tab, setTab] = useState<Tab>("itinerary");
  const [openDay, setOpenDay] = useState<number>(1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-background pb-32 md:pb-12">
      {/* HERO */}
      <div className="relative h-[55vh] md:h-[70vh] min-h-[380px] w-full overflow-hidden">
        <img src={pkg.heroImage} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />

        <Link
          to="/"
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur text-deep-green font-semibold text-sm shadow-card hover:bg-white"
        >
          <ArrowLeft className="size-4" /> Back
        </Link>

        {pkg.popular && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full gradient-saffron text-white text-xs font-bold shadow-saffron">
            🔥 Most Popular
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-semibold uppercase tracking-wider mb-3">
              {pkg.category.replace("-", " ")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="mr-2">{pkg.emoji}</span>{pkg.name}
            </h1>
            {pkg.subtitle && <p className="mt-2 text-base md:text-lg text-white/90 max-w-3xl">{pkg.subtitle}</p>}
          </div>
        </div>
      </div>

      {/* OVERVIEW STRIP */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-6 md:-mt-10 relative z-10">
        <div className="bg-card rounded-2xl md:rounded-3xl shadow-elevated p-4 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          <Stat icon={<Clock className="size-5" />} label="Duration" value={`${pkg.duration} / ${pkg.nights}`} />
          <Stat icon={<MapPin className="size-5" />} label="Start Point" value={pkg.startPoint} />
          <Stat icon={<Users className="size-5" />} label="Group Size" value={pkg.groupSize} />
          <Stat icon={<Star className="size-5 fill-saffron text-saffron" />} label="Rating" value={`${pkg.rating} / 5`} />
          <div className="flex flex-col items-start col-span-2 md:col-span-1 md:items-end md:text-right">
            <div className="text-xs line-through text-muted-foreground">
              ₹{pkg.originalPrice.toLocaleString("en-IN")}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-saffron leading-none">
              ₹{pkg.price.toLocaleString("en-IN")}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">per person • {pkg.discount}% OFF</div>
          </div>
        </div>
      </div>

      {/* ROUTE TIMELINE */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-deep-green mb-4">🗺️ Yatra Route</h2>
        <div className="bg-card rounded-2xl shadow-card p-5 overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-1 min-w-max pb-2">
            {pkg.routeDots.map((stop, i) => (
              <div key={i} className="flex items-start">
                <div className="flex flex-col items-center w-20 md:w-24">
                  <div className={`size-4 md:size-5 rounded-full border-2 ${i === 0 || i === pkg.routeDots.length - 1 ? "bg-saffron border-saffron shadow-saffron" : "bg-white border-saffron"}`} />
                  <div className="mt-2 text-[11px] md:text-xs font-semibold text-deep-green text-center leading-tight px-1">
                    {stop}
                  </div>
                </div>
                {i < pkg.routeDots.length - 1 && (
                  <div className="h-0.5 w-8 md:w-10 bg-saffron/40 mt-2 md:mt-2.5 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          {/* TABS */}
          <div className="sticky top-16 md:top-20 z-20 bg-background/95 backdrop-blur -mx-4 px-4 py-3 border-b border-border">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <TabBtn active={tab === "itinerary"} onClick={() => setTab("itinerary")} label="🗓️ Itinerary" />
              <TabBtn active={tab === "photos"} onClick={() => setTab("photos")} label="📸 Photos" />
              <TabBtn active={tab === "inclusions"} onClick={() => setTab("inclusions")} label="✅ Inclusions" />
              <TabBtn active={tab === "exclusions"} onClick={() => setTab("exclusions")} label="❌ Exclusions" />
            </div>
          </div>

          <div className="mt-6">
            {tab === "itinerary" && (
              <div className="space-y-3">
                {pkg.itinerary.map((d) => {
                  const open = openDay === d.day;
                  return (
                    <div
                      key={d.day}
                      className={`bg-card rounded-2xl shadow-card border ${open ? "border-saffron" : "border-border"} overflow-hidden transition-all`}
                    >
                      <button
                        onClick={() => setOpenDay(open ? -1 : d.day)}
                        className="w-full text-left px-4 py-4 md:px-5 md:py-5 flex items-start gap-3"
                      >
                        <div className="px-3 py-1 rounded-full gradient-saffron text-white text-xs font-bold shrink-0">
                          Day {d.day}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-base md:text-lg font-bold text-deep-green leading-tight">
                                <span className="mr-1.5">{d.icon}</span>{d.title}
                              </h3>
                              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                <span className="font-semibold">{d.distance}</span>
                                <span>{d.meals}</span>
                              </div>
                            </div>
                            <ChevronDown className={`size-5 text-saffron shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                          </div>
                        </div>
                      </button>
                      {open && (
                        <div className="px-4 pb-5 md:px-5 md:pb-6 pl-[68px] md:pl-[88px] -mt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-sm text-foreground/80 leading-relaxed">{d.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {d.highlights.map((h) => (
                              <span
                                key={h}
                                className="px-3 py-1 rounded-full border border-saffron text-saffron text-xs font-semibold bg-saffron/5"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide -mx-1 px-1">
                            {pkg.gallery.slice(0, 4).map((src, i) => (
                              <button
                                key={i}
                                onClick={() => setLightbox(src)}
                                className="shrink-0 w-40 h-28 md:w-48 md:h-32 rounded-xl overflow-hidden shadow-card"
                              >
                                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {tab === "photos" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {pkg.gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(src)}
                    className={`relative overflow-hidden rounded-2xl shadow-card group ${i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}
                  >
                    <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </button>
                ))}
              </div>
            )}

            {tab === "inclusions" && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-4 bg-card rounded-2xl shadow-card border border-border">
                    <div className="size-7 rounded-full bg-success/15 text-success flex items-center justify-center text-base shrink-0">✓</div>
                    <span className="text-sm text-deep-green font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {tab === "exclusions" && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-4 bg-card rounded-2xl shadow-card border border-border">
                    <div className="size-7 rounded-full bg-destructive/15 text-destructive flex items-center justify-center text-base shrink-0">✕</div>
                    <span className="text-sm text-deep-green font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="bg-card rounded-3xl shadow-elevated overflow-hidden border border-border">
              <div className="gradient-saffron text-white p-5">
                <div className="text-xs uppercase tracking-wider opacity-90">Starting from</div>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-3xl font-bold">₹{pkg.price.toLocaleString("en-IN")}</span>
                  <span className="text-sm line-through opacity-80 mb-1">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="text-xs opacity-90">per person • {pkg.discount}% off • {pkg.duration}</div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <label className="text-xs font-semibold text-deep-green uppercase tracking-wide">Travel Month</label>
                  <select className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron">
                    {["May 2026", "June 2026", "July 2026", "August 2026", "September 2026", "October 2026"].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-deep-green uppercase tracking-wide">Number of People</label>
                  <select className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron">
                    {["1", "2", "3-4", "5-8", "9+"].map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3 rounded-full gradient-saffron text-white font-bold shadow-saffron hover:scale-[1.02] transition-transform"
                >
                  Book Now
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-deep-green text-white font-bold flex items-center justify-center gap-2 hover:opacity-95"
                >
                  <MessageCircle className="size-5" /> Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="block text-center text-sm text-deep-green font-semibold py-2"
                >
                  📞 Call +91-93116-02436
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white border-t border-border shadow-elevated">
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-saffron">₹{pkg.price.toLocaleString("en-IN")}</span>
              <span className="text-xs text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="text-[11px] text-muted-foreground">{pkg.duration} • per person</div>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full gradient-saffron text-white font-bold shadow-saffron"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
        >
          <button className="absolute top-4 right-4 size-10 rounded-full bg-white/20 text-white flex items-center justify-center">
            <X className="size-6" />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-xl bg-accent text-saffron flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        <div className="text-sm font-bold text-deep-green truncate">{value}</div>
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
        active
          ? "gradient-saffron text-white shadow-saffron"
          : "bg-card text-deep-green border border-border hover:border-saffron"
      }`}
    >
      {label}
    </button>
  );
}
