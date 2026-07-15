import AgentCard from "./AgentCard";

export default function AgentGrid() {

  const agents = [
    {
      name: "Climate AI",
      icon: "🌦️",
      status: "Running",
      accuracy: 98,
      latency: 72,
      tasks: 164,
      progress: 95,
      color: "#2563EB",
    },
    {
      name: "Traffic AI",
      icon: "🚦",
      status: "Running",
      accuracy: 96,
      latency: 81,
      tasks: 132,
      progress: 90,
      color: "#EA580C",
    },
    {
      name: "Economy AI",
      icon: "📈",
      status: "Running",
      accuracy: 94,
      latency: 93,
      tasks: 118,
      progress: 87,
      color: "#16A34A",
    },
    {
      name: "Energy AI",
      icon: "⚡",
      status: "Running",
      accuracy: 97,
      latency: 76,
      tasks: 151,
      progress: 93,
      color: "#CA8A04",
    },
  ];

  return (

    <div>

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Active AI Agents
          </h2>

          <p className="text-slate-400 mt-1">
            Real-time monitoring of BharatVerse AI ecosystem
          </p>

        </div>

        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
          ● All Systems Operational
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {agents.map((agent) => (

          <AgentCard
            key={agent.name}
            name={agent.name}
            icon={agent.icon}
            status={agent.status}
            accuracy={agent.accuracy}
            latency={agent.latency}
            tasks={agent.tasks}
            progress={agent.progress}
            color={agent.color}
          />

        ))}

      </div>

    </div>

  );

}