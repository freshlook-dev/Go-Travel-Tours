import { TripRequest } from "@/components/TripRequest";
import { services } from "@/data/site";

export const metadata = {
  title: "Services",
  description: "Flights, hotels, packages, and support from Go Travel & Tours.",
};

export default function ServicesPage() {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Services</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            Travel services with one point of contact.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Choose the service you need, send your details, and our team will prepare practical options.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <Icon className="text-gold" size={28} />
                  <h2 className="mt-5 text-xl font-black text-navy">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        <TripRequest />
      </div>
    </section>
  );
}
