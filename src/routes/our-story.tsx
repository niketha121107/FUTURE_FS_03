import { motion } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sprout, Users, ArrowRight, Award, TreePine } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export const Route = createFileRoute("/our-story")({
  component: OurStory,
});

function OurStory() {
  return (
    <div className="overflow-x-hidden bg-[#FAF0E8]">
      {/* ──────────── Hero ──────────── */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-[#7A3E2C] via-[#8B4A35] to-[#5C2D1E]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.15)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <span className="inline-block rounded-full bg-[#D4A853]/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A853]">
            Our Story
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-[#FDF6ED] sm:text-7xl">
            Rooted in
            <span className="text-[#D4A853]"> Passion</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#FDF6ED]/80">
            What started as a quiet love for green things grew into something we had to share.
          </p>
        </div>
      </section>

      {/* ──────────── How It Started ──────────── */}
      <motion.section {...fadeUp} className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#C4845A]/30 bg-gradient-to-br from-[#C4845A]/20 to-[#D4A853]/10 shadow-[0_0_30px_rgba(196,132,90,0.1)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Sprout className="h-32 w-32 text-[#C4845A]/30" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A65D3C]">
              How It Started
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#2C1810] sm:text-5xl">
              A balcony, a few cuttings, and a big dream.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5C3A2E]/80">
              Leaf & Bloom didn't begin in a greenhouse or a boardroom. It began on a small
              apartment balcony in Coimbatore, where one of our founders picked up a struggling
              snake plant from a roadside vendor and nursed it back to life.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#5C3A2E]/80">
              That single plant sparked an obsession. Soon the balcony was full — monsters, pothos,
              succulents, ferns. Friends started asking for cuttings. Then strangers started asking.
              What began as a weekend hobby turned into a tiny home nursery, and word spread faster
              than we ever expected.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#5C3A2E]/80">
              In 2022, we took the leap: turned our dining table into a potting bench, registered
              Leaf & Bloom, and started shipping plants across India. Every plant we send out is
              still potted, checked, and packed by us — no warehouses, no shortcuts. Just roots,
              soil, and honest care.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ──────────── Our Mission ──────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FDF3EB] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#A65D3C]"
          >
            Our Mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-display text-4xl font-semibold text-[#2C1810] sm:text-5xl"
          >
            Grow plants, grow people.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-[#5C3A2E]/80"
          >
            Every leaf we send out carries our values — for the planet, for our customers, and for
            the love of growing things.
          </motion.p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: TreePine,
                title: "Sustainable Roots",
                desc: "We use coco-peat pots, recycled packaging, and source locally whenever possible. Every plant is grown without synthetic growth boosters.",
              },
              {
                icon: Heart,
                title: "Quality Over Quantity",
                desc: "We grow fewer plants, but each one is hand-checked, hardened, and cared for until it's strong enough to thrive in your home.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "We believe plant care should be accessible. Free care guides, WhatsApp advice, and a community that grows together — one leaf at a time.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                className="rounded-2xl border border-[#C4845A]/25 bg-white/80 p-8 text-left shadow-[0_0_20px_rgba(196,132,90,0.08)] backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#A65D3C]/15 text-[#A65D3C]">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#2C1810]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C3A2E]/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────── Milestones ──────────── */}
      <motion.section {...fadeUp} className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A65D3C]">
              Milestones
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#2C1810] sm:text-5xl">
              Our journey so far
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-[#A65D3C] via-[#C4845A] to-[#A65D3C]/20" />

            {[
              {
                year: "2022",
                title: "First nursery setup",
                desc: "Turned our home balcony into a small nursery with 30 plants. Launched on WhatsApp with a simple catalogue.",
              },
              {
                year: "2023",
                title: "1,000 happy customers",
                desc: "Crossed the 1,000-customer milestone. Expanded from indoor plants to flowering plants and succulents.",
              },
              {
                year: "2024",
                title: "Delivery across India",
                desc: "Partnered with courier services to ship plants nationwide. Introduced eco-friendly packaging for every order.",
              },
              {
                year: "2025",
                title: "Community workshops",
                desc: "Started free online care workshops and published weekly plant care guides. Built a community of 5,000+ plant lovers.",
              },
              {
                year: "2026",
                title: "Growing strong",
                desc: "Today we're a full-fledged home nursery with 100+ plant varieties, serving customers across India — one healthy plant at a time.",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-8 pb-14 last:pb-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15, type: "spring" }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A65D3C]/15 text-sm font-bold text-[#A65D3C] shadow-[0_0_10px_rgba(166,93,60,0.25)] ring-4 ring-[#FAF0E8]"
                >
                  {i + 1}
                </motion.div>
                <div className="pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#A65D3C]">
                    {m.year}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-[#2C1810]">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C3A2E]/80">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────── Meet the Team ──────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#7A3E2C] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A853]"
          >
            Meet the Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-display text-4xl font-semibold text-[#FDF6ED] sm:text-5xl"
          >
            The people behind the plants
          </motion.h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { name: "Manovadhana.C", role: "Founder and Plant Mom ", initials: "MC" },
              { name: "Niketha MS", role: "Co-Founder", initials: "NMS" },
              { name: "Sasikumar M", role: "Community & Care Guide", initials: "SM" },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                className="rounded-2xl border border-[#C4845A]/20 bg-[#5C2D1E]/80 p-8 shadow-[0_0_20px_rgba(0,0,0,0.15)] backdrop-blur-sm"
              >
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#D4A853] to-[#C4845A] text-xl font-bold text-[#2C1810]">
                  {member.initials}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#FDF6ED]">{member.name}</h3>
                <p className="text-sm text-[#D4A853]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────── Closing CTA ──────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#D4A853] via-[#C4845A] to-[#A65D3C] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Leaf className="mx-auto h-10 w-10 text-white/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl"
          >
            Ready to grow with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 max-w-md text-white/80"
          >
            Every plant we send carries a piece of our story. Find the one that speaks to you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="gap-2 rounded-full bg-white px-10 py-6 text-base font-semibold text-[#7A3E2C] shadow-xl shadow-[#A65D3C]/30 hover:bg-[#FDF6ED]"
              asChild
            >
              <Link to="/">
                Explore the shop <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
