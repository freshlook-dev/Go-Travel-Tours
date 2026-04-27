import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Support",
  description:
    "Support address and contact details for Go Travel & Tours customers.",
};

const supportContacts = [
  {
    label: "Support email",
    value: "info@gotravelandtours.al",
    href: "mailto:info@gotravelandtours.al",
    icon: Mail,
  },
  {
    label: "Support phone",
    value: "+383 44 38 77 38",
    href: "tel:+38344387738",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+383 44 38 77 38",
    href: "https://wa.me/38344387738",
    icon: MessageCircle,
  },
];

export default function SupportPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              Support address
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Customer support for your travel plans.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Use this page for Vercel, app store, or business verification
              support details. It also gives travelers a clear place to ask for
              help before, during, or after a trip.
            </p>

            <div className="mt-8 rounded-[8px] bg-brand-navy p-6 text-white">
              <h2 className="text-xl font-black">Go Travel & Tours Prishtina</h2>
              <div className="mt-5 space-y-4 text-sm text-white/78">
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-brand-gold" />
                  Service point address: Rr. Ferid Curri, Prishtine
                </p>
                <p className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-gold" />
                  Support hours: Monday to Saturday, 09:00 - 18:00
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {supportContacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center justify-between gap-4 rounded-[8px] border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-gold hover:bg-white"
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky text-brand-blue">
                        <Icon size={19} />
                      </span>
                      <span>
                        <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
                          {contact.label}
                        </span>
                        <span className="font-black text-brand-navy">{contact.value}</span>
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
