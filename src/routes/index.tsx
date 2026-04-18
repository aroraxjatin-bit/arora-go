import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mountain, Shield, Users, Leaf, FileCheck, RefreshCw, Award, Camera } from "lucide-react";
import heroImage from "@/assets/hero-himalayas.jpg";
import { packages, type Category, WHATSAPP } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AroraGo — Himalayan Pilgrimages by Private Cab from Delhi | Char Dham, Kedarnath, Badrinath" },
      { name: "description", content: "Book expert-guided Char Dham, Do Dham and Single Dham Yatras by private cab from Delhi. Curated packages from ₹7,999. 15,000+ happy pilgrims." },
      { property: "og:title", content: "AroraGo — Sacred Himalayan Yatras" },
      { property: "og:description", content: "From Here to Anywhere — Expert-guided pilgrimages from Delhi by private cab." },
    ],
  }),
  component: HomePage,
});

type Filter = "all" | Category;

function HomePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = filter === "all" ? packages : packages.filter((p) => p.category === filter);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sacred Himalayan peaks at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-green/30 via-deep-green/40 to-deep-green/85" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-wider">
              🙏 From Here to Anywhere
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              🕉️ Explore the Sacred Himalayas
            </h1>
            <p className="mt-5 text-base md:text-xl text-white/90 max-w-2xl leading-relaxed">
              From Here to Anywhere — Expert-guided pilgrimages from Delhi by private cab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-saffron text-white font-bold shadow-saffron hover:scale-105 transition-transform"
              >
                Explore Packages <ArrowRight className="size-5" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-deep-green font-bold shadow-card hover:bg-accent transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Curve transition */}
        <svg className="absolute -bottom-px left-0 right-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,32 C480,96 960,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* STATS */}
      <section className="relative -mt-2 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="bg-card rounded-3xl shadow-elevated p-5 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-12 md:-mt-16">
            <Stat value="15,000+" label="Happy Pilgrims" />
            <Stat value="1,000+" label="Yatras Completed" />
            <Stat value="15+" label="Expert Guides" />
            <Stat value="100%" label="Safe & Trusted" />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-saffron font-semibold uppercase tracking-wider text-xs">🛕 Sacred Journeys</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-deep-green">Choose Your Yatra</h2>
          <p className="mt-3 text-muted-foreground">
            Hand-crafted packages from Delhi covering all four sacred dhams of Uttarakhand.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { v: "all", label: "ALL" },
            { v: "char-dham", label: "CHAR DHAM" },
            { v: "do-dham", label: "DO DHAM" },
            { v: "single-dham", label: "SINGLE DHAM" },
          ].map((t) => (
            <button
              key={t.v}
              onClick={() => setFilter(t.v as Filter)}
              className={`px-4 md:px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                filter === t.v
                  ? "gradient-saffron text-white shadow-saffron"
                  : "bg-card text-deep-green border border-border hover:border-saffron"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((p) => <PackageCard key={p.slug} pkg={p} />)}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-accent/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-saffron font-semibold uppercase tracking-wider text-xs">✨ Why Arora Go</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-deep-green">Trusted by 15,000+ Pilgrims</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need for a safe, soulful and seamless yatra experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Mountain, emoji: "🏔️", title: "Local Experts" },
              { icon: Shield, emoji: "✅", title: "Safety First" },
              { icon: Users, emoji: "👥", title: "Small Groups" },
              { icon: Leaf, emoji: "🌱", title: "Eco-Friendly" },
              { icon: FileCheck, emoji: "📋", title: "Permits Handled" },
              { icon: RefreshCw, emoji: "🔄", title: "Flexible Booking" },
              { icon: Award, emoji: "🏅", title: "Certified Guides" },
              { icon: Camera, emoji: "📸", title: "Photography Help" },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-5 md:p-6 shadow-card hover:shadow-elevated transition-shadow text-center group">
                <div className="size-14 mx-auto rounded-2xl gradient-saffron flex items-center justify-center text-2xl shadow-saffron group-hover:scale-110 transition-transform">
                  {f.emoji}
                </div>
                <h3 className="mt-3 text-sm md:text-base font-bold text-deep-green">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <LeadForm />
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-4xl font-bold text-saffron leading-none">{value}</div>
      <div className="mt-1.5 text-[11px] md:text-sm text-deep-green font-semibold uppercase tracking-wide">{label}</div>
    </div>
  );
}
