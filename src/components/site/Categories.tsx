import indoor from "@/assets/cat-indoor.jpg";
import outdoor from "@/assets/cat-outdoor.jpg";
import flowering from "@/assets/cat-flowering.jpg";
import succulent from "@/assets/cat-succulent.jpg";
import seeds from "@/assets/herb-seeds.jpg";
import bulbs from "@/assets/dahlia-bulbs.jpg";

const cats = [
  {
    title: "Indoor Plants",
    desc: "Lush greens for sunlit corners",
    img: indoor,
    price: "From ₹699",
  },
  { title: "Outdoor Plants", desc: "Balcony & patio statements", img: outdoor, price: "From ₹549" },
  {
    title: "Flowering Plants",
    desc: "Soft blooms, lasting joy",
    img: flowering,
    price: "From ₹899",
  },
  {
    title: "Succulents",
    desc: "Sculptural, low-effort beauty",
    img: succulent,
    price: "From ₹399",
  },
  { title: "Seeds", desc: "Heirloom packets to start your garden", img: seeds, price: "From ₹249" },
  { title: "Bulbs", desc: "Spring & summer blooms in waiting", img: bulbs, price: "From ₹499" },
];

const priceBands = [
  { label: "Under ₹100", note: "Starter packets & tiny treasures" },
  { label: "₹100 – ₹500", note: "Everyday greens & seed kits" },
  { label: "₹500 – ₹1000", note: "Statement houseplants" },
  { label: "Above ₹1000", note: "Collector pieces & rare blooms" },
];

export function Categories() {
  return (
    <section id="categories" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
            Browse by
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            Find your kind of green.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From statement indoor trees to delicate desert succulents — curated collections for
            every room and every gardener.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <a
              key={c.title}
              href="#featured"
              className="group relative overflow-hidden rounded-3xl shadow-soft"
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-deep/90 via-leaf-deep/30 to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                {c.price}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs text-white/70">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-white">{c.title}</div>
                <div className="mt-1 text-sm text-white/80">{c.desc}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
              Shop by budget
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Something beautiful at every price.
            </h3>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceBands.map((b) => (
              <a
                key={b.label}
                href="#featured"
                className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="font-display text-xl font-semibold text-primary">{b.label}</div>
                <div className="mt-2 text-sm text-muted-foreground">{b.note}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
