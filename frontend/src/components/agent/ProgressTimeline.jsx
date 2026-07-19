import {
  PlayCircle,
  Brain,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";

export default function ProgressTimeline() {

  const timeline = [

    {
      title:"Simulation Started",
      time:"10:30:02",
      icon:<PlayCircle size={18}/>,
      color:"text-green-400"
    },

    {
      title:"Climate AI Completed",
      time:"10:30:18",
      icon:<Brain size={18}/>,
      color:"text-cyan-400"
    },

    {
      title:"Traffic AI Completed",
      time:"10:30:31",
      icon:<Cpu size={18}/>,
      color:"text-yellow-400"
    },

    {
      title:"Energy AI Running",
      time:"10:30:49",
      icon:<Database size={18}/>,
      color:"text-orange-400"
    },

    {
      title:"Waiting for Final Output",
      time:"Pending",
      icon:<CheckCircle2 size={18}/>,
      color:"text-slate-400"
    }

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Progress Timeline

      </h2>

      <div className="space-y-6">

        {timeline.map((item,index)=>(

          <div
            key={index}
            className="flex gap-4 items-start"
          >

            <div className={item.color}>

              {item.icon}

            </div>

            <div>

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