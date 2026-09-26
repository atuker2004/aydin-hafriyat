import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Aydın Hafriyat",
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#121410",
    theme_color: "#ffc107",
    lang: "tr",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
