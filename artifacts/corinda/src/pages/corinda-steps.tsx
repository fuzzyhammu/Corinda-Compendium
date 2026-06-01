import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/lib/data";
import { EmbedLightbox } from "@/components/embed-lightbox";
import { RiAlertLine, RiArrowLeftLine, RiExternalLinkLine, RiEyeLine, RiEyeOffLine, RiFullscreenLine } from "react-icons/ri";

function chapterUrl(chapterId: number) {
  return `https://${chapterId}corinda.netlify.app`;
}

function emergencyUrl(chapterId: number) {
  return `https://${chapterId}-corinda.netlify.app`;
}

function ChapterCard({ chapter }: { chapter: typeof chapters[0] }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const previewUrl = chapterUrl(chapter.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className={`group relative self-start rounded-2xl bg-gradient-to-br ${chapter.color} p-[1px]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-25 pointer-events-none`} />
      <div className="relative overflow-hidden rounded-[15px] border border-white/5 bg-[#08080D] transition-colors duration-300 group-hover:border-white/10">
        <div className="absolute inset-2 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/[0.07] pointer-events-none" />

        <div className="relative p-5 pb-3">
          <div className="mb-3 flex items-start justify-between">
            <span className={`bg-gradient-to-br ${chapter.color} bg-clip-text font-serif text-4xl italic text-transparent opacity-50`}>
              {chapter.id.toString().padStart(2, "0")}
            </span>
          </div>
          <h3 className="mb-2 text-sm font-semibold tracking-wide text-white">{chapter.title}</h3>
          <p className="text-xs leading-relaxed text-white/45">{chapter.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 px-5 pb-4">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 rounded-lg bg-gradient-to-br ${chapter.color} px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white opacity-85 transition-opacity hover:opacity-100`}
          >
            <RiExternalLinkLine className="shrink-0" /> View Site
          </a>
          <a
            href={emergencyUrl(chapter.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/55 transition-all hover:bg-white/10 hover:text-white"
          >
            <RiAlertLine className="shrink-0 text-green-400" /> Emergency
          </a>
          <button
            type="button"
            onClick={() => setShowEmbed(value => !value)}
            className="ml-auto flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/40 transition-all hover:text-white/70"
          >
            {showEmbed ? <RiEyeOffLine /> : <RiEyeLine />}
            {showEmbed ? "Hide" : "Preview"}
          </button>
          <button
            type="button"
            onClick={() => setShowLightbox(true)}
            className="flex items-center gap-1 rounded-lg border border-fuchsia-400/20 bg-fuchsia-500/10 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-fuchsia-200/70 transition-all hover:bg-fuchsia-500/20 hover:text-white"
          >
            <RiFullscreenLine /> Lightbox
          </button>
        </div>

        <AnimatePresence>
          {showEmbed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 280, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/8"
            >
              <iframe
                src={previewUrl}
                title={`Chapter ${chapter.id} — ${chapter.title}`}
                className="h-[280px] w-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <EmbedLightbox
        title={`Step ${chapter.id}: ${chapter.title}`}
        src={previewUrl}
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
      />
    </motion.div>
  );
}

export default function CorindaSteps() {
  return (
    <div className="flex-1 w-full">
      <section className="border-b border-white/5 bg-[#040409] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/">
              <span className="mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-widest text-white/40 transition hover:border-white/20 hover:text-white/75">
                <RiArrowLeftLine /> Back to Compendium
              </span>
            </Link>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-purple-400/50">Corinda</p>
            <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text font-serif text-4xl italic text-transparent md:text-6xl">
              13 Steps to Mentalism
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/35">
              A dedicated chapter room for every Corinda step. Preview inline without disturbing neighboring cards, expand any chapter in the resizable lightbox, or open the live chapter site directly.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {chapters.map(chapter => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>
    </div>
  );
}
