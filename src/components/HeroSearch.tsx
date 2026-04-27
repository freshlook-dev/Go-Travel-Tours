"use client";

import { motion } from "framer-motion";
import { BedDouble, Briefcase, CalendarDays, MapPin, Plane, Search, Users } from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "flights", label: "Flights", icon: Plane },
  { key: "hotels", label: "Hotels", icon: BedDouble },
  { key: "packages", label: "Packages", icon: Briefcase },
];

export function HeroSearch() {
  const [active, setActive] = useState("flights");

  return (
    <motion.div
      className="glass-panel w-full max-w-5xl rounded-[28px] p-4 sm:p-6"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const selected = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${
                selected
                  ? "bg-brand-navy text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Icon size={17} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <form className="grid gap-3 lg:grid-cols-[1fr_1fr_0.9fr_0.75fr_auto]">
        <label className="group rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <MapPin size={15} /> From
          </span>
          <select className="mt-2 w-full bg-transparent text-base font-bold text-brand-navy outline-none">
            <option>Prishtina, Kosovo</option>
            <option>Tirana, Albania</option>
            <option>Skopje, North Macedonia</option>
          </select>
        </label>

        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <MapPin size={15} /> To
          </span>
          <select className="mt-2 w-full bg-transparent text-base font-bold text-brand-navy outline-none">
            <option>Istanbul</option>
            <option>Dubai</option>
            <option>Antalya</option>
            <option>Paris</option>
            <option>Vienna</option>
            <option>Maldives</option>
          </select>
        </label>

        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <CalendarDays size={15} /> Dates
          </span>
          <input
            type="date"
            className="mt-2 w-full bg-transparent text-base font-bold text-brand-navy outline-none"
          />
        </label>

        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <Users size={15} /> Guests
          </span>
          <select className="mt-2 w-full bg-transparent text-base font-bold text-brand-navy outline-none">
            <option>2 travelers</option>
            <option>1 traveler</option>
            <option>Family</option>
            <option>Group</option>
          </select>
        </label>

        <button
          type="button"
          className="inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-brand-gold px-6 text-base font-black text-brand-navy shadow-xl shadow-yellow-900/20 transition hover:bg-[#e8bf6a]"
        >
          <Search size={20} />
          Search
        </button>
      </form>

      <p className="mt-4 text-sm font-medium text-slate-600">
        {active === "flights"
          ? "Compare flexible flights from Prishtina and Tirana."
          : active === "hotels"
            ? "Find trusted hotels with agency support before check-in."
            : "Build flight, hotel, transfer, and tour packages in one request."}
      </p>
    </motion.div>
  );
}
