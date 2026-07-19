import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import HistoryStats from "../components/history/HistoryStats";
import HistoryFilters from "../components/history/HistoryFilters";
import HistoryTable from "../components/history/HistoryTable";
import HistoryActions from "../components/history/HistoryActions";

export default function SimulationHistory() {

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">

                📜 Simulation History

              </h1>

              <p className="text-slate-400 mt-2">

                Browse and manage previous AI simulations.

              </p>

            </div>

            <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl">

              History Ready

            </div>

          </div>

          <HistoryStats/>

          <div className="mt-6">

            <HistoryFilters/>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2">

              <HistoryTable/>

            </div>

            <HistoryActions/>

          </div>

        </main>

      </div>

    </div>

  );

}