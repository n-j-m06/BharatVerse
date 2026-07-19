import {
  CheckCheck,
  Trash2,
  BellOff,
  Download,
  Settings,
} from "lucide-react";

export default function NotificationActions() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-fit">

      <h2 className="text-2xl font-bold mb-6">

        Quick Actions

      </h2>

      <div className="space-y-4">

        <button
          className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-4 flex items-center justify-center gap-3"
        >

          <CheckCheck size={20}/>

          Mark All as Read

        </button>

        <button
          className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-4 flex items-center justify-center gap-3"
        >

          <Trash2 size={20}/>

          Clear Notifications

        </button>

        <button
          className="w-full bg-yellow-600 hover:bg-yellow-700 rounded-xl py-4 flex items-center justify-center gap-3"
        >

          <BellOff size={20}/>

          Mute Alerts

        </button>

        <button
          className="w-full bg-cyan-600 hover:bg-cyan-700 rounded-xl py-4 flex items-center justify-center gap-3"
        >

          <Download size={20}/>

          Export Log

        </button>

        <button
          className="w-full bg-slate-700 hover:bg-slate-600 rounded-xl py-4 flex items-center justify-center gap-3"
        >

          <Settings size={20}/>

          Notification Settings

        </button>

      </div>

      <div className="mt-8 p-5 bg-slate-800 rounded-xl border border-slate-700">

        <h3 className="font-semibold text-cyan-400">

          Live Status

        </h3>

        <div className="mt-4 space-y-3 text-sm">

          <div className="flex justify-between">

            <span>WebSocket</span>

            <span className="text-green-400">

              Connected

            </span>

          </div>

          <div className="flex justify-between">

            <span>AI Feed</span>

            <span className="text-green-400">

              Active

            </span>

          </div>

          <div className="flex justify-between">

            <span>Last Update</span>

            <span className="text-slate-300">

              Just now

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}