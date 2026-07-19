import {
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Activity,
} from "lucide-react";

export default function AgentHealth() {

  const agents = [

    {
      name:"Climate AI",
      status:"Healthy",
      color:"text-green-400",
      icon:<CheckCircle2 size={18}/>
    },

    {
      name:"Traffic AI",
      status:"Healthy",
      color:"text-green-400",
      icon:<CheckCircle2 size={18}/>
    },

    {
      name:"Economy AI",
      status:"Warning",
      color:"text-yellow-400",
      icon:<AlertTriangle size={18}/>
    },

    {
      name:"Energy AI",
      status:"Healthy",
      color:"text-green-400",
      icon:<CheckCircle2 size={18}/>
    },

    {
      name:"Disaster AI",
      status:"Running",
      color:"text-cyan-400",
      icon:<Activity size={18}/>
    }

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">

          Agent Health

        </h2>

        <Cpu className="text-cyan-400"/>

      </div>

      <div className="space-y-4">

        {agents.map((agent)=>(

          <div
            key={agent.name}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
          >

            <span>

              {agent.name}

            </span>

            <span className={`${agent.color} flex items-center gap-2`}>

              {agent.icon}

              {agent.status}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}