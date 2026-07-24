import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import AgentStatus from "../components/AgentStatus";
import MapPlaceholder from "../components/MapPlaceholder";
import AnalyticsChart from "../components/AnalyticsChart";
import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";


export default function Dashboard() {

  const [dashboard, setDashboard] = useState({});
useEffect(() => {
    getDashboard()
        .then((data) => setDashboard(data))
        .catch(console.error);
}, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 overflow-y-auto">

        <div className="max-w-[1600px] mx-auto px-8 xl:px-10 py-8">

          {/* Hero Section */}

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-extrabold tracking-tight">
                BharatVerse Command Center
              </h1>

              <p className="text-slate-400 text-lg mt-3">
                AI Powered National Digital Twin & Decision Intelligence Platform
              </p>

            </div>

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
              ▶ Start Simulation
            </button>

          </div>

          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            <StatCard
              title="AI Agents"
              value="05"
              subtitle="Running"
              icon="🤖"
            />

            <StatCard
              title="Connected Cities"
              value="28"
              subtitle="Live"
              icon="🌍"
            />

            <StatCard
              title="Citizen Reports"
              value="142"
              subtitle="Today"
              icon="👥"
            />

            <StatCard
              title="Risk Alerts"
              value="12"
              subtitle="High Priority"
              icon="🚨"
            />

          </div>

          {/* Main Grid */}

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-10">

          {/* Left Column */}
          <div className="xl:col-span-3 space-y-6">

            <AnalyticsChart />

            <AgentStatus />

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">
                🌤 Weather
              </h2>

              <p>📍 Chennai</p>

              <h1 className="text-5xl font-bold mt-2">
                31°
              </h1>

              <p className="text-slate-400 mt-2">
                Sunny • Humidity 64%
              </p>

            </div>

          </div>

          {/* Right Column */}
          <div className="xl:col-span-9">

              <MapPlaceholder />

          </div>

        </div>

          {/* Bottom Section */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="font-bold text-xl mb-4">
                🔔 Notifications
              </h2>

              <div className="space-y-3 text-slate-300">

                <p>• Flood warning generated</p>

                <p>• Traffic AI updated predictions</p>

                <p>• Weather synced successfully</p>

                <p>• Simulation completed</p>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="font-bold text-xl mb-4">
                📊 Quick Analytics
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-400">AI Accuracy</p>

                  <div className="w-full bg-slate-700 rounded-full h-3 mt-2">
                    <div className="bg-cyan-500 h-3 rounded-full w-[95%]"></div>
                  </div>

                </div>

                <div>

                  <p className="text-slate-400">Prediction Confidence</p>

                  <div className="w-full bg-slate-700 rounded-full h-3 mt-2">
                    <div className="bg-green-500 h-3 rounded-full w-[89%]"></div>
                  </div>

                </div>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="font-bold text-xl mb-4">
                ⚡ Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-3">

                <button className="bg-cyan-500 rounded-xl p-3 hover:bg-cyan-600 transition">
                  Simulation
                </button>

                <button className="bg-indigo-500 rounded-xl p-3 hover:bg-indigo-600 transition">
                  AI Chat
                </button>

                <button className="bg-emerald-500 rounded-xl p-3 hover:bg-emerald-600 transition">
                  Analytics
                </button>

                <button className="bg-orange-500 rounded-xl p-3 hover:bg-orange-600 transition">
                  Reports
                </button>

              </div>

            </div>

          </div>

        </div>  

        </main>

      </div>

    </div>
  );
}