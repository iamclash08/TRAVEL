import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    setError("");

    if(!username || !email || !password){
      setError("Fields required");
      return;
    }

    const response = await fetch(
      "http://127.0.0.1:8000/api/accounts/register/",
      {
        method:"POST",
        headers: { "Content-Type":"application/json" },
        body:JSON.stringify({ username, email, password })
      }
    );

    if(response.ok){
      nav("/");
    } else {
      setError("Signup failed");
    }
  }

  return (
    <main style={styles.container}>

      <div style={styles.card}>
        <h1>Create Account</h1>

        {error && <p style={{ color:"red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="black-btn">
            Signup
          </button>

        </form>

        <p style={{ marginTop:"15px" }}>
          Already have account? <Link to="/">Login</Link>
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

  card:{
    background:"#111",
    padding:"40px",
    borderRadius:"12px",
    width:"360px",
    textAlign:"center",
  }
};
