import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  CloudRain,
  Thermometer,
  Wind,
  Droplets,
  CloudLightning,
  Gauge,
} from "lucide-react";

export default function ClimateAgent() {
  const metrics = [
    {
      title: "Temperature",
      value: "36°C",
      icon: <Thermometer size={28} />,
      color: "text-orange-400",
    },
    {
      title: "Humidity",
      value: "81%",
      icon: <Droplets size={28} />,
      color: "text-cyan-400",
    },
    {
      title: "Wind Speed",
      value: "18 km/h",
      icon: <Wind size={28} />,
      color: "text-green-400",
    },
    {
      title: "Rainfall",
      value: "152 mm",
      icon: <CloudRain size={28} />,
      color: "text-blue-400",
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold">
                🌦 Climate Intelligence Agent
              </h1>

              <p className="text-slate-400 mt-2">
                AI powered climate monitoring and forecasting.
              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              ● Online
            </div>

          </div>

          {/* Metrics */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {metrics.map((metric) => (

              <div
                key={metric.title}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >

                <div className={metric.color}>
                  {metric.icon}
                </div>

                <h3 className="mt-4 text-slate-400">
                  {metric.title}
                </h3>

                <h2 className={`text-3xl font-bold mt-2 ${metric.color}`}>
                  {metric.value}
                </h2>

              </div>

            ))}

          </div>

          {/* Forecast */}

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                7-Day Forecast
              </h2>

              <div className="space-y-4">

                {[
                  ["Mon","Sunny","35°C"],
                  ["Tue","Rain","31°C"],
                  ["Wed","Cloudy","33°C"],
                  ["Thu","Storm","29°C"],
                  ["Fri","Sunny","36°C"],
                  ["Sat","Rain","30°C"],
                  ["Sun","Cloudy","32°C"],
                ].map((day)=>(

                  <div
                    key={day[0]}
                    className="flex justify-between bg-slate-800 rounded-xl p-4"
                  >

                    <span>{day[0]}</span>

                    <span>{day[1]}</span>

                    <span>{day[2]}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                AI Climate Analysis
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <CloudLightning className="text-yellow-400"/>

                  <p>
                    Heavy rainfall expected within 48 hours.
                  </p>

                </div>

                <div className="flex gap-3">

                  <Gauge className="text-cyan-400"/>

                  <p>
                    Flood probability increased to 81%.
                  </p>

                </div>

                <div className="flex gap-3">

                  <Wind className="text-green-400"/>

                  <p>
                    Strong coastal winds detected.
                  </p>

                </div>

              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

                <h3 className="text-cyan-400 font-semibold mb-3">
                  AI Recommendation
                </h3>

                <p className="text-slate-300">
                  Activate flood preparedness, increase drainage monitoring,
                  and alert emergency response teams.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}