import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  ShieldAlert,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TrendingUp,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";

const disasters = [
  {
    name: "Flood Risk",
    risk: "High",
    color: "text-red-400",
    icon: <CloudRain size={35} />,
    route: "/flood-risk",
  },
  {
    name: "Heatwave Risk",
    risk: "Moderate",
    color: "text-orange-400",
    icon: <Sun size={35} />,
    route: "/heatwave-risk",
  },
  {
    name: "Cyclone Risk",
    risk: "Low",
    color: "text-green-400",
    icon: <Wind size={35} />,
    route: "/cyclone-risk",
  },
  {
    name: "Drought Risk",
    risk: "Moderate",
    color: "text-yellow-400",
    icon: <Droplets size={35} />,
    route: "/drought-risk",
  },
  {
    name: "Earthquake Risk",
    risk: "Low",
    color: "text-cyan-400",
    icon: <Mountain size={35} />,
    route: "/earthquake-risk",
  },
];

export default function DisasterPrediction() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex items-center gap-3">

<ShieldAlert className="text-red-400"/>

Disaster Prediction Center

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI powered disaster monitoring and prediction dashboard.

</p>

<div className="grid lg:grid-cols-5 gap-6">

{disasters.map((item)=>(

<Link
to={item.route}
key={item.name}
className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
>

<div className={item.color}>

{item.icon}

</div>

<h2 className="text-xl font-bold mt-5">

{item.name}

</h2>

<p className={`${item.color} mt-3 font-semibold`}>

{item.risk} Risk

</p>

</Link>

))}

</div>

<div className="grid lg:grid-cols-3 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<Activity className="text-cyan-400"/>

<h3 className="mt-4">

Active Monitoring

</h3>

<h2 className="text-4xl font-bold mt-2">

28 Cities

</h2>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<TrendingUp className="text-green-400"/>

<h3 className="mt-4">

Prediction Accuracy

</h3>

<h2 className="text-4xl font-bold mt-2">

96%

</h2>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<ShieldAlert className="text-red-400"/>

<h3 className="mt-4">

Today's Alerts

</h3>

<h2 className="text-4xl font-bold mt-2">

18

</h2>

</div>

</div>

<div className="bg-slate-900 border border-slate-700 rounded-2xl mt-8 p-6">

<h2 className="text-2xl font-bold">

Latest AI Alerts

</h2>

<div className="space-y-4 mt-6">

<div className="bg-slate-800 rounded-xl p-4">

🔴 Heavy rainfall expected in Chennai within 24 hours.

</div>

<div className="bg-slate-800 rounded-xl p-4">

🟠 Heatwave probability increasing across Central India.

</div>

<div className="bg-slate-800 rounded-xl p-4">

🟢 Cyclone activity remains stable.

</div>

<div className="bg-slate-800 rounded-xl p-4">

🟡 Groundwater levels dropping in western districts.

</div>

</div>

</div>

</main>

</div>

</div>

  );

}