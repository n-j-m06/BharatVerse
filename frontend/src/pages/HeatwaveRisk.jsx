import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Sun,
  Thermometer,
  AlertTriangle,
  MapPinned,
  ShieldCheck,
  Flame,
} from "lucide-react";

const regions = [
  {
    city: "Delhi",
    temp: "45°C",
    risk: "High",
    color: "text-red-400",
  },
  {
    city: "Nagpur",
    temp: "43°C",
    risk: "High",
    color: "text-red-400",
  },
  {
    city: "Hyderabad",
    temp: "40°C",
    risk: "Moderate",
    color: "text-yellow-400",
  },
  {
    city: "Bengaluru",
    temp: "34°C",
    risk: "Low",
    color: "text-green-400",
  },
];

export default function HeatwaveRisk() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex items-center gap-3">

<Sun className="text-yellow-400"/>

Heatwave Risk Prediction

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI powered heatwave monitoring and temperature forecasting.

</p>

<div className="grid lg:grid-cols-4 gap-6">

<Card
icon={<Thermometer className="text-red-400"/>}
title="Max Temperature"
value="45°C"
/>

<Card
icon={<Flame className="text-orange-400"/>}
title="Heat Index"
value="Extreme"
/>

<Card
icon={<AlertTriangle className="text-red-400"/>}
title="Risk Level"
value="High"
/>

<Card
icon={<ShieldCheck className="text-green-400"/>}
title="Accuracy"
value="95%"
/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Affected Regions

</h2>

<div className="space-y-4">

{regions.map((item)=>(

<div
key={item.city}
className="bg-slate-800 rounded-xl p-4 flex justify-between"
>

<div>

<h3>{item.city}</h3>

<p className="text-slate-400">

{item.temp}

</p>

</div>

<span className={item.color}>

{item.risk}

</span>

</div>

))}

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Heat Risk Map

</h2>

<div className="h-72 border-2 border-dashed border-orange-500 rounded-xl flex flex-col items-center justify-center">

<MapPinned size={70} className="text-orange-400"/>

<p className="text-slate-400 mt-4">

Temperature Heatmap

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

<li>• Issue heatwave warnings.</li>

<li>• Increase drinking water stations.</li>

<li>• Avoid outdoor activities from 12 PM–4 PM.</li>

<li>• Monitor elderly and children.</li>

<li>• Deploy emergency medical teams.</li>

</ul>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-4">

Heat Severity

</h2>

<div className="flex justify-center">

<div className="w-48 h-48 rounded-full border-[18px] border-orange-500 flex items-center justify-center">

<div>

<h1 className="text-5xl font-bold">

89%

</h1>

<p className="text-center text-slate-400">

Extreme Heat

</p>

</div>

</div>

</div>

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 mt-8">

<h2 className="text-2xl font-bold mb-5">

Latest AI Alert

</h2>

<p className="text-slate-300">

Temperatures above 44°C are expected across northern India over the
next 48 hours. Authorities are advised to activate heat action plans,
increase public awareness, and ensure adequate water availability.

</p>

</div>

</main>

</div>

</div>

  );

}

function Card({icon,title,value}){

return(

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

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