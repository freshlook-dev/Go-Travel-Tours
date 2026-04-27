"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[8px] bg-white p-6 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-brand-navy">
          Full name
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="Your name" />
        </label>
        <label className="text-sm font-bold text-brand-navy">
          Email
          <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="you@example.com" />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-brand-navy">
          Phone
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="+383 ..." />
        </label>
        <label className="text-sm font-bold text-brand-navy">
          Service
          <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-gold">
            <option>Flights</option>
            <option>Hotels</option>
            <option>Tours and packages</option>
            <option>Corporate travel</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold text-brand-navy">
        Message
        <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="Tell us where you want to go." />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-4 text-sm font-black text-white transition hover:bg-brand-blue sm:w-auto"
      >
        <Send size={18} />
        Send request
      </button>
      {sent ? (
        <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
          Thanks. This demo form is ready for a future Supabase or API integration.
        </p>
      ) : null}
    </form>
  );
}
