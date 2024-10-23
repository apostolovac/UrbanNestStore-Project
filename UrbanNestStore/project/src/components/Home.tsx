import React from "react";
import {useAuthStore} from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavigationBar";


const Home: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const Signout = useAuthStore((state)=> state.Signout)

  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
      <h1>Home</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            onClick={() => {
              Signout();
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