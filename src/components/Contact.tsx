"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [mailtoUrl, setMailtoUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const rawService = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const serviceLabel: Record<string, string> = {
      kazi: "Kazı ve Hafriyat",
      dolgu: "Dolgu ve Sıkıştırma",
      moloz: "Moloz Taşıma",
      santiye: "Şantiye Hazırlığı",
      diger: "Diğer",
    };

    const subject = `Proje görüşmesi talebi${name ? ` - ${name}` : ""}`;
    const body = [
      "Merhaba,",
      "",
      `Ad Soyad: ${name || "Belirtilmedi"}`,
      `Telefon: ${phone || "Belirtilmedi"}`,
      `E-posta: ${email || "Belirtilmedi"}`,
      `Hizmet: ${serviceLabel[rawService] ?? "Belirtilmedi"}`,
      "",
      "Mesaj:",
      message || "Mesaj eklenmedi.",
    ].join("\n");

    const nextMailtoUrl = `mailto:${siteConfig.email}?${new URLSearchParams({
      subject,
      body,
    }).toString()}`;

    setMailtoUrl(nextMailtoUrl);
    window.location.href = nextMailtoUrl;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${subject}\n\n${body}`).catch(() => {});
    }

    window.setTimeout(() => {
      setStatus("error");
    }, 1200);
  }

  return (
    <section id="iletisim" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-safety uppercase">
            İletişim
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase md:text-5xl">
            Projenizi konuşalım
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-sand/75">
            Kazı, dolgu veya taşıma ihtiyacınız için bizi arayın ya da formu
            doldurun. En kısa sürede dönüş yaparız.
          </p>

          <div className="mt-12 space-y-8 border-t border-white/10 pt-10">
            <div>
              <p className="text-xs tracking-[0.2em] text-dust uppercase">
                Telefon
              </p>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="text-sm text-sand/70">Bülent Aydın</p>
                  <a
                    href="tel:+905354393989"
                    className="mt-1 inline-block font-display text-2xl tracking-wide text-safety transition-colors hover:text-ochre"
                  >
                    0535 439 39 89
                  </a>
                </div>
                <div>
                  <p className="text-sm text-sand/70">Anıl Aydın</p>
                  <a
                    href="tel:+905432214414"
                    className="mt-1 inline-block font-display text-2xl tracking-wide text-safety transition-colors hover:text-ochre"
                  >
                    0543 221 44 14
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dust uppercase">
                E-posta
              </p>
              <a
                href="mailto:info@aydin-hafriyat.com"
                className="mt-2 inline-block text-base text-sand/90 transition-colors hover:text-safety"
              >
                info@aydin-hafriyat.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dust uppercase">
                Çalışma saatleri
              </p>
              <p className="mt-2 text-base text-sand/90">
                Hafta içi 08:00 – 19:00 · Cumartesi 08:00 – 14:00
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-ash/60 p-6 md:p-10"
        >
          {status === "sent" ? (
            <div className="flex min-h-[320px] flex-col items-start justify-center">
              <p className="font-display text-3xl tracking-wide text-safety uppercase">
                Mesajınız gönderildi
              </p>
              <p className="mt-4 max-w-sm text-sand/75">
                En kısa sürede sizinle iletişime geçeceğiz. Acil işler için
                telefon hattımızı kullanabilirsiniz.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs tracking-[0.15em] text-dust uppercase">
                    Ad Soyad
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none transition-colors focus:border-safety"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs tracking-[0.15em] text-dust uppercase">
                    Telefon
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none transition-colors focus:border-safety"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-xs tracking-[0.15em] text-dust uppercase">
                  E-posta (isteğe bağlı)
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none transition-colors focus:border-safety"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-xs tracking-[0.15em] text-dust uppercase">
                  Hizmet
                </span>
                <select
                  name="service"
                  defaultValue=""
                  required
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-paper outline-none transition-colors focus:border-safety"
                >
                  <option value="" disabled className="bg-ash">
                    Seçiniz
                  </option>
                  <option value="kazi" className="bg-ash">
                    Kazı ve Hafriyat
                  </option>
                  <option value="dolgu" className="bg-ash">
                    Dolgu ve Sıkıştırma
                  </option>
                  <option value="moloz" className="bg-ash">
                    Moloz Taşıma
                  </option>
                  <option value="santiye" className="bg-ash">
                    Şantiye Hazırlığı
                  </option>
                  <option value="diger" className="bg-ash">
                    Diğer
                  </option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="text-xs tracking-[0.15em] text-dust uppercase">
                  Mesaj
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 text-paper outline-none transition-colors focus:border-safety"
                />
              </label>

              <label className="sr-only" aria-hidden="true">
                Web sitesi
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && (
                <p role="alert" className="mt-5 text-sm text-safety">
                  E-posta uygulaması otomatik açılmadı. Mail istemcisi yoksa,
                  aşağıdaki bağlantıyı kullanarak veya mesajı kopyalayıp
                  manuel olarak info@aydin-hafriyat.com adresine gönderebilirsiniz.
                </p>
              )}

              {mailtoUrl && (
                <a
                  href={mailtoUrl}
                  className="mt-5 inline-block text-sm font-medium text-safety underline underline-offset-4"
                >
                  E-postayı aç
                </a>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full bg-safety py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ochre disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
              >
                {status === "sending" ? "Gönderiliyor..." : "Gönder"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
