import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/site";

export const metadata = {
  title: "Paketat / Packages",
  description: "Ide per paketa pushimesh nga Go Travel & Tours.",
};

export default function PackagesPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Paketat / Packages</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            Ide destinacionesh per kerkesen tuaj te radhes.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Keto paketa perdorin cmime shembull dhe mund te pershtaten sipas datave dhe buxhetit tuaj.
            <span className="mt-3 block text-slate-500">
              These packages use sample pricing and can be tailored to your dates and budget.
            </span>
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
