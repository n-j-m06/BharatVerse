import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Globe2,
  Cpu,
  Activity,
  Building2,
  Wifi,
  MapPinned,
} from "lucide-react";

export default function DigitalTwin() {

  const cities = [
    {
      city: "Chennai",
      population: "12.5 M",
      status: "Healthy",
      color: "text-green-400"
    },
    {
      city: "Mumbai",
      population: "20.1 M",
      status: "Moderate Risk",
      color: "text-yellow-400"
    },
    {
      city: "Delhi",
      population: "32.4 M",
      status: "High Traffic",
      color: "text-red-400"
    },
    {
      city: "Bengaluru",
      population: "13.8 M",
      status: "Healthy",
      color: "text-green-400"
    }
  ];

  const stats = [
    {
      title:"Connected Cities",
      value:"28",
      icon:<Building2 size={28}/>,
      color:"text-cyan-400"
    },
    {
      title:"IoT Devices",
      value:"52,480",
      icon:<Wifi size={28}/>,
      color:"text-green-400"
    },
    {
      title:"Live Sensors",
      value:"98%",
      icon:<Cpu size={28}/>,
      color:"text-yellow-400"
    },
    {
      title:"AI Models",
      value:"12",
      icon:<Activity size={28}/>,
      color:"text-purple-400"
    }
  ];

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold flex items-center gap-3">

                <Globe2 className="text-cyan-400"/>

                BharatVerse Digital Twin

              </h1>

              <p className="text-slate-400 mt-2">

                Real-time digital representation of India's smart infrastructure.

              </p>

            </div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              ● Live Sync

            </span>

          </div>

          {/* KPI */}

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            {stats.map((item)=>(

              <div
                key={item.title}
                className="bg-slate-900 rounded-2xl border border-slate-700 p-6"
              >

                <div className={item.color}>

                  {item.icon}

                </div>

                <p className="text-slate-400 mt-4">

                  {item.title}

                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>

                  {item.value}

                </h2>

              </div>

            ))}

          </div>

          {/* Map + Cities */}

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-5">

                India Digital Twin

              </h2>

              <div className="h-[500px] rounded-xl border-2 border-dashed border-cyan-500 flex flex-col justify-center items-center">

                <MapPinned size={90} className="text-cyan-400"/>

                <h2 className="text-3xl font-bold mt-5">

                  Interactive India Map

                </h2>

                <p className="text-slate-400 mt-3">

                  Leaflet / Mapbox integration will be connected here.

                </p>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-6">

                Connected Cities

              </h2>

              <div className="space-y-5">

                {cities.map((city)=>(

                  <div
                    key={city.city}
                    className="bg-slate-800 rounded-xl p-4"
                  >

                    <div className="flex justify-between">

                      <h3 className="font-semibold">

                        {city.city}

                      </h3>

                      <span className={city.color}>

                        {city.status}

                      </span>

                    </div>

                    <p className="text-slate-400 mt-2">

                      Population : {city.population}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="grid lg:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                Infrastructure

              </h2>

              <p className="text-slate-400">

                Roads, bridges, utilities and smart assets are continuously synchronized with the AI platform.

              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                Sensor Network

              </h2>

              <p className="text-slate-400">

                Live IoT streams from weather stations, traffic cameras, power grids and environmental sensors.

              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">

                AI Insights

              </h2>

              <p className="text-slate-400">

                Multi-agent AI continuously updates the digital twin with predictions and recommendations.

              </p>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}