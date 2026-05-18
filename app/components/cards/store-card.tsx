import { Bike, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import type { Store } from "@/types/store";

export function StoreCard({ store }: { store: Store }) {
  return (
    <Link
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm"
      href={`/${store.slug}`}
    >
      <div className="relative h-36 overflow-hidden bg-slate-100">
        <Image
          alt={`Imagem do ${store.name}`}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          src={store.banner}
        />
        <div className="absolute right-3 top-3">
          <Badge variant={store.isOpen ? "success" : "danger"}>
            {store.isOpen ? "Aberto" : "Fechado"}
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-dark">{store.name}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-500">{store.category}</p>
          </div>
          <span className="inline-flex min-w-max items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-bold text-yellow-700 ring-1 ring-yellow-200">
            <Star aria-hidden className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {store.rating.toFixed(1)}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 min-h-11 text-sm leading-6 text-slate-500">
          {store.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden className="h-4 w-4 text-orange-500" />
            {store.deliveryTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Bike aria-hidden className="h-4 w-4 text-primary" />
            {formatCurrency(store.deliveryFee)}
          </span>
        </div>
      </div>
    </Link>
  );
}
