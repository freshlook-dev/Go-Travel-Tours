import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/site";

export const metadata = {
  title: "Packages",
  description: "Holiday package ideas from Go Travel & Tours.",
};

export default function PackagesPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Packages</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            Destination ideas ready for your next request.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These packages use sample pricing and are ready for future booking, Supabase, or supplier API integration.
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
