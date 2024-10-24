export const fetchCategory = async (category: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};