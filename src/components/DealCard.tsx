import type { Deal } from "@/data/travel";
import { Clock, Star } from "lucide-react";
import Image from "next/image";

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="overflow-hidden rounded-[8px] bg-white shadow-xl shadow-slate-200/80 ring-1 ring-slate-200">
      <div className="relative h-56">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-brand-navy px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
          {deal.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-brand-gold">{deal.location}</p>
          <p className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-black text-amber-700">
            <Star size={14} fill="currentColor" /> {deal.rating}
          </p>
        </div>
        <h3 className="mt-2 text-xl font-black text-brand-navy">{deal.title}</h3>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <Clock size={16} /> {deal.duration}
          </p>
          <p className="text-xl font-black text-brand-blue">{deal.price}</p>
        </div>
      </div>
    </article>
  );
}
