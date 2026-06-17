import indoor from "@/assets/cat-indoor.jpg";
import outdoor from "@/assets/cat-outdoor.jpg";
import flowering from "@/assets/cat-flowering.jpg";
import succulent from "@/assets/cat-succulent.jpg";

const cats = [
  { title: "Indoor Plants", desc: "Lush greens for sunlit corners", img: indoor },
  { title: "Outdoor Plants", desc: "Balcony & patio statements", img: outdoor },
  { title: "Flowering Plants", desc: "Soft blooms, lasting joy", img: flowering },
  { title: "Succulents", desc: "Sculptural, low-effort beauty", img: succulent },
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs text-white/70">0{i + 1}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-white">
                  {c.title}
                </div>
                <div className="mt-1 text-sm text-white/80">{c.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
