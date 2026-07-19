import {
  RotateCcw,
  Download,
  Trash2,
  Share2,
  Database,
} from "lucide-react";

export default function HistoryActions() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-fit">

      <h2 className="text-2xl font-bold mb-6">

        Quick Actions

      </h2>

      <div className="space-y-4">

        <button className="w-full bg-cyan-600 hover:bg-cyan-700 rounded-xl py-4 flex items-center justify-center gap-3">

          <RotateCcw size={20}/>

          Re-run Simulation

        </button>

        <button className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-4 flex items-center justify-center gap-3">

          <Download size={20}/>

          Export History

        </button>

        <button className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-4 flex items-center justify-center gap-3">

          <Share2 size={20}/>

          Share Results

        </button>

        <button className="w-full bg-orange-600 hover:bg-orange-700 rounded-xl py-4 flex items-center justify-center gap-3">

          <Database size={20}/>

          Archive History

        </button>

        <button className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-4 flex items-center justify-center gap-3">

          <Trash2 size={20}/>

          Delete History

        </button>

      </div>

      <div className="mt-8 bg-slate-800 border border-slate-700 rounded-xl p-5">

        <h3 className="text-cyan-400 font-semibold">

          History Summary

        </h3>

        <div className="mt-4 space-y-3 text-sm">

          <div className="flex justify-between">

            <span>Total Records</span>

            <span className="font-semibold">

              248

            </span>

          </div>

          <div className="flex justify-between">

            <span>Storage Used</span>

            <span className="font-semibold">

              1.8 GB

            </span>

          </div>

          <div className="flex justify-between">

            <span>Last Backup</span>

            <span className="font-semibold">

              Today

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}