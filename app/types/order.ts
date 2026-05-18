export type OrderStatus =
  | "pendente"
  | "preparando"
  | "saiu_para_entrega"
  | "entregue"
  | "cancelado";

export interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  number: string;
  storeId: string;
  storeName: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  items: OrderItem[];
}
