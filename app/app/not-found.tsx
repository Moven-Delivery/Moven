import Link from "next/link";
import { PublicHeader } from "@/components/landing/public-header";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <PublicHeader />
      <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Página não encontrada</p>
        <h1 className="mt-3 text-4xl font-black text-dark">Essa loja ainda não existe por aqui.</h1>
        <p className="mt-4 text-slate-600">
          Confira a vitrine geral para acessar os estabelecimentos disponíveis nesta base.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/app">Ver estabelecimentos</ButtonLink>
          <Link
            className="inline-flex items-center justify-center rounded-full px-5 py-3 font-bold text-slate-600 hover:text-primary"
            href="/"
          >
            Voltar para início
          </Link>
        </div>
      </section>
    </main>
  );
}
