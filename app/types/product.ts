export type ProductAvailability = "disponivel" | "indisponivel";

export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  availability: ProductAvailability;
}
