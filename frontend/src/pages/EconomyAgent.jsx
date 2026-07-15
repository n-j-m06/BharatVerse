import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  IndianRupee,
  TrendingUp,
  Briefcase,
  Building2,
  Bot,
  BarChart3,
} from "lucide-react";

export default function EconomyAgent() {

  const stats = [
    {
      title: "GDP Growth",
      value: "7.2%",
      icon: <TrendingUp size={28} />,
      color: "text-green-400",
    },
    {
      title: "Inflation",
      value: "5.1%",
      icon: <IndianRupee size={28} />,
      color: "text-yellow-400",
    },
    {
      title: "Employment",
      value: "94.3%",
      icon: <Briefcase size={28} />,
      color: "text-cyan-400",
    },
    {
      title: "Business Index",
      value: "82",
      icon: <Building2 size={28} />,
      color: "text-purple-400",
    },
  ];

  const sectors = [
    ["Agriculture","▲ +5.6%","text-green-400"],
    ["Manufacturing","▲ +7.1%","text-green-400"],
    ["IT Services","▲ +11.2%","text-green-400"],
    ["Energy","▼ -1.8%","text-red-400"],
    ["Healthcare","▲ +4.3%","text-green-400"],
  ];

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">
                💹 Economy Intelligence Agent
              </h1>

              <p className="text-slate-400 mt-2">
                AI powered economic monitoring and forecasting.
              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              ● Live
            </div>

          </div>

          {/* KPI */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((item)=>(

              <div
                key={item.title}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >

                <div className={item.color}>
                  {item.icon}
                </div>

                <p className="mt-4 text-slate-400">
                  {item.title}
                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                  {item.value}
                </h2>

              </div>

            ))}

          </div>

          {/* Bottom */}

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Sector Performance
              </h2>

              <div className="space-y-4">

                {sectors.map((sector)=>(

                  <div
                    key={sector[0]}
                    className="flex justify-between bg-slate-800 rounded-xl p-4"
                  >

                    <span>{sector[0]}</span>

                    <span className={sector[2]}>
                      {sector[1]}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                AI Economic Analysis
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <TrendingUp className="text-green-400"/>
                  <p>GDP expected to grow steadily over the next quarter.</p>
                </div>

                <div className="flex gap-3">
                  <BarChart3 className="text-yellow-400"/>
                  <p>Inflation remains stable within the target range.</p>
                </div>

                <div className="flex gap-3">
                  <Bot className="text-cyan-400"/>
                  <p>AI recommends increased investment in renewable energy.</p>
                </div>

              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

                <h3 className="text-cyan-400 font-semibold mb-3">
                  AI Recommendation
                </h3>

                <p className="text-slate-300">
                  Increase infrastructure spending, encourage MSME
                  financing, strengthen renewable energy investment,
                  and maintain inflation monitoring.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}