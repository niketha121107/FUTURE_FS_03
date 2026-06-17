import { MessageCircle } from "lucide-react";
import type { Plant } from "@/lib/plants";
import { waLink, formatPrice } from "@/lib/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
          {plant.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight">{plant.name}</h3>
          <div className="shrink-0 font-display text-lg font-semibold text-primary">
            {formatPrice(plant.price)}
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{plant.description}</p>

        <a
          href={waLink(plant.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-leaf-deep"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
