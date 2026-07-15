import {
  Cpu,
  MemoryStick,
  Activity,
  Server,
  Gauge,
  Zap,
} from "lucide-react";

const metrics = [
  {
    title: "CPU Usage",
    value: "72%",
    width: "72%",
    color: "bg-cyan-500",
    icon: <Cpu size={18} />,
  },
  {
    title: "Memory",
    value: "61%",
    width: "61%",
    color: "bg-green-500",
    icon: <MemoryStick size={18} />,
  },
  {
    title: "GPU Usage",
    value: "83%",
    width: "83%",
    color: "bg-orange-500",
    icon: <Zap size={18} />,
  },
  {
    title: "Queue Size",
    value: "43%",
    width: "43%",
    color: "bg-purple-500",
    icon: <Server size={18} />,
  },
];

export default function AgentMetrics() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 System Metrics
      </h2>

      <div className="space-y-5">

        {metrics.map((metric) => (

          <div key={metric.title}>

            <div className="flex justify-between items-center mb-2">

              <div className="flex items-center gap-2">

                {metric.icon}

                <span>{metric.title}</span>

              </div>

              <span className="font-semibold text-cyan-400">

                {metric.value}

              </span>

            </div>

            <div className="h-3 bg-slate-800 rounded-full">

              <div
                className={`h-3 rounded-full ${metric.color}`}
                style={{
                  width: metric.width,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      <div className="border-t border-slate-700 mt-8 pt-6">

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <Activity className="text-green-400" size={18} />

              <span className="text-sm text-slate-400">

                Avg Response

              </span>

            </div>

            <h3 className="text-2xl font-bold">

              82 ms

            </h3>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <Gauge className="text-cyan-400" size={18} />

              <span className="text-sm text-slate-400">

                Accuracy

              </span>

            </div>

            <h3 className="text-2xl font-bold">

              96.4%

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}