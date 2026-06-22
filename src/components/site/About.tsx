import about from "@/assets/about.jpg";
import { Leaf, Droplets, Heart } from "lucide-react";

export function About() {
  return (
    <>
      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          {/* Image */}
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
              <div className="font-display text-3xl font-semibold text-primary">
                2+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Years nurturing plants
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
              About Us
            </span>

            <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Bringing Nature Closer, One Plant at a Time.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At <strong>Leaf & Bloom</strong>, we believe every space deserves
              the beauty and freshness of nature. Our carefully selected indoor
              and outdoor plants are chosen for their health, quality, and
              lasting beauty, making it easy for everyone to create greener,
              more inspiring environments.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              More than a plant store, we're a community that encourages
              sustainable living and mindful plant care. From handpicked plants
              to expert guidance, every order is prepared with care so your
              green companion arrives healthy and ready to thrive.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: "Premium Plants",
                  desc: "Healthy & handpicked collection",
                },
                {
                  icon: Droplets,
                  title: "Plant Care",
                  desc: "Expert guidance for every purchase",
                },
                {
                  icon: Heart,
                  title: "Customer First",
                  desc: "Carefully packed with love",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <feature.icon className="h-6 w-6 text-leaf" />

                  <h3 className="mt-3 font-semibold">{feature.title}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
