"use client";

import { CalendarDays, MapPin, Send, Users } from "lucide-react";

export function TripRequest() {
  return (
    <form id="request" className="rounded-[8px] bg-white p-5 shadow-2xl shadow-slate-950/15 ring-1 ring-slate-200 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Quick request</p>
        <h2 className="mt-2 text-2xl font-black text-navy">Plan my trip</h2>
      </div>
      <div className="grid gap-3">
        <label className="rounded-2xl border border-slate-200 px-4 py-3">
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
            <MapPin size={15} /> Destination
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
              <CalendarDays size={15} /> Date
            </span>
            <input type="date" className="mt-2 w-full bg-transparent text-base font-bold text-navy outline-none" />
          </label>
          <label className="rounded-2xl border border-slate-200 px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
              <Users size={15} /> Travelers
            </span>
            <select className="mt-2 w-full bg-transparent text-base font-bold text-navy outline-none">
              <option>2 travelers</option>
              <option>1 traveler</option>
              <option>Family</option>
              <option>Group</option>
            </select>
          </label>
        </div>
        <input className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-bold text-navy outline-none focus:border-gold" placeholder="Name and phone number" />
        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-black text-navy">
          <Send size={18} /> Send request
        </button>
      </div>
    </form>
  );
}
