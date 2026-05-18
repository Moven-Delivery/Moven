import type { Product } from "./product";

export interface CartItemOption {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  notes?: string;
  options?: CartItemOption[];
}

export interface CartSummary {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}
