import { motion } from "framer-motion";

const books = [
  {
    id: 1,
    title: "Thirteen Steps to Mentalism",
    author: "Corinda",
    description: "The definitive bible of mentalism. Thirteen complete systems covering every branch of the art — from the swami gimmick to large-scale publicity stunts. Required reading for every serious student of the mind.",
    pdf: null,
    color: "from-purple-500 to-indigo-700",
    glow: "rgba(139,92,246,0.4)",
    note: "Access each chapter's dedicated site via the Hub dashboard.",
  },
  {
    id: 2,
    title: "Practical Mental Magic",
    author: "Theodore Annemann",
    description: "A masterwork from the golden age of mentalism. Annemann's complete collection of mental effects — billets, book tests, predictions, and the impossible made practical. Essential Jinx Magazine content, curated and edited.",
    pdf: "/pdfs/annemann.pdf",
    color: "from-cyan-400 to-blue-600",
    glow: "rgba(34,211,238,0.4)",
    note: null,
  },
  {
    id: 3,
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini, Ph.D.",
    description: "Six universal principles of compliance and persuasion that drive human behavior. The scientific bedrock beneath every successful mentalism presentation — reciprocation, commitment, social proof, liking, authority, and scarcity.",
    pdf: "/pdfs/cialdini.pdf",
    color: "from-amber-400 to-orange-600",
    glow: "rgba(251,191,36,0.4)",
    note: null,
  },
  {
    id: 4,
    title: "What Every Body Is Saying",
    author: "Joe Navarro",
    description: "An ex-FBI agent's complete guide to reading nonverbal communication. Master the silent language of the body — the foundation of any convincing cold reading, psychometry presentation, or mind-reading act.",
    pdf: "/pdfs/navarro.pdf",
    color: "from-green-400 to-emerald-600",
    glow: "rgba(52,211,153,0.4)",
    note: null,
  },
  {
    id: 5,
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    description: "The world's foremost expert on body language decodes every gesture, expression, and posture. A critical companion for any mentalist who wants their readings to feel eerily accurate.",
    pdf: "/pdfs/pease.pdf",
    color: "from-rose-400 to-pink-600",
    glow: "rgba(251,113,133,0.4)",
    note: null,
  },
];

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
        <p className="text-white/40 text-sm uppercase tracking-[0.3em]">
          Essential Texts for the Serious Mentalist
        </p>
        <div className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      </motion.div>

      <div className="space-y-20">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Book header card */}
            <div
              className="relative rounded-2xl p-[1px] mb-4 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${book.glow.replace("0.4", "0.6")}, transparent 60%)`,
              }}
            >
              <div className="relative bg-[#09090f] rounded-[15px] p-8 overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none"
                  style={{ background: book.glow }}
                />

                {/* Nested box layers */}
                <div
                  className="absolute inset-3 rounded-xl border opacity-10 pointer-events-none"
                  style={{ borderColor: book.glow.replace("0.4", "0.8") }}
                />
                <div
                  className="absolute inset-6 rounded-lg border opacity-5 pointer-events-none"
                  style={{ borderColor: book.glow.replace("0.4", "0.8") }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-serif font-bold bg-gradient-to-br ${book.color} text-white shadow-lg`}>
                    {book.id}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl md:text-3xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r ${book.color} mb-2`}>
                      {book.title}
                    </h2>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-3">
                      {book.author}
                    </p>
                    <p className="text-white/60 leading-relaxed max-w-3xl">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Embed or Placeholder */}
            {book.pdf ? (
              <div
                className="relative rounded-2xl overflow-hidden border border-white/10"
                style={{
                  boxShadow: `0 0 40px ${book.glow.replace("0.4", "0.15")}`,
                }}
              >
                <embed
                  src={book.pdf}
                  type="application/pdf"
                  className="w-full"
                  style={{ height: "82vh", minHeight: 500 }}
                />
              </div>
            ) : (
              <div
                className="relative rounded-2xl border border-white/10 p-12 text-center bg-[#09090f]"
                style={{
                  boxShadow: `0 0 40px ${book.glow.replace("0.4", "0.1")}`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl border border-white/10"
                  style={{ background: `radial-gradient(circle, ${book.glow.replace("0.4","0.2")}, transparent)` }}
                >
                  <span className={`text-transparent bg-clip-text bg-gradient-to-br ${book.color} font-serif italic text-2xl font-bold`}>C</span>
                </div>
                <p className="text-white/50 text-sm uppercase tracking-widest mb-2">
                  {book.note}
                </p>
                <p className="text-white/20 text-xs mt-4">
                  Each of the 13 chapters is hosted independently at its dedicated site
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
