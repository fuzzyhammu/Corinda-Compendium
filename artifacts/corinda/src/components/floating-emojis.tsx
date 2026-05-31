import { useMemo } from "react";

const MENTALISM_EMOJIS = [
  "🔮", "🃏", "🎩", "👁️", "🧠", "🌀", "✨", "🪄", "🎭", "💫",
  "🎯", "🌙", "⭐", "💡", "🎪", "📖", "🧿", "🎲", "🤫", "🔭",
  "📜", "🌊", "🎴", "🪬", "🕵️", "💎", "🌟", "🃎", "🔮", "🎱",
];

interface Particle {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

interface FloatingEmojisProps {
  count?: number;
  seed?: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function FloatingEmojis({ count = 22, seed = 42 }: FloatingEmojisProps) {
  const particles: Particle[] = useMemo(() => {
    const rand = seededRandom(seed);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: MENTALISM_EMOJIS[Math.floor(rand() * MENTALISM_EMOJIS.length)],
      left: rand() * 100,
      size: 0.9 + rand() * 1.4,
      duration: 10 + rand() * 18,
      delay: -(rand() * 20),
      drift: (rand() - 0.5) * 60,
      opacity: 0.08 + rand() * 0.18,
    }));
  }, [count, seed]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          className="absolute bottom-0 emoji-float"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
