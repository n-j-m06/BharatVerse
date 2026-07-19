import {
  Wifi,
  Activity,
  Cpu,
  Database,
} from "lucide-react";

export default function ConnectionStatus() {

  const stats = [

    {
      title: "WebSocket",
      value: "Connected",
      icon: <Wifi size={24}/>,
      color: "text-green-400",
    },

    {
      title: "AI Agents",
      value: "5 Active",
      icon: <Cpu size={24}/>,
      color: "text-cyan-400",
    },

    {
      title: "Events/sec",
      value: "248",
      icon: <Activity size={24}/>,
      color: "text-yellow-400",
    },

    {
      title: "Data Stream",
      value: "Live",
      icon: <Database size={24}/>,
      color: "text-purple-400",
    },

  ];

  return (

    <div className="grid md:grid-cols-4 gap-5">

      {stats.map((item)=>(

        <div
          key={item.title}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
        >

          <div className={item.color}>

            {item.icon}

          </div>

          <h3 className="mt-4 text-lg">

            {item.title}

          </h3>

          <h1 className={`text-2xl font-bold mt-2 ${item.color}`}>

            {item.value}

          </h1>

        </div>

      ))}

    </div>

  );

}