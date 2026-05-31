import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 14;
    const cols = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(cols).fill(1).map(() => Math.random() * -100);

    let animId: number;
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const bright = Math.random() > 0.98;
        ctx.fillStyle = bright ? "#ffffff" : Math.random() > 0.9 ? "#00ff41" : "#003b00";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ opacity: 0.85 }}
    />
  );
}

const mirrors = Array.from({ length: 13 }, (_, i) => i + 1);

export default function Emergency() {
  const [, navigate] = useLocation();
  const [booted, setBooted] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [showLinks, setShowLinks] = useState(false);

  const bootSequence = [
    "> INITIALIZING EMERGENCY PROTOCOL...",
    "> DECRYPTING ARCHIVE INDEX...",
    "> VERIFYING MIRROR INTEGRITY...",
    "> SCANNING 13 NODES...",
    "> ALL MIRRORS ONLINE",
    "> ACCESS GRANTED",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setBooted(true);
          setTimeout(() => setShowLinks(true), 400);
        }, 600);
      }
    }, 320);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-mono text-green-400 select-none">
      <MatrixRain />

      {/* CRT scanlines */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        }}
      />

      {/* CRT vignette */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: [0, 1, 0.8, 1], scale: [1.05, 1, 1.01, 1] }}
              transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1] }}
              className="text-3xl md:text-5xl font-bold tracking-[0.15em] text-green-400 uppercase mb-2"
              style={{
                textShadow: "0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 80px rgba(0,255,65,0.3)",
              }}
            >
              EMERGENCY DATABASE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="text-green-600 text-xs tracking-[0.4em] uppercase"
            >
              CORINDA MIRROR NETWORK — CLASSIFIED
            </motion.p>
          </div>

          {/* Boot terminal */}
          <div
            className="bg-black/70 border border-green-900/60 rounded-lg p-6 mb-8 backdrop-blur-sm"
            style={{ boxShadow: "0 0 30px rgba(0,255,65,0.07), inset 0 0 30px rgba(0,0,0,0.5)" }}
          >
            <div className="text-green-600 text-xs mb-4 tracking-widest">
              [SYSTEM] — EMERGENCY ACCESS TERMINAL v2.0
            </div>
            <div className="space-y-1">
              {lines.filter(Boolean).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-sm ${line?.includes("GRANTED") ? "text-green-300 font-bold" : "text-green-500"}`}
                  style={
                    line?.includes("GRANTED")
                      ? { textShadow: "0 0 10px #00ff41" }
                      : {}
                  }
                >
                  {line}
                </motion.div>
              ))}
              {!booted && (
                <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 align-middle" />
              )}
            </div>
          </div>

          {/* Mirror links */}
          <AnimatePresence>
            {showLinks && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/70 border border-green-900/60 rounded-lg p-6 backdrop-blur-sm"
                style={{ boxShadow: "0 0 30px rgba(0,255,65,0.07), inset 0 0 30px rgba(0,0,0,0.5)" }}
              >
                <div className="text-green-600 text-xs mb-5 tracking-widest">
                  [DATABASE] — 13 MIRROR NODES DETECTED
                </div>
                <div className="space-y-2">
                  {mirrors.map((n, i) => (
                    <motion.a
                      key={n}
                      href={`https://${n}-corinda.netlify.app`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-center gap-3 group py-1.5 px-2 rounded hover:bg-green-950/40 transition-colors duration-200"
                    >
                      <span className="text-green-700 text-xs w-8 shrink-0">
                        [{String(n).padStart(2, "0")}]
                      </span>
                      <span
                        className="text-green-400 text-sm group-hover:text-green-200 transition-colors duration-200 flex-1"
                        style={{
                          textShadow: "0 0 6px rgba(0,255,65,0.3)",
                        }}
                      >
                        https://{n}-corinda.netlify.app
                      </span>
                      <span className="text-green-700 text-xs group-hover:text-green-500 transition-colors shrink-0">
                        [MIRROR ACTIVE]
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-green-900/30 text-green-700 text-xs">
                  [INFO] Emergency duplicates are exact mirrors of primary nodes 1-13.
                  Use only if primary sites are unreachable.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Return button */}
          {showLinks && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 text-center"
            >
              <button
                onClick={() => navigate("/")}
                className="border border-green-800 text-green-600 hover:text-green-300 hover:border-green-500 px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 rounded"
                style={{ background: "rgba(0,255,65,0.03)" }}
              >
                RETURN TO MAIN SYSTEM
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
