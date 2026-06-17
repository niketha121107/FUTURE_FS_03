import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Bengaluru",
    text: "My Monstera arrived in perfect health and the care card was a beautiful touch. It feels like buying from a thoughtful friend, not a store.",
  },
  {
    name: "Rohan Mehta",
    role: "Mumbai",
    text: "The fiddle leaf fig is stunning — exactly as pictured. WhatsApp ordering was effortless and the team answered every question.",
  },
  {
    name: "Priya Iyer",
    role: "Pune",
    text: "Three orders in and not one disappointment. Leaf & Bloom has quietly become my go-to for gifting plants.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
            Kind words
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            Loved by plant parents across India.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-3xl glass p-8 shadow-soft"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
