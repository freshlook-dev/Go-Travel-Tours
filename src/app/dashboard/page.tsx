import Link from "next/link";
import { accountActions, dashboardTrips } from "@/data/travel";

export const metadata = {
  title: "Dashboard",
  description: "Mock customer dashboard for Go Travel & Tours account users.",
};

export default function DashboardPage() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="section-shell">
        <div className="rounded-[8px] bg-brand-navy p-6 text-white sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            Account dashboard
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-3xl font-black sm:text-5xl">Welcome back, traveler.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                A frontend-ready customer area for saved quotes, upcoming trips,
                account actions, and future authenticated booking history.
              </p>
            </div>
            <Link href="/contact" className="rounded-full bg-brand-gold px-6 py-3 text-center text-sm font-black text-brand-navy">
              New request
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-black text-brand-navy">Trip activity</h2>
            <div className="mt-5 space-y-4">
              {dashboardTrips.map((trip) => {
                const Icon = trip.icon;
                return (
                  <div key={trip.destination} className="flex items-center justify-between gap-4 rounded-[8px] bg-slate-50 p-4">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky text-brand-blue">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="font-black text-brand-navy">{trip.destination}</p>
                        <p className="text-sm font-semibold text-slate-500">{trip.date}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-brand-blue ring-1 ring-slate-200">
                      {trip.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-black text-brand-navy">Quick actions</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {accountActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button key={action.title} className="rounded-[8px] border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-brand-gold hover:bg-white">
                    <Icon className="text-brand-gold" size={24} />
                    <p className="mt-4 text-sm font-black text-brand-navy">{action.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
