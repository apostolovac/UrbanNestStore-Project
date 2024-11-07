import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store/useStore";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import shoppingbag from "../assets/shoppingbag.png";
import user from "../assets/user.png";
import heart from "../assets/heart.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  
  const { items } = useStore();
  
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const isActiveLink = (path: string) => {
    const currentPath = location.pathname.replace(/%20/g, ' ');
    return currentPath === path;
  };

  return (
    <nav className="bg-color-white py-2 px-4">
      <div className="flex justify-evenly items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <img src={close} alt="Close menu" /> : <img src={menu} alt="Open menu" />}
          </button>
        </div>

        <div className="text-color-blue text-2xl font-medium">UrbanNest</div>
        <ul className="hidden md:flex space-x-10 text-sm justify-between">
          <li className={`${isActiveLink("/Home") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/Home">Home</Link>
          </li>
          <li className={`${isActiveLink("/category/jewelery") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/category/jewelery">Jewelery</Link>
          </li>
          <li className={`${isActiveLink("/category/men's clothing") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/category/men's clothing">Men's Clothing</Link>
          </li>
          <li className={`${isActiveLink("/category/women's clothing") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/category/women's clothing">Women's Clothing</Link>
          </li>
          <li className={`${isActiveLink("/category/electronics") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/category/electronics">Electronics</Link>
          </li>
          <li className={`${isActiveLink("/contact-us") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 text-lg gap-4">
          <Link to="#" className="hidden lg:block">
            <img src={search} alt="Search" />
          </Link>
          <Link to="/profile" className="hidden lg:block">
            <img src={user} alt="User" />
          </Link>
          <div className={`${isOpen ? 'hidden' : 'block'} lg:block relative`}>
            <Link to="/cart">
              <img src={shoppingbag} alt="Shopping bag" />
  
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-color-blue text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
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
                <Link to="/Home" className={`${isActiveLink("/Home") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/jewelery" className={`${isActiveLink("/category/jewelery") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/category/men's clothing" className={`${isActiveLink("/category/men's clothing") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/women's clothing" className={`${isActiveLink("/category/women's clothing") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className={`${isActiveLink("/category/electronics") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={`${isActiveLink("/contact-us") ? "text-color-blue" : "text-color-gray"} cursor-pointer text-sm font-medium`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-end">
            <ul>
            <li className="border-b-2">
          <Link to="/cart" className="flex flex-row justify-between space-y-8">
            Cart 
            <div className="relative">
              <img src={shoppingbag} alt="Shopping bag" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-color-blue text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </div>
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