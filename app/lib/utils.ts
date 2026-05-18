import type { OrderStatus } from "@/types/order";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function getOrderStatusLabel(status: OrderStatus) {
  const labels: Record<OrderStatus, string> = {
    pendente: "Pendente",
    preparando: "Preparando",
    saiu_para_entrega: "Saiu para entrega",
    entregue: "Entregue",
    cancelado: "Cancelado",
  };

  return labels[status];
}

export function getOrderStatusClass(status: OrderStatus) {
  const classes: Record<OrderStatus, string> = {
    pendente: "bg-amber-50 text-amber-700 ring-amber-200",
    preparando: "bg-orange-50 text-orange-700 ring-orange-200",
    saiu_para_entrega: "bg-blue-50 text-blue-700 ring-blue-200",
    entregue: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    cancelado: "bg-red-50 text-red-700 ring-red-200",
  };

  return classes[status];
}
