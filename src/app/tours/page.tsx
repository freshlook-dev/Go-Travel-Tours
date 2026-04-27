import { Check } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { deals, destinations } from "@/data/travel";

export const metadata = {
  title: "Tours and Packages",
  description: "Curated tour packages for Turkey, Dubai, Europe, Maldives, and more.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours and packages"
        title="Complete holidays tailored around your travel style"
        description="Combine flights, hotels, transfers, tours, and support in one polished request flow."
      />
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Packages"
            title="Featured holiday packages"
            description="Each card uses mock data today and can later connect to inventory or Supabase tables."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {deals.map((deal) => (
              <DealCard key={deal.title} deal={deal} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionTitle
              align="left"
              eyebrow="What is included"
              title="Designed for easy agency fulfilment"
              description="The package model separates destination content from booking logic, so backend services can be added cleanly later."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {destinations.slice(0, 4).map((destination) => (
              <div key={destination.name} className="rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="flex items-center gap-2 text-sm font-black text-brand-navy">
                  <Check size={18} className="text-brand-gold" />
                  {destination.name} package
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Flight, hotel, transfers, local advice, and travel support options.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
