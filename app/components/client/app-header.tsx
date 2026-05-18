import { ArrowLeft, MapPin, Search, ShoppingCart, User, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

type AppHeaderProps = {
  backHref?: string;
  backLabel?: string;
  cartCount?: number;
  cartHref?: string;
  showSearch?: boolean;
};

export function AppHeader({
  backHref,
  backLabel = "Ver lojas",
  cartCount = 0,
  cartHref = "#carrinho",
  showSearch = true,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Link className="flex items-center gap-2 font-bold text-dark" href="/app">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <UtensilsCrossed aria-hidden className="h-5 w-5" />
              </span>
              Moven
            </Link>

            {backHref ? (
              <Link
                className="hidden h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-primary sm:inline-flex"
                href={backHref}
              >
                <ArrowLeft aria-hidden className="h-4 w-4" />
                {backLabel}
              </Link>
            ) : null}
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex">
            <button
              className="inline-flex h-10 min-w-max items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-primary"
              type="button"
            >
              <MapPin aria-hidden className="h-4 w-4 text-primary" />
              Entregar em: sua cidade
            </button>

            {showSearch ? (
              <label className="relative w-full max-w-md">
                <span className="sr-only">Buscar no Moven</span>
                <Search
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />
                <input
                  className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-semibold text-dark outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
                  placeholder="Buscar lojas ou pratos"
                  type="search"
                />
              </label>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="hidden h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-primary sm:inline-flex"
              type="button"
            >
              <User aria-hidden className="h-4 w-4" />
              Entrar
            </button>

            {showSearch ? (
              <button
                aria-label="Abrir busca"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-red-200 hover:text-primary md:hidden"
                type="button"
              >
                <Search aria-hidden className="h-4 w-4" />
              </button>
            ) : null}

            <a
              aria-label="Abrir carrinho"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-red-700"
              href={cartHref}
            >
              <ShoppingCart aria-hidden className="h-4 w-4" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-dark px-1 text-[10px] font-bold">
                  {cartCount}
                </span>
              ) : null}
            </a>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 md:hidden">
          {backHref ? (
            <Link
              className="inline-flex h-9 min-w-max items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700"
              href={backHref}
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
              {backLabel}
            </Link>
          ) : null}
          <button
            className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700"
            type="button"
          >
            <MapPin aria-hidden className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">Entregar em: sua cidade</span>
          </button>
          <button
            className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 sm:hidden"
            type="button"
          >
            <User aria-hidden className="h-3.5 w-3.5" />
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
}
