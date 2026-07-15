import {
  Play,
  Pause,
  Square,
  RotateCcw,
  Download,
  Settings,
} from "lucide-react";

export default function SimulationControls() {

  const controls = [
    {
      title: "Start",
      icon: <Play size={22} />,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Pause",
      icon: <Pause size={22} />,
      color: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      title: "Stop",
      icon: <Square size={22} />,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      title: "Restart",
      icon: <RotateCcw size={22} />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Export",
      icon: <Download size={22} />,
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      title: "Settings",
      icon: <Settings size={22} />,
      color: "bg-slate-700 hover:bg-slate-600",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Simulation Controls
          </h2>

          <p className="text-slate-400 mt-1">
            Control simulation execution in real time.
          </p>

        </div>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
          ● Ready
        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        {controls.map((control) => (

          <button
            key={control.title}
            className={`${control.color} rounded-xl p-5 flex flex-col items-center gap-3 transition-all duration-300 shadow-lg`}
          >

            {control.icon}

            <span className="font-medium">
              {control.title}
            </span>

          </button>

        ))}

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <p className="text-slate-400 text-sm">
            Simulation Status
          </p>

          <h3 className="text-xl font-bold text-green-400 mt-2">
            Ready
          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <p className="text-slate-400 text-sm">
            Active Agents
          </p>

          <h3 className="text-xl font-bold text-cyan-400 mt-2">
            4
          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <p className="text-slate-400 text-sm">
            Scenario
          </p>

          <h3 className="text-xl font-bold text-orange-400 mt-2">
            Flood
          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <p className="text-slate-400 text-sm">
            Estimated Time
          </p>

          <h3 className="text-xl font-bold text-purple-400 mt-2">
            24 min
          </h3>

        </div>

      </div>

    </div>
  );

}