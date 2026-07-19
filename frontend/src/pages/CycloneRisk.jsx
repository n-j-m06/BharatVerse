import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Wind,
  CloudLightning,
  AlertTriangle,
  MapPinned,
  ShieldCheck,
  Compass,
} from "lucide-react";

const zones = [
  { city: "Chennai", status: "High", color: "text-red-400" },
  { city: "Visakhapatnam", status: "High", color: "text-red-400" },
  { city: "Kolkata", status: "Moderate", color: "text-yellow-400" },
  { city: "Mumbai", status: "Low", color: "text-green-400" },
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

export default function CycloneRisk() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold flex gap-3 items-center">
            <Wind className="text-cyan-400" />
            Cyclone Risk Prediction
          </h1>

          <p className="text-slate-400 mt-2 mb-8">
            AI-powered cyclone monitoring and coastal risk assessment.
          </p>

          <div className="grid lg:grid-cols-4 gap-6">

            <Card
              icon={<CloudLightning className="text-cyan-400" />}
              title="Wind Speed"
              value="145 km/h"
            />

            <Card
              icon={<Compass className="text-blue-400" />}
              title="Direction"
              value="North-East"
            />

            <Card
              icon={<AlertTriangle className="text-red-400" />}
              title="Risk"
              value="High"
            />

            <Card
              icon={<ShieldCheck className="text-green-400" />}
              title="Accuracy"
              value="97%"
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-2xl font-bold mb-5">
                Coastal Cities
              </h2>

              <div className="space-y-4">

                {zones.map((z) => (

                  <div
                    key={z.city}
                    className="bg-slate-800 rounded-xl p-4 flex justify-between"
                  >
                    <span>{z.city}</span>

                    <span className={z.color}>
                      {z.status}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-2xl font-bold mb-5">
                Cyclone Tracking Map
              </h2>

              <div className="h-72 border-2 border-dashed border-cyan-500 rounded-xl flex flex-col justify-center items-center">

                <MapPinned
                  size={70}
                  className="text-cyan-400"
                />

                <p className="mt-4 text-slate-400">
                  Live Cyclone Tracking
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

                <li>• Evacuate coastal villages.</li>

                <li>• Suspend fishing operations.</li>

                <li>• Activate emergency shelters.</li>

                <li>• Secure electricity infrastructure.</li>

                <li>• Monitor cyclone path every hour.</li>

              </ul>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-xl font-bold mb-4">
                AI Alert
              </h2>

              <p className="text-slate-300">
                A severe cyclonic storm is expected to approach the east coast within the next 36 hours. Disaster response teams should remain on high alert.
              </p>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}