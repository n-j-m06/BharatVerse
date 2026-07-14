import {
  LayoutDashboard,
  Bot,
  Globe2,
  BarChart3,
  ShieldAlert,
  Clock3,
  Trophy,
  FileText,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "AI Assistant",
      icon: <Bot size={20} />,
      path: "#",
    },
    {
      name: "Digital Twin",
      icon: <Globe2 size={20} />,
      path: "#",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "#",
    },
    {
      name: "Disaster",
      icon: <ShieldAlert size={20} />,
      path: "#",
    },
    {
      name: "Timeline",
      icon: <Clock3 size={20} />,
      path: "#",
    },
    {
      name: "Leaderboard",
      icon: <Trophy size={20} />,
      path: "#",
    },
    {
      name: "Citizen Reports",
      icon: <FileText size={20} />,
      path: "#",
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-700 min-h-screen flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h2 className="text-cyan-400 text-xl font-bold">
          BharatVerse
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          National AI Platform
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      <div className="p-4 border-t border-slate-700">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 hover:bg-red-700 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}