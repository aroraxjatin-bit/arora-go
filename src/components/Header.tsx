import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/aroragologo.png";
import { WHATSAPP } from "@/data/packages";

const nav = [
  { to: "/", label: "Home" },
  { to: "/char-dham", label: "Char Dham" },
];

const doDham = [
  { to: "/do-dham-kedarnath-badrinath", label: "Kedarnath + Badrinath" },
  { to: "/do-dham-yamunotri-gangotri", label: "Yamunotri + Gangotri" },
];

const singleDham = [
  { to: "/kedarnath", label: "Kedarnath" },
  { to: "/badrinath", label: "Badrinath" },
  { to: "/gangotri", label: "Gangotri" },
  { to: "/yamunotri", label: "Yamunotri" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [doOpen, setDoOpen] = useState(false);
  const [singleOpen, setSingleOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-lg border-b border-border shadow-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            aria-label="AroraGo — From Here to Anywhere"
            className="flex items-center group"
            onClick={() => setOpen(false)}
          >
            <div className="size-12 md:size-14 rounded-xl bg-white shadow-card border border-border overflow-hidden flex items-center justify-center p-1">
              <img src={logo} alt="AroraGo" className="max-w-full max-h-full object-contain" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-semibold text-deep-green hover:text-saffron rounded-lg hover:bg-accent transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm font-semibold text-saffron rounded-lg bg-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <DesktopDropdown label="Do Dham" items={doDham} />
            <DesktopDropdown label="Single Dham" items={singleDham} />
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-deep-green hover:text-saffron rounded-lg hover:bg-accent transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-saffron rounded-lg bg-accent" }}
            >
              Contact
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 text-sm font-bold text-white gradient-saffron rounded-full shadow-saffron hover:scale-105 transition-transform"
            >
              Book Now
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-deep-green rounded-lg hover:bg-accent"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-deep-green hover:bg-accent"
                activeProps={{ className: "block px-3 py-3 rounded-lg text-base font-semibold text-saffron bg-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}

            <MobileGroup
              label="Do Dham"
              open={doOpen}
              setOpen={setDoOpen}
              items={doDham}
              closeMenu={() => setOpen(false)}
            />
            <MobileGroup
              label="Single Dham"
              open={singleOpen}
              setOpen={setSingleOpen}
              items={singleDham}
              closeMenu={() => setOpen(false)}
            />

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-semibold text-deep-green hover:bg-accent"
            >
              Contact
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 px-5 py-3 text-base font-bold text-white gradient-saffron rounded-full shadow-saffron"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-sm font-semibold text-deep-green hover:text-saffron rounded-lg hover:bg-accent transition-colors flex items-center gap-1">
        {label}
        <ChevronDown className="size-4" />
      </button>
      <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity">
        <div className="min-w-[240px] bg-white rounded-2xl shadow-elevated border border-border overflow-hidden">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block px-4 py-3 text-sm font-medium text-deep-green hover:bg-accent hover:text-saffron"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  open,
  setOpen,
  items,
  closeMenu,
}: {
  label: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  items: { to: string; label: string }[];
  closeMenu: () => void;
}) {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-deep-green hover:bg-accent"
      >
        {label}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-sm text-deep-green hover:bg-accent hover:text-saffron"
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
