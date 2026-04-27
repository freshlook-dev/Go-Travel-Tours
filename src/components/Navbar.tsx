"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/flights", label: "Flights" },
  { href: "/hotels", label: "Hotels" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 shadow-lg shadow-slate-950/10 backdrop-blur">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/go-travel-logo.png"
            alt="Go Travel & Tours logo"
            width={66}
            height={82}
            className="h-14 w-auto"
            priority
          />
          <div className="leading-tight">
            <p className="text-base font-black uppercase tracking-wide text-white">
              Go Travel
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              & Tours
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-brand-navy"
                    : "text-white/82 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-brand-gold px-5 py-2.5 text-sm font-black text-brand-navy shadow-lg shadow-yellow-900/20 transition hover:bg-[#e7bd65]"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-navy px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/88 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand-gold px-4 py-3 text-center text-sm font-black text-brand-navy"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
