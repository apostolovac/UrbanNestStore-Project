import React from 'react';
import { Product } from '../types/Product';
import { AiFillStar } from 'react-icons/ai';
import heart from "../assets/heart.png"

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {


  return (
    <>
     <div className="w-[275px] h-[500px] min-w-[260px] shadow flex flex-col rounded mb-20 cursor-pointer"
  >
    
      <img
        src={product.image}
        alt={product.title}
        className="h-[326px] w-[290px] object-contain rounded-t-lg"
      />
      
      <div className="flex flex-col justify-between h-[154px] w-[270px] p-5"> 
        <div className="flex justify-between items-start mb-2"> 
          <h2 className="font-medium text-sm flex flex-row">{product.title}</h2>
          <img src={heart} alt="Favorite" className=" h-6 w-6" /> 
        </div>
        
        <div className="flex flex-col justify-items-start mt-auto">
        <p className="font-normal text-xs mb-2">{`Price: $${product.price}`}</p> 
          <div className="flex items-center">
          
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`h-5 w-5 ${i < Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
            <span className="font-normal text-xs text-color-gray pl-2.5">({product.rating.count})</span>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;