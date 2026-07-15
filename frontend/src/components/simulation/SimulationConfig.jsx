import { MapPin, Clock3, CloudLightning, Cpu } from "lucide-react";

export default function SimulationConfig({
  city,
  setCity,
  scenario,
  setScenario,
  duration,
  setDuration,
}) {

  const agents = [
    "Climate AI",
    "Traffic AI",
    "Economy AI",
    "Energy AI",
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <SettingsHeader />

        <div>
          <h2 className="text-2xl font-bold">
            Simulation Configuration
          </h2>

          <p className="text-slate-400 text-sm">
            Configure parameters before launching the simulation
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* City */}

        <div>

          <label className="flex items-center gap-2 mb-2 text-slate-300">

            <MapPin size={18} />

            City

          </label>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500"
          >
            <option>Chennai</option>
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Hyderabad</option>
            <option>Kolkata</option>
          </select>

        </div>

        {/* Scenario */}

        <div>

          <label className="flex items-center gap-2 mb-2 text-slate-300">

            <CloudLightning size={18} />

            Scenario

          </label>

          <select
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500"
          >
            <option>Flood</option>
            <option>Cyclone</option>
            <option>Heatwave</option>
            <option>Drought</option>
            <option>Traffic Congestion</option>
            <option>Power Failure</option>
          </select>

        </div>

        {/* Duration */}

        <div>

          <label className="flex items-center gap-2 mb-2 text-slate-300">

            <Clock3 size={18} />

            Duration

          </label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500"
          >
            <option>24 Hours</option>
            <option>48 Hours</option>
            <option>7 Days</option>
            <option>30 Days</option>
          </select>

        </div>

        {/* Priority */}

        <div>

          <label className="flex items-center gap-2 mb-2 text-slate-300">

            <Cpu size={18} />

            Priority

          </label>

          <select
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

      </div>

      {/* AI Agents */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Enabled AI Agents
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {agents.map((agent) => (

            <label
              key={agent}
              className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-cyan-500 cursor-pointer transition"
            >

              <input
                type="checkbox"
                defaultChecked
                className="accent-cyan-500"
              />

              <span>{agent}</span>

            </label>

          ))}

        </div>

      </div>

    </div>
  );
}

function SettingsHeader() {
  return (
    <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
      ⚙️
    </div>
  );
}