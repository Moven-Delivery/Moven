import { ArrowRight, LockKeyhole, Mail, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function PanelLoginPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_440px]">
        <div className="max-w-2xl">
          <Link className="inline-flex items-center gap-3 font-bold text-dark" href="/">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
              <UtensilsCrossed aria-hidden className="h-6 w-6" />
            </span>
            Moven
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Painel administrativo
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-dark sm:text-5xl">
            Controle sua operação local com clareza.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Acompanhe pedidos, produtos, clientes e indicadores em uma área preparada para evoluir
            com permissões, equipes e múltiplas unidades.
          </p>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
          <div>
            <h2 className="text-2xl font-bold text-dark">Entrar no painel</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Acesso demonstrativo. O backend de autenticação será conectado futuramente.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-dark">E-mail</span>
              <span className="relative mt-2 block">
                <Mail
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />
                <input
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold text-dark outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
                  defaultValue="admin@moven.local"
                  type="email"
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-dark">Senha</span>
              <span className="relative mt-2 block">
                <LockKeyhole
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />
                <input
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold text-dark outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
                  defaultValue="moven-demo"
                  type="password"
                />
              </span>
            </label>
          </div>

          <Link
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white transition hover:bg-red-700"
            href="/painel/dashboard"
          >
            Acessar dashboard
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            Estrutura preparada para RBAC, auditoria e autenticação real em uma próxima etapa.
          </p>
        </form>
      </section>
    </main>
  );
}
