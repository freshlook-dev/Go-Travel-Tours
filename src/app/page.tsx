import Link from "next/link";
import { ArrowRight, CheckCircle2, PlaneTakeoff } from "lucide-react";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { TripRequest } from "@/components/TripRequest";
import { company, packages, services, trustItems } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero-image">
        <div className="container-page grid min-h-[720px] items-center gap-10 py-14 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <div className="max-w-3xl text-white">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                <PlaneTakeoff size={18} className="text-gold" /> Travel agency in Prishtine
              </p>
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                Travel plans made simple, clear, and personal.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                {company.name} helps you book flights, hotels, and complete holiday packages with local support from {company.address}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/packages" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-black text-navy">
                  See packages <ArrowRight size={17} />
                </Link>
                <a href={company.phoneHref} className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black text-white hover:bg-white/10">
                  Call {company.phone}
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">What we do</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">Everything needed for a smoother trip.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <div className="h-full rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                      <Icon size={23} />
                    </div>
                    <h3 className="text-lg font-black text-navy">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
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
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Popular ideas</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">Start with a destination.</h2>
            </div>
            <Link href="/packages" className="inline-flex items-center gap-2 text-sm font-black text-sea">
              View all packages <ArrowRight size={17} />
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Why travelers choose us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Local support, premium attention.</h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              We keep travel planning human: direct communication, realistic offers, and practical help when plans change.
            </p>
          </div>
          <div className="grid gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-[8px] border border-white/10 bg-white/7 p-5">
                  <Icon className="mt-1 shrink-0 text-gold" size={24} />
                  <div>
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/68">{item.text}</p>
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
              <CheckCircle2 size={18} /> Ready to travel
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-navy sm:text-4xl">
              Send us your dates and we will prepare a clear offer.
            </h2>
          </div>
          <Link href="/support" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 text-sm font-black text-white lg:mt-0">
            Contact support
          </Link>
        </div>
      </section>
    </>
  );
}
