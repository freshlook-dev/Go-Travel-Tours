"use client";

import { CalendarDays, MapPin, Send, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function TripRequest() {
  const { language } = useLanguage();

  return (
    <form id="request" className="rounded-[8px] bg-white p-5 shadow-2xl shadow-slate-950/15 ring-1 ring-slate-200 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
          {language === "sq" ? "Kerkese e shpejte" : "Quick request"}
        </p>
        <h2 className="mt-2 text-2xl font-black text-navy">
          {language === "sq" ? "Planifiko udhetimin" : "Plan my trip"}
        </h2>
      </div>
      <div className="grid gap-3">
        <label className="rounded-2xl border border-slate-200 px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <MapPin size={15} /> {language === "sq" ? "Destinacioni" : "Destination"}
          </span>
          <select className="mt-2 w-full bg-transparent text-base font-bold text-navy outline-none">
            <option>Istanbul</option>
            <option>Dubai</option>
            <option>Antalya</option>
            <option>Vienna</option>
            <option>Rome</option>
            <option>Maldives</option>
          </select>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="rounded-2xl border border-slate-200 px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
              <CalendarDays size={15} /> {language === "sq" ? "Data" : "Date"}
            </span>
            <input type="date" className="mt-2 w-full bg-transparent text-base font-bold text-navy outline-none" />
          </label>
          <label className="rounded-2xl border border-slate-200 px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
              <Users size={15} /> {language === "sq" ? "Udhetare" : "Travelers"}
            </span>
            <select className="mt-2 w-full bg-transparent text-base font-bold text-navy outline-none">
              <option>{language === "sq" ? "2 udhetare" : "2 travelers"}</option>
              <option>{language === "sq" ? "1 udhetar" : "1 traveler"}</option>
              <option>{language === "sq" ? "Familje" : "Family"}</option>
              <option>{language === "sq" ? "Grup" : "Group"}</option>
            </select>
          </label>
        </div>
        <input className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-bold text-navy outline-none focus:border-gold" placeholder={language === "sq" ? "Emri dhe telefoni" : "Name and phone number"} />
        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-black text-navy">
          <Send size={18} /> {language === "sq" ? "Dergo kerkese" : "Send request"}
        </button>
      </div>
    </form>
  );
}
