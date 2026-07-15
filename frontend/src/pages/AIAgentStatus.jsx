import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Bot,
  Activity,
  Clock3,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function AIAgentStatus() {

  const agents = [

    {
      name:"Climate AI",
      task:"Flood Prediction",
      uptime:"99.98%",
      latency:"82 ms",
      accuracy:"97.8%",
      heartbeat:"2 sec ago",
      status:"Healthy",
      color:"text-green-400"
    },

    {
      name:"Traffic AI",
      task:"Traffic Optimization",
      uptime:"99.92%",
      latency:"68 ms",
      accuracy:"96.4%",
      heartbeat:"1 sec ago",
      status:"Healthy",
      color:"text-green-400"
    },

    {
      name:"Economy AI",
      task:"Economic Forecast",
      uptime:"99.81%",
      latency:"91 ms",
      accuracy:"95.6%",
      heartbeat:"4 sec ago",
      status:"Running",
      color:"text-cyan-400"
    },

    {
      name:"Energy AI",
      task:"Power Optimization",
      uptime:"99.95%",
      latency:"76 ms",
      accuracy:"98.1%",
      heartbeat:"1 sec ago",
      status:"Healthy",
      color:"text-green-400"
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

                <Bot className="text-cyan-400"/>

                AI Agent Status

              </h1>

              <p className="text-slate-400 mt-2">

                Live monitoring of every intelligent agent.

              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              ● All Agents Online

            </div>

          </div>

          {/* Summary */}

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <Summary title="Running Agents" value="4"/>

            <Summary title="Healthy" value="4"/>

            <Summary title="Average Accuracy" value="97.0%"/>

            <Summary title="Average Latency" value="79 ms"/>

          </div>

          {/* Agent Cards */}

          <div className="space-y-6">

            {agents.map((agent)=>(

              <div
                key={agent.name}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >

                <div className="flex justify-between">

                  <div>

                    <h2 className="text-2xl font-bold">

                      {agent.name}

                    </h2>

                    <p className="text-slate-400 mt-1">

                      Current Task : {agent.task}

                    </p>

                  </div>

                  <span className={`${agent.color} font-semibold`}>

                    {agent.status}

                  </span>

                </div>

                <div className="grid md:grid-cols-4 gap-5 mt-6">

                  <Info
                    icon={<Activity size={20}/>}
                    title="Accuracy"
                    value={agent.accuracy}
                  />

                  <Info
                    icon={<Cpu size={20}/>}
                    title="Latency"
                    value={agent.latency}
                  />

                  <Info
                    icon={<CheckCircle2 size={20}/>}
                    title="Uptime"
                    value={agent.uptime}
                  />

                  <Info
                    icon={<Clock3 size={20}/>}
                    title="Heartbeat"
                    value={agent.heartbeat}
                  />

                </div>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>

  );

}

function Summary({title,value}){

  return(

    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

      <p className="text-slate-400">{title}</p>

      <h2 className="text-3xl font-bold mt-3">

        {value}

      </h2>

    </div>

  );

}

function Info({icon,title,value}){

  return(

    <div className="bg-slate-800 rounded-xl p-4">

      <div className="text-cyan-400 mb-3">

        {icon}

      </div>

      <p className="text-slate-400">

        {title}

      </p>

      <h3 className="text-xl font-bold mt-2">

        {value}

      </h3>

    </div>

  );

}