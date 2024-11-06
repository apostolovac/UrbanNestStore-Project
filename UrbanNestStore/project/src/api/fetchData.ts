const API_BASE_URL = import.meta.env.VITE_FAKESTORE_API_URL;

export const fetchCategory = async (category: string) => {
  const response = await fetch(`${API_BASE_URL}/category/${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};