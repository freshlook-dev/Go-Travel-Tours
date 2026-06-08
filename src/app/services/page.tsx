"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { TripRequest } from "@/components/TripRequest";
import { services, text } from "@/data/site";

export default function ServicesPage() {
  const { language } = useLanguage();

  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Sherbimet" : "Services"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            {language === "sq" ? "Sherbime udhetimi me nje pike kontakti." : "Travel services with one point of contact."}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {language === "sq"
              ? "Zgjidhni sherbimin qe ju duhet, dergoni detajet dhe ekipi yne do te pergatise opsione praktike."
              : "Choose the service you need, send your details, and our team will prepare practical options."}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={text(service.title, language)} className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <Icon className="text-gold" size={28} />
                  <h2 className="mt-5 text-xl font-black text-navy">{text(service.title, language)}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text(service.text, language)}</p>
                </article>
              );
            })}
          </div>
        </div>
        <TripRequest />
      </div>
    </section>
  );
}
