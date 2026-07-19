import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Droplets,
  CloudOff,
  Thermometer,
  AlertTriangle,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

const regions = [
  {
    city: "Rajasthan",
    rainfall: "18%",
    risk: "High",
    color: "text-red-400",
  },
  {
    city: "Gujarat",
    rainfall: "31%",
    risk: "Moderate",
    color: "text-yellow-400",
  },
  {
    city: "Karnataka",
    rainfall: "52%",
    risk: "Low",
    color: "text-green-400",
  },
  {
    city: "Maharashtra",
    rainfall: "27%",
    risk: "Moderate",
    color: "text-yellow-400",
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

export default function DroughtRisk() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex gap-3 items-center">

<CloudOff className="text-yellow-400"/>

Drought Risk Prediction

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI powered drought forecasting and water resource monitoring.

</p>

<div className="grid lg:grid-cols-4 gap-6">

<Card
icon={<Droplets className="text-blue-400"/>}
title="Water Level"
value="41%"
/>

<Card
icon={<Thermometer className="text-orange-400"/>}
title="Temperature"
value="42°C"
/>

<Card
icon={<AlertTriangle className="text-red-400"/>}
title="Risk Level"
value="Moderate"
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

{regions.map((r)=>(

<div
key={r.city}
className="bg-slate-800 rounded-xl p-4 flex justify-between"
>

<div>

<h3>{r.city}</h3>

<p className="text-slate-400">

Rainfall : {r.rainfall}

</p>

</div>

<span className={r.color}>

{r.risk}

</span>

</div>

))}

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

Drought Map

</h2>

<div className="h-72 border-2 border-dashed border-yellow-500 rounded-xl flex flex-col items-center justify-center">

<MapPinned size={70} className="text-yellow-400"/>

<p className="mt-4 text-slate-400">

AI Drought Monitoring Map

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

<li>• Promote water conservation.</li>

<li>• Optimize irrigation schedules.</li>

<li>• Monitor reservoir storage.</li>

<li>• Encourage drought-resistant crops.</li>

<li>• Restrict unnecessary water usage.</li>

</ul>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-4">

Latest AI Alert

</h2>

<p className="text-slate-300">

Rainfall is expected to remain below average over the next month in western India. Water management authorities should prepare contingency plans and optimize reservoir operations.

</p>

</div>

</div>

</main>

</div>

</div>

  );

}