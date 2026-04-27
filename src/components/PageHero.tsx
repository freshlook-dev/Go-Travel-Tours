export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="section-shell py-20 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
          {description}
        </p>
      </div>
    </section>
  );
}
