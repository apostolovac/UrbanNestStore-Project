import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../api/fetchData';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import Navbar from './NavigationBar';

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
        <h1 className="text-center text-3xl font-bold mb-8">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;