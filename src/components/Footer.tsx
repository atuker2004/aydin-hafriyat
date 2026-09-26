import Image from "next/image";

const addressLines = [
  "Bağlar Mahallesi, İtfaiye Sokak",
  "Ercan Bayrakçıoğlu Sitesi, Baykent Villaları No: 24",
  "Tokat / Niksar",
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Bağlar Mahallesi İtfaiye Sokak Ercan Bayrakçıoğlu Sitesi Baykent Villaları No:24 Niksar Tokat",
  );

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_1fr_auto] md:items-start md:px-8 md:py-14">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/logo.png"
            alt="Aydın Hafriyat"
            width={160}
            height={150}
            unoptimized
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm text-dust">
            Profesyonel hafriyat ve saha çözümleri
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-dust uppercase">Adres</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block max-w-sm text-sm leading-relaxed text-sand/85 transition-colors hover:text-safety"
          >
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
        </div>

        <p className="text-sm text-dust md:pt-1 md:text-right">
          © {new Date().getFullYear()} Aydın Hafriyat.
          <span className="mt-1 block">Tüm hakları saklıdır.</span>
        </p>
      </div>
    </footer>
  );
}
