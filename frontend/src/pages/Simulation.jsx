import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useState } from "react";

import SimulationConfig from "../components/simulation/SimulationConfig";
import SimulationControls from "../components/simulation/SimulationControls";
import SimulationProgress from "../components/simulation/SimulationProgress";
import SimulationResults from "../components/simulation/SimulationResults";
import SimulationSummary from "../components/simulation/SimulationSummary";

export default function Simulation() {

  const [city, setCity] = useState("Chennai");
  const [scenario, setScenario] = useState("Flood");
  const [duration, setDuration] = useState("24 Hours");

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold">
            ⚙ Simulation Control Center
          </h1>

          <p className="text-slate-400 mt-2 mb-8">
            Configure, execute and monitor Digital Twin simulations.
          </p>

          <SimulationConfig
            city={city}
            setCity={setCity}
            scenario={scenario}
            setScenario={setScenario}
            duration={duration}
            setDuration={setDuration}
          />

          <div className="mt-6">

            <SimulationControls />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

            <SimulationProgress />

            <SimulationSummary />

          </div>

          <div className="mt-6">

            <SimulationResults />

          </div>

        </main>

      </div>

    </div>

  );

}