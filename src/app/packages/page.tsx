"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/site";

export default function PackagesPage() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Paketat" : "Packages"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            {language === "sq" ? "Ide destinacionesh per kerkesen tuaj te radhes." : "Destination ideas ready for your next request."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {language === "sq"
              ? "Keto paketa perdorin cmime shembull dhe mund te pershtaten sipas datave dhe buxhetit tuaj."
              : "These packages use sample pricing and can be tailored to your dates and budget."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <PackageCard key={item.destination} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
