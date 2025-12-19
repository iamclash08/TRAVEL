import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const { user, logout } = useAuth();
  const nav = useNavigate();

  const baseButton = {
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
    transition: "0.3s",
  };

  return (
    <nav style={styles.nav}>

      <button
        style={styles.btnLeft}
        onClick={() => nav("/profile")}
      >
        Profile
      </button>

      <div style={styles.centerText}>
        Logged in as {user.username}
      </div>

      <button
        style={styles.btnRight}
        onClick={() => {
          logout();
          nav("/");
        }}
      >
        Logout
      </button>

    </nav>
  );
}

const styles = {

  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 80px",
    background: "#111",
    borderBottom: "1px solid #222",
  },

  btnLeft: {
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
  },

  centerText: {
    fontWeight: "700",
    fontSize: "16px",
    textAlign: "center",
    flex: 1,
  },

  btnRight: {
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
  },
};
