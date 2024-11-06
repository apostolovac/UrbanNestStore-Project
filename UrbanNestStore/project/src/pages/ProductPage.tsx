import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';
import heart from "../assets/heart.png";
import Navbar from '../components/NavigationBar';
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import cardwithplus from "../assets/cardwithplus.png";
import { useStore } from '../store/useStore';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null); // Track selected size
  const navigate = useNavigate();

  const { addItem } = useStore();

  const handleAddToCart = () => {
    if (product && selectedSize !== null) {
      addItem(product, count, selectedSize);
      navigate("/cart");
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] h-[1027px] p-4 mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div className="flex justify-center w-full md:w-[617px] h-[800px]">
          <img src={product.image} alt={product.title} className="w-[493px] h-[800px] object-contain" />
        </div>

        <div className="flex flex-col justify-center w-full md:w-[617px] h-[700px]">
          <h1 className="text-3xl font-medium">{product.title}</h1>
          <p className="text-xl font-semibold mt-2 mb-4">Price: ${product.price}</p>
          <p className="text-base mb-4 flex items-start">
            <span className='text-xl font-medium'>Description: <span className='text-sm '>{product.description}</span></span>
            <img src={heart} alt="Favorite" className="ml-2 h-6 w-6" />
          </p>

          <div className="flex items-center gap-2 my-4">
            <p className="text-base font-normal mr-10">Size:</p>
            {[40, 41, 42, 43, 44].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-8 border rounded ${selectedSize === size ? 'bg-gray-300' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center my-4">
            <p className='text-base font-normal mr-3'>Quantity</p>
            <button 
              onClick={() => setCount(count > 1 ? count - 1 : 1)} 
              className="border-y border-l rounded-l p-2"
            >
              <img src={minus} alt="Decrease quantity" />
            </button>
            <span className="border-y h-[39px] pt-2 px-2">{count}</span>
            <button 
              onClick={() => setCount(count + 1)} 
              className="border-y border-r rounded-r p-2"
            >
              <img src={plus} alt="Increase quantity" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="w-full md:w-[268px] h-14 bg-color-blue text-white rounded uppercase">Buy Now</button>
            <button onClick={handleAddToCart} className="w-full md:w-[268px] h-14 bg-color-white border border-color-blue rounded flex flex-row justify-center items-center uppercase text-color-gray">
              <img src={cardwithplus} className='mr-5' alt="Add to cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;