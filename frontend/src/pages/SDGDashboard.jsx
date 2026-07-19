import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Leaf,
  Droplets,
  Sun,
  Building2,
  HeartPulse,
  Globe2,
  Factory,
  Lightbulb,
} from "lucide-react";

const sdgs = [
  {
    title: "Good Health",
    icon: <HeartPulse size={28} />,
    value: 87,
    color: "bg-green-500",
  },
  {
    title: "Clean Water",
    icon: <Droplets size={28} />,
    value: 74,
    color: "bg-blue-500",
  },
  {
    title: "Clean Energy",
    icon: <Lightbulb size={28} />,
    value: 83,
    color: "bg-yellow-500",
  },
  {
    title: "Industry",
    icon: <Factory size={28} />,
    value: 91,
    color: "bg-purple-500",
  },
  {
    title: "Smart Cities",
    icon: <Building2 size={28} />,
    value: 94,
    color: "bg-cyan-500",
  },
  {
    title: "Climate Action",
    icon: <Leaf size={28} />,
    value: 82,
    color: "bg-emerald-500",
  },
  {
    title: "Life on Land",
    icon: <Globe2 size={28} />,
    value: 79,
    color: "bg-lime-500",
  },
  {
    title: "Clean Environment",
    icon: <Sun size={28} />,
    value: 85,
    color: "bg-orange-500",
  },
];

export default function SDGDashboard() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold">

🌱 SDG Dashboard

</h1>

<p className="text-slate-400 mt-2 mb-8">

United Nations Sustainable Development Goals Progress

</p>

<div className="grid lg:grid-cols-4 gap-6">

{sdgs.map((sdg)=>(

<div
key={sdg.title}
className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
>

<div className="flex justify-between items-center">

<div className="text-cyan-400">

{sdg.icon}

</div>

<h2 className="text-3xl font-bold">

{sdg.value}%

</h2>

</div>

<h3 className="mt-5 text-lg font-semibold">

{sdg.title}

</h3>

<div className="w-full h-3 rounded-full bg-slate-700 mt-5">

<div
className={`${sdg.color} h-3 rounded-full`}
style={{
width:`${sdg.value}%`
}}
/>

</div>

</div>

))}

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

National SDG Score

</h2>

<div className="flex justify-center">

<div className="w-52 h-52 rounded-full border-[18px] border-cyan-500 flex items-center justify-center">

<div>

<h1 className="text-6xl font-bold">

87%

</h1>

<p className="text-center text-slate-400">

Overall

</p>

</div>

</div>

</div>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-2xl font-bold mb-5">

AI Recommendations

</h2>

<ul className="space-y-4 text-slate-300">

<li>✅ Increase renewable energy generation.</li>

<li>✅ Expand IoT water monitoring systems.</li>

<li>✅ Improve disaster resilience in coastal cities.</li>

<li>✅ Increase EV charging infrastructure.</li>

<li>✅ Deploy AI-based waste management.</li>

<li>✅ Enhance smart traffic optimization.</li>

</ul>

</div>

</div>

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mt-8">

<h2 className="text-2xl font-bold mb-5">

Government Summary

</h2>

<div className="grid md:grid-cols-3 gap-6">

<div>

<p className="text-slate-400">

Best Performing Goal

</p>

<h2 className="text-2xl font-bold text-green-400 mt-2">

Smart Cities

</h2>

</div>

<div>

<p className="text-slate-400">

Needs Improvement

</p>

<h2 className="text-2xl font-bold text-red-400 mt-2">

Clean Water

</h2>

</div>

<div>

<p className="text-slate-400">

Overall Ranking

</p>

<h2 className="text-2xl font-bold text-cyan-400 mt-2">

Top 20 Worldwide

</h2>

</div>

</div>

</div>

</main>

</div>

</div>

  );

}