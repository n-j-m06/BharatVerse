import {
  Terminal,
  Activity,
} from "lucide-react";

export default function LiveConsole() {

  const logs = [

    "[22:40:01] WebSocket Connected",

    "[22:40:03] Climate AI started flood prediction",

    "[22:40:05] Traffic AI synchronized road sensors",

    "[22:40:08] Economy AI updated GDP simulation",

    "[22:40:10] Energy AI optimized grid distribution",

    "[22:40:13] Disaster AI generated risk alert",

    "[22:40:17] Digital Twin synchronized successfully",

    "[22:40:21] Recommendation Engine updated",

    "[22:40:24] Live stream heartbeat received",

    "[22:40:30] AI pipeline healthy",

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold flex items-center gap-2">

            <Terminal size={24}/>

            AI Live Console

          </h2>

          <p className="text-slate-400 mt-1">

            Streaming logs from all AI agents.

          </p>

        </div>

        <div className="flex items-center gap-2 text-green-400">

          <Activity size={18}/>

          LIVE

        </div>

      </div>

      <div className="bg-black rounded-xl p-5 h-96 overflow-y-auto font-mono text-sm border border-slate-700">

        {logs.map((log,index)=>(

          <div
            key={index}
            className="text-green-400 mb-3"
          >

            {log}

          </div>

        ))}

      </div>

    </div>

  );

}