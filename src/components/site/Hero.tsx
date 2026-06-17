import hero from "@/assets/hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/plants";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Lush tropical plants in terracotta pots"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-deep/70 via-leaf-deep/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-24 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium tracking-wide text-white/90 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Home-grown · Hand-picked
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white text-balance sm:text-6xl md:text-7xl">
            Bring the <em className="text-accent">quiet luxury</em> of plants into your home.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            A curated nursery of indoor jungles, blooming statements and resilient succulents —
            grown with care, delivered with love.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-accent-foreground shadow-soft transition-transform hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-4 font-medium text-white transition-colors hover:bg-white/15"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "500+", v: "Happy homes" },
              { k: "120+", v: "Plant varieties" },
              { k: "4.9★", v: "Customer love" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass-dark p-4">
                <div className="font-display text-2xl font-semibold text-white">{s.k}</div>
                <div className="mt-1 text-xs text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
