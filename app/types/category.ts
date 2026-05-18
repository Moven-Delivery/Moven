export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
}

export type StoreCategory =
  | "Hamburgueria"
  | "Pizzaria"
  | "Açaí"
  | "Marmitaria"
  | "Lanchonete"
  | "Restaurante";
