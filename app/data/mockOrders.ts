import type { Order } from "@/types/order";

export const mockOrders: Order[] = [
  {
    id: "order-001",
    number: "#1024",
    storeId: "store-burger-house",
    storeName: "Burger House",
    customerName: "Marina Lopes",
    total: 74.7,
    status: "preparando",
    createdAt: "2026-05-18T11:20:00.000Z",
    items: [
      { id: "item-001", productName: "Duplo Bacon", quantity: 1, unitPrice: 38.9 },
      { id: "item-002", productName: "Combo Smash", quantity: 1, unitPrice: 34.9 },
    ],
  },
  {
    id: "order-002",
    number: "#1023",
    storeId: "store-bella-massa",
    storeName: "Pizzaria Bella Massa",
    customerName: "André Martins",
    total: 61.8,
    status: "pendente",
    createdAt: "2026-05-18T10:58:00.000Z",
    items: [
      { id: "item-003", productName: "Calabresa Especial", quantity: 1, unitPrice: 54.9 },
      { id: "item-004", productName: "Refrigerante 2L", quantity: 1, unitPrice: 12.9 },
    ],
  },
  {
    id: "order-003",
    number: "#1022",
    storeId: "store-acai-tropical",
    storeName: "Açaí Tropical",
    customerName: "Camila Rocha",
    total: 37.8,
    status: "saiu_para_entrega",
    createdAt: "2026-05-18T10:35:00.000Z",
    items: [
      { id: "item-005", productName: "Açaí Tropical 500 ml", quantity: 1, unitPrice: 24.9 },
      { id: "item-006", productName: "Vitamina de Morango", quantity: 1, unitPrice: 17.9 },
    ],
  },
  {
    id: "order-004",
    number: "#1021",
    storeId: "store-marmitaria-caseira",
    storeName: "Marmitaria Caseira",
    customerName: "Rafael Souza",
    total: 26.8,
    status: "entregue",
    createdAt: "2026-05-18T09:42:00.000Z",
    items: [
      { id: "item-007", productName: "Marmita Executiva", quantity: 1, unitPrice: 22.9 },
    ],
  },
];
