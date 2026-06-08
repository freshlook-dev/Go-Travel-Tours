"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { company, offices, text } from "@/data/site";

export default function SupportPage() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Kontakt" : "Support address"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            {language === "sq" ? "Mbeshtetje per klientet nga Prishtina dhe Tirana." : "Customer support from Prishtine and Tirana."}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {language === "sq"
              ? "Per ndihme, verifikim biznesi ose mbeshtetje udhetimi, perdorni kontaktet me poshte."
              : "Use this page for customer help, business verification, and travel support contact details."}
          </p>
        </div>
        <div className="rounded-[8px] bg-cloud p-6 ring-1 ring-slate-200 sm:p-8">
          <h2 className="text-2xl font-black text-navy">{company.supportName}</h2>
          <div className="mt-7 grid gap-4">
            {offices.map((office) => (
              <div key={office.address} className="rounded-[8px] bg-white p-4 font-bold text-slate-700">
                <p className="mb-3 text-lg font-black text-navy">{text(office.city, language)}</p>
                <p className="flex items-center gap-3">
                  <MapPin className="text-gold" /> {office.address}
                </p>
                <a href={office.phoneHref} className="mt-3 flex items-center gap-3">
                  <Phone className="text-gold" /> {office.phone}
                </a>
              </div>
            ))}
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 rounded-[8px] bg-white p-4 font-bold text-slate-700">
              <Mail className="text-gold" /> {company.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
