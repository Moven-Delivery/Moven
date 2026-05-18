import type { DeliveryCategory } from "@/data/mock-delivery";

export function CompactCategoryList({ categories }: { categories: DeliveryCategory[] }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-dark">Categorias</h2>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        {categories.map((category) => (
          <button
            className="inline-flex h-11 min-w-max items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition duration-200 hover:border-red-200 hover:text-primary"
            key={category.id}
            type="button"
          >
            <span className="text-lg" aria-hidden>
              {category.icon}
            </span>
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}
