import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.detail || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <form onSubmit={handleLogin} style={styles.card}>

        <h1 style={styles.logo}>🇮🇳 BharatVerse</h1>

        <h2 style={styles.title}>
          Welcome Back
        </h2>

        <p style={styles.subtitle}>
          Sign in to access the AI Digital Twin Platform
        </p>

        <div style={styles.inputBox}>
          <Mail size={20} color="#38bdf8" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputBox}>
          <Lock size={20} color="#38bdf8" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Signing In..." : "Login"}

          {!loading && (
            <ArrowRight size={18}/>
          )}
        </button>

        <p style={styles.bottom}>
          New to BharatVerse?

          <Link
            to="/signup"
            style={styles.link}
          >
            Create Account
          </Link>

        </p>

      </form>

    </div>
  );
}

const styles = {

  container: {

    minHeight: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    background:
      "linear-gradient(135deg,#020617,#07152d,#0f172a)",

    position: "relative",

    overflow: "hidden",

  },

  glow1: {

    position: "absolute",

    width: 400,

    height: 400,

    background: "#06b6d4",

    filter: "blur(180px)",

    opacity: 0.18,

    top: -120,

    left: -120,

    borderRadius: "50%",

  },

  glow2: {

    position: "absolute",

    width: 350,

    height: 350,

    background: "#2563eb",

    filter: "blur(180px)",

    opacity: 0.15,

    right: -120,

    bottom: -120,

    borderRadius: "50%",

  },

  card: {

    width: 420,

    background: "rgba(15,23,42,0.85)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: 25,

    padding: 40,

    boxShadow: "0 20px 60px rgba(0,0,0,.45)",

    display: "flex",

    flexDirection: "column",

    gap: 22,

    zIndex: 5,

  },

  logo: {

    color: "white",

    textAlign: "center",

    margin: 0,

    fontSize: 34,

  },

  title: {

    color: "white",

    textAlign: "center",

    margin: 0,

    fontSize: 28,

  },

  subtitle: {

    color: "#94a3b8",

    textAlign: "center",

    marginTop: -10,

  },

  inputBox: {

    display: "flex",

    alignItems: "center",

    background: "#111827",

    border: "1px solid #334155",

    borderRadius: 14,

    padding: "0 16px",

  },

  input: {

    flex: 1,

    padding: "16px",

    background: "transparent",

    border: "none",

    color: "white",

    outline: "none",

    fontSize: 16,

  },

  button: {

    background: "#06b6d4",

    color: "white",

    border: "none",

    padding: "16px",

    borderRadius: 14,

    cursor: "pointer",

    fontWeight: 700,

    fontSize: 17,

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    gap: 8,

    transition: ".3s",

  },

  bottom: {

    color: "#94a3b8",

    textAlign: "center",

  },

  link: {

    color: "#22d3ee",

    textDecoration: "none",

    marginLeft: 8,

    fontWeight: 600,

  },

};