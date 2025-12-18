import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

export default function Profile(){

  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <div style={{padding:"40px"}}>
        <h1>Profile</h1>

        <h3>Username: {user.username}</h3>
      </div>
    </>
  )
}
