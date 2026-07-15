import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Brain,
  Cpu,
  Activity,
  Database,
  Server,
  CheckCircle2,
} from "lucide-react";

export default function AIEngine() {

  const services = [
    {
      name: "Climate AI",
      status: "Healthy",
      latency: "84 ms",
      color: "text-green-400",
    },
    {
      name: "Traffic AI",
      status: "Healthy",
      latency: "73 ms",
      color: "text-green-400",
    },
    {
      name: "Economy AI",
      status: "Running",
      latency: "91 ms",
      color: "text-cyan-400",
    },
    {
      name: "Energy AI",
      status: "Healthy",
      latency: "78 ms",
      color: "text-green-400",
    },
  ];

  const metrics = [
    {
      title: "CPU Usage",
      value: "62%",
      icon: <Cpu size={28}/>,
      color: "text-orange-400",
    },
    {
      title: "Memory",
      value: "14.2 GB",
      icon: <Database size={28}/>,
      color: "text-cyan-400",
    },
    {
      title: "Requests/min",
      value: "2,486",
      icon: <Activity size={28}/>,
      color: "text-green-400",
    },
    {
      title: "Server Health",
      value: "99.8%",
      icon: <Server size={28}/>,
      color: "text-purple-400",
    },
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

                <Brain className="text-cyan-400"/>

                AI Engine

              </h1>

              <p className="text-slate-400 mt-2">
                Central AI orchestration and monitoring dashboard.
              </p>

            </div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              ● Operational
            </span>

          </div>

          {/* KPI */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {metrics.map((item)=>(

              <div
                key={item.title}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >

                <div className={item.color}>
                  {item.icon}
                </div>

                <p className="text-slate-400 mt-4">
                  {item.title}
                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                  {item.value}
                </h2>

              </div>

            ))}

          </div>

          {/* AI Services */}

          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              AI Services
            </h2>

            <div className="space-y-4">

              {services.map((service)=>(

                <div
                  key={service.name}
                  className="flex justify-between items-center bg-slate-800 rounded-xl p-5"
                >

                  <div>

                    <h3 className="font-semibold">
                      {service.name}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Latency: {service.latency}
                    </p>

                  </div>

                  <span className={`${service.color} font-semibold`}>
                    {service.status}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Engine Status */}

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                AI Pipeline
              </h2>

              <div className="space-y-4">

                <Pipeline title="Data Ingestion"/>
                <Pipeline title="Data Processing"/>
                <Pipeline title="Prediction Engine"/>
                <Pipeline title="Recommendation Engine"/>
                <Pipeline title="Notification Service"/>

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Overall Health
              </h2>

              <div className="flex justify-center mt-6">

                <div className="w-44 h-44 rounded-full border-[16px] border-cyan-500 flex items-center justify-center">

                  <div className="text-center">

                    <h1 className="text-4xl font-bold">
                      98%
                    </h1>

                    <p className="text-slate-400">
                      Healthy
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}

function Pipeline({title}){

  return(

    <div className="flex justify-between bg-slate-800 rounded-xl p-4">

      <span>{title}</span>

      <CheckCircle2 className="text-green-400"/>

    </div>

  );

}