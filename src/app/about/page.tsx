import { Building2, Globe2, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "About Us",
  description: "About Go Travel & Tours, a premium travel agency in Albania and Kosovo.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A regional travel agency with a premium service mindset"
        description="Go Travel & Tours helps travelers in Albania and Kosovo book with confidence, now with an expanding presence in Prishtina."
      />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Our story"
              title="Human travel advice backed by modern digital structure"
              description="The agency focuses on clear communication, carefully selected offers, and a premium customer experience across flights, hotels, packages, and group travel."
            />
            <p className="text-base leading-8 text-slate-600">
              The website is built to grow with the business: mock data today,
              clean data models tomorrow, and a path toward Supabase, CRM,
              payment, or supplier API integrations when the time is right.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Albania and Kosovo", "Regional market focus with local traveler knowledge.", Globe2],
              ["Prishtina office", "A new office presence for consultations and customer support.", Building2],
              ["Travelers first", "Practical guidance before, during, and after each trip.", UsersRound],
            ].map(([title, text, Icon]) => (
              <div key={String(title)} className="rounded-[8px] border border-slate-200 bg-slate-50 p-6">
                <Icon className="text-brand-gold" size={28} />
                <h2 className="mt-4 text-xl font-black text-brand-navy">{String(title)}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
