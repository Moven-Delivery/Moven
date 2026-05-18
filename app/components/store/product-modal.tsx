"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { CartItemOption } from "@/types/cart";
import type { Product } from "@/types/product";

type ProductOption = CartItemOption;

type ProductOptionGroup = {
  id: string;
  maxSelected: number;
  options: ProductOption[];
  title: string;
};

const productOptionGroups: ProductOptionGroup[] = [
  {
    id: "adicionais",
    maxSelected: 3,
    title: "Adicionais",
    options: [
      { id: "molho-extra", name: "Molho extra", price: 2.9 },
      { id: "queijo-extra", name: "Queijo extra", price: 4.9 },
      { id: "embalagem-premium", name: "Embalagem premium", price: 1.9 },
    ],
  },
  {
    id: "preferencias",
    maxSelected: 1,
    title: "Preferência",
    options: [
      { id: "sem-cebola", name: "Sem cebola", price: 0 },
      { id: "molho-separado", name: "Molho separado", price: 0 },
    ],
  },
];

export function ProductModal({
  isOpen,
  onAdd,
  onClose,
  product,
}: {
  isOpen: boolean;
  onAdd: (payload: {
    notes?: string;
    options: CartItemOption[];
    product: Product;
    quantity: number;
  }) => void;
  onClose: () => void;
  product: Product | null;
}) {
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOption[]>([]);

  useEffect(() => {
    setNotes("");
    setQuantity(1);
    setSelectedOptions([]);
  }, [product?.id]);

  const selectedOptionsTotal = useMemo(
    () => selectedOptions.reduce((total, option) => total + option.price, 0),
    [selectedOptions],
  );

  if (!isOpen || !product) {
    return null;
  }

  const total = (product.price + selectedOptionsTotal) * quantity;

  function toggleOption(group: ProductOptionGroup, option: ProductOption) {
    setSelectedOptions((currentOptions) => {
      const optionIsSelected = currentOptions.some((currentOption) => currentOption.id === option.id);

      if (optionIsSelected) {
        return currentOptions.filter((currentOption) => currentOption.id !== option.id);
      }

      const groupOptionIds = group.options.map((groupOption) => groupOption.id);
      const selectedInGroup = currentOptions.filter((currentOption) =>
        groupOptionIds.includes(currentOption.id),
      );

      if (selectedInGroup.length >= group.maxSelected) {
        const withoutFirstGroupOption = currentOptions.filter(
          (currentOption) => currentOption.id !== selectedInGroup[0]?.id,
        );

        return [...withoutFirstGroupOption, option];
      }

      return [...currentOptions, option];
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-dark/50 p-0 sm:items-center sm:p-4">
      <button aria-label="Fechar modal" className="absolute inset-0" onClick={onClose} type="button" />
      <section
        aria-labelledby="product-modal-title"
        aria-modal="true"
        className="relative max-h-[92svh] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-soft sm:max-w-2xl sm:rounded-3xl"
        role="dialog"
      >
        <div className="relative h-56 bg-slate-100 sm:h-64">
          <Image alt={product.name} className="object-cover" fill sizes="(min-width: 640px) 672px, 100vw" src={product.image} />
          <button
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm"
            onClick={onClose}
            type="button"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-dark" id="product-modal-title">
                {product.name}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">{product.description}</p>
            </div>
            <strong className="min-w-max text-xl text-primary">{formatCurrency(product.price)}</strong>
          </div>

          <div className="mt-6 space-y-4">
            {productOptionGroups.map((group) => (
              <section className="rounded-2xl border border-slate-200 p-4" key={group.id}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-dark">{group.title}</h3>
                  <span className="text-xs font-bold text-slate-400">
                    Até {group.maxSelected}
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {group.options.map((option) => {
                    const isSelected = selectedOptions.some(
                      (selectedOption) => selectedOption.id === option.id,
                    );

                    return (
                      <label
                        className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-100"
                        key={option.id}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            checked={isSelected}
                            className="h-4 w-4 accent-red-600"
                            onChange={() => toggleOption(group, option)}
                            type="checkbox"
                          />
                          {option.name}
                        </span>
                        <span>{option.price > 0 ? formatCurrency(option.price) : "Grátis"}</span>
                      </label>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-dark">Observação</span>
            <textarea
              className="mt-2 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-dark outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Ex: tirar cebola, caprichar no molho..."
              value={notes}
            />
          </label>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex h-11 w-max items-center rounded-full border border-slate-200 bg-white">
              <button
                aria-label="Diminuir quantidade"
                className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:text-primary"
                onClick={() => setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 1))}
                type="button"
              >
                <Minus aria-hidden className="h-4 w-4" />
              </button>
              <strong className="min-w-8 text-center text-dark">{quantity}</strong>
              <button
                aria-label="Aumentar quantidade"
                className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:text-primary"
                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
                type="button"
              >
                <Plus aria-hidden className="h-4 w-4" />
              </button>
            </div>

            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                onAdd({ notes, options: selectedOptions, product, quantity });
                onClose();
              }}
              type="button"
            >
              Adicionar ao carrinho • {formatCurrency(total)}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
