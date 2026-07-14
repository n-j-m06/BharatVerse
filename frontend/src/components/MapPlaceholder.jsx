export default function MapPlaceholder() {
  return (
    <div style={styles.box}>
      <h2>🌍 INDIA DIGITAL TWIN</h2>

      <p>Interactive Map will be integrated here.</p>

      <h1 style={{ fontSize: "120px" }}>🗺️</h1>
    </div>
  );
}

const styles = {
  box: {
    background: "white",
    marginTop: "30px",
    borderRadius: "15px",
    padding: "25px",
    height: "450px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};