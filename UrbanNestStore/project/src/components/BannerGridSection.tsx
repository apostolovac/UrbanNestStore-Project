import { Link } from "react-router-dom";
import jewelry from "../assets/jewelery.png";
import mensclothing from "../assets/mansclothing.png";
import womensclothing from "../assets/womensclothing.png";
import shoparrow from "../assets/shoparrow.png"

const BannerGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1120px] mx-auto mt-10">
          <div className="relative h-[579px]">
            <img src={jewelry} alt="Jewelry" className="w-full h-full object-cover" />
            <div className="absolute top-12 left-12  text-white">
              <h2 className="text-5xl font-medium text-color-black">Jewelry</h2>
              <Link
                to="/category/jewelery"
                className="mt-2 text-color-black border-b border-black text-2xl font-medium flex items-center w-40"> 
                Shop Now <img src={shoparrow} className="ml-2" alt="arrow" />
              </Link>
            </div>
          </div>
    

          <div className="grid grid-rows-2 gap-4 h-[579px]">
            <div className="relative h-full">
              <img
                src={mensclothing}
                alt="Men's Clothing"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-8 text-white">
                <h2 className="text-4xl font-medium text-color-black">Men's Clothing</h2>
                <Link
                  to="/category/men's clothing"
                  className="mt-2 text-color-black border-b border-black text-2xl font-medium flex items-center w-40">
                  Shop Now <img src={shoparrow} className="ml-2" alt="arrow" />
                </Link>
              </div>
            </div>
    
            <div className="relative h-full">
              <img
                src={womensclothing}
                alt="women's clothing"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-8 text-white">
                <h2 className="text-4xl font-medium text-color-black">Women's Clothing</h2>
                <Link
                  to="/category/women's clothing"
                  className="mt-2 text-color-black border-b border-black text-2xl font-medium flex items-center w-40">
                  Shop Now <img src={shoparrow} className="ml-2" alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
  export default BannerGrid;