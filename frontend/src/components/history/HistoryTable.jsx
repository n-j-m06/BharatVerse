import {
  CheckCircle2,
  Clock3,
  PlayCircle,
  Download,
} from "lucide-react";

export default function HistoryTable() {

  const history = [

    {
      id: "SIM-001",
      scenario: "Flood",
      city: "Chennai",
      status: "Completed",
      accuracy: "97%",
      runtime: "4m 32s",
    },

    {
      id: "SIM-002",
      scenario: "Cyclone",
      city: "Mumbai",
      status: "Running",
      accuracy: "--",
      runtime: "2m 15s",
    },

    {
      id: "SIM-003",
      scenario: "Heatwave",
      city: "Delhi",
      status: "Completed",
      accuracy: "95%",
      runtime: "5m 41s",
    },

    {
      id: "SIM-004",
      scenario: "Traffic",
      city: "Bengaluru",
      status: "Completed",
      accuracy: "98%",
      runtime: "3m 58s",
    },

  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Simulation Records

      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-slate-700">

              <th className="text-left py-3">ID</th>
              <th className="text-left py-3">Scenario</th>
              <th className="text-left py-3">City</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Accuracy</th>
              <th className="text-left py-3">Runtime</th>
              <th className="text-center py-3">Export</th>

            </tr>

          </thead>

          <tbody>

            {history.map((item)=>(

              <tr
                key={item.id}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="py-4 font-semibold">

                  {item.id}

                </td>

                <td>{item.scenario}</td>

                <td>{item.city}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status==="Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >

                    {item.status}

                  </span>

                </td>

                <td>{item.accuracy}</td>

                <td>{item.runtime}</td>

                <td className="text-center">

                  <button className="text-cyan-400 hover:text-cyan-300">

                    <Download size={18}/>

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}