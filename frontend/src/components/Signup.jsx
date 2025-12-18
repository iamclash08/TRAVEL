import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup(){

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { signup } = useAuth();

  function handleSignup(e){
    e.preventDefault();

    if(!username.trim() || !email.trim() || !password.trim()){
      setError("All fields required");
      return;
    }

    const success = signup(username, email, password);

    if(success){
      nav("/");
    } else {
      setError("Signup failed");
    }
  }

  return (
    <div style={page}>

      <div style={card}>
        <h1>Create Account</h1>

        {error && <p style={{color:"red"}}>{error}</p>}

        <form onSubmit={handleSignup}>

          <input
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />

          <button className="black-btn">
            Signup
          </button>

        </form>

        <p style={{marginTop:"15px"}}>
          Already have account? <Link to="/">Login</Link>
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
