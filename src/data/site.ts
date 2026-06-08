import { BedDouble, BriefcaseBusiness, Headphones, MapPinned, Plane, ShieldCheck } from "lucide-react";

export const company = {
  name: "Go Travel & Tours",
  domain: "https://www.gotravelandtours.al",
  email: "info@gotravelandtours.al",
  primaryPhone: "+383 44 38 77 38",
  primaryPhoneHref: "tel:+38344387738",
  whatsapp: "https://wa.me/38344387738",
  supportName: "Go Travel & Tours Prishtina / Tirana",
};

export const offices = [
  {
    city: "Prishtine",
    country: "Kosove",
    countryEn: "Kosovo",
    address: "Rr. Ferid Curri, Prishtine",
    phone: "+383 44 38 77 38",
    phoneHref: "tel:+38344387738",
  },
  {
    city: "Tirane",
    country: "Shqiperi",
    countryEn: "Albania",
    address: 'Rruga "Perlat Rexhepi", Tirana, Albania',
    phone: "+355 69 297 2679",
    phoneHref: "tel:+355692972679",
  },
];

export const navLinks = [
  { href: "/", label: "Ballina / Home" },
  { href: "/services", label: "Sherbimet / Services" },
  { href: "/packages", label: "Paketat / Packages" },
  { href: "/about", label: "Rreth nesh / About" },
  { href: "/support", label: "Kontakt / Support" },
];

export const services = [
  {
    title: "Rezervime fluturimesh",
    titleEn: "Flight bookings",
    text: "Mbështetje për fluturime rajonale dhe ndërkombëtare nga Prishtina dhe Tirana.",
    textEn: "Regional and international flight support from Prishtine and Tirana.",
    icon: Plane,
  },
  {
    title: "Rezervime hotelesh",
    titleEn: "Hotel reservations",
    text: "Hotele qyteti, resorte bregdetare, qëndrime familjare dhe opsione premium sipas buxhetit tuaj.",
    textEn: "City hotels, beach resorts, family stays, and premium options matched to your budget.",
    icon: BedDouble,
  },
  {
    title: "Paketa pushimesh",
    titleEn: "Holiday packages",
    text: "Fluturime, hotele, transfere dhe eksperienca lokale në një ofertë të qartë.",
    textEn: "Flights, hotels, transfers, and local experiences combined into one clear offer.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Asistence udhetimi",
    titleEn: "Travel assistance",
    text: "Mbështetje njerëzore para nisjes, gjatë udhëtimit dhe pas kthimit.",
    textEn: "Human support before departure, during travel, and after you return home.",
    icon: Headphones,
  },
];

export const packages = [
  {
    destination: "Istanbul",
    country: "Turqi / Turkey",
    price: "nga EUR 189 / from EUR 189",
    length: "4 net / 4 nights",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Dubai",
    country: "Emiratet e Bashkuara / UAE",
    price: "nga EUR 399 / from EUR 399",
    length: "5 net / 5 nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Antalya",
    country: "Turqi / Turkey",
    price: "nga EUR 299 / from EUR 299",
    length: "7 net / 7 nights",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Vienna",
    country: "Austri / Austria",
    price: "nga EUR 149 / from EUR 149",
    length: "3 net / 3 nights",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Rome",
    country: "Itali / Italy",
    price: "nga EUR 229 / from EUR 229",
    length: "4 net / 4 nights",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Maldives",
    country: "Maldive / Maldives",
    price: "nga EUR 1,190 / from EUR 1,190",
    length: "7 net / 7 nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
  },
];

export const trustItems = [
  {
    title: "Dy zyra lokale",
    titleEn: "Two local offices",
    text: "Prishtine dhe Tirane",
    textEn: "Prishtine and Tirana",
    icon: MapPinned,
  },
  {
    title: "Udhezim i qarte",
    titleEn: "Clear guidance",
    text: "Opsione transparente para konfirmimit.",
    textEn: "Transparent travel options before you confirm.",
    icon: ShieldCheck,
  },
  {
    title: "Kontakt direkt",
    titleEn: "Direct support",
    text: `${company.primaryPhone} / +355 69 297 2679`,
    textEn: "Support by phone and WhatsApp.",
    icon: Headphones,
  },
];
