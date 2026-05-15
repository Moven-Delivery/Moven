import { Card, Section } from "@/components/ui";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Plataforma", href: "#operacao" },
  { label: "Tempo real", href: "#tempo-real" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
];

const coreBlocks = [
  {
    title: "Venda mais com uma experiência moderna",
    description:
      "Checkout limpo, cardápio organizado e navegação rápida para transformar visitas em pedidos recorrentes.",
    metrics: ["+22% em conversão", "Carrinho em 2 toques", "PIX sem fricção"],
  },
  {
    title: "Controle pedidos em tempo real",
    description:
      "Do pedido novo ao envio, a equipe acompanha prioridades, filas e tempo de preparo com visibilidade total.",
    metrics: ["Fila viva de pedidos", "Alertas automáticos", "Equipe sincronizada"],
  },
  {
    title: "Entregas organizadas para motoboys",
    description:
      "Distribua corridas, acompanhe rotas e reduza atrasos com um fluxo claro para cada entrega da operação.",
    metrics: ["Rota com 1 toque", "Status em trânsito", "Confirmação de entrega"],
  },
];

const platformViews = [
  {
    title: "Cliente",
    copy: "Cardápio bonito, carrinho rápido e acompanhamento em tempo real para aumentar confiança até a entrega.",
    items: ["Cardápio por categorias", "Carrinho inteligente", "Acompanhar pedido"],
  },
  {
    title: "Lanchonete",
    copy: "Pedidos chegam organizados por etapa, com visão operacional clara para cozinhar, despachar e crescer.",
    items: ["Fila de pedidos", "Controle de preparo", "Status centralizado"],
  },
  {
    title: "Motoboy",
    copy: "Retirada, rota e finalização da entrega em um único fluxo mobile pensado para agilidade na rua.",
    items: ["Chamada de corrida", "Rota otimizada", "Entrega confirmada"],
  },
];

const steps = ["Cliente pede", "Loja prepara", "Motoboy entrega", "Cliente acompanha"];

