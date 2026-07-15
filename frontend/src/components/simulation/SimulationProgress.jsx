import { Activity, Clock3, Timer, Cpu } from "lucide-react";

export default function SimulationProgress() {

  // Later these values will come from WebSocket/API
  const progress = 72;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Live Simulation Progress
          </h2>

          <p className="text-slate-400 mt-1">
            Real-time execution monitoring
          </p>

        </div>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
          ● Running
        </div>

      </div>

      {/* Progress */}

      <div>

        <div className="flex justify-between mb-2">

          <span className="text-slate-300">
            Overall Progress
          </span>

          <span className="font-bold text-cyan-400">

            {progress}%

          </span>

        </div>

        <div className="w-full h-4 rounded-full bg-slate-800">

          <div
            className="h-4 rounded-full bg-cyan-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Current Stage */}

      <div className="mt-8">

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="font-semibold mb-2">
            Current Stage
          </h3>

          <p className="text-cyan-400 text-lg">
            Running Flood Prediction Model
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">

            <Clock3 size={18} className="text-green-400"/>

            <span className="text-slate-400">

              Time Elapsed

            </span>

          </div>

          <h3 className="text-2xl font-bold">

            18 min

          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">

            <Timer size={18} className="text-orange-400"/>

            <span className="text-slate-400">

              Remaining

            </span>

          </div>

          <h3 className="text-2xl font-bold">

            7 min

          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">

            <Cpu size={18} className="text-cyan-400"/>

            <span className="text-slate-400">

              Current Agent

            </span>

          </div>

          <h3 className="text-xl font-bold">

            Climate AI

          </h3>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">

            <Activity size={18} className="text-purple-400"/>

            <span className="text-slate-400">

              Status

            </span>

          </div>

          <h3 className="text-xl font-bold text-green-400">

            Processing

          </h3>

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="font-semibold mb-4">

          Execution Pipeline

        </h3>

        <div className="flex justify-between items-center">

          <div className="text-center">

            <div className="w-10 h-10 rounded-full bg-green-500 mx-auto"></div>

            <p className="mt-2 text-sm">

              Initialize

            </p>

          </div>

          <div className="flex-1 h-1 bg-green-500"></div>

          <div className="text-center">

            <div className="w-10 h-10 rounded-full bg-green-500 mx-auto"></div>

            <p className="mt-2 text-sm">

              AI Analysis

            </p>

          </div>

          <div className="flex-1 h-1 bg-cyan-500"></div>

          <div className="text-center">

            <div className="w-10 h-10 rounded-full bg-cyan-500 animate-pulse mx-auto"></div>

            <p className="mt-2 text-sm">

              Prediction

            </p>

          </div>

          <div className="flex-1 h-1 bg-slate-700"></div>

          <div className="text-center">

            <div className="w-10 h-10 rounded-full bg-slate-700 mx-auto"></div>

            <p className="mt-2 text-sm">

              Report

            </p>

          </div>

        </div>

      </div>

    </div>
  );

}