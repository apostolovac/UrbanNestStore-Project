import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import shoppingbag from "../assets/shoppingbag.png";
import user from "../assets/user.png";
import heart from "../assets/heart.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex justify-evenly items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <img src={close} alt="Close menu" /> : <img src={menu} alt="Open menu" />}
          </button>
        </div>

        <div className="text-color-blue text-2xl font-medium">UrbanNest</div>
        <ul className="hidden md:flex space-x-10 text-sm justify-between">
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/Home">Home</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/category/jewelery">jewelery</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/category/men's clothing">Men's clothing</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/category/women's clothing">Women's clothing</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/category/electronics">Electronics</Link>
          </li>
          <li className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 text-lg">
          <Link to="#" className="hidden lg:block">
            <img src={search} alt="Search" />
          </Link>
          <Link to="#" className="hidden lg:block">
            <img src={user} alt="User" />
          </Link>
          <div className="relative">
            <img src={shoppingbag} alt="Shopping bag" />
            <span className="absolute -top-2 -right-2 bg-color-blue text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col justify-between h-screen">
          <div className="flex flex-col space-y-2">
            <label className="border rounded-lg border-black flex flex-row h-12 items-center">
              <img src={search} alt="Search icon" className="h-6 pl-3" />
              <input type="text" placeholder="Search" className="border-0" />
            </label>
            <ul>
              <li>
                <Link to="/Home" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/jewellery" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/category/mens-clothing" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Men's clothing
                </Link>
              </li>
              <li>
                <Link to="/category/womens-clothing" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Women's clothing
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-color-gray hover:text-color-blue cursor-pointer text-sm font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-end">
            <ul>
              <li className="border-b-2">
                <Link to="#" className="flex flex-row justify-between space-y-8">
                  Cart <img src={shoppingbag} alt="Shopping bag" />
                </Link>
              </li>
              <li>
                <Link to="#" className="flex flex-row justify-between space-y-8">
                  Wishlist <img src={heart} alt="Wishlist" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;