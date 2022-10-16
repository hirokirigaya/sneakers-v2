export interface Product {
  id: string;
  name: string;
  description: string;
  sumary: string;
  price: number;
  oldPrice: number;
  sizes: number[];
  countInStock: number;
  slug: string;
  images: {
    id: string;
    url: string;
  }[];
}