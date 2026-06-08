"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, PlaneTakeoff } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { TripRequest } from "@/components/TripRequest";
import { company, offices, packages, services, text, trustItems } from "@/data/site";

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <section className="hero-image">
        <div className="container-page grid min-h-[720px] items-center gap-10 py-14 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <div className="max-w-3xl text-white">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                <PlaneTakeoff size={18} className="text-gold" />
                {language === "sq" ? "Agjenci udhetimi ne Prishtine dhe Tirane" : "Travel agency in Prishtine and Tirana"}
              </p>
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                {language === "sq" ? "Udhetimet tuaja, te planifikuara qarte." : "Travel plans made simple and clear."}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                {language === "sq"
                  ? `${company.name} ju ndihmon me fluturime, hotele dhe paketa pushimesh nga zyrat tona lokale.`
                  : "We help you book flights, hotels, and holiday packages with local support from Prishtine and Tirana."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/packages" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-black text-navy">
                  {language === "sq" ? "Shiko paketat" : "See packages"} <ArrowRight size={17} />
                </Link>
                <a href={company.primaryPhoneHref} className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black text-white hover:bg-white/10">
                  {language === "sq" ? "Telefono" : "Call"} {company.primaryPhone}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TripRequest />
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Sherbimet" : "What we do"}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">
              {language === "sq" ? "Gjithcka qe ju duhet per nje udhetim me te lehte." : "Everything needed for a smoother trip."}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={text(service.title, language)} delay={index * 0.04}>
                  <div className="h-full rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                      <Icon size={23} />
                    </div>
                    <h3 className="text-lg font-black text-navy">{text(service.title, language)}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{text(service.text, language)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Destinacione" : "Popular ideas"}</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">
                {language === "sq" ? "Filloni me nje destinacion." : "Start with a destination."}
              </h2>
            </div>
            <Link href="/packages" className="inline-flex items-center gap-2 text-sm font-black text-sea">
              {language === "sq" ? "Te gjitha paketat" : "View all packages"} <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((item, index) => (
              <Reveal key={item.destination} delay={index * 0.05}>
                <PackageCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-grid bg-navy py-16 text-white sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Pse ne" : "Why travelers choose us"}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              {language === "sq" ? "Mbeshtetje lokale, kujdes premium." : "Local support, premium attention."}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              {language === "sq"
                ? "Komunikim direkt, oferta reale dhe ndihme praktike kur planet ndryshojne."
                : "Local support, realistic offers, and practical help when plans change."}
            </p>
          </div>
          <div className="grid gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={text(item.title, language)} className="flex gap-4 rounded-[8px] border border-white/10 bg-white/7 p-5">
                  <Icon className="mt-1 shrink-0 text-gold" size={24} />
                  <div>
                    <h3 className="font-black">{text(item.title, language)}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{text(item.text, language)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page rounded-[8px] bg-cloud p-8 ring-1 ring-slate-200 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-gold">
              <CheckCircle2 size={18} /> {language === "sq" ? "Gati per udhetim" : "Ready to travel"}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-navy sm:text-4xl">
              {language === "sq" ? "Na dergoni datat dhe ne pergatisim nje oferte te qarte." : "Send us your dates and we will prepare a clear offer."}
            </h2>
          </div>
          <Link href="/support" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 text-sm font-black text-white lg:mt-0">
            {language === "sq" ? "Kontakt" : "Support"}
          </Link>
        </div>
      </section>

      <section className="bg-cloud py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{language === "sq" ? "Zyrat tona" : "Our offices"}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">
              {language === "sq" ? "Prishtine dhe Tirane." : "Prishtine and Tirana."}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {offices.map((office) => (
              <div key={office.address} className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-navy">{text(office.city, language)}</h3>
                <p className="mt-1 text-sm font-bold text-slate-500">{text(office.country, language)}</p>
                <p className="mt-5 text-base font-bold text-slate-700">{office.address}</p>
                <a href={office.phoneHref} className="mt-3 inline-flex text-base font-black text-sea">{office.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
