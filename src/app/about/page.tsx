import Image from "next/image";
import { company } from "@/data/site";

export const metadata = {
  title: "About",
  description: "About Go Travel & Tours in Prishtine.",
};

export default function AboutPage() {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[8px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <Image src="/go-travel-logo.png" alt={company.name} width={220} height={280} className="h-48 w-auto" />
          <h1 className="mt-8 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            A focused travel agency for Kosovo and Albania.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {company.name} works with travelers who want clear offers, real support, and practical planning for flights,
            hotels, and holidays.
          </p>
        </div>
        <div className="grid gap-5">
          {[
            ["Office", company.address],
            ["Phone", company.phone],
            ["Website", "www.gotravelandtours.al"],
            ["Support", "Flights, hotels, packages, and customer care"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{label}</p>
              <p className="mt-2 text-xl font-black text-navy">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
