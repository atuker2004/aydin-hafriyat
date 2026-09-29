const services = [
  {
    num: "01",
    title: "Kazı ve Hafriyat",
    desc: "Temel kazısı, arazi düzleme ve proje ölçeğine uygun hafriyat uygulamaları.",
  },
  {
    num: "02",
    title: "Dolgu ve Sıkıştırma",
    desc: "Mühendislik standartlarına uygun dolgu, seviye alma ve zemin sıkıştırma.",
  },
  {
    num: "03",
    title: "Moloz ve Enkaz Taşıma",
    desc: "Şantiye atığı, moloz ve enkazın güvenli, hızlı ve yasal şekilde taşınması.",
  },
  {
    num: "04",
    title: "Şantiye Hazırlığı",
    desc: "Saha temizliği, yol açma ve inşaat öncesi hazırlık çalışmaları.",
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="relative bg-paper py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.3em] text-ochre uppercase">
            Ne yapıyoruz
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-ink uppercase md:text-5xl">
            Sahada çözüm üreten hizmetler
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel md:text-lg">
            Her iş kalemi, doğru makine ve doğru planlama ile yönetilir. Küçük
            arsa kazısından büyük şantiye hazırlığına kadar yanınızdayız.
          </p>
          <p className="mt-5 font-display text-2xl font-semibold tracking-[0.18em] text-ochre uppercase md:text-3xl">
            +50 Yıllık Tecrübe
          </p>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((item) => (
            <li
              key={item.num}
              className="group border-t border-ink/15 pt-6 transition-colors hover:border-ochre"
            >
              <span className="font-display text-sm tracking-[0.25em] text-ochre">
                {item.num}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-wide text-ink uppercase transition-colors group-hover:text-ochre-deep">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-steel">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
