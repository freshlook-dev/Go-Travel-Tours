import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/data/site";

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/support", label: "Support" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/go-travel-logo.png" alt={company.name} width={64} height={80} className="h-16 w-auto" />
            <div>
              <p className="text-xl font-black uppercase">{company.name}</p>
              <p className="text-sm font-bold text-gold">Prishtine travel office</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            Flights, hotels, holiday packages, and practical support for travelers across Kosovo and Albania.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold">Menu</p>
          <div className="grid gap-3 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/72 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold">Legal</p>
          <div className="grid gap-3 text-sm">
            {legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/72 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold">Contact</p>
          <div className="space-y-3 text-sm text-white/76">
            <p className="flex items-center gap-3"><MapPin size={17} className="text-gold" /> {company.address}</p>
            <p className="flex items-center gap-3"><Phone size={17} className="text-gold" /> {company.phone}</p>
            <p className="flex items-center gap-3"><Mail size={17} className="text-gold" /> {company.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        (c) 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
