import type { CartSummary } from "@/types/cart";

export function calculateCartSummary(subtotal: number, deliveryFee: number): CartSummary {
  return {
    items: [],
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
  };
}
