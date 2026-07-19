import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Layers3,
  Map,
  Car,
  CloudRain,
  RadioTower,
  Flame,
  Trees,
  Building2,
  Route,
  CheckCircle2
} from "lucide-react";

export default function MapLayers() {

  const [layers,setLayers]=useState({
    roads:true,
    traffic:true,
    weather:true,
    sensors:true,
    disaster:false,
    buildings:true,
    vegetation:false
  });

  const toggle=(key)=>{
    setLayers({
      ...layers,
      [key]:!layers[key]
    });
  };

  const layerList=[
    {
      key:"roads",
      title:"Road Network",
      icon:<Route size={22}/>
    },
    {
      key:"traffic",
      title:"Traffic",
      icon:<Car size={22}/>
    },
    {
      key:"weather",
      title:"Weather",
      icon:<CloudRain size={22}/>
    },
    {
      key:"sensors",
      title:"IoT Sensors",
      icon:<RadioTower size={22}/>
    },
    {
      key:"disaster",
      title:"Disaster Zones",
      icon:<Flame size={22}/>
    },
    {
      key:"buildings",
      title:"Buildings",
      icon:<Building2 size={22}/>
    },
    {
      key:"vegetation",
      title:"Vegetation",
      icon:<Trees size={22}/>
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

<Layers3 className="text-cyan-400"/>

Map Layers

</h1>

<p className="text-slate-400 mt-2">

Configure GIS layers displayed on the Digital Twin.

</p>

</div>

<div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

Live Layers

</div>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* Left */}

<div className="space-y-5">

{layerList.map((layer)=>(

<div
key={layer.key}
className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex justify-between items-center"
>

<div className="flex items-center gap-4">

<div className="text-cyan-400">

{layer.icon}

</div>

<div>

<h3>{layer.title}</h3>

</div>

</div>

<button
onClick={()=>toggle(layer.key)}
className={`w-14 h-8 rounded-full transition

${layers[layer.key]

?"bg-cyan-500"

:"bg-slate-700"

}`}

>

<div
className={`bg-white w-6 h-6 rounded-full transition

${layers[layer.key]

?"translate-x-6"

:"translate-x-1"

}`}
/>

</button>

</div>

))}

</div>

{/* Right */}

<div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-6">

<h2 className="text-2xl font-bold mb-5">

Map Preview

</h2>

<div className="h-[520px] border-2 border-dashed border-cyan-500 rounded-xl flex flex-col justify-center items-center">

<Map size={90} className="text-cyan-400"/>

<h2 className="text-3xl font-bold mt-5">

Interactive GIS Map

</h2>

<p className="text-slate-400 mt-4">

Leaflet / Mapbox map will render here.

</p>

</div>

</div>

</div>

{/* Bottom */}

<div className="grid md:grid-cols-3 gap-6 mt-8">

<Card
title="Active Layers"
value={Object.values(layers).filter(Boolean).length}
/>

<Card
title="Supported Layers"
value="15+"
/>

<Card
title="Map Status"
value="Ready"
/>

</div>

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mt-8">

<div className="flex items-center gap-3">

<CheckCircle2 className="text-green-400"/>

<h2 className="text-xl font-bold">

AI Layer Synchronization Active

</h2>

</div>

<p className="text-slate-400 mt-4">

Selected layers automatically synchronize with Digital Twin, Heatmap,
Weather Dashboard and Disaster Prediction modules.

</p>

</div>

</main>

</div>

</div>

  )

}

function Card({title,value}){

return(

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

<p className="text-slate-400">

{title}

</p>

<h2 className="text-3xl font-bold mt-3">

{value}

</h2>

</div>

)

}