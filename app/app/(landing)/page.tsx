import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Gift,
  History,
  LayoutDashboard,
  Link as LinkIcon,
  MessageCircle,
  QrCode,
  ReceiptText,
  ShoppingBag,
  Store,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { PublicHeader } from "@/components/landing/public-header";
import { ButtonLink } from "@/components/ui/button";

const benefits = [
  {
    icon: ReceiptText,
    title: "Economize taxas",
    description: "Trabalhe com mensalidade fixa e tenha mais previsibilidade.",
  },
  {
    icon: BadgePercent,
    title: "Venda mais",
    description: "Use cupons, promoções e fidelidade para aumentar a recorrência.",
  },
  {
    icon: LayoutDashboard,
    title: "Controle sua operação",
    description: "Pedidos, produtos, clientes e entregas em um só painel.",
  },
  {
    icon: Store,
    title: "Fortaleça sua marca",
    description: "Tenha uma loja própria com link para divulgar no Instagram, WhatsApp e Google.",
  },
];

const steps = [
  "Criamos sua loja no Moven",
  "Você cadastra produtos, categorias e horários",
  "O cliente faz o pedido pelo link da loja ou pela vitrine local",
  "A loja recebe e acompanha tudo pelo painel",
];

const resources = [
  { icon: UtensilsCrossed, label: "Cardápio digital" },
  { icon: Clock, label: "Pedidos em tempo real" },
  { icon: LinkIcon, label: "Loja própria com link" },
  { icon: ShoppingBag, label: "Marketplace local" },
  { icon: BadgePercent, label: "Cupons" },
  { icon: Gift, label: "Fidelidade" },
  { icon: Truck, label: "Entregadores" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: QrCode, label: "QR Code para mesas" },
  { icon: CreditCard, label: "Pagamento online" },
  { icon: MessageCircle, label: "Notificações" },
  { icon: History, label: "Clientes e histórico" },
];

const comparisonRows = [
  { resource: "Loja própria", moven: "Sim", common: "Parcial" },
  { resource: "Vitrine local da cidade", moven: "Sim", common: "Nem sempre" },
  { resource: "Fidelidade", moven: "Incluso", common: "Limitado" },
  { resource: "Cupons", moven: "Incluso", common: "Básico" },
  { resource: "Relatórios", moven: "Operacionais", common: "Simples" },
  { resource: "Suporte local", moven: "Próximo", common: "Genérico" },
  { resource: "Sem taxa por pedido", moven: "Sim", common: "Nem sempre" },
];

const plans = [
  {
    name: "Start",
    price: "R$ 99/mês",
    description: "Para quem quer começar com cardápio digital e pedidos organizados.",
    features: [
      "Loja própria",
      "Cardápio digital",
      "Produtos e categorias",
      "Pedidos",
      "Cupons simples",
      "Dashboard básico",
      "Suporte",
    ],
  },
  {
    name: "Growth",
    price: "R$ 149/mês",
    badge: "Mais escolhido",
    description: "Para lojas que querem vender mais e fidelizar clientes.",
    features: [
      "Tudo do Start",
      "Fidelidade",
      "Promoções avançadas",
      "Relatórios",
      "Entregadores",
      "Clientes e histórico",
      "Banner promocional",
    ],
  },
  {
    name: "Pro",
    price: "R$ 199/mês",
    description: "Para operações que querem mais automação e inteligência.",
    features: [
      "Tudo do Growth",
      "CRM",
      "Automações",
      "IA de vendas",
      "Campanhas",
      "Destaque na plataforma",
      "Relatórios avançados",
    ],
  },
];

