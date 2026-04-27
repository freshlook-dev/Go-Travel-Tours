import Link from "next/link";
import { LogIn } from "lucide-react";

export const metadata = {
  title: "Login",
  description: "Login page mockup for Go Travel & Tours customer accounts.",
};

export default function LoginPage() {
  return (
    <section className="bg-brand-sky py-20">
      <div className="section-shell grid min-h-[620px] items-center gap-10 lg:grid-cols-[0.95fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Customer access
          </p>
          <h1 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl">
            Login to manage your travel requests.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            This frontend-only account screen is ready for authentication once a
            backend is connected.
          </p>
        </div>
        <form className="rounded-[8px] bg-white p-6 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200">
          <label className="block text-sm font-bold text-brand-navy">
            Email
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="you@example.com" />
          </label>
          <label className="mt-4 block text-sm font-bold text-brand-navy">
            Password
            <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" placeholder="••••••••" />
          </label>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-4 text-sm font-black text-white">
            <LogIn size={18} /> Login
          </button>
          <p className="mt-5 text-center text-sm text-slate-600">
            No account yet?{" "}
            <Link href="/register" className="font-black text-brand-blue">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
