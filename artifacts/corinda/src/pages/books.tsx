import { useState } from "react";
import { motion } from "framer-motion";
import { books, type Book } from "@/lib/data";
import { EmbedLightbox } from "@/components/embed-lightbox";
import { RiExternalLinkLine, RiFullscreenLine } from "react-icons/ri";

function getVolumeNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function LibraryBook({ book, index }: { book: Book; index: number }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <motion.div
      id={book.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="relative scroll-mt-24"
    >
      <div
        className="relative mb-4 overflow-hidden rounded-2xl p-[1px]"
        style={{ background: `linear-gradient(135deg, ${book.glow.replace("0.4", "0.7").replace("0.5", "0.7")}, transparent 70%)` }}
      >
        <div className="relative overflow-hidden rounded-[15px] bg-[#09090f] p-8">
          <div
            className="absolute -left-12 -top-12 h-48 w-48 rounded-full opacity-25 blur-[60px] pointer-events-none"
            style={{ background: book.glow }}
          />
          <div className="absolute inset-3 rounded-xl border opacity-[0.07] pointer-events-none" style={{ borderColor: book.glow.replace("0.4", "1").replace("0.5", "1") }} />
          <div className="absolute inset-6 rounded-lg border opacity-[0.04] pointer-events-none" style={{ borderColor: book.glow.replace("0.4", "1").replace("0.5", "1") }} />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${book.color} text-lg font-bold text-white shadow-lg font-serif`}>
              {getVolumeNumber(index)}
            </div>
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest ${book.tagColor}`}>
                  {book.tag}
                </span>
                {book.hasChapters && (
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-purple-200/70">
                    13 step companion page
                  </span>
                )}
              </div>
              <h2 className={`mb-2 bg-gradient-to-r ${book.color} bg-clip-text font-serif text-2xl italic text-transparent md:text-3xl`}>
                {book.title}
              </h2>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/35">{book.author}</p>
              <p className="max-w-3xl text-sm leading-relaxed text-white/55">{book.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-xs uppercase tracking-wider text-fuchsia-200/75 transition hover:bg-fuchsia-500/20 hover:text-white"
              >
                <RiFullscreenLine /> Enlarge PDF
              </button>
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <RiExternalLinkLine /> Open file
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-white/8 bg-black"
        style={{ boxShadow: `0 0 40px ${book.glow.replace("0.4", "0.12").replace("0.5", "0.12")}` }}
      >
        <iframe
          src={`${book.pdf}#view=FitH`}
          title={`${book.title} PDF`}
          className="h-[72vh] min-h-[460px] w-full border-0"
          loading="lazy"
        />
      </div>

      <EmbedLightbox
        title={`${book.title} — ${book.author}`}
        src={book.pdf}
        embedType="pdf"
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
      />
    </motion.div>
  );
}

export default function Books() {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-serif italic text-white/90 tracking-wide mb-4">
          The Library
        </h1>
        <p className="text-white/30 text-xs uppercase tracking-[0.35em]">
          {books.length} embedded PDFs for the serious mentalist
        </p>
        <div className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      </motion.div>

      <div className="space-y-20">
        {books.map((book, index) => (
          <LibraryBook key={book.id} book={book} index={index} />
        ))}
      </div>
    </div>
  );
}
