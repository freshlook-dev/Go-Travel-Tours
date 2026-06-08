import { BedDouble, BriefcaseBusiness, Headphones, MapPinned, Plane, ShieldCheck } from "lucide-react";
import type { Language } from "@/components/LanguageProvider";

export type Localized = Record<Language, string>;

export function text(value: Localized, language: Language) {
  return value[language];
}

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
    city: { sq: "Prishtine", en: "Prishtine" },
    country: { sq: "Kosove", en: "Kosovo" },
    address: 'Rr. Ferid Curri, Prishtine',
    phone: "+383 44 38 77 38",
    phoneHref: "tel:+38344387738",
  },
  {
    city: { sq: "Tirane", en: "Tirana" },
    country: { sq: "Shqiperi", en: "Albania" },
    address: 'Rruga "Perlat Rexhepi", Tirana, Albania',
    phone: "+355 69 297 2679",
    phoneHref: "tel:+355692972679",
  },
];

export const navLinks = [
  { href: "/", label: { sq: "Ballina", en: "Home" } },
  { href: "/services", label: { sq: "Sherbimet", en: "Services" } },
  { href: "/packages", label: { sq: "Paketat", en: "Packages" } },
  { href: "/about", label: { sq: "Rreth nesh", en: "About" } },
  { href: "/support", label: { sq: "Kontakt", en: "Support" } },
];

export const services = [
  {
    title: { sq: "Rezervime fluturimesh", en: "Flight bookings" },
    text: {
      sq: "Mbeshtetje per fluturime rajonale dhe nderkombetare nga Prishtina dhe Tirana.",
      en: "Regional and international flight support from Prishtine and Tirana.",
    },
    icon: Plane,
  },
  {
    title: { sq: "Rezervime hotelesh", en: "Hotel reservations" },
    text: {
      sq: "Hotele qyteti, resorte bregdetare, qendrime familjare dhe opsione premium sipas buxhetit tuaj.",
      en: "City hotels, beach resorts, family stays, and premium options matched to your budget.",
    },
    icon: BedDouble,
  },
  {
    title: { sq: "Paketa pushimesh", en: "Holiday packages" },
    text: {
      sq: "Fluturime, hotele, transfere dhe eksperienca lokale ne nje oferte te qarte.",
      en: "Flights, hotels, transfers, and local experiences combined into one clear offer.",
    },
    icon: BriefcaseBusiness,
  },
  {
    title: { sq: "Asistence udhetimi", en: "Travel assistance" },
    text: {
      sq: "Mbeshtetje njerezore para nisjes, gjate udhetimit dhe pas kthimit.",
      en: "Human support before departure, during travel, and after you return home.",
    },
    icon: Headphones,
  },
];

export const packages = [
  {
    destination: "Istanbul",
    country: { sq: "Turqi", en: "Turkey" },
    price: { sq: "nga EUR 189", en: "from EUR 189" },
    length: { sq: "4 net", en: "4 nights" },
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Dubai",
    country: { sq: "Emiratet e Bashkuara", en: "UAE" },
    price: { sq: "nga EUR 399", en: "from EUR 399" },
    length: { sq: "5 net", en: "5 nights" },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Antalya",
    country: { sq: "Turqi", en: "Turkey" },
    price: { sq: "nga EUR 299", en: "from EUR 299" },
    length: { sq: "7 net", en: "7 nights" },
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Vienna",
    country: { sq: "Austri", en: "Austria" },
    price: { sq: "nga EUR 149", en: "from EUR 149" },
    length: { sq: "3 net", en: "3 nights" },
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Rome",
    country: { sq: "Itali", en: "Italy" },
    price: { sq: "nga EUR 229", en: "from EUR 229" },
    length: { sq: "4 net", en: "4 nights" },
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Maldives",
    country: { sq: "Maldive", en: "Maldives" },
    price: { sq: "nga EUR 1,190", en: "from EUR 1,190" },
    length: { sq: "7 net", en: "7 nights" },
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
  },
];

export const trustItems = [
  {
    title: { sq: "Dy zyra lokale", en: "Two local offices" },
    text: { sq: "Prishtine dhe Tirane", en: "Prishtine and Tirana" },
    icon: MapPinned,
  },
  {
    title: { sq: "Udhezim i qarte", en: "Clear guidance" },
    text: { sq: "Opsione transparente para konfirmimit.", en: "Transparent travel options before you confirm." },
    icon: ShieldCheck,
  },
  {
    title: { sq: "Kontakt direkt", en: "Direct support" },
    text: { sq: `${company.primaryPhone} / +355 69 297 2679`, en: "Support by phone and WhatsApp." },
    icon: Headphones,
  },
];
