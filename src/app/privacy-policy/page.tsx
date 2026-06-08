"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { company, offices, text } from "@/data/site";

const content = {
  sq: {
    eyebrow: "Dokument ligjor",
    title: "Politika e Privatesise",
    updated: "Perditesuar: 8 qershor 2026",
    sections: [
      ["Informacioni qe mbledhim", "Ne mund te mbledhim emrin, numrin e telefonit, email-in, preferencat e destinacionit, datat e udhetimit, detajet e pasagjereve dhe mesazhet kur kerkoni sherbime udhetimi."],
      ["Si e perdorim informacionin", "Informacioni perdoret per t'iu pergjigjur kerkesave, per te pergatitur oferta, per te menaxhuar rezervime dhe per te ofruar mbeshtetje."],
      ["Partneret e udhetimit", "Kur eshte e nevojshme, mund te ndajme informacion rezervimi me linja ajrore, hotele, operatore turistike, ofrues transferesh dhe furnitore te tjere udhetimi."],
    ],
    contact: "Per pyetje mbi privatesine, kontaktoni",
  },
  en: {
    eyebrow: "Legal document",
    title: "Privacy Policy",
    updated: "Last updated: June 8, 2026",
    sections: [
      ["Information we collect", "We may collect your name, phone number, email address, destination preferences, travel dates, passenger details, and messages when you request travel services."],
      ["How we use information", "We use information to respond to requests, prepare offers, manage bookings, communicate travel updates, and provide customer support."],
      ["Travel partners", "When needed, we may share relevant booking information with airlines, hotels, tour operators, transfer providers, and other travel suppliers."],
    ],
    contact: "For privacy questions, contact",
  },
};

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const page = content[language];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{page.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">{page.title}</h1>
        <p className="mt-4 text-sm font-bold text-slate-500">{page.updated}</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          {page.sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              <p className="mt-3">{body}</p>
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-black text-navy">{language === "sq" ? "Kontakt" : "Contact"}</h2>
            <p className="mt-3">{page.contact} {company.email}.</p>
            <div className="mt-3 grid gap-2">
              {offices.map((office) => (
                <p key={office.address} className="font-bold text-slate-600">{text(office.city, language)}: {office.address}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
