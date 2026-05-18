import { LogOut, Menu, Search, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { PanelSidebarNav } from "@/components/panel/panel-sidebar-nav";
import { currentPanelUser } from "@/data/mock-panel";

export function PanelShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-dark">
      <div className="grid min-h-screen lg:grid-cols-[296px_1fr]">
        <aside className="border-b border-slate-200 bg-white lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
          <div className="flex h-20 items-center justify-between gap-4 px-5">
            <Link className="flex items-center gap-3" href="/painel/dashboard" prefetch>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <UtensilsCrossed aria-hidden className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg leading-none text-dark">Moven</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Painel
                </span>
              </span>
            </Link>
            <button
              aria-label="Abrir menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 lg:hidden"
              type="button"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 pb-4 lg:pb-6">
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-bold text-dark">{currentPanelUser.storeName}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Perfil proprietário
              </p>
            </div>
          </div>

          <PanelSidebarNav />
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex min-h-20 flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Operação local
                </p>
                <h1 className="mt-1 text-xl font-bold text-dark sm:text-2xl">
                  {currentPanelUser.storeName}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <label className="relative hidden w-full max-w-sm sm:block">
                  <span className="sr-only">Buscar no painel</span>
                  <Search
                    aria-hidden
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-semibold text-dark outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
                    placeholder="Buscar pedidos, produtos ou clientes"
                    type="search"
                  />
                </label>
                <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 md:block">
                  {currentPanelUser.name}
                </div>
                <Link
                  aria-label="Sair do painel"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-red-200 hover:text-primary"
                  href="/painel/login"
                  prefetch
                >
                  <LogOut aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
