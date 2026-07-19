import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  CloudRain,
  Waves,
  AlertTriangle,
  MapPinned,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const cities = [
  {
    city: "Chennai",
    level: "High",
    color: "text-red-400",
  },
  {
    city: "Mumbai",
    level: "Medium",
    color: "text-yellow-400",
  },
  {
    city: "Kolkata",
    level: "High",
    color: "text-red-400",
  },
  {
    city: "Kochi",
    level: "Low",
    color: "text-green-400",
  },
];

export default function FloodRisk() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex items-center gap-3">

<CloudRain className="text-cyan-400"/>

Flood Risk Prediction

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI based rainfall, river and flood monitoring system.

</p>

<div className="grid lg:grid-cols-4 gap-6">

<Card
icon={<CloudRain className="text-blue-400"/>}
title="Rainfall"
value="248 mm"
/>

<Card
icon={<Gauge className="text-yellow-400"/>}
title="River Level"
value="92%"
/>

<Card
icon={<AlertTriangle className="text-red-400"/>}
title="Risk"
value="High"
/>

<Card
icon={<ShieldCheck className="text-green-400"/>}
title="Accuracy"
value="96%"
/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Affected Cities

</h2>

<div className="space-y-4">

{cities.map((item)=>(

<div
key={item.city}
className="flex justify-between bg-slate-800 rounded-xl p-4"
>

<span>

{item.city}

</span>

<span className={item.color}>

{item.level}

</span>

</div>

))}

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Flood Map

</h2>

<div className="h-72 rounded-xl border-2 border-dashed border-cyan-500 flex flex-col items-center justify-center">

<MapPinned size={70} className="text-cyan-400"/>

<p className="mt-4 text-slate-400">

Flood Heatmap will appear here

</p>

</div>

</div>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-4">

AI Recommendations

</h2>

<ul className="space-y-3 text-slate-300">

<li>• Evacuate low-lying regions.</li>

<li>• Deploy rescue teams.</li>

<li>• Open emergency shelters.</li>

<li>• Increase drainage monitoring.</li>

<li>• Monitor reservoir discharge.</li>

</ul>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-4">

Live Water Level

</h2>

<div className="flex justify-center">

<div className="w-48 h-48 rounded-full border-[18px] border-cyan-500 flex items-center justify-center">

<div>

<h1 className="text-5xl font-bold">

92%

</h1>

<p className="text-center text-slate-400">

Reservoir Full

</p>

</div>

</div>

</div>

</div>

</div>

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mt-8">

<div className="flex items-center gap-3">

<Waves className="text-blue-400"/>

<h2 className="text-2xl font-bold">

Latest AI Alert

</h2>

</div>

<p className="mt-5 text-slate-300">

Heavy rainfall is expected across Chennai and nearby districts
during the next 24 hours. Reservoir water levels are increasing.
Emergency response teams have been placed on standby.

</p>

</div>

</main>

</div>

</div>

  );

}

function Card({icon,title,value}){

return(

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

<div>

{icon}

</div>

<p className="text-slate-400 mt-4">

{title}

</p>

<h2 className="text-3xl font-bold mt-2">

{value}

</h2>

</div>

)

}