const plans = [
  { name: "Inicial", price: "R$ 99/mês", features: ["Até 400 pedidos/mês", "Cardápio digital", "PIX integrado"] },
  {
    name: "Profissional",
    price: "R$ 149/mês",
    highlight: true,
    features: ["Pedidos ilimitados", "Gestão de motoboys", "Dashboard inteligente", "Suporte prioritário"],
  },
  { name: "Premium", price: "R$ 199/mês", features: ["Tudo do Profissional", "Relatórios avançados", "Múltiplas unidades"] },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="inline-flex items-center gap-2 text-xl font-black tracking-tight text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-white shadow-lg shadow-rose-300/70">M</span>
          Moven
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-300/70 transition hover:bg-rose-700">
          Solicitar demonstração
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-slate-50">
      <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-2 md:px-10 md:pb-24">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-rose-200 bg-white px-3 py-1 text-sm font-medium text-primary">Delivery em movimento.</p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">Seu delivery, mais rápido e mais bonito.</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            A Moven ajuda lanchonetes a vender, organizar pedidos e acompanhar entregas em tempo real — tudo em uma experiência moderna para cliente, loja e motoboy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-rose-300/70 transition hover:bg-rose-700">Solicitar demonstração</button>
            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">Ver plataforma</button>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">Feito para lanchonetes, hamburguerias e deliveries locais.</p>
        </div>

        <div className="relative z-10 min-h-[460px]">
          <div className="absolute right-0 top-10 w-[74%] rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40">
            <p className="text-sm font-semibold text-slate-900">Painel da loja</p>
            <div className="mt-4 space-y-3">
              {["#8421 Novo pedido", "#8420 Em preparo", "#8418 Pronto para saída"].map((item, i) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm">
                  <span className="font-medium text-slate-700">{item}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-emerald-500" : i === 1 ? "bg-amber-500" : "bg-sky-500"}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 w-[52%] rounded-[2.1rem] border-8 border-slate-900 bg-white p-4 shadow-2xl shadow-slate-400/30">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-200" />
            <p className="text-xs font-semibold text-slate-400">Moven App</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Smash Burger + Fritas</p>
            <div className="mt-3 rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 p-3">
              <p className="text-xs text-slate-500">Total</p>
              <p className="text-lg font-bold text-primary">R$ 42,90</p>
            </div>
            <button className="mt-3 w-full rounded-xl bg-primary py-2 text-sm font-semibold text-white">Confirmar pedido</button>
          </div>

          {[
            "Pedido recebido",
            "Motoboy em rota",
            "PIX confirmado",
          ].map((tag, idx) => (
            <div
              key={tag}
              className="absolute rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg"
              style={{ right: idx === 0 ? "18%" : idx === 1 ? "4%" : "28%", bottom: idx === 0 ? "28%" : idx === 1 ? "8%" : "2%" }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofBar() {
  return null;
}

export function Benefits() {
  return (
    <Section id="recursos" title="Recursos pensados para vender mais" subtitle="Menos blocos genéricos e mais produto real em cada parte da operação.">
      <div className="space-y-6">
        {coreBlocks.map((block, index) => (
          <div key={block.title} className="grid items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 md:grid-cols-2 md:p-8">
            <div className={index % 2 ? "md:order-2" : ""}>
              <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
              <p className="mt-3 text-slate-600">{block.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {block.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{metric}</li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl border border-slate-100 bg-slate-50 p-4 ${index % 2 ? "md:order-1" : ""}`}>
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="mt-3 grid gap-2">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-xs text-slate-400">Pedido #98{index + 1}</p>
                  <p className="text-sm font-semibold text-slate-800">Combo artesanal + bebida</p>
                </div>
                <div className="rounded-xl border border-dashed border-slate-300 p-3 text-sm text-slate-500">Interface operacional com atualização ao vivo</div>
                <div className="h-9 rounded-xl bg-slate-900/90" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function RestaurantSection() {
  return (
    <Section id="operacao" title="Uma plataforma para cada parte da operação" subtitle="Cliente, lanchonete e motoboy trabalhando no mesmo fluxo, sem ruído.">
      <div className="grid gap-5 lg:grid-cols-3">
        {platformViews.map((view) => (
          <div key={view.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
            <p className="text-lg font-bold text-slate-900">{view.title}</p>
            <p className="mt-2 text-sm text-slate-600">{view.copy}</p>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <div className="mb-3 h-2 w-16 rounded-full bg-slate-300" />
              <div className="space-y-2">
                {view.items.map((item) => (
                  <div key={item} className="rounded-lg bg-white p-2.5 text-sm font-medium text-slate-700 shadow-sm">{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CourierSection() {
  return (
    <section id="tempo-real" className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Pedidos acontecendo em tempo real.</h2>
        <p className="mt-4 max-w-2xl text-slate-300">Da confirmação do PIX até a entrega, cada etapa fica clara para todos.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5">
            <p className="text-sm font-semibold text-slate-200">Linha do tempo</p>
            <div className="mt-4 space-y-3">
              {["PIX confirmado", "Em preparo", "Saiu para entrega", "Pedido entregue"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className={`h-2.5 w-2.5 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-slate-600"}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-white p-5">
            <p className="text-sm text-slate-500">Painel lateral</p>
            <p className="mt-1 font-bold text-slate-900">Pedido #8421</p>
            <div className="mt-4 grid gap-2">
              <div className="rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700">Pagamento aprovado</div>
              <div className="rounded-xl bg-amber-50 p-3 text-sm font-medium text-amber-700">Aguardando retirada</div>
              <div className="rounded-xl bg-sky-50 p-3 text-sm font-medium text-sky-700">Motoboy em rota</div>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-slate-700 bg-slate-900/60 p-5">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs text-slate-500">Cartão de entrega</p>
              <p className="mt-1 font-semibold text-slate-900">Rua das Acácias, 142</p>
              <p className="text-sm text-slate-500">Previsão: 8 min</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-slate-800 p-3 text-white"><p className="text-xs text-slate-400">Ao vivo</p><p className="text-lg font-bold">16</p></div>
              <div className="rounded-xl bg-slate-800 p-3 text-white"><p className="text-xs text-slate-400">Concluídos</p><p className="text-lg font-bold">57</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <Section id="como-funciona" title="Como funciona" subtitle="Uma jornada única conectando cliente, loja e entrega.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 md:p-10">
        <div className="grid gap-8 md:grid-cols-4 md:gap-4">
          {steps.map((step, i) => (
            <div key={step} className="relative">
              {i < steps.length - 1 ? <span className="absolute left-8 top-4 hidden h-px w-[calc(100%-1rem)] bg-slate-300 md:block" /> : null}
              <div className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{i + 1}</div>
              <p className="mt-3 font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="precos" title="Planos" subtitle="Comece simples e evolua conforme sua operação cresce.">
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col gap-3 border-slate-200 ${plan.highlight ? "ring-2 ring-primary/30" : ""}`}>
            <p className="text-lg font-bold text-slate-900">{plan.name}</p>
            <p className="text-2xl font-extrabold text-primary">{plan.price}</p>
            <ul className="space-y-1 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button className={`mt-auto rounded-xl px-4 py-2.5 text-sm font-semibold ${plan.highlight ? "bg-primary text-white" : "bg-slate-900 text-white"}`}>Começar agora</button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <div className="rounded-3xl bg-primary px-8 py-16 text-white shadow-2xl shadow-rose-300/40">
        <h3 className="text-3xl font-bold md:text-4xl">Pronto para modernizar seu delivery?</h3>
        <p className="mt-3 max-w-2xl text-rose-100">Transforme seu cardápio em uma experiência rápida, bonita e conectada.</p>
        <button className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-primary">Quero conhecer a Moven</button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm text-slate-500 md:flex-row md:px-10">
        <div>
          <p className="text-xl font-extrabold text-slate-900">Moven</p>
          <p>Delivery em movimento.</p>
        </div>
        <div className="flex gap-5">
          {navItems.slice(0, 4).map((item) => (
            <a href={item.href} key={item.label} className="hover:text-slate-900">{item.label}</a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Moven. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
