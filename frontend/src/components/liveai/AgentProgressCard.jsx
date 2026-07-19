import {
  CloudRain,
  Car,
  Landmark,
  Zap,
  ShieldAlert,
} from "lucide-react";

export default function AgentProgressCard() {

  const agents = [

    {
      name: "Climate AI",
      progress: 96,
      icon: <CloudRain size={20}/>,
      color: "bg-cyan-500",
    },

    {
      name: "Traffic AI",
      progress: 88,
      icon: <Car size={20}/>,
      color: "bg-yellow-500",
    },

    {
      name: "Economy AI",
      progress: 74,
      icon: <Landmark size={20}/>,
      color: "bg-green-500",
    },

    {
      name: "Energy AI",
      progress: 91,
      icon: <Zap size={20}/>,
      color: "bg-orange-500",
    },

    {
      name: "Disaster AI",
      progress: 82,
      icon: <ShieldAlert size={20}/>,
      color: "bg-red-500",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        AI Agent Progress

      </h2>

      <div className="space-y-6">

        {agents.map((agent)=>(

          <div key={agent.name}>

            <div className="flex justify-between mb-2">

              <div className="flex items-center gap-3">

                {agent.icon}

                <span className="font-medium">

                  {agent.name}

                </span>

              </div>

              <span className="text-cyan-400 font-semibold">

                {agent.progress}%

              </span>

            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">

              <div
                className={`${agent.color} h-3 rounded-full transition-all duration-700`}
                style={{ width: `${agent.progress}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}