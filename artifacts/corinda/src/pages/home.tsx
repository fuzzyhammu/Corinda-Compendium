import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { books } from "@/lib/data";
import { RiBookOpenLine, RiArrowRightLine, RiRouteLine } from "react-icons/ri";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: "easeOut" },
  }),
};

function BookCard({ book, index }: { book: typeof books[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ scale: 1.02, y: -3 }}
      className="relative group rounded-2xl p-[1px] overflow-hidden cursor-pointer"
      style={{ background: `linear-gradient(135deg, ${book.glow}, transparent 70%)` }}
    >
      <div className="relative bg-[#08080e] rounded-[15px] p-6 h-full flex flex-col overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors duration-300">
        {/* glow blob */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ background: book.glow }} />
        {/* nested box */}
        <div className="absolute inset-2 rounded-xl border border-white/0 group-hover:border-white/[0.06] transition-all duration-500 pointer-events-none" />

        <div className="flex items-start justify-between mb-4">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase tracking-widest ${book.tagColor}`}>
            {book.tag}
          </span>
          {book.hasChapters && (
            <span className="text-[10px] text-white/30 uppercase tracking-widest">13 chapters</span>
          )}
        </div>

        <h3 className={`text-base font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${book.color} leading-snug`}>
          {book.title}
        </h3>
        <p className="text-xs text-white/35 uppercase tracking-widest mb-3">{book.author}</p>
        <p className="text-sm text-white/50 leading-relaxed flex-1">{book.description}</p>

        <div className="mt-5 flex items-center gap-3">
          <Link href="/books">
            <span className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${book.color} hover:opacity-80 transition-opacity`}>
              <RiBookOpenLine className="text-white/40 shrink-0" />
              Read PDF
            </span>
          </Link>
          <RiArrowRightLine className="text-white/15 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 w-full">
      {/* ── HERO ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
        <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-5">Curated Archive</p>
          <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter mb-5 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 drop-shadow-[0_0_60px_rgba(255,255,255,0.08)]">
            The Compendium
          </h1>
          <p className="text-sm md:text-base text-white/35 tracking-[0.2em] uppercase max-w-xl mx-auto leading-relaxed">
            Mentalism · Influence · Deception · Rapport · Body Language
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-white/15 text-xs tracking-widest uppercase">{books.length} volumes</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </motion.div>
      </div>

      {/* ── BOOKS CATALOG ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs text-white/25 uppercase tracking-[0.4em]">The Collection</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/books">
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3 text-sm uppercase tracking-widest text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
            >
              <RiBookOpenLine />
              Open Full Library with PDF Embeds
              <RiArrowRightLine />
            </motion.span>
          </Link>
          <Link href="/corinda-13-steps">
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-8 py-3 text-sm uppercase tracking-widest text-purple-200/70 transition-all duration-300 hover:border-purple-300/35 hover:bg-purple-500/20 hover:text-white"
            >
              <RiRouteLine />
              Open Corinda 13 Steps Page
              <RiArrowRightLine />
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
