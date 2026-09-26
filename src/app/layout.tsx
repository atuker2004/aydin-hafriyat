import type { Metadata } from "next";
import { Oswald, Sora } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aydın Hafriyat | Niksar Tokat Profesyonel Hafriyat ve Kazı",
    template: "%s | Aydın Hafriyat",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "construction",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Aydın Hafriyat | Niksar & Tokat Hafriyat Hizmetleri",
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/images/slat1.png",
        width: 1672,
        height: 941,
        alt: "Aydın Hafriyat şantiye çalışması",
      },
      {
        url: "/images/logo.png",
        width: 885,
        height: 831,
        alt: "Aydın Hafriyat logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydın Hafriyat | Niksar Tokat Hafriyat",
    description: siteConfig.shortDescription,
    images: ["/images/slat1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "TR-60",
    "geo.placename": "Niksar, Tokat",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${oswald.variable} ${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
