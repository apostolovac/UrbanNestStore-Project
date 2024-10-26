import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';
import shoparrow from "../assets/shoparrow.png"
import { Link } from 'react-router-dom';

interface ProductSectionProps {
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {

  return (
    <div className="max-w-[1120px] mx-auto mt-12">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl font-medium">New <br/>Arrivals</h1>
        <button
          className="text-color-black border-b border-black text-base font-medium  w-40"
        > <Link to="/category/women's clothing" className='flex items-center w-40'>More Products <img src={shoparrow} className="ml-2" alt="arrow" /></Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;