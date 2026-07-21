import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", reports: 18 },
  { day: "Tue", reports: 25 },
  { day: "Wed", reports: 31 },
  { day: "Thu", reports: 22 },
  { day: "Fri", reports: 41 },
  { day: "Sat", reports: 36 },
  { day: "Sun", reports: 52 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 h-[280px] w-full">

      <h2 className="text-xl font-semibold text-white mb-6">
        Citizen Reports Trend
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="day" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="reports"
            stroke="#06B6D4"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}