"use client";

import { useEffect, useId, useRef, useState } from "react";

type SoldOutPopupProps = {
  title: string;
  body: string;
  closeLabel: string;
};

export function SoldOutPopup({ title, body, closeLabel }: SoldOutPopupProps) {
  const [open, setOpen] = useState(true);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/45"
        aria-label={closeLabel}
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[min(90vh,40rem)] w-full max-w-xl overflow-y-auto rounded-[28px] border border-black bg-pumpkin-cream px-6 py-8 shadow-xl sm:px-10 sm:py-10"
      >
        <h2
          id={titleId}
          className="font-gasoek text-4xl leading-none text-pumpkin-orange sm:text-5xl"
        >
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-pumpkin-body sm:text-lg">
          {body.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          className="font-bakbak mt-8 inline-flex h-12 min-w-[140px] cursor-pointer items-center justify-center rounded-full bg-white px-8 text-lg text-black transition hover:bg-neutral-100"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  );
}
