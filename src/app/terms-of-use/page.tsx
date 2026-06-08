import { company } from "@/data/site";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Go Travel & Tours.",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page max-w-4xl rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Legal document</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">Terms of Use</h1>
        <p className="mt-4 text-sm font-bold text-slate-500">Last updated: June 8, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-navy">Website information</h2>
            <p className="mt-3">This website provides information about {company.name}, travel services, sample destination ideas, and ways to contact our team.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Prices and availability</h2>
            <p className="mt-3">Prices and packages shown on the website are sample offers. Final availability, fare rules, and booking details are confirmed directly with our team and travel suppliers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Customer responsibility</h2>
            <p className="mt-3">Customers are responsible for checking passenger details, travel documents, visa requirements, and confirmed booking terms before payment or travel.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Support</h2>
            <p className="mt-3">For questions about these terms, contact {company.email} or call {company.phone}.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
