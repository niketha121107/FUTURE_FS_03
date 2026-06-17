import { Leaf, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-leaf-deep text-white/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-semibold text-white">
              Leaf <span className="italic text-accent">&</span> Bloom
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            A home-based nursery rooted in care. We grow, repot and deliver healthy plants for
            living rooms, balconies and quiet corners across India.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-white/15"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-white/15"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol
          title="Explore"
          links={[
            { label: "About", href: "#about" },
            { label: "Categories", href: "#categories" },
            { label: "Featured", href: "#featured" },
            { label: "Care guide", href: "#care" },
          ]}
        />
        <FooterCol
          title="Contact"
          links={[
            { label: "WhatsApp", href: "#contact" },
            { label: "Call us", href: "#contact" },
            { label: "Visit nursery", href: "#contact" },
            { label: "Email", href: "mailto:hello@leafandbloom.in" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} Leaf & Bloom. Grown with care.</div>
          <div>Crafted for plant lovers.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-sm font-semibold uppercase tracking-wider text-white">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-white/70 transition-colors hover:text-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
