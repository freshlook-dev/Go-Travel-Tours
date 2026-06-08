"use client";

import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { packages, text } from "@/data/site";

type Package = (typeof packages)[number];

export function PackageCard({ item }: { item: Package }) {
  const { language } = useLanguage();

  return (
    <article className="overflow-hidden rounded-[8px] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-200">
      <div className="relative h-56">
        <Image src={item.image} alt={item.destination} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <p className="flex items-center gap-2 text-sm font-bold text-slate-500">
          <MapPin size={16} className="text-gold" /> {text(item.country, language)}
        </p>
        <h3 className="mt-2 text-2xl font-black text-navy">{item.destination}</h3>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Clock size={16} /> {text(item.length, language)}
          </p>
          <p className="text-lg font-black text-sea">{text(item.price, language)}</p>
        </div>
      </div>
    </article>
  );
}
