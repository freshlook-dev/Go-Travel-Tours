import { BedDouble, BriefcaseBusiness, Headphones, MapPinned, Plane, ShieldCheck } from "lucide-react";

export const company = {
  name: "Go Travel & Tours",
  domain: "https://www.gotravelandtours.al",
  phone: "+383 44 38 77 38",
  phoneHref: "tel:+38344387738",
  whatsapp: "https://wa.me/38344387738",
  email: "info@gotravelandtours.al",
  address: "Rr. Ferid Curri, Prishtine",
  supportName: "Go Travel & Tours Prishtina",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export const services = [
  {
    title: "Flight bookings",
    text: "Regional and international flight support with flexible date guidance from Prishtine and Tirana.",
    icon: Plane,
  },
  {
    title: "Hotel reservations",
    text: "City hotels, beach resorts, family stays, and premium properties matched to your budget.",
    icon: BedDouble,
  },
  {
    title: "Holiday packages",
    text: "Flights, hotels, transfers, and local experiences combined into one clear offer.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Travel assistance",
    text: "Human support before departure, during travel, and after you return home.",
    icon: Headphones,
  },
];

export const packages = [
  {
    destination: "Istanbul",
    country: "Turkey",
    price: "from EUR 189",
    length: "4 nights",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Dubai",
    country: "UAE",
    price: "from EUR 399",
    length: "5 nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Antalya",
    country: "Turkey",
    price: "from EUR 299",
    length: "7 nights",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Vienna",
    country: "Austria",
    price: "from EUR 149",
    length: "3 nights",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Rome",
    country: "Italy",
    price: "from EUR 229",
    length: "4 nights",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85",
  },
  {
    destination: "Maldives",
    country: "Maldives",
    price: "from EUR 1,190",
    length: "7 nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
  },
];

export const trustItems = [
  { title: "Local office", text: company.address, icon: MapPinned },
  { title: "Clear guidance", text: "Transparent travel options before you confirm.", icon: ShieldCheck },
  { title: "Direct support", text: company.phone, icon: Headphones },
];
