import { useState } from "react";
import { plants, priceRanges } from "@/lib/plants";
import { PlantCard } from "./PlantCard";

const filters = ["All", "Indoor", "Outdoor", "Flowering", "Succulents", "Seeds", "Bulbs"] as const;
type Filter = (typeof filters)[number];

export function Featured() {
  const [active, setActive] = useState<Filter>("All");
  const [priceIdx, setPriceIdx] = useState(0);

  const range = priceRanges[priceIdx];
  const items = plants
    .filter((p) => (active === "All" ? true : p.category === active))
    .filter((p) => p.price >= range.min && p.price <= range.max);

  return (
    <section id="featured" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
              Featured collection
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Hand-picked plants, ready for their new home.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Price
          </span>
          {priceRanges.map((r, i) => (
            <button
              key={r.label}
              onClick={() => setPriceIdx(i)}
              className={`rounded-full px-4 py-2 text-xs transition-all ${
                priceIdx === i
                  ? "bg-leaf-deep text-primary-foreground"
                  : "glass text-foreground/70 hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-14 text-center text-muted-foreground">
            No plants match this combination. Try a different filter.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
