import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ConnectionStatus from "../components/liveai/ConnectionStatus";
import AgentProgressCard from "../components/liveai/AgentProgressCard";
import LiveConsole from "../components/liveai/LiveConsole";

import AgentHealth from "../components/agent/AgentHealth";
import ProgressTimeline from "../components/agent/ProgressTimeline";

export default function AgentProgress() {

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">

                🤖 Live Agent Progress

              </h1>

              <p className="text-slate-400 mt-2">

                Monitor every BharatVerse AI agent in real time.

              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              ● Live Monitoring

            </div>

          </div>

          <ConnectionStatus/>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <AgentHealth/>

            <ProgressTimeline/>

          </div>

          <div className="mt-6">

            <AgentProgressCard/>

          </div>

          <div className="mt-6">

            <LiveConsole/>

          </div>

        </main>

      </div>

    </div>

  );

}