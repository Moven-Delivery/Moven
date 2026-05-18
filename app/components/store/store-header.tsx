import { Bike, Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import type { Store } from "@/types/store";

export function StoreHeader({ store }: { store: Store }) {
  return (
    <header className="bg-white">
      <div className="relative h-56 overflow-hidden sm:h-72">
        <Image
          alt={`Banner do ${store.name}`}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={store.banner}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 relative z-10 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex gap-4">
              <Image
                alt={`Logo do ${store.name}`}
                className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-soft"
                height={96}
                src={store.logo}
                width={96}
              />
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={store.isOpen ? "success" : "danger"}>
                    {store.isOpen ? "Aberto agora" : "Fechado"}
                  </Badge>
                  <Badge variant="warm">{store.category}</Badge>
                </div>
                <h1 className="mt-3 text-3xl font-bold text-dark">{store.name}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{store.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-4">
              <span className="flex items-center gap-2">
                <Star aria-hidden className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {store.rating.toFixed(1)}
              </span>
              <span className="flex items-center gap-2">
                <Clock aria-hidden className="h-4 w-4 text-orange-500" />
                {store.deliveryTime}
              </span>
              <span className="flex items-center gap-2">
                <Bike aria-hidden className="h-4 w-4 text-primary" />
                {formatCurrency(store.deliveryFee)}
              </span>
              <span className="flex items-center gap-2">
                <MapPin aria-hidden className="h-4 w-4 text-slate-500" />
                {store.neighborhood}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
