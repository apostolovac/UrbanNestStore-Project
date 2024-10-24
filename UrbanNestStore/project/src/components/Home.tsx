import React from "react";
import {useAuthStore} from "../store/useAuthStore";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavigationBar";
import ImageSlider from "./SliderSection"
import BannerGrid from "./BannerGridSection"

const Home: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const Signout = useAuthStore((state)=> state.Signout)

  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <ImageSlider/>
    <BannerGrid/>
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
      <Outlet />
    </>
  );
};

export default Home;