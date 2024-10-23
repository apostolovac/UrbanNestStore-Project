import React from "react";
import {useAuthStore} from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state)=> state.logout)

  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            onClick={() => {
              logout();
              navigate("/"); 
            }}
            className="font-extrabold"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p>You are not Signed in.</p>
      )}
    </>
  );
};

export default Home;