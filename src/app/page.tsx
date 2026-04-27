import Link from "next/link";
import { Award, Building2, CheckCircle2, PlaneTakeoff } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import { DestinationCard } from "@/components/DestinationCard";
import { HeroSearch } from "@/components/HeroSearch";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { deals, destinations, trustStats, whyChoose } from "@/data/travel";

export default function Home() {
  return (
    <>
      <section className="hero-bg">
        <div className="section-shell grid min-h-[720px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.95fr]">
          <MotionReveal>
            <div className="max-w-3xl text-white">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                <PlaneTakeoff size={18} className="text-brand-gold" />
                New office now serving travelers in Prishtina
              </p>
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Premium travel planning from Albania and Kosovo.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Book flights, hotels, and complete holiday packages with a trusted
                regional agency that keeps every journey clear, polished, and easy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/tours"
                  className="rounded-full bg-brand-gold px-7 py-4 text-center text-sm font-black text-brand-navy shadow-xl shadow-yellow-900/20"
                >
                  View packages
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black text-white hover:bg-white/10"
                >
                  Talk to an advisor
                </Link>
              </div>
            </div>
          </MotionReveal>
          <HeroSearch />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Popular destinations"
            title="Trips our travelers are booking now"
            description="Curated ideas for city breaks, beach holidays, premium escapes, and family travel."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <MotionReveal key={destination.name} delay={index * 0.05}>
                <DestinationCard destination={destination} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Featured deals"
            title="Smart offers with agency support"
            description="Sample travel deals are powered by mock data and ready for future API or Supabase integration."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {deals.map((deal, index) => (
              <MotionReveal key={deal.title} delay={index * 0.08}>
                <DealCard deal={deal} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <div>
              <SectionTitle
                align="left"
                eyebrow="Why choose us"
                title="Built for travelers who value trust and speed"
                description="From first quote to return flight, Go Travel & Tours keeps the process human, responsive, and detail-driven."
              />
              <Link
                href="/about"
                className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-black text-white hover:bg-brand-blue"
              >
                Meet the agency
              </Link>
            </div>
          </MotionReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-[8px] border border-slate-200 bg-slate-50 p-6">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-black text-brand-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <div className="section-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-black text-brand-gold">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/66">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              ["Licensed support", Award],
              ["Prishtina office", Building2],
              ["Transparent travel care", CheckCircle2],
            ].map(([label, Icon]) => (
              <div key={String(label)} className="flex items-center gap-3 text-white/78">
                <Icon className="text-brand-gold" size={22} />
                <span className="font-bold">{String(label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sky py-20">
        <div className="section-shell rounded-[8px] bg-white p-8 shadow-xl shadow-slate-200/80 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-brand-navy sm:text-4xl">
              Let Go Travel & Tours plan your next trip with clarity and care.
            </h2>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-brand-gold px-7 py-4 text-sm font-black text-brand-navy lg:mt-0"
          >
            Request an offer
          </Link>
        </div>
      </section>
    </>
  );
}
