import { Cpu, Activity, CheckCircle2 } from "lucide-react";

export default function AgentCard({
  name,
  icon,
  status,
  accuracy,
  latency,
  tasks,
  progress,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-cyan-500 transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
            style={{
                background: color,
                boxShadow: `0 0 25px ${color}55`
            }}
          >
            {icon}
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              {name}
            </h2>

            <div className="flex items-center gap-2 mt-1">

              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <span className="text-green-400 text-sm">
                {status}
              </span>

            </div>

          </div>

        </div>

        <CheckCircle2 className="text-green-400" size={28} />

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-slate-400">
            Progress
          </span>

          <span className="text-cyan-400">
            {progress}%
          </span>

        </div>

        <div className="bg-slate-700 rounded-full h-3">

          <div
            className="bg-cyan-500 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-4 mt-7">

        <div className="bg-slate-800 rounded-xl p-3 text-center">

          <Activity className="mx-auto mb-2 text-cyan-400" />

          <p className="text-xs text-slate-400">
            Accuracy
          </p>

          <h3 className="font-bold text-lg">
            {accuracy}%
          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">

          <Cpu className="mx-auto mb-2 text-green-400" />

          <p className="text-xs text-slate-400">
            Latency
          </p>

          <h3 className="font-bold text-lg">
            {latency} ms
          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">

          <CheckCircle2 className="mx-auto mb-2 text-orange-400" />

          <p className="text-xs text-slate-400">
            Tasks
          </p>

          <h3 className="font-bold text-lg">
            {tasks}
          </h3>

        </div>

      </div>

    </div>
  );
}