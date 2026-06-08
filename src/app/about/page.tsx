"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { company, offices, text } from "@/data/site";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[8px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <Image src="/go-travel-logo.png" alt={company.name} width={220} height={280} className="h-48 w-auto" />
          <h1 className="mt-8 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            {language === "sq" ? "Agjenci udhetimi per Kosove dhe Shqiperi." : "A travel agency for Kosovo and Albania."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {language === "sq"
              ? `${company.name} punon me udhetare qe duan oferta te qarta, mbeshtetje reale dhe planifikim praktik per fluturime, hotele dhe pushime.`
              : "We work with travelers who want clear offers, real support, and practical planning for flights, hotels, and holidays."}
          </p>
        </div>
        <div className="grid gap-5">
          {offices.map((office) => (
            <div key={office.address} className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Zyre" : "Office"}</p>
              <p className="mt-2 text-xl font-black text-navy">{text(office.city, language)}</p>
              <p className="mt-2 font-bold text-slate-600">{office.address}</p>
              <a href={office.phoneHref} className="mt-2 inline-flex font-black text-sea">{office.phone}</a>
            </div>
          ))}
          <div className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Website</p>
            <p className="mt-2 text-xl font-black text-navy">www.gotravelandtours.al</p>
          </div>
          <div className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Mbeshtetje" : "Support"}</p>
            <p className="mt-2 text-xl font-black text-navy">
              {language === "sq" ? "Fluturime, hotele, paketa dhe kujdes per kliente" : "Flights, hotels, packages, and customer care"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
