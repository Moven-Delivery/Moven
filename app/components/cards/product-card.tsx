"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductCard({
  onSelect,
  product,
}: {
  onSelect?: (product: Product) => void;
  product: Product;
}) {
  return (
    <article className="grid grid-cols-[104px_1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-red-200 sm:grid-cols-[140px_1fr]">
      <button
        aria-label={`Ver detalhes de ${product.name}`}
        className="relative min-h-28 overflow-hidden rounded-xl bg-slate-100 sm:min-h-36"
        onClick={() => onSelect?.(product)}
        type="button"
      >
        <Image
          alt={product.name}
          className="object-cover transition duration-500 hover:scale-[1.03]"
          fill
          sizes="(min-width: 640px) 140px, 104px"
          src={product.image}
        />
      </button>
      <div className="flex min-w-0 flex-col justify-between gap-3">
        <button className="text-left" onClick={() => onSelect?.(product)} type="button">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-dark sm:text-lg">{product.name}</h3>
            {product.featured ? (
              <span className="rounded-full bg-yellow-50 px-2.5 py-1 text-[11px] font-bold text-yellow-700 ring-1 ring-yellow-200">
                Destaque
              </span>
            ) : null}
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">{product.description}</p>
        </button>
        <div className="flex items-center justify-between gap-3">
          <strong className="text-lg text-primary">{formatCurrency(product.price)}</strong>
          <Button onClick={() => onSelect?.(product)} size="sm" type="button">
            <Plus aria-hidden className="h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
