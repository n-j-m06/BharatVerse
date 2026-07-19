import {
  Activity,
  Cpu,
  Database,
  Wifi,
  Gauge,
  Server,
} from "lucide-react";

export default function StreamMetrics() {

  const metrics = [

    {
      title: "CPU Usage",
      value: "43%",
      color: "bg-cyan-500",
      icon: <Cpu size={20}/>
    },

    {
      title: "Memory",
      value: "6.2 GB",
      color: "bg-green-500",
      icon: <Database size={20}/>
    },

    {
      title: "Network",
      value: "845 Mbps",
      color: "bg-yellow-500",
      icon: <Wifi size={20}/>
    },

    {
      title: "Events/sec",
      value: "248",
      color: "bg-purple-500",
      icon: <Activity size={20}/>
    },

    {
      title: "Latency",
      value: "19 ms",
      color: "bg-orange-500",
      icon: <Gauge size={20}/>
    },

    {
      title: "AI Requests",
      value: "1,452",
      color: "bg-red-500",
      icon: <Server size={20}/>
    }

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Live Stream Metrics

      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {metrics.map((metric)=>(

          <div
            key={metric.title}
            className="bg-slate-800 rounded-xl border border-slate-700 p-5"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                {metric.icon}

                <span className="font-semibold">

                  {metric.title}

                </span>

              </div>

              <span className="text-cyan-400 font-bold">

                {metric.value}

              </span>

            </div>

            <div className="mt-5 w-full bg-slate-700 rounded-full h-3">

              <div
                className={`${metric.color} h-3 rounded-full`}
                style={{

                  width: metric.title==="CPU Usage" ? "43%" :

                         metric.title==="Memory" ? "62%" :

                         metric.title==="Network" ? "85%" :

                         metric.title==="Events/sec" ? "72%" :

                         metric.title==="Latency" ? "30%" :

                         "91%"

                }}

              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}