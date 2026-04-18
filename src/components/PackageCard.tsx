import { Link } from "@tanstack/react-router";
import { Clock, Star, ArrowRight } from "lucide-react";
import type { PackageData } from "@/data/packages";
import { WHATSAPP } from "@/data/packages";

export function PackageCard({ pkg }: { pkg: PackageData }) {
  return (
    <div className="group relative flex flex-col bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <Link
        to={"/$slug" as any}
        params={{ slug: pkg.slug } as any}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={pkg.cardImage}
            alt={pkg.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 gradient-overlay" />

          {pkg.popular && (
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full gradient-saffron text-white text-xs font-bold shadow-saffron">
              🔥 Most Popular
            </div>
          )}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white text-deep-green text-xs font-bold shadow-card">
            {pkg.discount}% OFF
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-deep-green text-xs font-semibold">
              <Clock className="size-3" /> {pkg.duration}
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-deep-green text-xs font-semibold">
              <Star className="size-3 fill-saffron text-saffron" /> {pkg.rating}
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <Link to={"/$slug" as any} params={{ slug: pkg.slug } as any} className="block">
          <h3 className="text-lg font-bold text-deep-green leading-snug hover:text-saffron transition-colors">
            <span className="mr-1">{pkg.emoji}</span>
            {pkg.name}
          </h3>
        </Link>
        {pkg.subtitle && (
          <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{pkg.subtitle}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-accent text-deep-green text-[11px] font-semibold">
            {pkg.duration} / {pkg.nights}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-accent text-deep-green text-[11px] font-semibold">
            From {pkg.startPoint}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            <div className="text-xs text-muted-foreground line-through">
              ₹{pkg.originalPrice.toLocaleString("en-IN")}
            </div>
            <div className="text-2xl font-bold text-saffron leading-none">
              ₹{pkg.price.toLocaleString("en-IN")}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">per person</div>
          </div>
        </div>

        <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-2.5 rounded-full gradient-saffron text-white text-sm font-bold shadow-saffron hover:scale-[1.02] transition-transform"
          >
            Book Now
          </a>
          <Link
            to={"/$slug" as any}
            params={{ slug: pkg.slug } as any}
            className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-full bg-deep-green text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
