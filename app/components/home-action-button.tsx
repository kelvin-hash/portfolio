"use client";

import { useEffect, useState } from "react";

type HomeActionButtonProps = {
  buttonLabel: string;
  modalEyebrow: string;
  modalTitle: string;
  children: React.ReactNode;
  className: string;
};

export function HomeActionButton({
  buttonLabel,
  modalEyebrow,
  modalTitle,
  children,
  className,
}: HomeActionButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/45 px-4 py-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-action-modal-title"
            className="relative w-full max-w-lg rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(255,248,238,0.98)_100%)] p-6 shadow-[0_28px_90px_rgba(28,25,23,0.22)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close modal"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 transition hover:border-stone-900 hover:text-stone-950"
              onClick={() => setOpen(false)}
            >
              X
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
              {modalEyebrow}
            </p>
            <h3
              id="home-action-modal-title"
              className="mt-4 pr-12 text-3xl font-semibold tracking-tight text-stone-950"
            >
              {modalTitle}
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
