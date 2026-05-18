import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { DeliveryPromotion } from "@/data/mock-delivery";

export function TodayPicks({ picks }: { picks: DeliveryPromotion[] }) {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-dark">Escolhas para hoje</h2>
          <p className="mt-1 text-sm text-slate-500">
            Seleções do Moven para pedir bem na sua região.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {picks.slice(0, 3).map((pick) => (
          <article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm"
            key={pick.id}
          >
            <div className="relative h-32 bg-slate-100">
              <Image
                alt={pick.title}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src={pick.image}
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{pick.storeName}</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-dark">{pick.title}</h3>
                </div>
                <span className="min-w-max rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-primary ring-1 ring-red-100">
                  {pick.badge}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="line-clamp-1 text-sm text-slate-500">{pick.description}</p>
                <Link
                  className="inline-flex h-8 min-w-max items-center gap-1.5 rounded-full bg-primary px-3 text-sm font-bold text-white transition hover:bg-red-700"
                  href={`/${pick.storeSlug}`}
                >
                  Ver
                  <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
