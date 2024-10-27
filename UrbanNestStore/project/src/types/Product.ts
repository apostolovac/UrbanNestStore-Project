export interface Product {
    description: string;
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }