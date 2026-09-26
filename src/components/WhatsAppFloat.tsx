const WHATSAPP_URL =
  "https://wa.me/905432214414?text=" +
  encodeURIComponent("Merhaba, Aydın Hafriyat hakkında bilgi almak istiyorum.");

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Anıl Aydın WhatsApp"
      className="group fixed right-4 bottom-20 z-40 flex items-center gap-0 md:right-6 md:bottom-8"
    >
      <span className="pointer-events-none mr-3 max-w-0 overflow-hidden rounded-sm bg-ink/95 opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:px-3 group-hover:py-2">
        <span className="block whitespace-nowrap text-xs tracking-wide text-dust">
          WhatsApp
        </span>
        <span className="block whitespace-nowrap text-sm font-medium text-paper">
          Anıl Aydın
        </span>
        <span className="block whitespace-nowrap font-display text-sm tracking-wide text-safety">
          0543 221 44 14
        </span>
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_32px_rgba(37,211,102,0.55)]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-7 w-7"
          fill="currentColor"
          aria-hidden
        >
          <path d="M16.01 3C9.39 3 4.02 8.36 4.02 14.97c0 2.1.55 4.15 1.6 5.96L4 29l8.26-1.58a12 12 0 0 0 3.75.6h.01c6.62 0 11.99-5.36 11.99-11.97C28.01 8.36 22.63 3 16.01 3zm6.98 16.95c-.29.82-1.7 1.5-2.38 1.6-.61.08-1.38.12-2.23-.14-.51-.16-1.17-.38-2.02-.74-3.56-1.54-5.87-5.13-6.05-5.37-.17-.24-1.42-1.89-1.42-3.6s.9-2.55 1.22-2.9c.32-.35.7-.44.93-.44h.67c.22 0 .51-.08.8.61.29.7 1 2.44 1.09 2.62.09.17.14.38.03.61-.12.24-.17.39-.35.6-.17.2-.37.45-.53.6-.17.17-.35.35-.15.68.2.32.88 1.45 1.89 2.35 1.3 1.15 2.39 1.51 2.73 1.68.34.17.53.14.73-.09.2-.22.84-.98 1.06-1.32.22-.34.45-.28.76-.17.32.12 2 .94 2.34 1.11.34.17.57.26.65.4.09.15.09.85-.2 1.67z" />
        </svg>
      </span>
    </a>
  );
}
