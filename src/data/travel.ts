import {
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  CreditCard,
  Headphones,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export type Destination = {
  name: string;
  country: string;
  description: string;
  image: string;
  fromPrice: string;
  tag: string;
};

export type Deal = {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  category: "Flight" | "Hotel" | "Package";
  rating: string;
};

export type Flight = {
  route: string;
  airline: string;
  dates: string;
  price: string;
  perks: string;
};

export type Hotel = {
  name: string;
  location: string;
  stars: number;
  price: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    name: "Istanbul",
    country: "Turkey",
    description: "Historic bazaars, Bosphorus views, and year-round city breaks.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 189",
    tag: "City escape",
  },
  {
    name: "Dubai",
    country: "UAE",
    description: "Luxury hotels, desert experiences, and direct flight options.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 399",
    tag: "Premium",
  },
  {
    name: "Antalya",
    country: "Turkey",
    description: "Family resorts, beaches, and all-inclusive holiday packages.",
    image: "https://images.unsplash.com/photo-1616423841125-830766fbe0c8?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 299",
    tag: "Beach",
  },
  {
    name: "Paris",
    country: "France",
    description: "Romantic weekends with curated hotels near the city center.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 249",
    tag: "Weekend",
  },
  {
    name: "Rome",
    country: "Italy",
    description: "Culture, food, and flexible flight plus hotel combinations.",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 229",
    tag: "Culture",
  },
  {
    name: "Maldives",
    country: "Maldives",
    description: "Private-island resorts and honeymoon-ready premium packages.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    fromPrice: "from EUR 1,190",
    tag: "Luxury",
  },
];

export const deals: Deal[] = [
  {
    title: "Prishtina to Istanbul",
    location: "Round-trip flight",
    duration: "4 nights",
    price: "EUR 189",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=85",
    category: "Flight",
    rating: "4.8",
  },
  {
    title: "Antalya All Inclusive",
    location: "Beach resort package",
    duration: "7 nights",
    price: "EUR 499",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
    category: "Package",
    rating: "4.9",
  },
  {
    title: "Dubai Premium Stay",
    location: "Hotel and airport transfer",
    duration: "5 nights",
    price: "EUR 690",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1200&q=85",
    category: "Hotel",
    rating: "4.7",
  },
];

export const flights: Flight[] = [
  { route: "Prishtina - Istanbul", airline: "Turkish Airlines", dates: "May - September", price: "from EUR 189", perks: "Cabin bag included" },
  { route: "Tirana - Vienna", airline: "Austrian", dates: "Flexible dates", price: "from EUR 149", perks: "Fast city connections" },
  { route: "Prishtina - Dubai", airline: "Flydubai", dates: "Weekly departures", price: "from EUR 399", perks: "Hotel bundles available" },
  { route: "Tirana - Rome", airline: "ITA Airways", dates: "Weekend options", price: "from EUR 129", perks: "Short-stay fares" },
];

export const hotels: Hotel[] = [
  {
    name: "Bosphorus View Collection",
    location: "Istanbul",
    stars: 5,
    price: "from EUR 110 / night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Palm Marina Resort",
    location: "Dubai",
    stars: 5,
    price: "from EUR 185 / night",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Lara Family Beach",
    location: "Antalya",
    stars: 4,
    price: "from EUR 89 / night",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
  },
];

export const trustStats = [
  { value: "12k+", label: "happy travelers" },
  { value: "24/7", label: "travel support" },
  { value: "2", label: "markets served" },
  { value: "4.9/5", label: "client rating" },
];

export const whyChoose = [
  { title: "Local expertise", text: "Advisors in Albania and Kosovo who understand regional routes and traveler needs.", icon: MapPin },
  { title: "Trusted planning", text: "Clear options for flights, hotels, transfers, tours, and documents before you book.", icon: ShieldCheck },
  { title: "Premium support", text: "Responsive assistance before departure, during travel, and after your return.", icon: Headphones },
  { title: "Flexible payments", text: "Transparent prices, tailored bundles, and support for group or family bookings.", icon: CreditCard },
];

export const dashboardTrips = [
  { destination: "Istanbul", status: "Booked", date: "18 May 2026", icon: Plane },
  { destination: "Antalya", status: "Quote sent", date: "02 June 2026", icon: CalendarDays },
  { destination: "Dubai", status: "Wishlist", date: "Flexible", icon: Sparkles },
];

export const accountActions = [
  { title: "Saved packages", icon: BriefcaseBusiness },
  { title: "Hotel requests", icon: BedDouble },
  { title: "Flight alerts", icon: Clock },
  { title: "Loyalty status", icon: Star },
];
