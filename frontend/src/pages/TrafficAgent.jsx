import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Car,
  Route,
  MapPinned,
  Clock3,
  TrafficCone,
  Bot,
} from "lucide-react";

export default function TrafficAgent() {

  const stats = [
    {
      title: "Average Speed",
      value: "42 km/h",
      icon: <Car size={28}/>,
      color: "text-cyan-400",
    },
    {
      title: "Congestion",
      value: "68%",
      icon: <TrafficCone size={28}/>,
      color: "text-red-400",
    },
    {
      title: "Incidents",
      value: "17",
      icon: <MapPinned size={28}/>,
      color: "text-orange-400",
    },
    {
      title: "Travel Time",
      value: "38 min",
      icon: <Clock3 size={28}/>,
      color: "text-green-400",
    },
  ];

  const roads = [
    ["OMR", "Heavy", "🔴"],
    ["GST Road", "Moderate", "🟡"],
    ["Anna Salai", "Smooth", "🟢"],
    ["ECR", "Heavy", "🔴"],
    ["Poonamallee", "Moderate", "🟡"],
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
                🚦 Traffic Intelligence Agent
              </h1>

              <p className="text-slate-400 mt-2">
                AI powered traffic monitoring and congestion prediction.
              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              ● Live
            </div>

          </div>

          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((item)=>(

              <div
                key={item.title}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >

                <div className={item.color}>

                  {item.icon}

                </div>

                <p className="text-slate-400 mt-4">
                  {item.title}
                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                  {item.value}
                </h2>

              </div>

            ))}

          </div>

          {/* Lower Section */}

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            {/* Roads */}

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Live Road Conditions
              </h2>

              <div className="space-y-4">

                {roads.map((road)=>(

                  <div
                    key={road[0]}
                    className="flex justify-between bg-slate-800 rounded-xl p-4"
                  >

                    <span>{road[0]}</span>

                    <span>{road[1]}</span>

                    <span>{road[2]}</span>

                  </div>

                ))}

              </div>

            </div>

            {/* AI */}

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                AI Traffic Analysis
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <Route className="text-cyan-400"/>

                  <p>
                    Congestion detected near IT Corridor.
                  </p>

                </div>

                <div className="flex gap-3">

                  <TrafficCone className="text-red-400"/>

                  <p>
                    Accident probability increased by 18%.
                  </p>

                </div>

                <div className="flex gap-3">

                  <Bot className="text-green-400"/>

                  <p>
                    AI recommends alternate routing.
                  </p>

                </div>

              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

                <h3 className="text-cyan-400 font-semibold mb-3">
                  Recommendation
                </h3>

                <p className="text-slate-300">

                  Divert vehicles through Outer Ring Road,
                  increase signal timing by 20%,
                  and prioritize emergency vehicle lanes.

                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}