import Image from "next/image";

export function About() {
  return (
    <section id="hakkimizda" className="bg-ash text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="/images/about-site.jpg"
            alt="Ağır iş makineleri ile saha çalışması"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ash/40 lg:bg-gradient-to-l lg:from-transparent lg:to-ash/50" />
        </div>

        <div className="flex flex-col justify-center px-5 py-20 md:px-12 md:py-28 lg:px-16">
          <p className="font-display text-sm tracking-[0.3em] text-safety uppercase">
            Hakkımızda
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase md:text-5xl">
            Disiplinli ekip.
            <span className="mt-1 block text-safety">Güvenilir saha.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-sand/80 md:text-base">
            Aydın Hafriyat olarak işimizi gösterişle değil, sahadaki sonuçla
            anlatıyoruz. Zamanında teslimat, temiz işçilik ve açık iletişim bizim
            standartlarımızdır.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-sand/80 md:text-base">
            Konut, ticari ve altyapı projelerinde deneyimli operatörlerimiz ve
            bakımlı filomuzla projelerinizi güvenle ilerletiyoruz.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div>
              <dt className="text-xs tracking-[0.2em] text-dust uppercase">
                Odak
              </dt>
              <dd className="mt-2 font-display text-xl tracking-wide uppercase">
                Kaliteli iş
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-dust uppercase">
                Yaklaşım
              </dt>
              <dd className="mt-2 font-display text-xl tracking-wide uppercase">
                Zamanında teslim
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
