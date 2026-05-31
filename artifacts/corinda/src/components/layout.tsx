import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { RiBook2Line, RiCompassDiscoverLine, RiHomeLine } from "react-icons/ri";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  if (location === "/emergency" || location === "/vision") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-fuchsia-500/30 font-sans relative overflow-hidden flex flex-col">
      {/* Background ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]" />
      </div>

      <nav className="relative z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif italic text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            CORINDA
          </Link>
          <div className="flex items-center gap-6">
            <NavLink href="/" icon={<RiHomeLine />} label="Hub" active={location === "/"} />
            <NavLink href="/chapters" icon={<RiCompassDiscoverLine />} label="Chapters" active={location === "/chapters"} />
            <NavLink href="/books" icon={<RiBook2Line />} label="Library" active={location === "/books"} />
            <Link href="/vision" className="opacity-0 hover:opacity-100 transition-opacity duration-500 p-2 text-xs text-white/20">.</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#030305] py-8 text-center text-xs text-white/30">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span>The Thirteen Steps</span>
          <Link href="/emergency" className="opacity-10 hover:opacity-100 transition-all duration-300 cursor-pointer" title="system access">
            *
          </Link>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: ReactNode; label: string; active: boolean }) {
  return (
    <Link href={href}>
      <span className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-all duration-300 ${active ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-white/50 hover:text-white"}`}>
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </span>
    </Link>
  );
}