import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import search from "../assets/search.png"
import shoppingbag from "../assets/shoppingbag.png"
import user from "../assets/user.png"
import heart from "../assets/heart.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  py-2 px-4">
      <div className="flex justify-evenly items-center">
        {/* Left side: Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <img src={close} /> : <img src={menu} />}
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="text-color-blue text-2xl font-medium">
          UrbanNest
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex space-x-10 text-sm justify-between">
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/Home">Home</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/jewellery">Jewellery</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/mens-clothing">Men's clothing</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/womens-clothing">Women's clothing</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/electronics">Electronics</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-2 text-lg">
          <Link to="#" className="hidden lg:block"><img src={search} /></Link>
          <Link to="#" className="hidden lg:block"><img src={user} /></Link>
          <div className="relative">
          <img src={shoppingbag} />
            <span className="absolute -top-2 -right-2 bg-color-blue text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">3</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col justify-between h-screen">
          
          <div className="flex flex-col space-y-2">
            <label className=" border rounded-lg border-black flex flex-row h-12 items-center"><img src={search} className="h-6 pl-3"></img>
        <input type="text" placeholder="Search" className="border-0"/>  </label>
          <ul >
            <li> 
              <Link to="/Home" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">Home</Link>
            </li>
            <li>
              <Link to="/jewellery" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium" >Jewellery</Link>
            </li>
            <li>
              <Link to="/mens-clothing" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">Men's clothing</Link>
            </li>
            <li>
              <Link to="/womens-clothing" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">Women's clothing</Link>
            </li>
            <li>
              <Link to="/electronics" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">Electronics</Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">Contact Us</Link>
            </li>
          </ul>
          </div>
          <div className="items-end">
            <ul>
              <li className="border-b-2 ">
                <Link to="#" className="flex flex-row justify-between space-y-8" >Cart <img src={shoppingbag}></img></Link>
              </li>
              <li>
                <Link to="#" className="flex flex-row justify-between space-y-8" >Wishlist <img src={heart}></img></Link>
              </li>
            </ul>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;