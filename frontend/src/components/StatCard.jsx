import { motion } from "framer-motion";

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      style={styles.card}
    >
      <div style={styles.top}>
        <span style={styles.icon}>{icon}</span>

        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <h1>{value}</h1>
    </motion.div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    width: "250px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },

  top: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  icon: {
    fontSize: "35px",
  },
};