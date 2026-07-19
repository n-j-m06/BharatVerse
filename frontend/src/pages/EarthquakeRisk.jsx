import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Mountain,
  Activity,
  AlertTriangle,
  MapPinned,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const zones = [
  {
    city: "Delhi",
    magnitude: "5.8",
    risk: "Moderate",
    color: "text-yellow-400",
  },
  {
    city: "Guwahati",
    magnitude: "6.5",
    risk: "High",
    color: "text-red-400",
  },
  {
    city: "Shimla",
    magnitude: "5.9",
    risk: "High",
    color: "text-red-400",
  },
  {
    city: "Bengaluru",
    magnitude: "2.4",
    risk: "Low",
    color: "text-green-400",
  },
];

function Card({ icon, title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      {icon}
      <p className="text-slate-400 mt-4">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

export default function EarthquakeRisk() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex gap-3 items-center">

<Mountain className="text-orange-400"/>

Earthquake Risk Prediction

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI powered seismic monitoring and earthquake prediction dashboard.

</p>

<div className="grid lg:grid-cols-4 gap-6">

<Card
icon={<Activity className="text-red-400"/>}
title="Seismic Activity"
value="Moderate"
/>

<Card
icon={<Gauge className="text-cyan-400"/>}
title="Magnitude"
value="6.5"
/>

<Card
icon={<AlertTriangle className="text-yellow-400"/>}
title="Risk Level"
value="High"
/>

<Card
icon={<ShieldCheck className="text-green-400"/>}
title="Accuracy"
value="94%"
/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

High Risk Zones

</h2>

<div className="space-y-4">

{zones.map((zone)=>(

<div
key={zone.city}
className="bg-slate-800 rounded-xl p-4 flex justify-between"
>

<div>

<h3>{zone.city}</h3>

<p className="text-slate-400">

Magnitude : {zone.magnitude}

</p>

</div>

<span className={zone.color}>

{zone.risk}

</span>

</div>

))}

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Seismic Map

</h2>

<div className="h-72 border-2 border-dashed border-orange-500 rounded-xl flex flex-col justify-center items-center">

<MapPinned
size={70}
className="text-orange-400"
/>

<p className="mt-4 text-slate-400">

Earthquake Monitoring Map

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

<li>• Inspect vulnerable buildings.</li>

<li>• Conduct emergency drills.</li>

<li>• Strengthen critical infrastructure.</li>

<li>• Monitor seismic sensors continuously.</li>

<li>• Keep emergency response teams ready.</li>

</ul>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-4">

Latest AI Alert

</h2>

<p className="text-slate-300">

Increased seismic activity has been detected in the Himalayan region. Authorities are advised to monitor sensor networks closely and ensure emergency preparedness.

</p>

</div>

</div>

</main>

</div>

</div>

  );

}