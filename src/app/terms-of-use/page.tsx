"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { company } from "@/data/site";

const content = {
  sq: {
    eyebrow: "Dokument ligjor",
    title: "Kushtet e Perdorimit",
    updated: "Perditesuar: 8 qershor 2026",
    sections: [
      ["Informacioni i faqes", `Kjo faqe ofron informacion per ${company.name}, sherbimet e udhetimit, ide destinacionesh dhe menyra per te kontaktuar ekipin tone.`],
      ["Cmimet dhe disponueshmeria", "Cmimet dhe paketat ne faqe jane oferta shembull. Disponueshmeria perfundimtare dhe detajet e rezervimit konfirmohen nga ekipi yne dhe furnitoret e udhetimit."],
      ["Pergjegjesia e klientit", "Klientet jane pergjegjes per kontrollimin e te dhenave te pasagjereve, dokumenteve te udhetimit, kerkesave per viza dhe kushteve te rezervimit."],
      ["Mbeshtetje", `Per pyetje rreth ketyre kushteve, kontaktoni ${company.email} ose telefononi ${company.primaryPhone}.`],
    ],
  },
  en: {
    eyebrow: "Legal document",
    title: "Terms of Use",
    updated: "Last updated: June 8, 2026",
    sections: [
      ["Website information", `This website provides information about ${company.name}, travel services, sample destination ideas, and ways to contact our team.`],
      ["Prices and availability", "Prices and packages shown on the website are sample offers. Final availability, fare rules, and booking details are confirmed directly with our team and travel suppliers."],
      ["Customer responsibility", "Customers are responsible for checking passenger details, travel documents, visa requirements, and confirmed booking terms before payment or travel."],
      ["Support", `For questions about these terms, contact ${company.email} or call ${company.primaryPhone}.`],
    ],
  },
};

export default function TermsOfUsePage() {
  const { language } = useLanguage();
  const page = content[language];

  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page max-w-4xl rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
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
        </div>
      </div>
    </section>
  );
}
