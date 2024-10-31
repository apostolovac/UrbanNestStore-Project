import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import logo from "../assets/logo.png"
import logosm from "../assets/logosm.png"

const Footer: React.FC = () => {
    return (
        <footer className="max-w-[1440px] h-auto mx-auto px-8 py-12 lg:p-[80px_160px_32px_160px] bg-color-black">
          <div className="flex flex-col items-center gap-5">
            <img src={logo} alt="Brand Logo" className="hidden md:block mx-auto" />
            <img src={logosm} alt="Brand Logo" className="md:hidden mx-auto" />
      
            <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-color-gray py-2">
              <div className="flex space-x-4 pt-3 md:pt-0 justify-center md:order-2">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                <img src={youtube} alt="YouTube" className="w-6 h-6" />
              </div>
      
              <div className="flex flex-col md:flex-row items-start w-full">
                <h1 className="font-normal text-xs text-color-white pt-3 md:pt-0 md:mr-4">
                  Copyright © 2024
                  <span className="font-bold text-color-blue"> UrbanNest.</span> All rights reserved
                </h1>
      
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-normal text-xs text-color-white pt-3 md:pt-0 md:mr-4">Privacy Policy</span>
                  <span className="font-normal text-xs text-color-white pt-3 md:pt-0 md:mr-4">Terms of Use</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
};

export default Footer;