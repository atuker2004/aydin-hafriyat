"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CallModal } from "@/components/CallModal";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#surec", label: "Süreç" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openCall() {
    setOpen(false);
    setCallOpen(true);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#anasayfa" className="relative block shrink-0">
            <Image
              src="/images/logo.png"
              alt="Aydın Hafriyat"
              width={200}
              height={188}
              priority
              unoptimized
              className="h-12 w-auto object-contain md:h-16"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white transition-colors hover:text-safety"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={openCall}
              className="border border-safety/40 bg-safety/10 px-4 py-2 text-sm font-semibold tracking-wide text-safety transition-colors hover:bg-safety hover:text-white"
            >
              Hemen Ara
            </button>
          </nav>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-ink px-5 py-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-lg tracking-wider text-paper uppercase"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={openCall}
                className="mt-2 inline-flex w-fit border border-safety px-4 py-2 text-sm font-semibold text-safety"
              >
                Hemen Ara
              </button>
            </nav>
          </div>
        )}
      </header>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}
