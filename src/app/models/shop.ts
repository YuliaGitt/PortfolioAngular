export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Cart {
  id: number;
  user: string;
  product: string;
  quantity: number;
}
