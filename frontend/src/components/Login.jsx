import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e){
    e.preventDefault();

    if(!username.trim() || !password.trim()){
      setError("All fields required.");
      return;
    }

    const success = login(username, password);

    if(success){
      nav("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div style={page}>

      <div style={card}>
        <h1>Welcome Back</h1>

        {error && <p style={{color:"red"}}>{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
          />

          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />

          <button className="black-btn">
            Login
          </button>

        </form>

        <p style={{marginTop:"15px"}}>
          Don’t have an account? <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

const page = {
  display:"flex",
  height:"100vh",
  justifyContent:"center",
  alignItems:"center",
  background:"#000"
};

const card = {
  background:"#111",
  width:"350px",
  padding:"40px",
  borderRadius:"10px",
  textAlign:"center"
};
