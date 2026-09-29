const references = [
  {
    name: "Barhal Havalimanı",
    work: "Tokat Havalimanı yapımı",
    period: "2018–2020",
  },
  {
    name: "Lara Mühendislik",
    work: "Maden / taş ocağı işi",
    period: "2018–2020",
  },
  {
    name: "KCT Yol Yapı İnşaat Ticaret A.Ş.",
    period: "2025",
  },
  {
    name: "Nesce İnşaat Enerji ve Ticaret A.Ş.",
    period: "2016–2018",
  },
  {
    name: "Odak Asfalt A.Ş. / ÖSAK İnşaat Sanayi ve Ticaret A.Ş.",
    period: "1984–1994",
  },
  {
    name: "IC İçtaş İnşaat",
    work: "Baraj",
    period: "2008–2010",
  },
  {
    name: "Nimsan Niksar Kireç Sanayi ve Ticaret A.Ş.",
    period: "1995–2012",
  },
  {
    name: "SANKO Holding",
    period: "2013–2016",
  },
  {
    name: "TAV İnşaat",
    period: "2018",
  },
  {
    name: "Ağaoğlu İnşaat",
    period: "2014–2016",
  },
  {
    name: "Başaroğlu İnşaat",
    period: "Dönem belirtilmedi",
  },
  {
    name: "Zafer Akor Liva Konutları",
    period: "2026",
  },
  {
    name: "Haysu İnşaat Sanayi ve Ticaret A.Ş.",
    period: "2019–2024",
  },
];

export function References() {
  return (
    <section
      id="referanslar"
      aria-labelledby="references-title"
      className="relative overflow-hidden bg-ash py-24 text-paper md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--sand) 1px, transparent 1px), linear-gradient(90deg, var(--sand) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm tracking-[0.3em] text-safety uppercase">
              Referanslarımız
            </p>
            <h2
              id="references-title"
              className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase md:text-5xl"
            >
              Güvenle çalıştığımız projeler
            </h2>
          </div>
          <p className="font-display text-sm tracking-[0.2em] text-dust uppercase">
            {references.length} proje ve iş ortağı
          </p>
        </div>

        <ol className="mt-4">
          {references.map((reference, index) => (
            <li
              key={reference.name}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 border-b border-white/10 py-5 transition-colors hover:border-safety/60 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:items-center md:gap-x-6"
            >
              <span className="row-span-2 pt-1 font-display text-xs tracking-widest text-safety sm:row-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg leading-snug font-medium tracking-wide uppercase md:text-xl">
                  {reference.name}
                </h3>
                {reference.work && (
                  <p className="mt-1 text-sm leading-relaxed text-sand/70">
                    {reference.work}
                  </p>
                )}
              </div>
              <span className="col-start-2 mt-2 text-xs tracking-[0.15em] text-dust uppercase sm:col-start-3 sm:mt-0 sm:text-right">
                {reference.period}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-sand/80 md:text-lg">
          Ve daha niceleri...
        </p>
      </div>
    </section>
  );
}