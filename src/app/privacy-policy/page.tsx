import { company, offices } from "@/data/site";

export const metadata = {
  title: "Politika e Privatesise / Privacy Policy",
  description: "Politika e privatesise per Go Travel & Tours.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Dokument ligjor / Legal document</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">Politika e Privatesise</h1>
        <p className="mt-3 text-2xl font-black text-slate-500">Privacy Policy</p>
        <p className="mt-4 text-sm font-bold text-slate-500">Perditesuar: 8 qershor 2026 / Last updated: June 8, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-navy">Informacioni qe mbledhim / Information we collect</h2>
            <p className="mt-3">Ne mund te mbledhim emrin, numrin e telefonit, email-in, preferencat e destinacionit, datat e udhetimit, detajet e pasagjereve dhe mesazhet kur kerkoni sherbime udhetimi.</p>
            <p className="mt-2 text-slate-500">We may collect your name, phone number, email address, destination preferences, travel dates, passenger details, and messages when you request travel services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Si e perdorim informacionin / How we use information</h2>
            <p className="mt-3">Informacioni perdoret per t&apos;iu pergjigjur kerkesave, per te pergatitur oferta, per te menaxhuar rezervime dhe per te ofruar mbeshtetje.</p>
            <p className="mt-2 text-slate-500">We use information to respond to requests, prepare offers, manage bookings, communicate travel updates, and provide customer support.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Partneret e udhetimit / Travel partners</h2>
            <p className="mt-3">Kur eshte e nevojshme, mund te ndajme informacion rezervimi me linja ajrore, hotele, operatore turistike, ofrues transferesh dhe furnitore te tjere udhetimi.</p>
            <p className="mt-2 text-slate-500">When needed, we may share relevant booking information with airlines, hotels, tour operators, transfer providers, and other travel suppliers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Kontakt / Contact</h2>
            <p className="mt-3">Per pyetje mbi privatesine, kontaktoni {company.email} ose vizitoni zyrat tona.</p>
            <div className="mt-3 grid gap-2">
              {offices.map((office) => (
                <p key={office.city} className="font-bold text-slate-600">{office.city}: {office.address}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
