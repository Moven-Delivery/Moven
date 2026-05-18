"use client";

import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { getCartItemTotal } from "@/lib/hooks/use-cart";
import type { CartItem, CartSummary } from "@/types/cart";

export function MobileCartBar({
  checkoutHref,
  items,
  onDecrement,
  onIncrement,
  summary,
}: {
  checkoutHref: string;
  items: CartItem[];
  onDecrement: (itemId: string) => void;
  onIncrement: (itemId: string) => void;
  summary: CartSummary;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <button
        className="fixed inset-x-4 bottom-4 z-40 inline-flex h-14 items-center justify-between rounded-full bg-primary px-5 text-base font-bold text-white shadow-[0_16px_40px_rgba(220,38,38,0.28)] transition active:scale-[0.98] lg:hidden"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="inline-flex items-center gap-2">
          <ShoppingCart aria-hidden className="h-5 w-5" />
          Ver carrinho
        </span>
        <span>{itemCount} itens • {formatCurrency(summary.total)}</span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Fechar carrinho"
            className="absolute inset-0 bg-dark/45"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <section
            aria-labelledby="mobile-cart-title"
            aria-modal="true"
            className="absolute inset-x-0 bottom-0 max-h-[86svh] overflow-y-auto rounded-t-[2rem] bg-white p-5 shadow-[0_-16px_50px_rgba(15,23,42,0.18)]"
            role="dialog"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Carrinho
                </p>
                <h2 className="mt-1 text-2xl font-bold text-dark" id="mobile-cart-title">
                  Seu pedido
                </h2>
              </div>
              <button
                aria-label="Fechar carrinho"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {items.map((item) => (
                <article className="rounded-2xl border border-slate-100 p-3" key={item.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-dark">{item.product.name}</p>
                      {item.options?.length ? (
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.options.map((option) => option.name).join(", ")}
                        </p>
                      ) : null}
                      {item.notes ? (
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.notes}</p>
                      ) : null}
                    </div>
                    <strong className="text-primary">{formatCurrency(getCartItemTotal(item))}</strong>
                  </div>

                  <div className="mt-3 flex h-9 w-max items-center rounded-full border border-slate-200">
                    <button
                      aria-label="Diminuir quantidade"
                      className="flex h-9 w-9 items-center justify-center text-slate-600"
                      onClick={() => onDecrement(item.id)}
                      type="button"
                    >
                      <Minus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                    <strong className="min-w-7 text-center text-sm text-dark">{item.quantity}</strong>
                    <button
                      aria-label="Aumentar quantidade"
                      className="flex h-9 w-9 items-center justify-center text-slate-600"
                      onClick={() => onIncrement(item.id)}
                      type="button"
                    >
                      <Plus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <strong>{formatCurrency(summary.subtotal)}</strong>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Entrega</span>
                <strong>{formatCurrency(summary.deliveryFee)}</strong>
              </div>
              <div className="flex justify-between text-lg font-bold text-dark">
                <span>Total</span>
                <strong>{formatCurrency(summary.total)}</strong>
              </div>
            </div>

            <ButtonLink className="mt-5 w-full" href={checkoutHref}>
              Ir para checkout
            </ButtonLink>
          </section>
        </div>
      ) : null}
    </>
  );
}
