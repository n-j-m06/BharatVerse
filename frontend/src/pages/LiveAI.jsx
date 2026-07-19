import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ConnectionStatus from "../components/liveai/ConnectionStatus";
import LiveConsole from "../components/liveai/LiveConsole";
import AgentProgressCard from "../components/liveai/AgentProgressCard";
import StreamMetrics from "../components/liveai/StreamMetrics";

export default function LiveAI() {

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">

                🌐 Live AI Command Center

              </h1>

              <p className="text-slate-400 mt-2">

                Real-time monitoring of BharatVerse AI Agents.

              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              ● Connected

            </div>

          </div>

          <ConnectionStatus/>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <LiveConsole/>

            <AgentProgressCard/>

          </div>

          <div className="mt-6">

            <StreamMetrics/>

          </div>

        </main>

      </div>

    </div>

  );

}