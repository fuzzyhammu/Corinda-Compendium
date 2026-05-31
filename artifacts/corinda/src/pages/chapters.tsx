import { motion } from "framer-motion";
import { chapters } from "@/lib/data";

export default function Chapters() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-serif italic text-white/90 tracking-wide">The Complete Steps</h1>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </motion.div>

      <div className="space-y-32">
        {chapters.map((chapter, i) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Connector line between steps */}
            {i !== chapters.length - 1 && (
              <div className="absolute left-8 top-full h-32 w-[1px] bg-gradient-to-b from-white/20 to-transparent z-0 hidden md:block" />
            )}

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-serif bg-black border ${chapter.border} shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10`}>
                <span className={`text-transparent bg-clip-text bg-gradient-to-br ${chapter.color}`}>
                  {chapter.id}
                </span>
              </div>
              
              <div className="flex-1 pt-2">
                <h2 className={`text-3xl font-light tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r ${chapter.color} drop-shadow-sm`}>
                  {chapter.title}
                </h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                  <p className="text-lg text-white/70 leading-relaxed font-light">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}