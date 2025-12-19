import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

  const savedUser = localStorage.getItem("travel_user");

  const [user, setUser] = useState(
    savedUser ? JSON.parse(savedUser) : null
  );

  function login(username) {
    setUser({ username });  
    localStorage.setItem(
      "travel_user",
      JSON.stringify({ username })
    );
  }

  function logout(){
    setUser(null);
    localStorage.removeItem("travel_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
