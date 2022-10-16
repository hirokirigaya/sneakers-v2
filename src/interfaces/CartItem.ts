export interface CartItem {
  id: number;
  slug?: string;
  title?: string;
  image?: {
    id: number;
    url: string;
  }[];
  price?: number;
  quant?: number;
  oldPrice?: number;
  countInStock?: number;
}

export type Item = {
  id: number;
  quant?: number;
  title?: string;
  price?: number;
  images?: any;
  oldPrice?: number;
  slug?: string;
  countInStock?: number;
};