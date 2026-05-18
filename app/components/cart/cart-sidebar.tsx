"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { getCartItemTotal, getCartItemUnitPrice } from "@/lib/hooks/use-cart";
import type { CartItem, CartSummary } from "@/types/cart";

export function CartSidebar({
  checkoutHref,
  items,
  onDecrement,
  onIncrement,
  onRemove,
  summary,
}: {
  checkoutHref: string;
  items: CartItem[];
  onDecrement: (itemId: string) => void;
  onIncrement: (itemId: string) => void;
  onRemove: (itemId: string) => void;
  summary: CartSummary;
}) {
  return (
    <aside
      className="sticky top-24 hidden h-max rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:block"
      id="carrinho"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Carrinho</p>
          <h2 className="mt-1 text-xl font-bold text-dark">Seu pedido</h2>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-primary">
          <ShoppingBag aria-hidden className="h-5 w-5" />
        </span>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
            <ShoppingBag aria-hidden className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-bold text-dark">Seu carrinho está vazio</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Escolha um item do cardápio para montar seu pedido.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <article className="rounded-2xl border border-slate-100 p-3" key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-dark">{item.product.name}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {formatCurrency(getCartItemUnitPrice(item))} cada
                    </p>
                  </div>
                  <button
                    aria-label={`Remover ${item.product.name}`}
                    className="text-slate-300 transition hover:text-primary"
                    onClick={() => onRemove(item.id)}
                    type="button"
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </button>
                </div>

                {item.options?.length ? (
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.options.map((option) => option.name).join(", ")}
                  </p>
                ) : null}
                {item.notes ? <p className="mt-2 text-xs leading-5 text-slate-500">{item.notes}</p> : null}

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex h-9 items-center rounded-full border border-slate-200">
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
                  <strong className="text-primary">{formatCurrency(getCartItemTotal(item))}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
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

          <ButtonLink className="mt-6 w-full" href={checkoutHref}>
            Ir para checkout
          </ButtonLink>
        </>
      )}
    </aside>
  );
}
