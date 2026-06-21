import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are your shipping options and delivery times?",
    a: "We ship across India via partnered couriers. Standard delivery takes 3–7 business days, and we also offer express shipping in select metro cities. All plants are carefully packed with cushioned insides, breathable wraps, and support sticks to ensure they arrive in perfect condition.",
  },
  {
    q: "What if my plant arrives damaged or unhealthy?",
    a: "We personally inspect every plant before dispatch, but if your plant arrives damaged or unwell, send us a photo within 48 hours of delivery. We'll replace it or issue a full refund — no questions asked. Your plant's health is our promise.",
  },
  {
    q: "How do I choose the right plant for my light conditions?",
    a: "We label every plant with its light needs — low, medium, or bright indirect light. If you're unsure, our care guides and WhatsApp chat can help you match the perfect plant to your space. Generally: snake plants and ZZ plants thrive in low light, while fiddle-leaf figs and succulents love bright spots.",
  },
  {
    q: "What is your return or exchange policy?",
    a: "We accept returns and exchanges within 7 days of delivery for plants that arrive damaged or show significant distress. Since plants are living things, we don't accept returns for change of mind, but we're always happy to advise on care to help your plant thrive.",
  },
  {
    q: "Do you offer a plant care guarantee?",
    a: "Yes — every plant comes with a personalised care card and lifetime WhatsApp support. If you have questions about watering, repotting, or troubleshooting, just message us. We want every Leaf & Bloom plant to grow happily in your home.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (GPay, PhonePe, PayTM), bank transfers, and credit/debit cards. For bulk or custom orders, we can also generate a payment link. All transactions are processed securely.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link via WhatsApp and email. You can also reach out to us directly for real-time updates — we're a small team and respond quickly.",
  },
  {
    q: "Should I repot my plant right after delivery?",
    a: "We recommend waiting 1–2 weeks before repotting to let your plant acclimate to its new environment. During this time, water it as usual and keep it in indirect light. After that, if you'd like to move it to a decorative pot, we can guide you on the right pot size and soil mix.",
  },
];

export function FAQ() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-leaf"
        >
          FAQs
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-4xl font-semibold text-balance sm:text-5xl"
        >
          Curious about something?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-muted-foreground"
        >
          Quick answers to the questions we hear most often.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
