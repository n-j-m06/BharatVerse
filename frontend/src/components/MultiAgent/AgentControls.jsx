import {
  Play,
  Pause,
  RotateCcw,
  Square,
  Settings,
  BarChart3,
} from "lucide-react";

export default function AgentControls() {

  const actions = [
    {
      title: "Start All",
      icon: <Play size={20} />,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Pause",
      icon: <Pause size={20} />,
      color: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      title: "Restart",
      icon: <RotateCcw size={20} />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Stop",
      icon: <Square size={20} />,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      title: "Analytics",
      icon: <BarChart3 size={20} />,
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      title: "Configure",
      icon: <Settings size={20} />,
      color: "bg-slate-700 hover:bg-slate-600",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⚙ Agent Controls
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {actions.map((action) => (

          <button
            key={action.title}
            className={`${action.color} rounded-xl p-5 transition duration-300 flex flex-col items-center gap-3`}
          >

            {action.icon}

            <span className="font-semibold">
              {action.title}
            </span>

          </button>

        ))}

      </div>

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-lg font-semibold mb-4">
          Current System Status
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Running Agents</p>
            <h2 className="text-2xl font-bold text-green-400">5</h2>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Queued Tasks</p>
            <h2 className="text-2xl font-bold text-cyan-400">132</h2>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Alerts</p>
            <h2 className="text-2xl font-bold text-red-400">3</h2>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Health</p>
            <h2 className="text-2xl font-bold text-green-400">
              99%
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
}