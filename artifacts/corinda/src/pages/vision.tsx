import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Vision() {
  const [, navigate] = useLocation();

  return (
    <div className="relative min-h-screen bg-[#03030A] overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-radial from-fuchsia-900/20 via-transparent to-transparent" style={{ background: "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center mb-8 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-300 tracking-wide drop-shadow-[0_0_30px_rgba(232,121,249,0.3)]">
          The Vision
        </h1>
        <p className="text-white/30 text-xs uppercase tracking-[0.4em] mt-3">
          Better Things Are Coming
        </p>
      </motion.div>

      {/* Vision board image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl px-4"
      >
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.2),0_0_160px_rgba(236,72,153,0.1)]">
          {/* Outer glow border */}
          <div className="absolute inset-0 rounded-3xl border border-fuchsia-500/20 z-10 pointer-events-none" />
          <div className="absolute inset-2 rounded-2xl border border-pink-400/10 z-10 pointer-events-none" />

          <motion.img
            src="/visionboard.png"
            alt="Vision Board — Better Things Are Coming"
            className="w-full h-auto block"
            style={{ maxHeight: "75vh", objectFit: "contain", background: "#03030A" }}
            animate={{ scale: [1, 1.008, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 mt-10 text-center"
      >
        <button
          onClick={() => navigate("/")}
          className="group px-8 py-3 border border-fuchsia-500/30 rounded-full text-white/40 hover:text-white hover:border-fuchsia-400/70 transition-all duration-400 text-sm tracking-widest uppercase bg-white/[0.02] hover:bg-fuchsia-900/10 backdrop-blur-sm"
        >
          Return to the Hub
        </button>
      </motion.div>
    </div>
  );
}
