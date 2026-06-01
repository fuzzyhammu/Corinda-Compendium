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
  "https://drive.google.com/file/d/1yp72GlTzU46n_o_wfn-uFp5EyKxCoCu2/view"
];

const books = [
  {
    id: 1,
    title: "The Big Con",
    author: "David W. Maurer",
    description:
      "A sociological study of confidence tricks and professional con artists in early 20th-century America, focusing on scam structures and criminal psychology.",
    pdf: driveLinks[0],
    color: "from-purple-500 to-indigo-700",
    glow: "rgba(139,92,246,0.4)",
    note: null,
  },
  {
    id: 2,
    title: "The Definitive Book of Body Language",
    author: "Allan Pease & Barbara Pease",
    description:
      "A comprehensive guide to interpreting nonverbal communication such as gestures, posture, facial expressions, and social signaling.",
    pdf: driveLinks[1],
    color: "from-fuchsia-500 to-pink-600",
    glow: "rgba(232,121,249,0.4)",
    note: null,
  },
  {
    id: 3,
    title: "The Confidence Game",
    author: "Maria Konnikova",
    description:
      "An analysis of why intelligent people fall for scams, focusing on psychological vulnerability and manipulation tactics used by con artists.",
    pdf: driveLinks[2],
    color: "from-rose-400 to-red-600",
    glow: "rgba(251,113,133,0.4)",
    note: null,
  },
  {
    id: 4,
    title: "Mastermind: How to Think Like Sherlock Holmes",
    author: "Maria Konnikova",
    description:
      "Explores cognitive strategies used by Sherlock Holmes, emphasizing attention, logic, and controlled thinking to improve real-world reasoning.",
    pdf: driveLinks[3],
    color: "from-cyan-400 to-blue-600",
    glow: "rgba(34,211,238,0.4)",
    note: null,
  },
  {
    id: 5,
    title: "The Like Switch",
    author: "Jack Schafer & Marvin Karlins",
    description:
      "Based on FBI behavioral analysis, it explains techniques for building rapport, trust, and social influence through behavioral cues.",
    pdf: driveLinks[4],
    color: "from-sky-400 to-blue-600",
    glow: "rgba(56,189,248,0.4)",
    note: null,
  },
  {
    id: 6,
    title: "Practical Mental Magic",
    author: "Theodore Annemann",
    description:
      "A foundational mentalism text covering performance techniques, psychological illusions, and classic mental magic methods.",
    pdf: driveLinks[5],
    color: "from-cyan-400 to-indigo-600",
    glow: "rgba(34,211,238,0.4)",
    note: null,
  },
  {
    id: 7,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description:
      "A classic self-improvement book on interpersonal skills, persuasion, communication, and social effectiveness.",
    pdf: driveLinks[6],
    color: "from-yellow-400 to-amber-600",
    glow: "rgba(250,204,21,0.4)",
    note: null,
  },
  {
    id: 8,
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    description:
      "A narrative exploration of memory techniques and competitive memorization, showing how memory can be trained through structured systems.",
    pdf: driveLinks[7],
    color: "from-green-400 to-emerald-600",
    glow: "rgba(74,222,128,0.4)",
    note: null,
  },
  {
    id: 9,
    title: "Trance-Formations",
    author: "Richard Bandler & John Grinder",
    description:
      "A foundational NLP text exploring language patterns, hypnosis, and behavioral modeling.",
    pdf: driveLinks[8],
    color: "from-indigo-400 to-purple-600",
    glow: "rgba(99,102,241,0.4)",
    note: null,
  },
  {
    id: 10,
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    description:
      "A psychological framework for understanding human behavior, motivations, ego patterns, and strategic social navigation.",
    pdf: driveLinks[9],
    color: "from-stone-400 to-zinc-600",
    glow: "rgba(161,161,170,0.4)",
    note: null,
  },
  {
    id: 11,
    title: "Telling Lies",
    author: "Paul Ekman",
    description:
      "A scientific analysis of micro-expressions and deception detection based on facial muscle movements and emotional leakage.",
    pdf: driveLinks[10],
    color: "from-rose-400 to-red-600",
    glow: "rgba(251,113,133,0.4)",
    note: null,
  },
  {
    id: 12,
    title: "You Can Have an Amazing Memory",
    author: "Dominic O’Brien",
    description:
      "A practical guide to memory systems developed by a world memory champion, focusing on visualization and association techniques.",
    pdf: driveLinks[11],
    color: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.4)",
    note: null,
  },
  {
    id: 13,
    title: "Never Split the Difference",
    author: "Chris Voss",
    description:
      "Negotiation strategies from a former FBI hostage negotiator, emphasizing tactical empathy and calibrated communication.",
    pdf: driveLinks[12],
    color: "from-orange-400 to-red-600",
    glow: "rgba(251,146,60,0.4)",
    note: null,
  },
  {
    id: 14,
    title: "Thirteen Steps to Mentalism",
    author: "Tony Corinda",
    description:
      "A structured manual of mentalism techniques including mind-reading illusions, predictions, and psychological performance methods.",
    pdf: driveLinks[13],
    color: "from-purple-500 to-indigo-700",
    glow: "rgba(139,92,246,0.4)",
    note: null,
  },
  {
    id: 15,
    title: "Pre-Suasion",
    author: "Robert Cialdini",
    description:
      "Examines how attention and context shape persuasion before a message is delivered.",
    pdf: driveLinks[14],
    color: "from-yellow-400 to-amber-600",
    glow: "rgba(250,204,21,0.4)",
    note: null,
  },
  {
    id: 16,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    description:
      "A strategic guide to power dynamics, manipulation, and social hierarchy patterns throughout history.",
    pdf: driveLinks[15],
    color: "from-stone-500 to-black",
    glow: "rgba(0,0,0,0.4)",
    note: null,
  },
  {
    id: 17,
    title: "Psychology of Intelligence Analysis",
    author: "Richards J. Heuer Jr.",
    description:
      "A study of cognitive biases in intelligence work and how analysts can improve judgment under uncertainty.",
    pdf: driveLinks[16],
    color: "from-blue-400 to-indigo-600",
    glow: "rgba(59,130,246,0.4)",
    note: null,
  },
  {
    id: 18,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "Explains dual-process theory of cognition: fast intuitive thinking vs slow analytical reasoning, and associated biases.",
    pdf: driveLinks[17],
    color: "from-amber-400 to-yellow-600",
    glow: "rgba(250,204,21,0.4)",
    note: null,
  },
  {
    id: 19,
    title: "Designing Miracles",
    author: "Darwin Ortiz",
    description:
      "Advanced theory of magic design focusing on deception structure, audience perception, and impossibility construction.",
    pdf: driveLinks[18],
    color: "from-violet-400 to-fuchsia-600",
    glow: "rgba(192,132,252,0.4)",
    note: null,
  },
  {
    id: 20,
    title: "The Ellipsis Manual",
    author: "Chase Hughes",
    description:
      "A behavioral psychology system for reading, influencing, and analyzing human behavior patterns in real time.",
    pdf: driveLinks[19],
    color: "from-teal-400 to-cyan-600",
    glow: "rgba(45,212,191,0.4)",
    note: null,
  },
  {
    id: 21,
    title: "Games People Play",
    author: "Eric Berne",
    description:
      "A foundational transactional analysis book describing recurring psychological “games” in social interactions.",
    pdf: driveLinks[20],
    color: "from-pink-400 to-rose-600",
    glow: "rgba(244,114,182,0.4)",
    note: null,
  },
  {
    id: 22,
    title: "What Every Body Is Saying",
    author: "Joe Navarro",
    description:
      "Explains nonverbal communication from an ex-FBI agent, focusing on body cues that reveal intent and emotion.",
    pdf: driveLinks[21],
    color: "from-green-400 to-emerald-600",
    glow: "rgba(74,222,128,0.4)",
    note: null,
  },
  {
    id: 23,
    title: "Deception & Self-Deception",
    author: "Richard Wiseman",
    description:
      "Research-based exploration of how people deceive others and themselves, including psychological blind spots.",
    pdf: driveLinks[22],
    color: "from-gray-400 to-slate-600",
    glow: "rgba(148,163,184,0.4)",
    note: null,
  },
  {
    id: 24,
    title: "Impro: Improvisation and the Theatre",
    author: "Keith Johnstone",
    description:
      "A study of spontaneity, creativity, and social dynamics through improvisational theatre techniques.",
    pdf: driveLinks[23],
    color: "from-orange-400 to-amber-600",
    glow: "rgba(251,146,60,0.4)",
    note: null,
  },
  {
    id: 25,
    title: "Strong Magic",
    author: "Darwin Ortiz",
    description:
      "Focuses on performance theory in magic, especially audience psychology and the construction of convincing illusions.",
    pdf: driveLinks[24],
    color: "from-indigo-500 to-blue-700",
    glow: "rgba(99,102,241,0.4)",
    note: null,
  },
  {
    id: 26,
    title: "Sleights of Mind",
    author: "Macknik, Martinez-Conde & Blakeslee",
    description:
      "Neuroscientific analysis of magic tricks and how they exploit attention, perception, and cognitive blind spots.",
    pdf: driveLinks[25],
    color: "from-cyan-400 to-sky-600",
    glow: "rgba(56,189,248,0.4)",
    note: null,
  },
  {
    id: 27,
    title: "Left of Bang",
    author: "Patrick Van Horne & Jason A. Riley",
    description:
      "Behavioral detection system used by Marines to identify threats before incidents occur.",
    pdf: driveLinks[26],
    color: "from-red-400 to-rose-600",
    glow: "rgba(248,113,113,0.4)",
    note: null,
  },
  {
    id: 28,
    title: "Influence: The Psychology of Persuasion",
    author: "Robert Cialdini",
    description:
      "Classic study of persuasion principles such as reciprocity, scarcity, authority, consistency, liking, and social proof.",
    pdf: driveLinks[27],
    color: "from-yellow-400 to-amber-600",
    glow: "rgba(250,204,21,0.4)",
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
          Essential Texts for the Serious Thinker
        </p>
        <div className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      </motion.div>

      <div className="space-y-20">
        {books.map((book) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl p-[1px] mb-4 overflow-hidden">
              <div className="relative bg-[#09090f] rounded-[15px] p-8 overflow-hidden">
                <div
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-[60px] opacity-25 pointer-events-none"
                  style={{ background: book.glow }}
                />
                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold bg-gradient-to-br ${book.color} text-white`}>
                    {book.id}
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r ${book.color}`}>
                      {book.title}
                    </h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
                      {book.author}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden border border-white/10"
              style={{ boxShadow: `0 0 40px ${book.glow}` }}
            >
              <embed
                src={book.pdf}
                type="application/pdf"
                className="w-full"
                style={{ height: "82vh", minHeight: 500 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}