import { Clock3 } from "lucide-react";

const logs = [
  {
    time: "10:42:31",
    agent: "Climate AI",
    status: "Flood prediction completed",
    color: "text-green-400",
  },
  {
    time: "10:42:18",
    agent: "Traffic AI",
    status: "Congestion detected in Chennai",
    color: "text-orange-400",
  },
  {
    time: "10:41:57",
    agent: "Economy AI",
    status: "GDP forecast updated",
    color: "text-cyan-400",
  },
  {
    time: "10:41:32",
    agent: "Energy AI",
    status: "Power demand recalculated",
    color: "text-yellow-400",
  },
  {
    time: "10:41:05",
    agent: "Disaster AI",
    status: "Cyclone simulation completed",
    color: "text-red-400",
  },
];

export default function AgentLogs() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <Clock3 className="text-cyan-400"/>

        <h2 className="text-2xl font-bold">

          Live Agent Logs

        </h2>

      </div>

      <div className="space-y-4">

        {logs.map((log,index)=>(

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500 transition"
          >

            <div className="flex justify-between">

              <h3 className="font-semibold">

                {log.agent}

              </h3>

              <span className="text-slate-400 text-sm">

                {log.time}

              </span>

            </div>

            <p className={`${log.color} mt-2`}>

              {log.status}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}