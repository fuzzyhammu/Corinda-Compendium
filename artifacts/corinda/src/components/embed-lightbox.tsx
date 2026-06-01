import { useEffect, useState } from "react";
import { RiCloseLine, RiExternalLinkLine, RiFullscreenLine, RiZoomInLine, RiZoomOutLine } from "react-icons/ri";

const sizePresets = [70, 82, 94];

type EmbedLightboxProps = {
  title: string;
  src: string;
  embedType?: "pdf" | "site";
  isOpen: boolean;
  onClose: () => void;
};

export function EmbedLightbox({ title, src, embedType = "site", isOpen, onClose }: EmbedLightboxProps) {
  const [sizeIndex, setSizeIndex] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const size = sizePresets[sizeIndex];
  const viewerSrc = embedType === "pdf" ? `${src}#view=FitH` : src;

  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl p-3 md:p-6" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 cursor-default" aria-label="Close preview backdrop" onClick={onClose} />

      <div
        className="relative mx-auto flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#07070d] shadow-[0_0_70px_rgba(168,85,247,0.22)]"
        style={{ width: `${size}%`, maxWidth: "1800px" }}
      >
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-black/45 px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white/85">{title}</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/25">
              Resizable {embedType === "pdf" ? "PDF" : "site"} preview
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSizeIndex(index => Math.max(0, index - 1))}
            disabled={sizeIndex === 0}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-wider text-white/55 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <RiZoomOutLine /> Smaller
          </button>
          <button
            type="button"
            onClick={() => setSizeIndex(1)}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-wider text-white/55 transition hover:bg-white/10 hover:text-white"
          >
            <RiFullscreenLine /> Fit
          </button>
          <button
            type="button"
            onClick={() => setSizeIndex(index => Math.min(sizePresets.length - 1, index + 1))}
            disabled={sizeIndex === sizePresets.length - 1}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-wider text-white/55 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <RiZoomInLine /> Larger
          </button>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-3 py-2 text-xs uppercase tracking-wider text-fuchsia-200/80 transition hover:bg-fuchsia-500/20 hover:text-white"
          >
            <RiExternalLinkLine /> New tab
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-wider text-white/55 transition hover:bg-white/10 hover:text-white"
          >
            <RiCloseLine /> Close
          </button>
        </div>

        <div className="min-h-0 flex-1 bg-black">
          <iframe
            src={viewerSrc}
            title={title}
            className="h-full w-full border-0"
            loading="lazy"
            sandbox={embedType === "site" ? "allow-scripts allow-same-origin allow-forms allow-popups" : undefined}
          />
        </div>
      </div>
    </div>
  );
}
