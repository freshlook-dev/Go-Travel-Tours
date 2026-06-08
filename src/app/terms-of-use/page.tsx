import { company } from "@/data/site";

export const metadata = {
  title: "Kushtet e Perdorimit / Terms of Use",
  description: "Kushtet e perdorimit per Go Travel & Tours.",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page max-w-4xl rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Dokument ligjor / Legal document</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">Kushtet e Perdorimit</h1>
        <p className="mt-3 text-2xl font-black text-slate-500">Terms of Use</p>
        <p className="mt-4 text-sm font-bold text-slate-500">Perditesuar: 8 qershor 2026 / Last updated: June 8, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-navy">Informacioni i faqes / Website information</h2>
            <p className="mt-3">Kjo faqe ofron informacion per {company.name}, sherbimet e udhetimit, ide destinacionesh dhe menyra per te kontaktuar ekipin tone.</p>
            <p className="mt-2 text-slate-500">This website provides information about {company.name}, travel services, sample destination ideas, and ways to contact our team.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Cmimet dhe disponueshmeria / Prices and availability</h2>
            <p className="mt-3">Cmimet dhe paketat ne faqe jane oferta shembull. Disponueshmeria perfundimtare dhe detajet e rezervimit konfirmohen nga ekipi yne dhe furnitoret e udhetimit.</p>
            <p className="mt-2 text-slate-500">Prices and packages shown on the website are sample offers. Final availability, fare rules, and booking details are confirmed directly with our team and travel suppliers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Pergjegjesia e klientit / Customer responsibility</h2>
            <p className="mt-3">Klientet jane pergjegjes per kontrollimin e te dhenave te pasagjereve, dokumenteve te udhetimit, kerkesave per viza dhe kushteve te rezervimit.</p>
            <p className="mt-2 text-slate-500">Customers are responsible for checking passenger details, travel documents, visa requirements, and confirmed booking terms before payment or travel.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Mbeshtetje / Support</h2>
            <p className="mt-3">Per pyetje rreth ketyre kushteve, kontaktoni {company.email} ose telefononi {company.primaryPhone}.</p>
            <p className="mt-2 text-slate-500">For questions about these terms, contact {company.email} or call {company.primaryPhone}.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
