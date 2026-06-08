"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { company, navLinks, text } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/go-travel-logo.png" alt={company.name} width={58} height={72} className="h-14 w-auto" priority />
          <div className="leading-tight">
            <p className="text-lg font-black uppercase tracking-wide text-navy">Go Travel</p>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">& Tours</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-navy text-white" : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                }`}
              >
                {text(item.label, language)}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-navy transition hover:border-gold hover:bg-amber-50"
            aria-label="Change language"
          >
            {language === "sq" ? "EN" : "SQ"}
          </button>
          <a href={company.primaryPhoneHref} className="text-sm font-black text-navy">
            {company.primaryPhone}
          </a>
          <a href="#request" className="rounded-full bg-gold px-5 py-3 text-sm font-black text-navy shadow-lg shadow-amber-900/10">
            {language === "sq" ? "Kerko oferte" : "Request trip"}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-2 pt-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
              >
                {text(item.label, language)}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-black text-navy"
            >
              {language === "sq" ? "Switch to English" : "Kalo ne shqip"}
            </button>
            <a href={company.primaryPhoneHref} className="rounded-2xl bg-navy px-4 py-3 text-center text-sm font-black text-white">
              {company.primaryPhone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
