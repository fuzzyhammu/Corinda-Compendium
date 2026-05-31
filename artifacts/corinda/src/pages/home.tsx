import { motion } from "framer-motion";
import { chapters } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

export default function Home() {
  return (
    <div className="flex-1 w-full px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Corinda
        </h1>
        <p className="text-xl md:text-2xl text-white/50 tracking-[0.2em] uppercase font-light">
          Thirteen Steps to Mentalism
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {chapters.map((chapter) => (
          <motion.a
            key={chapter.id}
            variants={item}
            href={`https://${chapter.id}corinda.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block h-full p-[1px] overflow-hidden rounded-2xl bg-gradient-to-br ${chapter.color} hover:${chapter.shadow} transition-shadow duration-500`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className={`relative h-full bg-[#08080C] rounded-[15px] p-6 flex flex-col border border-white/10 group-hover:border-transparent transition-colors z-10 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <span className={`text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-br ${chapter.color}`}>
                  {chapter.id.toString().padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{chapter.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-light mt-auto">
                {chapter.description}
              </p>
              
              {/* Nested glowing box effect on hover */}
              <div className="absolute inset-2 border border-white/0 group-hover:border-white/10 rounded-xl transition-all duration-500 pointer-events-none scale-95 group-hover:scale-100" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}