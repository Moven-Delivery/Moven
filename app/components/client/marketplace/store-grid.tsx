import { StoreCard } from "@/components/cards/store-card";
import type { Store } from "@/types/store";

export function StoreGrid({ stores }: { stores: Store[] }) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-dark">Lojas locais</h2>
        <p className="mt-1 text-sm text-slate-500">
          Estabelecimentos da sua região reunidos no Moven.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  );
}
