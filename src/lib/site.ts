export const siteConfig = {
  name: "Aydın Hafriyat",
  legalName: "Aydın Hafriyat",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aydin-hafriyat.com",
  locale: "tr_TR",
  description:
    "Tokat Niksar merkezli Aydın Hafriyat: profesyonel kazı, dolgu, moloz taşıma ve şantiye hazırlığı. Güvenilir ekipman, deneyimli ekip, zamanında teslimat.",
  shortDescription:
    "Niksar ve Tokat’ta profesyonel hafriyat, kazı, dolgu ve moloz taşıma hizmetleri.",
  phone: ["+905354393989", "+905432214414"],
  phoneDisplay: ["0535 439 39 89", "0543 221 44 14"],
  email: "info@aydin-hafriyat.com",
  whatsapp: "905432214414",
  address: {
    streetAddress:
      "Bağlar Mahallesi, İtfaiye Sokak, Ercan Bayrakçıoğlu Sitesi, Baykent Villaları No: 24",
    addressLocality: "Niksar",
    addressRegion: "Tokat",
    postalCode: "",
    addressCountry: "TR",
  },
  geo: {
    // Approximate Niksar center; refine when exact coords available
    latitude: 40.5917,
    longitude: 36.855,
  },
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-14:00"],
  keywords: [
    "Aydın Hafriyat",
    "Niksar hafriyat",
    "Tokat hafriyat",
    "hafriyat Niksar",
    "kazı işleri Tokat",
    "moloz taşıma Niksar",
    "dolgu sıkıştırma",
    "şantiye hazırlığı",
    "ekskavatör kiralama Niksar",
    "hafriyat firması Tokat",
    "temel kazısı",
    "enkaz taşıma",
  ],
} as const;
