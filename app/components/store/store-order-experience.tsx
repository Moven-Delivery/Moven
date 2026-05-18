"use client";

import { useState } from "react";
import { ProductCard } from "@/components/cards/product-card";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import { MobileCartBar } from "@/components/cart/mobile-cart-bar";
import { ProductModal } from "@/components/store/product-modal";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import type { CartItemOption } from "@/types/cart";
import type { Product } from "@/types/product";
import type { Store } from "@/types/store";

export function StoreOrderExperience({ store }: { store: Store }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem, decrementItem, incrementItem, items, removeItem, summary } = useCart(
    store.deliveryFee,
  );
  const checkoutHref = `/${store.slug}/checkout`;

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="min-w-0">
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
            {store.categories.map((category, index) => (
              <a
                className={
                  index === 0
                    ? "min-w-max rounded-full bg-primary px-4 py-2 text-sm font-bold text-white"
                    : "min-w-max rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 ring-1 ring-slate-200 transition hover:text-primary hover:ring-red-200"
                }
                href={`#${category.id}`}
                key={category.id}
              >
                {category.name}
              </a>
            ))}
          </div>

          <div className="mb-6 grid gap-3 rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Pedido mínimo
              </p>
              <strong className="mt-1 block text-dark">{formatCurrency(store.minimumOrder)}</strong>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Entrega
              </p>
              <strong className="mt-1 block text-dark">{formatCurrency(store.deliveryFee)}</strong>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Status
              </p>
              <Badge className="mt-1" variant={store.isOpen ? "success" : "danger"}>
                {store.isOpen ? "Aceitando pedidos" : "Fora do horário"}
              </Badge>
            </div>
          </div>

          <div className="space-y-10">
            {store.categories.map((category) => {
              const products = store.products.filter((product) => product.categoryId === category.id);

              return (
                <section id={category.id} key={category.id}>
                  <h2 className="mb-4 text-2xl font-bold text-dark">{category.name}</h2>
                  <div className="grid gap-4">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        onSelect={setSelectedProduct}
                        product={product}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <CartSidebar
          checkoutHref={checkoutHref}
          items={items}
          onDecrement={decrementItem}
          onIncrement={incrementItem}
          onRemove={removeItem}
          summary={summary}
        />
      </section>

      <MobileCartBar
        checkoutHref={checkoutHref}
        items={items}
        onDecrement={decrementItem}
        onIncrement={incrementItem}
        summary={summary}
      />

      <ProductModal
        isOpen={Boolean(selectedProduct)}
        onAdd={({ notes, options, product, quantity }) =>
          addItem(product, {
            notes,
            options: options as CartItemOption[],
            quantity,
          })
        }
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </>
  );
}
