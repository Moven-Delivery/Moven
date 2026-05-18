"use client";

import { useMemo, useState } from "react";
import type { CartItem, CartItemOption } from "@/types/cart";
import type { Product } from "@/types/product";

type AddItemPayload = {
  notes?: string;
  options?: CartItemOption[];
  quantity?: number;
};

function getOptionsPrice(options: CartItemOption[] = []) {
  return options.reduce((total, option) => total + option.price, 0);
}

function getCartItemSignature(product: Product, notes = "", options: CartItemOption[] = []) {
  const optionIds = options.map((option) => option.id).sort().join("-");

  return `${product.id}:${optionIds}:${notes.trim()}`;
}

export function getCartItemUnitPrice(item: CartItem) {
  return item.product.price + getOptionsPrice(item.options);
}

export function getCartItemTotal(item: CartItem) {
  return getCartItemUnitPrice(item) * item.quantity;
}

export function useCart(deliveryFee = 0) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(product: Product, payload: AddItemPayload = {}) {
    const quantity = payload.quantity ?? 1;
    const notes = payload.notes?.trim();
    const options = payload.options ?? [];
    const signature = getCartItemSignature(product, notes, options);

    setItems((currentItems) => {
      const currentItem = currentItems.find((item) => item.id === signature);

      if (!currentItem) {
        return [
          ...currentItems,
          {
            id: signature,
            notes,
            options,
            product,
            quantity,
          },
        ];
      }

      return currentItems.map((item) =>
        item.id === signature ? { ...item, quantity: item.quantity + quantity } : item,
      );
    });
  }

  function incrementItem(itemId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrementItem(itemId: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(itemId: string) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  }

  const summary = useMemo(() => {
    const subtotal = items.reduce((total, item) => total + getCartItemTotal(item), 0);
    const hasItems = items.length > 0;

    return {
      deliveryFee: hasItems ? deliveryFee : 0,
      items,
      subtotal,
      total: subtotal + (hasItems ? deliveryFee : 0),
    };
  }, [deliveryFee, items]);

  return { addItem, decrementItem, incrementItem, items, removeItem, summary };
}
