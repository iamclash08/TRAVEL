import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Fields required");
      return;
    }

    const response = await fetch(
      "http://127.0.0.1:8000/api/accounts/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      login(data.username);
      setTimeout(() => {
        nav("/dashboard");
      }, 50);
    } else {
      setError("Wrong credentials");
    }
  }

  return (
    <main style={styles.container}>

      <div style={styles.card}>
        <h1>Welcome Back</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="black-btn">
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don't Have a account? <Link to="/signup">Create</Link>
        </p>
      </div>

    </main>
  );
}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "150px",
    paddingRight: "40px",
    paddingBottom: "40px",
    paddingLeft: "40px",
  },

  card: {
    background: "#111",
    paddingTop: "40px",
    paddingRight: "40px",
    paddingBottom: "40px",
    paddingLeft: "40px",
    borderRadius: "12px",
    width: "360px",
    textAlign: "center",
  },
};
