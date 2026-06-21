import { Sun, Droplets, Wind, Scissors } from "lucide-react";

const tips = [
  {
    icon: Sun,
    title: "Right light",
    desc: "Bright, indirect light suits most indoor plants. Rotate weekly for even growth.",
  },
  {
    icon: Droplets,
    title: "Water mindfully",
    desc: "Check the top inch of soil — water only when dry. Overwatering is the #1 culprit.",
  },
  {
    icon: Wind,
    title: "Airflow matters",
    desc: "Good ventilation keeps roots healthy and discourages pests and fungus.",
  },
  {
    icon: Scissors,
    title: "Prune & repot",
    desc: "Trim yellow leaves and refresh soil yearly. Your plants will thank you with new growth.",
  },
  {
    icon: Sun,
    title: "Feed Monthly",
    desc: "Use a balanced liquid fertilizer every 4–6 weeks during the growing season for lush foliage and stronger roots.",
  },
  {
    icon: Droplets,
    title: "Drainage First",
    desc: "Always choose pots with drainage holes to prevent excess water from collecting around the roots.",
  },
  {
    icon: Wind,
    title: "Keep Leaves Clean",
    desc: "Wipe dusty leaves gently with a damp cloth so your plants can absorb more light and stay vibrant.",
  },
  {
    icon: Scissors,
    title: "Watch for Pests",
    desc: "Inspect leaves regularly for insects or discoloration. Early care keeps your plants healthy and thriving.",
  },
];

export function CareTips() {
  return (
    <section id="care" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
            Plant care
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
            Simple rituals for a thriving home jungle.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t, i) => (
            <div
              key={t.title}
              className="group rounded-3xl glass p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
