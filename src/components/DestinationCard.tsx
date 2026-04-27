import type { Destination } from "@/data/travel";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-[8px] bg-white shadow-lg shadow-slate-200/80 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/70">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-wide text-brand-navy">
          {destination.tag}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-brand-navy">{destination.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-500">
              <MapPin size={15} className="text-brand-gold" />
              {destination.country}
            </p>
          </div>
          <p className="shrink-0 rounded-full bg-brand-sky px-3 py-1 text-xs font-black text-brand-blue">
            {destination.fromPrice}
          </p>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{destination.description}</p>
      </div>
    </article>
  );
}
