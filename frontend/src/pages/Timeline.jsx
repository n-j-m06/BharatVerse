import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Clock3,
  Bot,
  CloudRain,
  ShieldAlert,
  PlayCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function Timeline() {

  const events = [
    {
      time: "09:15 AM",
      title: "Simulation Started",
      description: "Flood simulation initiated for Chennai.",
      icon: <PlayCircle className="text-cyan-400" />,
    },
    {
      time: "09:22 AM",
      title: "Climate AI Prediction",
      description: "Heavy rainfall expected in coastal districts.",
      icon: <CloudRain className="text-blue-400" />,
    },
    {
      time: "09:40 AM",
      title: "Traffic AI Update",
      description: "Traffic congestion increased by 18%.",
      icon: <Bot className="text-purple-400" />,
    },
    {
      time: "10:05 AM",
      title: "Disaster Alert",
      description: "Orange flood warning generated.",
      icon: <ShieldAlert className="text-red-400" />,
    },
    {
      time: "10:30 AM",
      title: "Citizen Report",
      description: "Waterlogging reported near Marina Beach.",
      icon: <FileText className="text-yellow-400" />,
    },
    {
      time: "10:45 AM",
      title: "AI Recommendation",
      description: "Deploy emergency response teams.",
      icon: <CheckCircle2 className="text-green-400" />,
    },
  ];

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold flex items-center gap-3">

                <Clock3 className="text-cyan-400" />

                System Timeline

              </h1>

              <p className="text-slate-400 mt-2">

                Complete history of AI events and platform activity.

              </p>

            </div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              Live Feed

            </span>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

            {events.map((event, index) => (

              <div
                key={index}
                className="flex gap-6 pb-10 relative"
              >

                <div className="flex flex-col items-center">

                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">

                    {event.icon}

                  </div>

                  {index !== events.length - 1 && (
                    <div className="w-1 flex-1 bg-slate-700 mt-2"></div>
                  )}

                </div>

                <div className="flex-1">

                  <div className="flex justify-between items-center">

                    <h2 className="text-xl font-semibold">

                      {event.title}

                    </h2>

                    <span className="text-cyan-400 text-sm">

                      {event.time}

                    </span>

                  </div>

                  <p className="text-slate-400 mt-3">

                    {event.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h3 className="text-slate-400">

                Today's Events

              </h3>

              <h2 className="text-4xl font-bold text-cyan-400 mt-3">

                124

              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h3 className="text-slate-400">

                AI Decisions

              </h3>

              <h2 className="text-4xl font-bold text-green-400 mt-3">

                58

              </h2>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h3 className="text-slate-400">

                Alerts Generated

              </h3>

              <h2 className="text-4xl font-bold text-red-400 mt-3">

                12

              </h2>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}