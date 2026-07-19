import {
  PlayCircle,
  MapPin,
  Clock3,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function ActiveSimulation() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold">

            Active Simulation

          </h2>

          <p className="text-slate-400 mt-2">

            Current AI simulation running across BharatVerse.

          </p>

        </div>

        <PlayCircle className="text-green-400" size={32}/>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">

          <span className="text-slate-400">

            Scenario

          </span>

          <span className="font-semibold">

            Flood Prediction

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">

            City

          </span>

          <span className="flex items-center gap-2">

            <MapPin size={16}/>

            Chennai

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">

            Runtime

          </span>

          <span className="flex items-center gap-2">

            <Clock3 size={16}/>

            03m 42s

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">

            Status

          </span>

          <span className="text-green-400 flex items-center gap-2">

            <Activity size={16}/>

            Running

          </span>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>

            Overall Progress

          </span>

          <span className="text-cyan-400 font-semibold">

            78%

          </span>

        </div>

        <div className="w-full bg-slate-700 rounded-full h-4">

          <div
            className="bg-cyan-500 h-4 rounded-full"
            style={{width:"78%"}}
          />

        </div>

      </div>

      <div className="mt-8 bg-green-500/10 border border-green-500 rounded-xl p-4">

        <div className="flex items-center gap-3">

          <CheckCircle2 className="text-green-400"/>

          <span>

            Estimated completion in <b>1 minute 12 seconds</b>

          </span>

        </div>

      </div>

    </div>

  );

}