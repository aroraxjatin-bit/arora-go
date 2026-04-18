import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function LeadForm({ compact = false, title = "Plan Your Yatra — Get Free Itinerary" }: { compact?: boolean; title?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-3xl shadow-elevated p-8 text-center">
        <div className="size-16 mx-auto rounded-full bg-success/15 flex items-center justify-center">
          <CheckCircle2 className="size-9 text-success" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-deep-green">Thank you 🙏</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our travel expert will reach out within 2 hours with your personalised itinerary.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-3xl shadow-elevated overflow-hidden ${compact ? "" : ""}`}>
      <div className="gradient-saffron text-white px-6 py-5 flex items-center gap-3">
        <Sparkles className="size-6" />
        <div>
          <h3 className="text-lg md:text-xl font-bold leading-tight">{title}</h3>
          <p className="text-xs text-white/90">Free • No spam • Instant response</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Full Name" name="name" placeholder="Your name" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Select label="Travel Month" name="month" options={[
          "May 2026", "June 2026", "July 2026", "August 2026", "September 2026", "October 2026",
        ]} />
        <Select label="People" name="people" options={["1", "2", "3-4", "5-8", "9+"]} />
        <Select label="Package Interest" name="package" options={[
          "Char Dham", "Do Dham (KB)", "Do Dham (YG)", "Kedarnath", "Badrinath", "Gangotri", "Yamunotri",
        ]} />
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-deep-green uppercase tracking-wide">Message</label>
          <textarea
            rows={3}
            placeholder="Any special requirements?"
            className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron resize-none"
          />
        </div>
        <button
          type="submit"
          className="sm:col-span-2 w-full py-3.5 rounded-full gradient-saffron text-white font-bold shadow-saffron hover:scale-[1.02] transition-transform"
        >
          🙏 Get Free Itinerary
        </button>
      </form>
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-xs font-semibold text-deep-green uppercase tracking-wide">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold text-deep-green uppercase tracking-wide">{label}</label>
      <select
        name={name}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
