import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { Featured } from "@/components/site/Featured";
import { CareTips } from "@/components/site/CareTips";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leaf & Bloom — Premium Home-Grown Plant Nursery" },
      {
        name: "description",
        content:
          "A curated home-based nursery offering indoor plants, outdoor greens, flowering beauties and succulents — hand-grown and delivered with care. Order easily on WhatsApp.",
      },
      { property: "og:title", content: "Leaf & Bloom — Premium Plant Nursery" },
      {
        property: "og:description",
        content: "Handpicked indoor, outdoor, flowering plants and succulents. Order on WhatsApp.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Featured />
        <CareTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
