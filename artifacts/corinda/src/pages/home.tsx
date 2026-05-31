import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/lib/data";
import { RiExternalLinkLine, RiAlertLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 22 } }
};

function ChapterCard({ chapter }: { chapter: typeof chapters[0] }) {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <motion.div
      variants={item}
      className={`group relative block overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br ${chapter.color}`}
      whileHover={{ scale: 1.01 }}
      style={{ boxShadow: `0 0 0px transparent` }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Glow bleed */}
      <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 pointer-events-none`} />

      <div className="relative bg-[#08080D] rounded-[15px] flex flex-col overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors duration-300">

        {/* Nested decoration boxes */}
        <div className={`absolute inset-2 rounded-xl border opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none border-white`} />
        <div className={`absolute inset-4 rounded-lg border opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none border-white`} />

        {/* Header */}
        <div className="relative p-6 pb-4">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex justify-between items-start mb-4">
            <span className={`text-5xl font-serif italic text-transparent bg-clip-text bg-gradient-to-br ${chapter.color} opacity-60`}>
              {chapter.id.toString().padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-white tracking-wide mb-3">
            {chapter.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            {chapter.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          <a
            href={`https://${chapter.id}corinda.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider bg-gradient-to-br ${chapter.color} text-white opacity-90 hover:opacity-100 transition-opacity duration-200 shadow-sm`}
            onClick={(e) => e.stopPropagation()}
          >
            <RiExternalLinkLine className="shrink-0" />
            View Site
          </a>
          <a
            href={`https://${chapter.id}-corinda.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <RiAlertLine className="shrink-0 text-green-400" />
            Emergency Mirror
          </a>
          <button
            onClick={() => setShowEmbed((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/8 transition-all duration-200 ml-auto"
          >
            {showEmbed ? <RiEyeOffLine /> : <RiEyeLine />}
            {showEmbed ? "Hide" : "Preview"}
          </button>
        </div>

        {/* Iframe embed (collapsible) */}
        <AnimatePresence>
          {showEmbed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 320, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/8"
            >
              <div className="relative w-full h-80">
                <iframe
                  src={`https://${chapter.id}corinda.netlify.app`}
                  title={`Chapter ${chapter.id} — ${chapter.title}`}
                  className="w-full h-full"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                <div className="absolute inset-0 pointer-events-none border-b border-white/5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 w-full px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          Corinda
        </h1>
        <p className="text-sm md:text-base text-white/40 tracking-[0.35em] uppercase font-light">
          Thirteen Steps to Mentalism
        </p>
        <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </motion.div>
    </div>
  );
}
