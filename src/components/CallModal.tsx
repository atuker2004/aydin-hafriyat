"use client";

import { useEffect } from "react";

const contacts = [
  {
    name: "Bülent Aydın",
    display: "0535 439 39 89",
    tel: "+905354393989",
  },
  {
    name: "Anıl Aydın",
    display: "0543 221 44 14",
    tel: "+905432214414",
  },
];

type CallModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CallModal({ open, onClose }: CallModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 animate-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
    >
      <button
        type="button"
        aria-label="Kapat"
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm border border-white/10 bg-ash p-6 shadow-2xl animate-modal-panel md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 text-dust transition-colors hover:text-paper"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <p
          id="call-modal-title"
          className="font-display text-sm tracking-[0.3em] text-safety uppercase"
        >
          Hemen Ara
        </p>

        <ul className="mt-8 space-y-6">
          {contacts.map((person) => (
            <li key={person.tel} className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
              <p className="text-xs tracking-[0.2em] text-dust uppercase">
                {person.name}
              </p>
              <a
                href={`tel:${person.tel}`}
                className="mt-2 inline-block font-display text-2xl tracking-wide text-paper transition-colors hover:text-safety"
              >
                {person.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
