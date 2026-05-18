import { ArrowRight, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Store } from "@/types/store";

export function CityFavorites({ stores }: { stores: Store[] }) {
  const favoriteStores = [...stores]
    .sort((firstStore, secondStore) => secondStore.rating - firstStore.rating)
    .slice(0, 3);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-dark">Favoritos da sua cidade</h2>
        <p className="mt-1 text-sm text-slate-500">
          Lojas locais bem avaliadas para pedir com confiança.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {favoriteStores.map((store) => (
          <Link
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm"
            href={`/${store.slug}`}
            key={store.id}
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
              <Image
                alt={`Logo do ${store.name}`}
                className="object-cover"
                fill
                sizes="64px"
                src={store.logo}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-dark">{store.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-slate-500">{store.category}</p>
                </div>
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-primary"
                />
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <Star aria-hidden className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {store.rating.toFixed(1)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock aria-hidden className="h-3.5 w-3.5 text-orange-500" />
                  {store.deliveryTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
