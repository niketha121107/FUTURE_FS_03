import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { waLink } from "@/lib/plants";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Contact Details */}
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              We'd love to hear from you 🌿
            </h2>

            <p className="mt-4 max-w-lg text-muted-foreground">
              Whether you're looking for the perfect plant, need gardening
              advice, or have questions about your order, our team is always
              ready to help. Reach out anytime—we're just a message away.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={MapPin}
                title="Visit Us"
                lines={[
                  "14/1, Jayalakshmi Garden",
                  "TVS Nagar",
                  "Coimbatore - 641025",
                  "Tamil Nadu, India",
                ]}
              />

              <InfoCard
                icon={Clock}
                title="Working Hours"
                lines={[
                  "Mon - Sat : 9:00 AM - 7:00 PM",
                  "Sunday : 10:00 AM - 4:00 PM",
                ]}
              />

              <InfoCard
                icon={Phone}
                title="Call Us"
                lines={["+91 77083 28839"]}
              />

              <InfoCard
                icon={Mail}
                title="Email Us"
                lines={["msniketha1211@gmail.com"]}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-white font-medium shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+917708328839"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-xl glass">
            <iframe
              title="Leaf & Bloom Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.4615690972337!2d76.91464376164869!3d11.043018411361404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f000ac5d7ef%3A0x69df498e77a89e63!2sJayalakshmi%20garden!5e0!3m2!1sen!2sin!4v1782063489471!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[450px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: typeof Phone;
  title: string;
  lines: string[];
};

function InfoCard({ icon: Icon, title, lines }: InfoCardProps) {
  return (
    <div className="rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>

        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}