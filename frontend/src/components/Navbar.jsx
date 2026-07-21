import { Bell, Search, UserCircle, CloudSun } from "lucide-react";

export default function Navbar() {
  const user = localStorage.getItem("user") || "Rahul";

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-700 px-5 xl:px-8 flex items-center justify-between sticky top-0 z-50 shadow-lg">

      <div>
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          🇮🇳 BharatVerse
        </h1>
        <p className="text-xs text-slate-400">
          AI Powered National Digital Twin Platform
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center bg-slate-800 rounded-xl px-3 py-2 w-72 xl:w-80">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full text-base text-white placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl">
          <CloudSun className="text-yellow-400" size={20} />
          <span className="text-sm xl:text-base text-slate-200">
            Chennai • 31°C
          </span>
        </div>

        <button className="relative p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2">
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