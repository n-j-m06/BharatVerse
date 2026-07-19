import {
  Brain,
  ShieldAlert,
  Building2,
  Target,
  CheckCircle2,
} from "lucide-react";

export default function AIClassification() {

  const items = [

    {
      title: "Detected Category",
      value: "Flood",
      icon: <Brain size={22}/>,
      color: "text-cyan-400",
    },

    {
      title: "Confidence",
      value: "96.8%",
      icon: <Target size={22}/>,
      color: "text-green-400",
    },

    {
      title: "Severity",
      value: "High",
      icon: <ShieldAlert size={22}/>,
      color: "text-red-400",
    },

    {
      title: "Department",
      value: "Disaster Management",
      icon: <Building2 size={22}/>,
      color: "text-orange-400",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">

            AI Classification

          </h2>

          <p className="text-slate-400 mt-1">

            AI automatically analyzes submitted reports.

          </p>

        </div>

        <Brain className="text-cyan-400"/>

      </div>

      <div className="space-y-4">

        {items.map((item)=>(

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

      <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

        <h3 className="font-semibold text-cyan-400 flex items-center gap-2">

          <CheckCircle2 size={18}/>

          AI Recommendation

        </h3>

        <p className="text-slate-300 mt-3 leading-7">

          Dispatch the Disaster Response Team immediately.
          Notify nearby hospitals and local authorities.
          Monitor rainfall and water level sensors continuously.

        </p>

      </div>

    </div>

  );

}