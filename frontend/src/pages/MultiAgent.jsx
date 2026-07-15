import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import AgentGrid from "../components/multiAgent/AgentGrid";
import AgentMetrics from "../components/multiAgent/AgentMetrics";
import AgentLogs from "../components/multiAgent/AgentLogs";
import AgentControls from "../components/multiAgent/AgentControls";


export default function MultiAgent() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          {/* Header */}

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">
                🤖 Multi-Agent AI Control Center
              </h1>

              <p className="text-slate-400 mt-2">
                Monitor, control and analyse every AI agent running inside BharatVerse.
              </p>

            </div>

            <div className="flex gap-3">

              <button className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition">
                Refresh
              </button>

              <button className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition">
                Export Logs
              </button>

            </div>

          </div>

          {/* Summary */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5">

              <p className="text-slate-400">
                Active Agents
              </p>

              <h2 className="text-4xl font-bold mt-2">
                4
              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5">

              <p className="text-slate-400">
                Tasks Running
              </p>

              <h2 className="text-4xl font-bold mt-2 text-cyan-400">
                27
              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5">

              <p className="text-slate-400">
                Avg Accuracy
              </p>

              <h2 className="text-4xl font-bold mt-2 text-green-400">
                96%
              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5">

              <p className="text-slate-400">
                Avg Response
              </p>

              <h2 className="text-4xl font-bold mt-2 text-orange-400">
                82 ms
              </h2>

            </div>

          </div>

          {/* Agent Cards */}

          <AgentGrid />

          {/* Bottom */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2">

              <AgentLogs />

            </div>

            <div className="space-y-6">

              <AgentMetrics />

              <AgentControls />

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}