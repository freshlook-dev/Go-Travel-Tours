import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const links = [
  ["Flights", "/flights"],
  ["Hotels", "/hotels"],
  ["Tours", "/tours"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
  ["Dashboard", "/dashboard"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-of-use"],
  ["Support", "/support"],
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.75fr_0.75fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/go-travel-logo.png"
              alt="Go Travel & Tours logo"
              width={72}
              height={90}
              className="h-16 w-auto"
            />
            <div>
              <p className="text-xl font-black uppercase">Go Travel & Tours</p>
              <p className="text-sm font-semibold text-brand-gold">
                Albania and Kosovo travel experts
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Premium support for flights, hotels, packages, corporate travel,
            and unforgettable holidays from our growing regional network.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Explore
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-white/72 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Legal
          </p>
          <div className="grid gap-3 text-sm">
            {legalLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-white/72 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Contact
          </p>
          <div className="space-y-3 text-sm text-white/78">
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-brand-gold" />
              New office in Prishtina, Kosovo
            </p>
            <p className="flex items-center gap-3">
              <Phone size={17} className="text-brand-gold" />
              +383 44 000 000
            </p>
            <p className="flex items-center gap-3">
              <Mail size={17} className="text-brand-gold" />
              info@gotraveltours.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        (c) 2026 Go Travel & Tours. Built for modern travel bookings.
      </div>
    </footer>
  );
}
