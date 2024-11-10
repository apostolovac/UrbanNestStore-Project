import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { AiFillStar } from 'react-icons/ai';
import heart from "../assets/heart.png";
import filledheart from "../assets/filledheart.png";
import { useStore } from "../store/useStore";
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const { wishlist, addToWishlist, removeFromWishlist } = useStore();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const navigate = useNavigate();

  //  Navigates to product page
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(wishlist.some((item) => item.id === product.id));
  }, [wishlist, product.id]);

  return (
    <div className="w-[275px] h-[500px] min-w-[260px] shadow flex flex-col rounded mb-20 cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        onClick={handleClick}
        className="h-[326px] w-[290px] object-contain rounded-t-lg"
      />
      <div className="flex flex-col justify-between h-[154px] w-[270px] p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-medium text-sm flex flex-row">{product.title}</h2>
          <img
            src={isFavorite ? filledheart : heart}
            alt="Favorite"
            className="h-6 w-6 cursor-pointer"
            onClick={handleFavoriteToggle}
          />
        </div>
        <div className="flex flex-col justify-items-start mt-auto">
          <p className="font-normal text-xs mb-2">{`Price: $${product.price}`}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <AiFillStar
                key={index}
                className={`h-5 w-5 ${index < Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
            <span className="font-normal text-xs text-color-gray pl-2.5">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;