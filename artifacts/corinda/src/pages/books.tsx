import { motion } from "framer-motion";
const driveLinks = [
  "https://drive.google.com/file/d/13VMpCcqzLiERziklNJdbKZfngmwO8pe2/view",
  "https://drive.google.com/file/d/16-M4iMzG3wpTM5YHOhN6ij_7wO0EKd8h/view",
  "https://drive.google.com/file/d/1662TrO57SuR3H5KA_8kPSbDkJGVMJxNg/view",
  "https://drive.google.com/file/d/16_V6aUthrv9zuHhFcso5iW1zSm_aEVwd/view",
  "https://drive.google.com/file/d/19I9M4fjmmXpWZ2NQwQMESmwGb2iA1SvG/view",
  "https://drive.google.com/file/d/1B8wQYDgR7Cr8KNU-HJE14ymY5EHz2Xe1/view",
  "https://drive.google.com/file/d/1BmVeUuMLCYy0cBtaNSkGZQYDRBt6_fWj/view",
  "https://drive.google.com/file/d/1GolcvPMOZlV5ThRZ6IepPcrqiMZjTMYN/view",
  "https://drive.google.com/file/d/1OlUWs0nHtOAfcNMwhcW2c4jgEtlIkXVS/view",
  "https://drive.google.com/file/d/1Pflqr0mSFit2-DBzYb2Qu3T7GfrmDzTz/view",
  "https://drive.google.com/file/d/1Qh-tnEarL5xqnn0-5--1WvNxiNvMMX5J/view",
  "https://drive.google.com/file/d/1VPtDApBs3AXG0SraNdouHzDUCwKytBeN/view",
  "https://drive.google.com/file/d/1WD4rgrtR1-x-jKZ31ZXbzv1Vewk7rvKI/view",
  "https://drive.google.com/file/d/1_vq4ZXO3mBjn63T9n-15TKpAdn0-Qlgz/view",
  "https://drive.google.com/file/d/1aOm38QVlOZHVtNWYGRLO0GtYeL8Dl0JS/view",
  "https://drive.google.com/file/d/1cZ3YohPWnUQd_6GuWsOwCl6TcNExwz-v/view",
  "https://drive.google.com/file/d/1dMoseEcEABR8-f5xlFq0KrSR_Dp8JAOM/view",
  "https://drive.google.com/file/d/1f1yIpyUJHadjReNR-cFXWSpuZ99oFzpQ/view",
  "https://drive.google.com/file/d/1fdPmS1-LFvOhCpEkc46uTMCc0Ten_WV9/view",
  "https://drive.google.com/file/d/1ixvHcQJdMKu6dpv6h-3Zz-qLrd72f0mN/view",
  "https://drive.google.com/file/d/1j9Vp1MhI2G5CqRIK1knIt3Qe0FwL9ioj/view",
  "https://drive.google.com/file/d/1kdaycJrpDkfi3vddqQCoYVUjS7raSZq1/view",
  "https://drive.google.com/file/d/1l_eaxZalMImrpKVVvWj2VwO9ZIaKaUUT/view",
  "https://drive.google.com/file/d/1lxac0if2AFCtUdK8Kbe_b9aR0W33VzHm/view",
  "https://drive.google.com/file/d/1lxe-wH_zxWA4Fw9xXU7cT8mU4CIIRJSM/view",
  "https://drive.google.com/file/d/1orX_4KlTy_HFgrdz5DyHYaq51qfag69O/view",
  "https://drive.google.com/file/d/1outED5qsvgNJoGBXnNO-ixbU37-IFig4/view",
  "https://drive.google.com/file/d/1sa9i0U3fQOmwQG8-6G4QKnleTqm6l-s9/view",
  "https://drive.google.com/file/d/1tu0npBzuoc2Br6E6YmK_RYHh1PrtLmqL/view",
  "https://drive.google.com/file/d/1ulLj4atH5ATpbBj_EjqJuueSHX9cURuQ/view",
  "https://drive.google.com/file/d/1yp72GlTzU46n_o_wfn-uFp5EyKxCoCu2/view",
];
const books = [
  {
    id: 1,
    title: "Thirteen Steps to Mentalism",
    author: "Corinda",
    description: "The definitive bible of mentalism. Thirteen complete systems covering every branch of the art — from the swami gimmick to large-scale publicity stunts. Required reading for every serious student of the mind.",
    pdf: "/pdfs/corinda.pdf",
    color: "from-purple-500 to-indigo-700",
    glow: "rgba(139,92,246,0.4)",
    note: null,
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
    title: "The Full Facts Book of Cold Reading",
    author: "Ian Rowland",
    description: "The complete technical manual for cold reading — the art of making accurate statements about a stranger using psychology, probability, and structured technique. Covers every element from rainbow ruses to Barnum statements.",
    pdf: "/pdfs/rowland.pdf",
    color: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.4)",
    note: null,
  },
  {
    id: 4,
    title: "Telling Lies",
    author: "Paul Ekman",
    description: "The world-renowned psychologist's definitive investigation into the science of deceit. Covers micro-expressions, leakage, vocal clues, and real-world lie detection — from patient interviews to presidential hearings.",
    pdf: "/pdfs/ekman.pdf",
    color: "from-rose-400 to-red-600",
    glow: "rgba(251,113,133,0.4)",
    note: null,
  },
  {
    id: 5,
    title: "Spy the Lie",
    author: "Houston, Floyd, Carnicero & Tennant",
    description: "Former CIA officers reveal a field-tested methodology for detecting deception used in real-world intelligence interrogations. Systematic, practical, and grounded in decades of high-stakes experience.",
    pdf: "/pdfs/spy.pdf",
    color: "from-amber-400 to-orange-600",
    glow: "rgba(251,191,36,0.4)",
    note: null,
  },
  {
    id: 6,
    title: "The Like Switch",
    author: "Jack Schafer, Ph.D.",
    description: "An ex-FBI behavioral analyst reveals the exact techniques used to make strangers trust and like you — from non-verbal rapport signals to conversational frameworks for building instant connection.",
    pdf: "/pdfs/schafer.pdf",
    color: "from-sky-400 to-blue-600",
    glow: "rgba(56,189,248,0.4)",
    note: null,
  },
  {
    id: 7,
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini, Ph.D.",
    description: "Six universal principles of compliance and persuasion that drive human behavior. The scientific bedrock beneath every successful mentalism presentation — reciprocation, commitment, social proof, liking, authority, and scarcity.",
    pdf: "/pdfs/cialdini.pdf",
    color: "from-yellow-400 to-amber-600",
    glow: "rgba(250,204,21,0.4)",
    note: null,
  },
  {
    id: 8,
    title: "What Every Body Is Saying",
    author: "Joe Navarro",
    description: "An ex-FBI agent's complete guide to reading nonverbal communication. Master the silent language of the body — the foundation of any convincing cold reading, psychometry presentation, or mind-reading act.",
    pdf: "/pdfs/navarro.pdf",
    color: "from-green-400 to-emerald-600",
    glow: "rgba(74,222,128,0.4)",
    note: null,
  },
  {
    id: 9,
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    description: "The world's foremost expert on body language decodes every gesture, expression, and posture. A critical companion for any mentalist who wants their readings to feel eerily accurate.",
    pdf: "/pdfs/pease.pdf",
    color: "from-fuchsia-500 to-pink-600",
    glow: "rgba(232,121,249,0.4)",
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
        <p className="text-white/30 text-xs uppercase tracking-[0.35em]">
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
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative"
          >
            {/* Book header card */}
            <div
              className="relative rounded-2xl p-[1px] mb-4 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${book.glow.replace("0.4", "0.7")}, transparent 70%)` }}
            >
              <div className="relative bg-[#09090f] rounded-[15px] p-8 overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-[60px] opacity-25 pointer-events-none"
                  style={{ background: book.glow }}
                />
                {/* Nested box layers */}
                <div className="absolute inset-3 rounded-xl border opacity-[0.07] pointer-events-none" style={{ borderColor: book.glow.replace("0.4", "1") }} />
                <div className="absolute inset-6 rounded-lg border opacity-[0.04] pointer-events-none" style={{ borderColor: book.glow.replace("0.4", "1") }} />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-serif font-bold bg-gradient-to-br ${book.color} text-white shadow-lg`}>
                    {book.id}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl md:text-3xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r ${book.color} mb-2`}>
                      {book.title}
                    </h2>
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-3">
                      {book.author}
                    </p>
                    <p className="text-white/55 leading-relaxed max-w-3xl text-sm">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Embed */}
            {book.pdf ? (
              <div
                className="relative rounded-2xl overflow-hidden border border-white/8"
                style={{ boxShadow: `0 0 40px ${book.glow.replace("0.4", "0.12")}` }}
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
                className="relative rounded-2xl border border-white/8 p-12 text-center bg-[#09090f]"
                style={{ boxShadow: `0 0 40px ${book.glow.replace("0.4", "0.08")}` }}
              >
                <p className="text-white/30 text-sm">{book.note}</p>
              </div>
            )}
            {/* Google Drive Archive */}
<div className="mt-24">
  <h2 className="text-xl mb-6">Additional PDFs</h2>

  <div className="space-y-2">
    {driveLinks.map((link, index) => (
      <div key={index}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PDF {index + 1}
        </a>
      </div>
    ))}
  </div>
</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
