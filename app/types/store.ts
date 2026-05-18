import type { ProductCategory, StoreCategory } from "./category";
import type { Product } from "./product";

export interface Store {
  id: string;
  name: string;
  slug: string;
  description: string;
  banner: string;
  logo: string;
  category: StoreCategory;
  deliveryFee: number;
  deliveryTime: string;
  rating: number;
  isOpen: boolean;
  neighborhood: string;
  minimumOrder: number;
  categories: ProductCategory[];
  products: Product[];
}
