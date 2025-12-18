import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div style={styles.nav}>
      
      <button
        style={styles.btnLeft}
        onClick={() => nav("/profile")}
      >
        Profile
      </button>

      <div style={styles.centerText}>
        Logged in as {user.username}
      </div>

      <button style={styles.btnRight} onClick={() => {
        logout();
        nav("/");
      }}>
        Logout
      </button>

    </div>
  );
}

const styles = {
  nav:{
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    padding:"18px",
    borderBottom:"1px solid #222",
    background:"#111",
    alignItems:"center"
  },

  btnLeft:{
    background:"transparent",
    color:"white",
    border:"1px solid white",
    padding:"8px 14px",
    borderRadius:"8px",
    cursor:"pointer"
  },

  centerText:{
    fontWeight:"600"
  },

  btnRight:{
    background:"white",
    color:"black",
    padding:"8px 14px",
    borderRadius:"8px",
    cursor:"pointer",
    border:"none"
  }
};
