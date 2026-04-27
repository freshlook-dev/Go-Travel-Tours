import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Contact",
  description: "Contact Go Travel & Tours for flights, hotels, and travel packages.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you want to go next"
        description="Send a request for flights, hotels, packages, group travel, or corporate bookings."
      />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[8px] bg-brand-navy p-6 text-white">
            <h2 className="text-2xl font-black">Go Travel & Tours</h2>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Our Prishtina office supports travelers across Kosovo and Albania
              with quick, polished travel assistance.
            </p>
            <div className="mt-8 space-y-5 text-sm font-semibold text-white/82">
              <p className="flex items-center gap-3">
                <MapPin className="text-brand-gold" size={20} /> Prishtina, Kosovo
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-brand-gold" size={20} /> Rr. Ferid Curri, Prishtine
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-brand-gold" size={20} /> +383 44 38 77 38
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-brand-gold" size={20} /> info@gotravelandtours.al
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
