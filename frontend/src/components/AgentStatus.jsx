export default function AgentStatus() {
  const agents = [
    "Climate",
    "Traffic",
    "Economy",
    "Energy",
    "Sustainability",
  ];

  return (
    <div style={styles.card}>
      <h2>🤖 AI Agent Status</h2>

      {agents.map((agent) => (
        <div key={agent} style={styles.row}>
          <span>{agent}</span>

          <span style={styles.green}>● Active</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    width: "330px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "18px",
  },

  green: {
    color: "green",
    fontWeight: "bold",
  },
};