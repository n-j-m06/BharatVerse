import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl hover:border-cyan-400 transition-all duration-300 w-72"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

          <p className="text-cyan-400 text-sm mt-3">
            {subtitle}
          </p>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}