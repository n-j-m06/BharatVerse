import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const leaders = [
  {
    rank: 1,
    city: "Chennai",
    score: 98,
    ai: 96,
    disaster: 97,
    sustainability: 95,
  },
  {
    rank: 2,
    city: "Bengaluru",
    score: 96,
    ai: 95,
    disaster: 94,
    sustainability: 96,
  },
  {
    rank: 3,
    city: "Hyderabad",
    score: 94,
    ai: 92,
    disaster: 95,
    sustainability: 91,
  },
  {
    rank: 4,
    city: "Pune",
    score: 91,
    ai: 90,
    disaster: 88,
    sustainability: 92,
  },
  {
    rank: 5,
    city: "Mumbai",
    score: 89,
    ai: 91,
    disaster: 85,
    sustainability: 86,
  },
  {
    rank: 6,
    city: "Delhi",
    score: 87,
    ai: 88,
    disaster: 83,
    sustainability: 84,
  },
];

export default function Leaderboard() {

  return (

<div className="bg-slate-950 min-h-screen text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="flex-1 p-8">

<h1 className="text-4xl font-bold flex items-center gap-3">

<Trophy className="text-yellow-400"/>

National Leaderboard

</h1>

<p className="text-slate-400 mt-2 mb-8">

AI Performance Ranking of Smart Cities

</p>

<div className="grid md:grid-cols-3 gap-6 mb-8">

<Card
icon={<Trophy className="text-yellow-400"/>}
title="Top City"
value="Chennai"
/>

<Card
icon={<TrendingUp className="text-green-400"/>}
title="Average Score"
value="92%"
/>

<Card
icon={<ShieldCheck className="text-cyan-400"/>}
title="AI Accuracy"
value="96%"
/>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

<table className="w-full">

<thead className="bg-slate-800">

<tr>

<th className="p-4 text-left">Rank</th>

<th className="text-left">City</th>

<th>Overall</th>

<th>AI</th>

<th>Disaster</th>

<th>Sustainability</th>

</tr>

</thead>

<tbody>

{leaders.map((city)=>(

<tr
key={city.rank}
className="border-t border-slate-700 hover:bg-slate-800 transition"
>

<td className="p-5">

{city.rank===1 && <Medal className="text-yellow-400"/>}

{city.rank===2 && <Medal className="text-gray-300"/>}

{city.rank===3 && <Award className="text-orange-400"/>}

{city.rank>3 && city.rank}

</td>

<td>{city.city}</td>

<td className="text-cyan-400 font-bold">

{city.score}

</td>

<td>{city.ai}%</td>

<td>{city.disaster}%</td>

<td>{city.sustainability}%</td>

</tr>

))}

</tbody>

</table>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-5">

Top Performer

</h2>

<h1 className="text-5xl font-bold text-yellow-400">

🥇 Chennai

</h1>

<p className="text-slate-400 mt-4">

Highest AI decision accuracy, disaster preparedness
and smart infrastructure score.

</p>

</div>

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

<h2 className="text-xl font-bold mb-5">

AI Recommendation

</h2>

<ul className="space-y-3 text-slate-300">

<li>• Improve disaster response in lower ranked cities.</li>

<li>• Expand IoT deployment.</li>

<li>• Increase renewable energy coverage.</li>

<li>• Improve citizen engagement.</li>

</ul>

</div>

</div>

</main>

</div>

</div>

  )

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