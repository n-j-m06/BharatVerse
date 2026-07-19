import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Activity,
  Building2,
  Cpu,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const kpis = [
  {
    title: "Population Covered",
    value: "1.42B",
    icon: <Globe2 size={30} />,
    color: "text-cyan-400",
  },
  {
    title: "Connected Cities",
    value: "28",
    icon: <Building2 size={30} />,
    color: "text-green-400",
  },
  {
    title: "IoT Devices",
    value: "52K",
    icon: <Cpu size={30} />,
    color: "text-yellow-400",
  },
  {
    title: "AI Agents",
    value: "12",
    icon: <Activity size={30} />,
    color: "text-purple-400",
  },
];

const rankings = [
  { city: "Chennai", score: 98 },
  { city: "Bengaluru", score: 96 },
  { city: "Hyderabad", score: 94 },
  { city: "Pune", score: 91 },
  { city: "Mumbai", score: 89 },
];

const performance = [
  { title: "Health", value: 91 },
  { title: "Traffic", value: 82 },
  { title: "Energy", value: 88 },
  { title: "Climate", value: 80 },
  { title: "Water", value: 74 },
];

export default function NationalKPI() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold">
            National KPI Dashboard
          </h1>

          <p className="text-slate-400 mt-2 mb-8">
            Executive overview of India's AI-powered smart governance platform.
          </p>

          {/* KPI Cards */}

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            {kpis.map((item) => (

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

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

            ))}

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* National Performance */}

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                National Performance
              </h2>

              <div className="space-y-5">

                {performance.map((item) => (

                  <div key={item.title}>

                    <div className="flex justify-between mb-2">

                      <span>{item.title}</span>

                      <span>{item.value}%</span>

                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full">

                      <div
                        className="h-3 rounded-full bg-cyan-500"
                        style={{ width: `${item.value}%` }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Top Smart Cities */}

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Top Smart Cities
              </h2>

              <div className="space-y-5">

                {rankings.map((city, index) => (

                  <div
                    key={city.city}
                    className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
                  >

                    <div>

                      <span className="text-cyan-400 font-bold mr-3">
                        #{index + 1}
                      </span>

                      {city.city}

                    </div>

                    <span className="font-bold">
                      {city.score}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Bottom Summary */}

          <div className="grid lg:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <ShieldCheck className="text-green-400" size={32} />

              <h3 className="mt-4 text-lg font-semibold">
                Prediction Accuracy
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-green-400">
                96%
              </h2>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <TrendingUp className="text-cyan-400" size={32} />

              <h3 className="mt-4 text-lg font-semibold">
                AI Decisions Today
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-cyan-400">
                12,584
              </h2>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <Activity className="text-yellow-400" size={32} />

              <h3 className="mt-4 text-lg font-semibold">
                Avg Response Time
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-yellow-400">
                1.8s
              </h2>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}