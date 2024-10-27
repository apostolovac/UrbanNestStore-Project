import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCategory } from '../api/fetchData';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import Navbar from './NavigationBar';
import Footer from './Footer';
import Subscribe from './Subscribe';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (category) {
      fetchCategory(category)
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => console.error(error));
    } else {
      setLoading(false);
    }
  }, [category]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!category) {
    return <div className="text-center">Category not found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center text-6xl font-medium text-color-gray my-24">
        {category && category[0].toUpperCase() + category.slice(1)}
        </h1>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[1183px] mx-auto">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
))}
        </div>
      </div>
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default CategoryPage;