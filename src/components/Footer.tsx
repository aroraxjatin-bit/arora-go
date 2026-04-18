import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/aroragologo.png";
import banner from "@/assets/arorago-banner.png";
import { PHONE, PHONE_TEL, EMAIL } from "@/data/packages";

export function Footer() {
  return (
    <footer className="bg-deep-green text-white">
      {/* Banner */}
      <div className="w-full">
        <img
          src={banner}
          alt="AroraGo — From Here to Anywhere"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <p className="text-saffron text-sm font-semibold uppercase tracking-wider">
              From Here to Anywhere
            </p>
            <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-md">
              Expert-guided pilgrimages to the sacred Himalayas by private cab. Trusted experience taking devotees from Delhi to the holiest dhams of India.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="size-10 rounded-full bg-white/10 hover:bg-saffron flex items-center justify-center transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-saffron">Packages</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/char-dham" className="hover:text-saffron">Char Dham Yatra</Link></li>
              <li><Link to="/do-dham-kedarnath-badrinath" className="hover:text-saffron">Do Dham (KB)</Link></li>
              <li><Link to="/do-dham-yamunotri-gangotri" className="hover:text-saffron">Do Dham (YG)</Link></li>
              <li><Link to="/kedarnath" className="hover:text-saffron">Kedarnath</Link></li>
              <li><Link to="/badrinath" className="hover:text-saffron">Badrinath</Link></li>
              <li><Link to="/gangotri" className="hover:text-saffron">Gangotri</Link></li>
              <li><Link to="/yamunotri" className="hover:text-saffron">Yamunotri</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-saffron">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 text-saffron shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-saffron">📞 {PHONE}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-saffron shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-saffron">📧 {EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-saffron shrink-0" />
                <span>📍 Delhi, India</span>
              </li>
            </ul>

            <h4 className="text-base font-bold mt-6 mb-3 text-saffron">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-saffron"
              />
              <button className="px-4 py-2 rounded-lg gradient-saffron font-semibold text-sm">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} AroraGo. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-saffron">Privacy Policy</a>
            <a href="#" className="hover:text-saffron">Terms</a>
            <a href="#" className="hover:text-saffron">Cancellation Policy</a>
            <a href="#" className="hover:text-saffron">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
