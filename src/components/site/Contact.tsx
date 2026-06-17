import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, waLink } from "@/lib/plants";

export function Contact() {
  return (
    <section id="contact" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
              Get in touch
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Let's grow something beautiful together.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Have a question, need a recommendation, or want a custom arrangement? We're a small
              team and we read every message.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoCard icon={MapPin} title="Visit nursery" lines={["Whitefield, Bengaluru", "Karnataka, India"]} />
              <InfoCard icon={Clock} title="Open hours" lines={["Mon – Sat · 9am – 7pm", "Sunday · 10am – 4pm"]} />
              <InfoCard icon={Phone} title="Call us" lines={[PHONE_DISPLAY]} />
              <InfoCard icon={Mail} title="Email" lines={["hello@leafandbloom.in"]} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-medium text-white shadow-soft transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-soft glass">
            <iframe
              title="Leaf & Bloom location"
              src="https://www.google.com/maps?q=Whitefield,Bengaluru&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-4 w-4" />
        </span>
        <div className="font-medium">{title}</div>
      </div>
      <div className="mt-3 space-y-0.5 text-sm text-muted-foreground">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}
