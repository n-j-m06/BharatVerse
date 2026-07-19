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
  Cpu,
  Car,
  CloudSun,
  CloudRain,
  Landmark,
  Zap,
  Brain,
  Flame,
  Layers3,
  Activity,
  Leaf,
  Sun,
  Wind,
  CloudOff,
  Mountain,

  FileSearch,
  Bell,
  History,
  Wifi,
  Radio,
  LoaderCircle,

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
      path: "/chat",
    },
    {
      name: "Simulation",
      icon: <Cpu size={20} />,
      path: "/simulation",
    },
    {
      name: "Climate AI",
      icon: <CloudRain size={20} />,
      path: "/climate",
    },
    {
      name: "Traffic AI",
      icon: <Car size={20}/>,
      path: "/traffic",
    },
    {
      name: "Economy AI",
      icon: <Landmark size={20} />,
      path: "/economy",
    },
    {
      name: "Energy AI",
      icon: <Zap size={20} />,
      path: "/energy",
    },
    {
      name: "AI Recommendations",
      icon: <Brain size={20} />,
      path: "/recommendations",
    },
    {
      name: "AI Engine",
      icon: <Cpu size={20} />,
      path: "/engine",
    },
    {
      name: "Agent Status",
      icon: <Bot size={20} />,
      path: "/agent-status",
    },
    {
      name: "Digital Twin",
      icon: <Globe2 size={20} />,
      path: "/digital-twin",
    },
    {
        name:"Heatmap",
        icon:<Flame size={20}/>,
        path:"/heatmap"
    },
    {
      name:"Weather",
      icon:<CloudSun size={20}/>,
      path:"/weather"
    },
    {
      name:"Map Layers",
      icon:<Layers3 size={20}/>,
      path:"/map-layers"
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/analytics",
    },
    {
      name: "National KPI",
      icon: <Activity size={20} />,
      path: "/national-kpi",
    },
    {
      name:"SDG Dashboard",
      icon:<Leaf size={20}/>,
      path:"/sdg-dashboard",
    },
    {
      name: "Disaster",
      icon: <ShieldAlert size={20} />,
      path: "/disaster",
    },
    {
      name: "Timeline",
      icon: <Clock3 size={20} />,
      path: "/timeline",
    },
    {
      name: "Leaderboard",
      icon: <Trophy size={20} />,
      path: "/leaderboard",
    },
    {
      name: "Flood Risk",
      icon: <CloudRain size={20} />,
      path: "/flood-risk",
    },
    {
      name: "Heatwave Risk",
      icon: <Sun size={20} />,
      path: "/heatwave-risk",
    },
    {
      name: "Cyclone Risk",
      icon: <Wind size={20} />,
      path: "/cyclone-risk",
    },
    {
      name:"Drought Risk",
      icon:<CloudOff size={20}/>,
      path:"/drought-risk",
    },
    {
      name:"Earthquake Risk",
      icon:<Mountain size={20}/>,
      path:"/earthquake-risk",
    },
    {
  name: "Policy Analysis",
  icon: <FileSearch size={20} />,
  path: "/policy-analysis",
},

{
  name: "Citizen Reports",
  icon: <FileText size={20} />,
  path: "/citizen-report",
},

{
  name: "Notifications",
  icon: <Bell size={20} />,
  path: "/notifications",
},

{
  name: "Simulation History",
  icon: <History size={20} />,
  path: "/simulation-history",
},

{
  name: "Live AI",
  icon: <Wifi size={20} />,
  path: "/live-ai",
},

{
  name: "Simulation Stream",
  icon: <Radio size={20} />,
  path: "/simulation-stream",
},

{
  name: "Agent Progress",
  icon: <LoaderCircle size={20} />,
  path: "/agent-progress",
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