import type { OrderStatus } from "@/types/order";

export type PanelRole = "owner" | "manager" | "operator" | "support";

export type PanelPermission =
  | "dashboard:view"
  | "orders:manage"
  | "products:manage"
  | "categories:manage"
  | "coupons:manage"
  | "loyalty:manage"
  | "couriers:manage"
  | "customers:view"
  | "reports:view"
  | "settings:manage";

export type PanelNavItem = {
  href: string;
  label: string;
  permission: PanelPermission;
};

export type PanelOrder = {
  channel: string;
  customerName: string;
  id: string;
  items: string;
  number: string;
  status: OrderStatus;
  time: string;
  total: number;
};

export const currentPanelUser = {
  name: "João Freitas",
  role: "owner" satisfies PanelRole,
  storeName: "Pizzaria Bella Massa",
};

export const panelNavItems: PanelNavItem[] = [
  { href: "/painel/dashboard", label: "Dashboard", permission: "dashboard:view" },
  { href: "/painel/pedidos", label: "Pedidos", permission: "orders:manage" },
  { href: "/painel/produtos", label: "Produtos", permission: "products:manage" },
  { href: "/painel/categorias", label: "Categorias", permission: "categories:manage" },
  { href: "/painel/cupons", label: "Cupons", permission: "coupons:manage" },
  { href: "/painel/fidelidade", label: "Fidelidade", permission: "loyalty:manage" },
  { href: "/painel/entregadores", label: "Entregadores", permission: "couriers:manage" },
  { href: "/painel/clientes", label: "Clientes", permission: "customers:view" },
  { href: "/painel/relatorios", label: "Relatórios", permission: "reports:view" },
  { href: "/painel/configuracoes", label: "Configurações", permission: "settings:manage" },
];

export const panelStats = [
  {
    label: "Pedidos hoje",
    value: "48",
    helper: "+12% em relação a ontem",
  },
  {
    label: "Faturamento",
    value: "R$ 2.030,40",
    helper: "Receita estimada do dia",
  },
  {
    label: "Ticket médio",
    value: "R$ 42,30",
    helper: "Média por pedido confirmado",
  },
  {
    label: "Em preparo",
    value: "7",
    helper: "Pedidos em produção agora",
  },
];

export const panelOrders: PanelOrder[] = [
  {
    id: "order-panel-001",
    number: "#2048",
    customerName: "Marina Lopes",
    items: "1x Pizza Margherita, 1x Refrigerante 2L",
    total: 62.8,
    status: "preparando",
    channel: "App Moven",
    time: "12:42",
  },
  {
    id: "order-panel-002",
    number: "#2047",
    customerName: "André Martins",
    items: "1x Calabresa Especial",
    total: 54.9,
    status: "pendente",
    channel: "WhatsApp",
    time: "12:31",
  },
  {
    id: "order-panel-003",
    number: "#2046",
    customerName: "Camila Rocha",
    items: "2x Pizza Margherita",
    total: 99.8,
    status: "saiu_para_entrega",
    channel: "App Moven",
    time: "12:10",
  },
  {
    id: "order-panel-004",
    number: "#2045",
    customerName: "Rafael Souza",
    items: "1x Refrigerante 2L",
    total: 12.9,
    status: "entregue",
    channel: "Balcão",
    time: "11:55",
  },
];

export const panelProducts = [
  {
    id: "product-panel-001",
    category: "Pizzas",
    name: "Pizza Margherita",
    price: 49.9,
    status: "Publicado",
  },
  {
    id: "product-panel-002",
    category: "Pizzas",
    name: "Calabresa Especial",
    price: 54.9,
    status: "Publicado",
  },
  {
    id: "product-panel-003",
    category: "Bebidas",
    name: "Refrigerante 2L",
    price: 12.9,
    status: "Publicado",
  },
  {
    id: "product-panel-004",
    category: "Combos",
    name: "Combo família",
    price: 89.9,
    status: "Rascunho",
  },
];

export const panelCategories = [
  { id: "category-panel-001", name: "Pizzas", products: 14, status: "Ativa" },
  { id: "category-panel-002", name: "Bebidas", products: 8, status: "Ativa" },
  { id: "category-panel-003", name: "Combos", products: 4, status: "Ativa" },
  { id: "category-panel-004", name: "Sobremesas", products: 3, status: "Oculta" },
];

export const panelCustomers = [
  { id: "customer-panel-001", name: "Marina Lopes", orders: 12, total: "R$ 642,70" },
  { id: "customer-panel-002", name: "André Martins", orders: 8, total: "R$ 389,20" },
  { id: "customer-panel-003", name: "Camila Rocha", orders: 6, total: "R$ 274,90" },
  { id: "customer-panel-004", name: "Rafael Souza", orders: 4, total: "R$ 168,40" },
];

export const panelCoupons = [
  { id: "coupon-panel-001", code: "MOVIDA10", discount: "10%", usage: "42 usos", status: "Ativo" },
  { id: "coupon-panel-002", code: "FRETEGRATIS", discount: "Entrega", usage: "18 usos", status: "Ativo" },
  { id: "coupon-panel-003", code: "VOLTEI15", discount: "15%", usage: "7 usos", status: "Pausado" },
];

export const panelCouriers = [
  { id: "courier-panel-001", name: "Lucas Pereira", status: "Disponível", deliveries: 18 },
  { id: "courier-panel-002", name: "Bianca Santos", status: "Em rota", deliveries: 21 },
  { id: "courier-panel-003", name: "Diego Lima", status: "Pausado", deliveries: 9 },
];

export const panelReports = [
  { id: "report-panel-001", label: "Vendas por dia", value: "R$ 14.280", trend: "+9%" },
  { id: "report-panel-002", label: "Produtos mais vendidos", value: "Pizza Margherita", trend: "128 pedidos" },
  { id: "report-panel-003", label: "Horário de pico", value: "19h às 21h", trend: "38% dos pedidos" },
];
