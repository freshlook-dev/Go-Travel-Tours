import { ArrowRight, Luggage, Plane } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { flights } from "@/data/travel";

export const metadata = {
  title: "Flights",
  description: "Flight offers and route support from Prishtina and Tirana.",
};

export default function FlightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flights"
        title="Flexible flight booking from Prishtina and Tirana"
        description="Compare sample fares, request preferred routes, and prepare the structure for future live airline pricing."
      />
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Sample routes"
            title="Popular flight requests"
            description="Mock flight data keeps the UI ready for Supabase or airline API integration."
          />
          <div className="grid gap-5">
            {flights.map((flight) => (
              <article key={flight.route} className="grid gap-4 rounded-[8px] border border-slate-200 bg-slate-50 p-5 shadow-sm md:grid-cols-[1fr_1fr_auto] md:items-center">
                <div>
                  <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-gold">
                    <Plane size={17} /> {flight.airline}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-brand-navy">{flight.route}</h2>
                </div>
                <div className="text-sm font-semibold text-slate-600">
                  <p>{flight.dates}</p>
                  <p className="mt-2 flex items-center gap-2">
                    <Luggage size={16} className="text-brand-blue" /> {flight.perks}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 md:block md:text-right">
                  <p className="text-xl font-black text-brand-blue">{flight.price}</p>
                  <button className="mt-0 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-black text-white md:mt-3">
                    Request <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
