import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Go Travel & Tours, including how customer and travel request information is handled.",
};

const sections = [
  {
    title: "Information we collect",
    text: "When you contact Go Travel & Tours, request an offer, or use our website forms, we may collect your name, email address, phone number, destination preferences, travel dates, passenger details, and message content needed to prepare travel services.",
  },
  {
    title: "How we use information",
    text: "We use submitted information to respond to requests, prepare quotes, manage travel arrangements, provide customer support, improve our services, and communicate important travel updates.",
  },
  {
    title: "Sharing with travel partners",
    text: "When required to fulfill a travel request, we may share relevant details with airlines, hotels, tour operators, transfer providers, visa or insurance partners, and payment or technology providers.",
  },
  {
    title: "Data retention",
    text: "We keep information only for as long as needed to provide services, meet legal or accounting requirements, resolve disputes, and maintain legitimate business records.",
  },
  {
    title: "Your choices",
    text: "You may contact us to request access, correction, or deletion of your personal information, subject to applicable legal, security, and booking-related obligations.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell max-w-4xl">
        <div className="mb-10 rounded-[8px] bg-brand-navy p-6 text-white sm:p-8">
          <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            <ShieldCheck size={18} /> Legal document
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Last updated: April 28, 2026. This page explains how Go Travel &
            Tours handles information submitted through this website and our
            travel service channels.
          </p>
        </div>

        <div className="space-y-8 text-slate-700">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-black text-brand-navy">{section.title}</h2>
              <p className="mt-3 leading-8">{section.text}</p>
            </article>
          ))}

          <article>
            <h2 className="text-xl font-black text-brand-navy">Contact</h2>
            <p className="mt-3 leading-8">
              For privacy questions, contact us at{" "}
              <a className="font-bold text-brand-blue" href="mailto:info@gotraveltours.com">
                info@gotraveltours.com
              </a>{" "}
              or visit our <Link className="font-bold text-brand-blue" href="/support">support page</Link>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
