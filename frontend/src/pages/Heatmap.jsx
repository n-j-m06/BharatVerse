import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Flame,
  Layers3,
  Map,
  Thermometer,
  Wind,
  Car,
  Users,
} from "lucide-react";

export default function Heatmap() {

  const [layer,setLayer]=useState("Traffic");

  const layers=[
    {
      name:"Traffic",
      icon:<Car size={20}/>
    },
    {
      name:"Temperature",
      icon:<Thermometer size={20}/>
    },
    {
      name:"Population",
      icon:<Users size={20}/>
    },
    {
      name:"Pollution",
      icon:<Wind size={20}/>
    },
    {
      name:"Disaster",
      icon:<Flame size={20}/>
    }
  ];

  return(

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold flex gap-3 items-center">

                <Layers3 className="text-red-400"/>

                AI Heatmap

              </h1>

              <p className="text-slate-400 mt-2">

                Visual intelligence generated from AI and IoT sensors.

              </p>

            </div>

            <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl">

              Live Layer

            </div>

          </div>

          {/* Controls */}

          <div className="flex flex-wrap gap-4 mb-8">

            {layers.map((item)=>(

              <button

                key={item.name}

                onClick={()=>setLayer(item.name)}

                className={`px-5 py-3 rounded-xl flex items-center gap-2 transition

                ${layer===item.name

                  ? "bg-cyan-500"

                  : "bg-slate-800 hover:bg-slate-700"

                }`}

              >

                {item.icon}

                {item.name}

              </button>

            ))}

          </div>

          {/* Map */}

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">

              {layer} Heatmap

            </h2>

            <div className="h-[550px] rounded-xl border-2 border-dashed border-red-500 flex flex-col justify-center items-center">

              <Map size={90} className="text-red-400"/>

              <h2 className="text-3xl font-bold mt-5">

                {layer} Layer

              </h2>

              <p className="text-slate-400 mt-3">

                Leaflet Heatmap will render here.

              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-900 rounded-2xl p-6">

              <h3 className="text-xl font-bold">

                Data Source

              </h3>

              <p className="text-slate-400 mt-4">

                Live IoT sensors, satellites, drones and AI predictions.

              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <h3 className="text-xl font-bold">

                Refresh Rate

              </h3>

              <p className="text-green-400 mt-4">

                Every 5 Seconds

              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <h3 className="text-xl font-bold">

                Coverage

              </h3>

              <p className="text-cyan-400 mt-4">

                28 Smart Cities Connected

              </p>

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}