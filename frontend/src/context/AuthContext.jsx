import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  function signup(username, email, password){

    if(!username || !email || !password) return false;

    const newUser = { username, email, password };

    localStorage.setItem("travelUser", JSON.stringify(newUser));

    return true;
  }


  function login(username, password){

    const saved = localStorage.getItem("travelUser");

    if(!saved) return false;

    const parsed = JSON.parse(saved);

    if(parsed.username === username && parsed.password === password){
      setUser({ username: parsed.username });
      return true;
    }

    return false;
  }


  function logout(){
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
