import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import logo from "../assets/logo.png"

const Footer: React.FC = () => {
    return (
        <footer className="max-w-[1440px] h-auto mx-auto p-[80px_160px_32px_160px] bg-color-black">
            <div className="flex flex-col items-center gap-5">
                <img src={logo} alt="Brand Logo" className="mx-auto" />

                <div className="flex justify-between items-center w-full border-t border-slate-600 pb-4">
                    <h1 className="font-normal text-xs text-color-white pt-3">Copyright © 2024 <span className='font-bold text-color-blue'>UrbanNest.</span> All rights reserved <span className='font-semibold pl-7'>Privacy Policy</span> <span className='font-semibold pl-7'>Terms of Use</span></h1>
                    <div className="flex space-x-4 pt-3">
                        <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                        <img src={youtube} alt="YouTube" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;