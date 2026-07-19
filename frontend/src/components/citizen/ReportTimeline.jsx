import {
  CheckCircle2,
  Brain,
  UserCheck,
  Truck,
  Flag,
} from "lucide-react";

export default function ReportTimeline() {

  const timeline = [

    {
      title: "Report Submitted",
      time: "09:15 AM",
      icon: <CheckCircle2 size={18}/>,
      color: "text-green-400",
    },

    {
      title: "AI Classification Completed",
      time: "09:16 AM",
      icon: <Brain size={18}/>,
      color: "text-cyan-400",
    },

    {
      title: "Authority Assigned",
      time: "09:18 AM",
      icon: <UserCheck size={18}/>,
      color: "text-yellow-400",
    },

    {
      title: "Emergency Team Dispatched",
      time: "09:22 AM",
      icon: <Truck size={18}/>,
      color: "text-orange-400",
    },

    {
      title: "Incident Resolved",
      time: "Pending",
      icon: <Flag size={18}/>,
      color: "text-slate-400",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Report Timeline

      </h2>

      <div className="space-y-6">

        {timeline.map((step,index)=>(

          <div
            key={index}
            className="flex gap-4 items-start"
          >

            <div className={`${step.color} mt-1`}>

              {step.icon}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold">

                {step.title}

              </h3>

              <p className="text-slate-400 text-sm">

                {step.time}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}