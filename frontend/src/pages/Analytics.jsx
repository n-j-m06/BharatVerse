import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  BarChart3,
  TrendingUp,
  Activity,
  BrainCircuit,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const weeklyData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 62 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 92 },
  { day: "Sat", value: 70 },
  { day: "Sun", value: 88 },
];

const pieData = [
  { name: "Climate", value: 35 },
  { name: "Traffic", value: 25 },
  { name: "Energy", value: 20 },
  { name: "Economy", value: 20 },
];

const disasterData = [
  { type: "Flood", value: 12 },
  { type: "Cyclone", value: 7 },
  { type: "Heat", value: 16 },
  { type: "Earthquake", value: 4 },
];

const COLORS = [
  "#06B6D4",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

const cards = [
  {
    title: "AI Predictions",
    value: "12,584",
    icon: <BrainCircuit size={30} />,
  },
  {
    title: "Simulations",
    value: "4,216",
    icon: <Activity size={30} />,
  },
  {
    title: "Accuracy",
    value: "96.2%",
    icon: <TrendingUp size={30} />,
  },
  {
    title: "Connected Cities",
    value: "28",
    icon: <BarChart3 size={30} />,
  },
];

export default function Analytics() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-2 mb-8">
            AI insights, national statistics and performance metrics.
          </p>

          {/* KPI */}

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            {cards.map((card) => (

              <div
                key={card.title}
                className="bg-slate-900 rounded-2xl border border-slate-700 p-6"
              >

                <div className="text-cyan-400">
                  {card.icon}
                </div>

                <p className="text-slate-400 mt-4">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

              </div>

            ))}

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">
                Weekly AI Activity
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <AreaChart data={weeklyData}>

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="day"/>

                  <YAxis/>

                  <Tooltip/>

                  <Area
                    dataKey="value"
                    stroke="#06B6D4"
                    fill="#0891B2"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                AI Agent Distribution

              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                  >

                    {pieData.map((entry,index)=>(

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))}

                  </Pie>

                  <Tooltip/>

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 mt-8">

            <h2 className="text-xl font-bold mb-5">

              Disaster Analytics

            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={disasterData}>

                <CartesianGrid strokeDasharray="3 3"/>

                <XAxis dataKey="type"/>

                <YAxis/>

                <Tooltip/>

                <Bar
                  dataKey="value"
                  fill="#06B6D4"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                AI Insights

              </h2>

              <ul className="space-y-3 text-slate-300">

                <li>• Flood probability increased by 18%</li>

                <li>• Traffic congestion reduced by 11%</li>

                <li>• Energy demand expected to rise tomorrow</li>

                <li>• Air quality improving in major cities</li>

              </ul>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                Recent Activity

              </h2>

              <table className="w-full">

                <thead>

                  <tr className="text-cyan-400">

                    <th align="left">Module</th>

                    <th>Status</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>Climate AI</td>

                    <td className="text-green-400">Running</td>

                  </tr>

                  <tr>

                    <td>Traffic AI</td>

                    <td className="text-green-400">Running</td>

                  </tr>

                  <tr>

                    <td>Energy AI</td>

                    <td className="text-yellow-400">Processing</td>

                  </tr>

                  <tr>

                    <td>Economy AI</td>

                    <td className="text-green-400">Running</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}