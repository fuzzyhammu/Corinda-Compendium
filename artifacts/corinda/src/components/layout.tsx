import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { RiBook2Line, RiHomeLine, RiAlertFill } from "react-icons/ri";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  if (location === "/emergency" || location === "/vision") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-fuchsia-500/30 font-sans relative overflow-hidden flex flex-col">
      {/* Background ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/15 blur-[140px]" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-fuchsia-900/10 blur-[120px]" />
      </div>

      <nav className="relative z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif italic text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            CORINDA
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <NavLink href="/" icon={<RiHomeLine />} label="Hub" active={location === "/"} />
            <NavLink href="/books" icon={<RiBook2Line />} label="Library" active={location === "/books"} />
            <NavLink href="/emergency" icon={<RiAlertFill className="text-green-400" />} label="Emergency" active={location === "/emergency"} emergency />
            {/* Hidden vision link */}
            <Link href="/vision" className="opacity-0 hover:opacity-100 transition-opacity duration-500 p-2 text-xs text-white/20 select-none w-6">.</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#030305] py-6 text-center text-xs text-white/20">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <span className="tracking-widest uppercase">The Thirteen Steps</span>
          <span className="text-white/10">·</span>
          <Link href="/vision" className="opacity-10 hover:opacity-60 transition-all duration-500 cursor-pointer tracking-widest">
            *
          </Link>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href, icon, label, active, emergency
}: {
  href: string;
  icon: ReactNode;
  label: string;
  active: boolean;
  emergency?: boolean;
}) {
  return (
    <Link href={href}>
      <span className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-xs uppercase tracking-widest transition-all duration-300
        ${active
          ? emergency
            ? "text-green-400 bg-green-950/40 border border-green-800/40 shadow-[0_0_12px_rgba(74,222,128,0.2)]"
            : "text-cyan-400 bg-cyan-950/30 border border-cyan-800/30"
          : emergency
            ? "text-green-500/70 hover:text-green-300 hover:bg-green-950/30 border border-transparent hover:border-green-800/30"
            : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
        }
      `}>
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </span>
    </Link>
  );
}
