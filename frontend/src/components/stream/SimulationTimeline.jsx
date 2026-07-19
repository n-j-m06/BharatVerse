import {
  PlayCircle,
  Brain,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";

export default function SimulationTimeline() {

  const timeline = [

    {
      title: "Simulation Started",
      time: "10:15:02",
      icon: <PlayCircle size={18}/>,
      color: "text-green-400",
    },

    {
      title: "Climate AI Analysis",
      time: "10:15:18",
      icon: <Brain size={18}/>,
      color: "text-cyan-400",
    },

    {
      title: "Multi-Agent Synchronization",
      time: "10:15:41",
      icon: <Cpu size={18}/>,
      color: "text-yellow-400",
    },

    {
      title: "Digital Twin Updated",
      time: "10:16:03",
      icon: <Database size={18}/>,
      color: "text-purple-400",
    },

    {
      title: "Simulation Completed",
      time: "Pending",
      icon: <CheckCircle2 size={18}/>,
      color: "text-slate-500",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Simulation Timeline

      </h2>

      <div className="space-y-6">

        {timeline.map((item,index)=>(

          <div
            key={index}
            className="flex gap-4 items-start"
          >

            <div className={`${item.color} mt-1`}>

              {item.icon}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold">

                {item.title}

              </h3>

              <p className="text-slate-400 text-sm">

                {item.time}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}