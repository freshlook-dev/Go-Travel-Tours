import Link from "next/link";
import { UserPlus } from "lucide-react";

export const metadata = {
  title: "Register",
  description: "Register page mockup for Go Travel & Tours customer accounts.",
};

export default function RegisterPage() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid min-h-[620px] items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <form className="order-2 rounded-[8px] bg-slate-50 p-6 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 lg:order-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-brand-navy">
              First name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="First name" />
            </label>
            <label className="text-sm font-bold text-brand-navy">
              Last name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="Last name" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold text-brand-navy">
            Email
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="you@example.com" />
          </label>
          <label className="mt-4 block text-sm font-bold text-brand-navy">
            Password
            <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="Create password" />
          </label>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-4 text-sm font-black text-brand-navy">
            <UserPlus size={18} /> Create account
          </button>
          <p className="mt-5 text-center text-sm text-slate-600">
            Already registered?{" "}
            <Link href="/login" className="font-black text-brand-blue">
              Login
            </Link>
          </p>
        </form>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Travel account
          </p>
          <h1 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl">
            Save requests, quotes, and future trips.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Registration is currently a polished mockup, with fields ready for
            Supabase Auth or another API service.
          </p>
        </div>
      </div>
    </section>
  );
}
