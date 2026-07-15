import {
  Waves,
  Sun,
  Wind,
  Car,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function SimulationResults() {

  const results = [
    {
      title: "Flood Risk",
      value: "High",
      percentage: "87%",
      icon: <Waves size={30} />,
      color: "border-blue-500",
      text: "text-blue-400",
    },
    {
      title: "Heatwave Risk",
      value: "Moderate",
      percentage: "61%",
      icon: <Sun size={30} />,
      color: "border-orange-500",
      text: "text-orange-400",
    },
    {
      title: "Cyclone Risk",
      value: "Low",
      percentage: "18%",
      icon: <Wind size={30} />,
      color: "border-green-500",
      text: "text-green-400",
    },
    {
      title: "Traffic Impact",
      value: "Heavy",
      percentage: "78%",
      icon: <Car size={30} />,
      color: "border-red-500",
      text: "text-red-400",
    },
    {
      title: "Energy Demand",
      value: "Very High",
      percentage: "91%",
      icon: <Zap size={30} />,
      color: "border-yellow-500",
      text: "text-yellow-400",
    },
    {
      title: "Economic Impact",
      value: "Stable",
      percentage: "82%",
      icon: <TrendingUp size={30} />,
      color: "border-cyan-500",
      text: "text-cyan-400",
    },
  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Simulation Results
          </h2>

          <p className="text-slate-400 mt-1">
            AI generated prediction summary
          </p>

        </div>

        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl">
          Last Updated: 2 min ago
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {results.map((item) => (

          <div
            key={item.title}
            className={`bg-slate-800 border ${item.color} rounded-2xl p-5 hover:scale-105 transition`}
          >

            <div className="flex justify-between items-center">

              <div className={item.text}>

                {item.icon}

              </div>

              <span className="text-slate-400">

                {item.percentage}

              </span>

            </div>

            <h3 className="mt-5 text-lg font-semibold">

              {item.title}

            </h3>

            <p className={`mt-2 text-2xl font-bold ${item.text}`}>

              {item.value}

            </p>

          </div>

        ))}

      </div>

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-lg font-semibold mb-3">

          AI Recommendation

        </h3>

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

          <p className="text-slate-200 leading-7">

            Based on the current simulation, BharatVerse recommends
            deploying emergency response teams to flood-prone regions,
            increasing traffic diversion near affected zones, and
            allocating additional power resources to hospitals and
            evacuation centers.

          </p>

        </div>

      </div>

    </div>

  );

}