const faqItems = [
  {
    question: "Preciso sair do meu sistema atual?",
    answer: "Não. Você pode começar usando o Moven junto com sua operação atual.",
  },
  {
    question: "Tem taxa por pedido?",
    answer: "A proposta do Moven é trabalhar com mensalidade fixa, sem comissão por pedido.",
  },
  {
    question: "Posso divulgar minha loja no Instagram e WhatsApp?",
    answer: "Sim. Cada loja tem um link próprio para divulgação.",
  },
  {
    question: "O cliente precisa baixar aplicativo?",
    answer:
      "Não necessariamente. O cliente pode acessar pelo navegador. Futuramente o Moven também pode evoluir para app/PWA instalado.",
  },
  {
    question: "Vocês ajudam a configurar?",
    answer: "Sim. A ideia é entregar uma implantação simples e assistida.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-sm font-bold uppercase text-primary">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black leading-tight text-dark sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#fffaf7]">
      <PublicHeader />

      <section
        className="relative isolate flex overflow-hidden bg-cover bg-center py-20 sm:py-24 lg:min-h-[720px] lg:items-center lg:py-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.82)_34%,rgba(15,23,42,0.42)_68%,rgba(15,23,42,0.26)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fffaf7] via-[#fffaf7]/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-5 inline-flex rounded-full bg-white/[0.12] px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur-md">
              Plataforma local para negócios de comida
            </p>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Venda mais com seu delivery próprio.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Crie sua loja, receba pedidos, fidelize clientes e gerencie tudo em uma plataforma
              moderna feita para negócios locais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#planos" size="lg">
                Começar 30 dias grátis
                <ArrowRight aria-hidden className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/app" size="lg" variant="secondary">
                Ver demonstração
              </ButtonLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5 text-sm font-bold text-white/90">
              {["30 dias grátis", "Sem taxa por pedido", "Sem compromisso"].map((item) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.10] px-3.5 py-2 ring-1 ring-white/15 backdrop-blur-md"
                  key={item}
                >
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-red-200" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="beneficios">
        <SectionTitle
          eyebrow="Benefícios"
          title="Por que contratar o Moven?"
          description="Uma plataforma local para vender com independência, previsibilidade e relacionamento direto com o cliente."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200"
                key={benefit.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-dark">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16" id="como-funciona">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Como funciona"
            title="Da implantação ao pedido, sem complicar a rotina."
            description="O Moven foi pensado para negócios locais que precisam vender mais sem perder o controle da operação."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6" key={step}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="mt-5 font-bold leading-7 text-dark">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="recursos">
        <SectionTitle
          eyebrow="Recursos"
          title="Tudo que sua loja precisa para vender melhor."
          description="Ferramentas de venda, atendimento e gestão reunidas em uma experiência simples para o dia a dia."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                key={resource.label}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-primary">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <strong className="text-sm text-dark">{resource.label}</strong>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Comparação"
            title="Mais controle para vender no seu próprio canal."
            description="O Moven combina loja própria, vitrine local e ferramentas de recorrência em uma proposta direta."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-bold">Recurso</th>
                    <th className="px-5 py-4 font-bold text-primary">Moven</th>
                    <th className="px-5 py-4 font-bold">Soluções comuns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row) => (
                    <tr className="transition hover:bg-red-50/40" key={row.resource}>
                      <td className="px-5 py-4 font-bold text-dark">{row.resource}</td>
                      <td className="px-5 py-4 font-semibold text-slate-700">{row.moven}</td>
                      <td className="px-5 py-4 text-slate-600">{row.common}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="planos">
        <SectionTitle
          eyebrow="Planos"
          title="Escolha o plano ideal para começar."
          description="Todos os planos incluem 30 dias grátis para sua loja testar o Moven com tranquilidade."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={
                plan.badge
                  ? "relative rounded-3xl border-2 border-primary bg-white p-6 shadow-soft"
                  : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              }
              key={plan.name}
            >
              {plan.badge ? (
                <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              ) : null}
              <h3 className="text-2xl font-black text-dark">Plano {plan.name}</h3>
              <strong className="mt-4 block text-3xl text-primary">{plan.price}</strong>
              <p className="mt-4 min-h-16 leading-7 text-slate-600">{plan.description}</p>
              <span className="mt-5 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-primary ring-1 ring-red-100">
                30 dias grátis
              </span>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3 text-sm font-semibold text-slate-700" key={feature}>
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-7 w-full" href="/painel/login">
                Começar teste grátis
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="cta">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-dark px-6 py-12 text-white shadow-soft sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-yellow-300">Teste gratuito</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Teste o Moven por 30 dias grátis.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Sem taxa por pedido, sem compromisso e com suporte para colocar sua loja no ar.
              </p>
            </div>
            <ButtonLink href="/painel/login" size="lg">
              Quero começar agora
              <ArrowRight aria-hidden className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                key={item.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-dark">
                  {item.question}
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-10 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link className="flex items-center gap-2 font-bold text-dark" href="/">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <UtensilsCrossed aria-hidden className="h-5 w-5" />
              </span>
              Moven
            </Link>
            <p className="mt-4 max-w-xl leading-7">
              Plataforma local de delivery para negócios de comida venderem mais com controle e
              fidelização.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 font-semibold text-slate-600">
            <Link className="hover:text-primary" href="/app">
              App cliente
            </Link>
            <Link className="hover:text-primary" href="#planos">
              Planos
            </Link>
            <Link className="hover:text-primary" href="#faq">
              FAQ
            </Link>
            <Link className="hover:text-primary" href="mailto:contato@moven.local">
              Contato
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
