import about from "@/assets/about.jpg";
import { Leaf, Droplets, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={about}
              alt="Hands tending to potted houseplants"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-3xl glass p-6 sm:block">
            <div className="font-display text-3xl font-semibold text-primary">12+</div>
            <div className="mt-1 text-sm text-muted-foreground">Years nurturing plants</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
            Our Story
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            A small home nursery with a big love for green living.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Leaf & Bloom began on a sunlit balcony with a handful of cuttings and a quiet
            obsession. Today, every plant we send out is grown, repotted and hand-checked by us —
            no warehouses, no shortcuts. Just healthy roots and honest care.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Leaf, title: "Home-grown", desc: "Raised in our own nursery" },
              { icon: Droplets, title: "Healthy roots", desc: "Hand-checked before dispatch" },
              { icon: Heart, title: "Care included", desc: "Personalised care guide" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl glass p-5">
                <f.icon className="h-5 w-5 text-leaf" />
                <div className="mt-3 font-medium">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
