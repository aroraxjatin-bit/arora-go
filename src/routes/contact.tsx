import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PHONE, PHONE_TEL, WHATSAPP, EMAIL } from "@/data/packages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AroraGo — Book Your Himalayan Yatra | +91-93116-02436" },
      { name: "description", content: "Get in touch with AroraGo for personalised Char Dham, Do Dham and Single Dham Yatra packages by private cab from Delhi. Email info@arora.in." },
      { property: "og:title", content: "Contact AroraGo" },
      { property: "og:description", content: "From Here to Anywhere — Talk to our travel experts today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background pb-24 md:pb-16">
      <section className="bg-deep-green text-white py-12 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider">
            🙏 We're here to help
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            🙏 Get in Touch with AroraGo
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            From Here to Anywhere — Let us craft your perfect Himalayan yatra.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <LeadForm title="Tell us about your yatra plans" />
        </div>

        <aside className="space-y-4">
          <ContactCard
            icon={<Phone className="size-5" />}
            title="Call us"
            primary={`📞 ${PHONE}`}
            href={`tel:${PHONE_TEL}`}
            cta="Tap to Call"
          />
          <ContactCard
            icon={<MessageCircle className="size-5" />}
            title="WhatsApp"
            primary="Chat instantly"
            href={WHATSAPP}
            cta="Open WhatsApp"
            external
            green
          />
          <ContactCard
            icon={<MapPin className="size-5" />}
            title="Visit us"
            primary="📍 Delhi, India"
          />
          <ContactCard
            icon={<Mail className="size-5" />}
            title="Email"
            primary={`📧 ${EMAIL}`}
            href={`mailto:${EMAIL}`}
            cta="Send Email"
          />

          <div className="bg-accent rounded-3xl p-5 text-center">
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="mt-2 text-sm text-deep-green font-semibold">
              Trusted by 15,000+ pilgrims since 2009
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

function ContactCard({
  icon, title, primary, href, cta, external, green,
}: {
  icon: React.ReactNode; title: string; primary: string;
  href?: string; cta?: string; external?: boolean; green?: boolean;
}) {
  return (
    <div className="bg-card rounded-2xl shadow-card p-5 border border-border">
      <div className="flex items-center gap-3">
        <div className={`size-10 rounded-xl ${green ? "bg-deep-green text-white" : "bg-saffron/15 text-saffron"} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
          <div className="text-sm font-bold text-deep-green">{primary}</div>
        </div>
      </div>
      {href && cta && (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`mt-3 inline-flex items-center justify-center w-full py-2.5 rounded-full font-semibold text-sm ${
            green ? "bg-deep-green text-white" : "gradient-saffron text-white shadow-saffron"
          }`}
        >
          {cta}
        </a>
      )}
    </div>
  );
}
