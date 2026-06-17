import { useState } from "react";
import { plants } from "@/lib/plants";
import { PlantCard } from "./PlantCard";

const filters = ["All", "Indoor", "Outdoor", "Flowering", "Succulents"] as const;
type Filter = (typeof filters)[number];

export function Featured() {
  const [active, setActive] = useState<Filter>("All");
  const items = active === "All" ? plants : plants.filter((p) => p.category === active);

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <PlantCard key={p.id} plant={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
