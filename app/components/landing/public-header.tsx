import { ArrowRight, ShoppingBag, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-bold text-dark" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <UtensilsCrossed aria-hidden className="h-5 w-5" />
          </span>
          Moven
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-primary" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink className="hidden sm:inline-flex" href="/app" variant="secondary">
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Ver app cliente
          </ButtonLink>
          <ButtonLink href="#planos" variant="primary">
            <span className="hidden sm:inline">Começar teste grátis</span>
            <span className="sm:hidden">Teste grátis</span>
            <ArrowRight aria-hidden className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
