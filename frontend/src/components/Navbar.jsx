import { Bell, Search, UserCircle, CloudSun } from "lucide-react";
import { useLayoutShell } from "./LayoutContext";

export default function Navbar({ asShell = false }) {
  const { isShellActive } = useLayoutShell();
  const user = localStorage.getItem("user") || "Rahul";

  if (!asShell && isShellActive) {
    return null;
  }

  return (
    <header className="h-24 bg-slate-900 border-b border-slate-700 px-5 xl:px-8 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="pb-1">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          🇮🇳 BharatVerse
        </h1>
        <p className="text-xs text-slate-400">
          AI Powered National Digital Twin Platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2 w-full max-w-[18rem] xl:max-w-[20rem] transition focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/30">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search dashboards, AI agents..."
            className="bg-transparent outline-none ml-2 w-full text-base text-white placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl shadow-sm">
          <CloudSun className="text-yellow-400" size={20} />
          <span className="text-sm xl:text-base text-slate-200">
            Chennai • 31°C
          </span>
        </div>

        <button className="relative p-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:bg-slate-700 transition-all duration-200">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 hover:border-cyan-400 hover:bg-slate-700/60 transition">
          <UserCircle className="text-cyan-400" size={26} />
          <div>
            <p className="text-base font-medium">{user}</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}