import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function NotificationStats() {

  const stats = [

    {
      title: "Total",
      value: "124",
      icon: <Bell size={24}/>,
      color: "text-cyan-400",
    },

    {
      title: "Critical",
      value: "12",
      icon: <AlertTriangle size={24}/>,
      color: "text-red-400",
    },

    {
      title: "Resolved",
      value: "89",
      icon: <CheckCircle2 size={24}/>,
      color: "text-green-400",
    },

    {
      title: "Pending",
      value: "23",
      icon: <Clock3 size={24}/>,
      color: "text-yellow-400",
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

          <h1 className={`text-3xl font-bold mt-2 ${item.color}`}>

            {item.value}

          </h1>

        </div>

      ))}

    </div>

  );

}