import {
  MapPinned,
  Users,
  CalendarDays,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function PolicySummary() {

  const summary = [

    {
      title: "Affected States",
      value: "18",
      icon: <MapPinned size={22}/>,
      color: "text-cyan-400",
    },

    {
      title: "Population Impact",
      value: "42.6M",
      icon: <Users size={22}/>,
      color: "text-green-400",
    },

    {
      title: "Implementation",
      value: "12 Months",
      icon: <CalendarDays size={22}/>,
      color: "text-yellow-400",
    },

    {
      title: "Risk Level",
      value: "Medium",
      icon: <AlertTriangle size={22}/>,
      color: "text-orange-400",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">

          Policy Summary

        </h2>

        <CheckCircle2 className="text-green-400"/>

      </div>

      <div className="space-y-4 mt-8">

        {summary.map((item)=>(

          <div
            key={item.title}
            className="flex justify-between items-center bg-slate-800 border border-slate-700 rounded-xl p-4"
          >

            <div className="flex items-center gap-3">

              <div className={item.color}>

                {item.icon}

              </div>

              <span>

                {item.title}

              </span>

            </div>

            <span className={`font-bold ${item.color}`}>

              {item.value}

            </span>

          </div>

        ))}

      </div>

      <div className="mt-8">

        <h3 className="font-semibold mb-3">

          SDG Alignment

        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">

            SDG 3

          </span>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">

            SDG 9

          </span>

          <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">

            SDG 11

          </span>

          <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full">

            SDG 13

          </span>

        </div>

      </div>

    </div>

  );

}