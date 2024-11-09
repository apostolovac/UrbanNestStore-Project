import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import ImageSlider from "../components/SliderSection";
import BannerGrid from "../components/BannerGridSection";
import ProductSection from "../components/ProductSection";
import { Product } from "../types/Product";
import { fetchCategory } from "../api/fetchData";
import imagesection from "../assets/imagesection.png";
import shoparrow from "../assets/shoparrow.png";
import Footer from "../components/Footer";
import NewsletterSection from "../components/Subscribe";
import ServiceSection from "../components/ServiceSection";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch "Women's Clothing" category
    fetchCategory("women's clothing")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  return (
    <>
      <Navbar />
      <ImageSlider />
      <BannerGrid />
      <ProductSection products={products.slice(0, 4)} />
      <ServiceSection />
      <section className="mt-12 hidden md:block">
        <div className="flex max-w-[1440px] h-[500px] mx-auto">
          <div className="w-[771px] h-full">
            <img
              src={imagesection}
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-l"
            />
          </div>

          <div className="flex flex-col justify-center flex-1 p-8 bg-color-grayish">
            <h2 className="font-bold text-base text-color-blue mb-4">
              SALE UP TO 35% OFF
            </h2>
            <p className="font-medium text-5xl mb-6">
              Hundreds of Deals, Unbeatable New Prices!
            </p>
            <p className="text-xl text-bold">
              Fashion Forward: Make a Statement Without{" "}
              <span className="text-color-blue">Breaking</span> the{" "}
              <span className="text-color-blue">Bank!</span>
            </p>
            <Link
              to="/category/men's clothing"
              className="mt-8 text-color-black border-b border-black text-2xl font-medium flex items-center w-40"
            >
              Shop Now <img src={shoparrow} className="ml-2" alt="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;