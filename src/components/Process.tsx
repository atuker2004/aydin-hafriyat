const steps = [
  {
    num: "01",
    title: "Keşif ve plan",
    desc: "Sahayı inceler, ihtiyaçları netleştirir ve iş programını birlikte belirleriz.",
  },
  {
    num: "02",
    title: "Ekipman hazırlığı",
    desc: "İşin ölçeğine uygun makine ve ekibi sahaya zamanında sevk ederiz.",
  },
  {
    num: "03",
    title: "Uygulama",
    desc: "Güvenli ve kontrollü şekilde kazı, dolgu veya taşıma sürecini yürütürüz.",
  },
  {
    num: "04",
    title: "Teslim",
    desc: "İşi temiz bırakır, saha teslimini netleştirir ve sonraki adıma hazır hale getiririz.",
  },
];

export function Process() {
  return (
    <section id="surec" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-sm tracking-[0.3em] text-ochre uppercase">
              Çalışma şeklimiz
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-ink uppercase md:text-5xl">
              Net süreç, net sonuç
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-steel">
            Her aşamada iletişim açık kalır. Sürpriz yok — plan, uygulama ve
            teslim.
          </p>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.num} className="relative">
              <span className="font-display text-5xl font-semibold text-ink/10">
                {step.num}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium tracking-wide text-ink uppercase">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
