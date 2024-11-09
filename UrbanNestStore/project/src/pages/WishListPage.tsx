import React from 'react';
import { useStore } from '../store/useStore';
import ProductCard  from '../components/ProductCard';
import Navbar from '../components/NavigationBar';
import Footer from '../components/Footer';

const WishlistPage: React.FC = () => {
  const { wishlist } = useStore();

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl min-h-[400px] mx-auto p-5">
      <h1 className="text-5xl font-medium text-center my-12">Your Wishlist</h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[1183px] mx-auto">
        {wishlist.length === 0 ? (
          <p>No items in your wishlist.</p>
        ) : (
          wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default WishlistPage;