export default function AgentStatus() {

  const agents = [
    {
      name: "Climate AI",
      status: "Running",
    },
    {
      name: "Traffic AI",
      status: "Running",
    },
    {
      name: "Economy AI",
      status: "Running",
    },
    {
      name: "Energy AI",
      status: "Idle",
    },
    {
      name: "Disaster AI",
      status: "Running",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">

      <h2 className="text-xl font-bold text-white mb-4">
        🤖 AI Agent Status
      </h2>

      <div className="space-y-4">

        {agents.map((agent) => (

          <div
            key={agent.name}
            className="flex justify-between items-center py-2 border-b border-slate-800 last:border-none"
          >

            <div>

              <p className="text-white font-medium">
                {agent.name}
              </p>

              <p className="text-slate-400 text-sm">
                Monitoring...
              </p>

            </div>

            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              {agent.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}