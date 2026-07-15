import {
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Bot,
  FileText,
  Hash,
} from "lucide-react";

export default function SimulationSummary() {

  const summary = [
    {
      title: "Simulation ID",
      value: "SIM-2026-000145",
      icon: <Hash size={18} />,
      color: "text-cyan-400",
    },
    {
      title: "Execution Time",
      value: "24 min",
      icon: <Clock3 size={18} />,
      color: "text-orange-400",
    },
    {
      title: "Confidence Score",
      value: "96.4%",
      icon: <ShieldCheck size={18} />,
      color: "text-green-400",
    },
    {
      title: "Active AI Agents",
      value: "4 Running",
      icon: <Bot size={18} />,
      color: "text-purple-400",
    },
    {
      title: "Report Status",
      value: "Generated",
      icon: <FileText size={18} />,
      color: "text-blue-400",
    },
    {
      title: "Overall Health",
      value: "Excellent",
      icon: <CheckCircle2 size={18} />,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Simulation Summary
          </h2>

          <p className="text-slate-400 mt-1">
            Final execution overview
          </p>

        </div>

        <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl">
          ✔ Completed
        </span>

      </div>

      <div className="space-y-4">

        {summary.map((item) => (

          <div
            key={item.title}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4 border border-slate-700"
          >

            <div className="flex items-center gap-3">

              <div className={item.color}>

                {item.icon}

              </div>

              <span className="text-slate-300">

                {item.title}

              </span>

            </div>

            <span className={`font-semibold ${item.color}`}>

              {item.value}

            </span>

          </div>

        ))}

      </div>

      <div className="mt-8">

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

          <h3 className="font-semibold text-cyan-400 mb-3">

            Executive Summary

          </h3>

          <p className="text-slate-300 leading-7">

            The simulation successfully analyzed climate,
            traffic, economy and energy parameters.
            The AI engine predicts a high probability of
            localized flooding with increased traffic
            congestion and elevated power demand.
            Preventive resource allocation is recommended.

          </p>

        </div>

      </div>

    </div>
  );

}