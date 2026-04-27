import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the Go Travel & Tours website and travel request services.",
};

const terms = [
  {
    title: "Website use",
    text: "This website provides information about Go Travel & Tours services, sample travel content, and request forms. You agree to use the website lawfully and provide accurate information when submitting requests.",
  },
  {
    title: "Travel offers",
    text: "Prices, availability, dates, hotel categories, routes, and package details shown on the website may be sample or promotional information. Final offers are confirmed only after availability is checked with the relevant supplier.",
  },
  {
    title: "Bookings and payments",
    text: "Bookings may be subject to supplier terms, fare rules, cancellation policies, payment deadlines, visa requirements, and passenger document requirements. Customers are responsible for reviewing final booking details before confirmation.",
  },
  {
    title: "Third-party services",
    text: "Flights, hotels, tours, transfers, insurance, and related travel services are commonly provided by third-party suppliers. Go Travel & Tours assists with coordination and customer support according to the confirmed service terms.",
  },
  {
    title: "Limitation of liability",
    text: "Go Travel & Tours is not responsible for disruptions outside its reasonable control, including airline schedule changes, weather, border decisions, supplier changes, strikes, force majeure events, or incorrect information provided by customers.",
  },
];

export default function TermsOfUsePage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell max-w-4xl">
        <div className="mb-10 rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            <FileText size={18} /> Legal document
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Last updated: April 28, 2026. These terms outline how visitors and
            customers may use the Go Travel & Tours website and request services.
          </p>
        </div>

        <div className="space-y-8 rounded-[8px] bg-white p-6 text-slate-700 shadow-sm ring-1 ring-slate-200 sm:p-8">
          {terms.map((term) => (
            <article key={term.title}>
              <h2 className="text-xl font-black text-brand-navy">{term.title}</h2>
              <p className="mt-3 leading-8">{term.text}</p>
            </article>
          ))}

          <article>
            <h2 className="text-xl font-black text-brand-navy">Support</h2>
            <p className="mt-3 leading-8">
              Questions about these terms can be sent through our{" "}
              <Link className="font-bold text-brand-blue" href="/support">
                support page
              </Link>{" "}
              or by email at{" "}
              <a className="font-bold text-brand-blue" href="mailto:info@gotravelandtours.al">
                info@gotravelandtours.al
              </a>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
