import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Bell,
} from "lucide-react";

export default function NotificationList() {

  const notifications = [

    {
      title: "Flood Risk Increased in Chennai",
      message: "Climate AI detected heavy rainfall in the next 6 hours.",
      type: "Critical",
      icon: <AlertTriangle size={22}/>,
      color: "bg-red-500/20 text-red-400",
      time: "2 mins ago",
    },

    {
      title: "Traffic Prediction Updated",
      message: "Traffic AI optimized signal timing across 12 junctions.",
      type: "Information",
      icon: <Info size={22}/>,
      color: "bg-cyan-500/20 text-cyan-400",
      time: "10 mins ago",
    },

    {
      title: "Simulation Completed",
      message: "Flood simulation finished successfully with 96% accuracy.",
      type: "Success",
      icon: <CheckCircle2 size={22}/>,
      color: "bg-green-500/20 text-green-400",
      time: "25 mins ago",
    },

    {
      title: "Energy Consumption Warning",
      message: "Energy AI predicts peak demand between 6 PM and 9 PM.",
      type: "Warning",
      icon: <Bell size={22}/>,
      color: "bg-yellow-500/20 text-yellow-400",
      time: "40 mins ago",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Notification Feed

      </h2>

      <div className="space-y-5">

        {notifications.map((item,index)=>(

          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className={item.color + " p-3 rounded-xl"}>

                  {item.icon}

                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-2">

                    {item.message}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <span className={`${item.color} px-3 py-1 rounded-full text-sm`}>

                  {item.type}

                </span>

                <p className="text-slate-500 text-sm mt-3">

                  {item.time}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}