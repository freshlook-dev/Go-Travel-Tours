import { Star } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { hotels } from "@/data/travel";

export const metadata = {
  title: "Hotels",
  description: "Trusted hotel offers for city breaks, beach holidays, and premium stays.",
};

export default function HotelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hotels"
        title="Hotels selected for comfort, location, and value"
        description="Browse trusted sample stays and prepare hotel requests for future booking integrations."
      />
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Stays"
            title="Featured hotel options"
            description="Premium, family-friendly, and city-center hotels for the destinations travelers request most."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <article key={hotel.name} className="overflow-hidden rounded-[8px] bg-white shadow-xl shadow-slate-200/80 ring-1 ring-slate-200">
                <div className="relative h-60">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-1 text-brand-gold">
                    {Array.from({ length: hotel.stars }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h2 className="mt-3 text-xl font-black text-brand-navy">{hotel.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{hotel.location}</p>
                  <p className="mt-5 text-lg font-black text-brand-blue">{hotel.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
