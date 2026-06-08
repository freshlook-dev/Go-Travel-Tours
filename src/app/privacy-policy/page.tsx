import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Go Travel & Tours.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Legal document</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm font-bold text-slate-500">Last updated: June 8, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-navy">Information we collect</h2>
            <p className="mt-3">We may collect your name, phone number, email address, destination preferences, travel dates, passenger details, and messages when you request travel services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">How we use information</h2>
            <p className="mt-3">We use information to respond to requests, prepare offers, manage bookings, communicate travel updates, and provide customer support.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Travel partners</h2>
            <p className="mt-3">When needed, we may share relevant booking information with airlines, hotels, tour operators, transfer providers, and other travel suppliers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-navy">Contact</h2>
            <p className="mt-3">For privacy questions, contact {company.email} or visit us at {company.address}.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
