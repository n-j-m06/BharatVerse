import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Zap,
  BatteryCharging,
  Sun,
  Wind,
  Gauge,
  Bot,
} from "lucide-react";

export default function EnergyAgent() {

  const stats = [
    {
      title: "Power Demand",
      value: "28.5 GW",
      icon: <Zap size={28} />,
      color: "text-yellow-400",
    },
    {
      title: "Grid Health",
      value: "97%",
      icon: <Gauge size={28} />,
      color: "text-green-400",
    },
    {
      title: "Renewable Share",
      value: "44%",
      icon: <Sun size={28} />,
      color: "text-orange-400",
    },
    {
      title: "Battery Storage",
      value: "8.7 GWh",
      icon: <BatteryCharging size={28} />,
      color: "text-cyan-400",
    },
  ];

  const sources = [
    ["Solar","8.2 GW","text-orange-400"],
    ["Wind","6.8 GW","text-cyan-400"],
    ["Hydro","4.3 GW","text-blue-400"],
    ["Thermal","9.2 GW","text-red-400"],
    ["Nuclear","2.1 GW","text-purple-400"],
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
                ⚡ Energy Intelligence Agent
              </h1>

              <p className="text-slate-400 mt-2">
                AI powered national energy monitoring and optimization.
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
                Energy Sources
              </h2>

              <div className="space-y-4">

                {sources.map((item)=>(

                  <div
                    key={item[0]}
                    className="flex justify-between bg-slate-800 rounded-xl p-4"
                  >

                    <span>{item[0]}</span>

                    <span className={item[2]}>
                      {item[1]}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                AI Energy Analysis
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <Zap className="text-yellow-400"/>

                  <p>
                    Peak electricity demand expected after 6 PM.
                  </p>

                </div>

                <div className="flex gap-3">

                  <Wind className="text-cyan-400"/>

                  <p>
                    Wind generation expected to increase overnight.
                  </p>

                </div>

                <div className="flex gap-3">

                  <Bot className="text-green-400"/>

                  <p>
                    AI recommends battery storage optimization.
                  </p>

                </div>

              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

                <h3 className="text-cyan-400 font-semibold mb-3">
                  AI Recommendation
                </h3>

                <p className="text-slate-300">
                  Increase renewable utilization during peak production,
                  charge storage systems before evening demand,
                  and reduce dependence on thermal generation.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}