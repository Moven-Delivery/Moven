import { Card, Section } from "@/components/ui";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Lanchonete", href: "#plataforma" },
  { label: "Motoboy", href: "#motoboy" },
  { label: "Preços", href: "#precos" },
];

const metricHighlights = [
  { icon: "🟢", title: "Pedidos em tempo real", text: "Atualizações instantâneas do pedido ao envio." },
  { icon: "🏍️", title: "Gestão de motoboys", text: "Distribuição inteligente e status em rota." },
  { icon: "💳", title: "PIX e status automático", text: "Confirmação rápida para acelerar a operação." },
  { icon: "📲", title: "PWA instalável", text: "Experiência de app direto no celular." },
];

const resources = [
  { icon: "📦", title: "Pedidos em tempo real", description: "Monitore novos pedidos, preparo e entrega sem atualizar a página." },
  { icon: "🛵", title: "Gestão de motoboys", description: "Acompanhe disponibilidade, rotas e entregas em andamento." },
  { icon: "💸", title: "PIX integrado", description: "Receba com confirmação instantânea e baixa fricção no checkout." },
  { icon: "📋", title: "Cardápio digital", description: "Organize categorias, adicionais e combos com facilidade." },
  { icon: "🔔", title: "Notificações automáticas", description: "Envie alertas de status para cliente, loja e entregador." },
  { icon: "📈", title: "Dashboard inteligente", description: "Visualize desempenho diário e indicadores operacionais." },
];

const steps = [
  { icon: "🧾", title: "Cliente faz o pedido", description: "Pedido entra com itens, observações e forma de pagamento." },
  { icon: "🖥️", title: "Loja recebe no painel", description: "A equipe aceita o pedido e inicia o preparo com prioridade." },
  { icon: "🧭", title: "Motoboy abre a rota", description: "Entregador recebe endereço, tempo e melhor caminho." },
  { icon: "✅", title: "Cliente acompanha o status", description: "A cada etapa, o cliente visualiza a evolução em tempo real." },
];

const plans = [
  { name: "Inicial", price: "R$ 99/mês", highlight: false, features: ["Até 400 pedidos/mês", "Cardápio digital", "PIX integrado"] },
  { name: "Profissional", price: "R$ 149/mês", highlight: true, features: ["Pedidos ilimitados", "Gestão de motoboys", "Dashboard inteligente", "Suporte prioritário"] },
  { name: "Premium", price: "R$ 199/mês", highlight: false, features: ["Tudo do Profissional", "Relatórios avançados", "Múltiplas unidades", "Onboarding dedicado"] },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
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
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 md:grid-cols-2 md:px-10 md:pb-24">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-primary">Plataforma moderna para delivery local</p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">Venda mais com um delivery moderno, rápido e em tempo real.</h1>
          <p className="mt-5 text-lg text-slate-500">A Moven conecta clientes, lanchonetes e motoboys em uma experiência simples, bonita e eficiente.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-rose-300/70 transition hover:bg-rose-700">Solicitar demonstração</button>
            <a href="#como-funciona" className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">Ver como funciona</a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Painel Moven · Hoje</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Operação ativa</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Faturamento do dia", "R$ 2.840", "text-primary"],
                ["Entregas em andamento", "12", "text-amber-600"],
                ["Tempo médio de preparo", "18 min", "text-sky-600"],
                ["Pedidos concluídos", "47", "text-emerald-600"],
              ].map(([label, value, tone]) => (
                <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className={`mt-1 text-xl font-bold ${tone}`}>{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {["#5412 · Em preparo", "#5413 · Aguardando motoboy", "#5414 · Saiu para entrega"].map((order) => (
                <div key={order} className="flex items-center justify-between rounded-xl border border-slate-100 p-3 text-sm">
                  <span className="font-medium text-slate-700">{order}</span>
                  <span className="text-emerald-600">●</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-rose-100 bg-rose-50/70 p-3 text-sm">
              <p className="font-semibold text-slate-800">Motoboy Lucas</p>
              <p className="text-slate-500">Entrega #5414 · 8 min · Rota iniciada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofBar() {
  return (
    <section className="mx-auto -mt-8 max-w-7xl px-6 pb-10 md:px-10">
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-100 sm:grid-cols-2 lg:grid-cols-4">
        {metricHighlights.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 p-3">
            <p className="text-sm font-semibold text-slate-800">{item.icon} {item.title}</p>
            <p className="mt-1 text-sm text-slate-500">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <Section id="recursos" title="Recursos prontos para escalar sua operação" subtitle="Uma base completa para vender mais com agilidade, organização e experiência premium.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((item) => (
          <Card key={item.title} className="group border-slate-200 transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/60">
            <p className="text-2xl">{item.icon}</p>
            <p className="mt-3 font-semibold text-slate-900">{item.title}</p>
            <p className="mt-2 text-sm text-slate-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="como-funciona" title="Como funciona" subtitle="Do pedido ao recebimento, tudo sincronizado em poucos passos.">
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((step, i) => (
          <Card key={step.title} className="relative border-slate-200">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{i + 1}</span>
            <p className="text-lg">{step.icon}</p>
            <p className="mt-2 font-semibold text-slate-900">{step.title}</p>
            <p className="mt-1 text-sm text-slate-500">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function RestaurantSection() {
  return (
    <Section id="plataforma" title="Para a lanchonete" subtitle="Menos ruído operacional e muito mais previsibilidade no dia a dia.">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4 text-slate-600">
          {["Menos confusão na operação", "Pedidos organizados por etapa", "Controle operacional centralizado", "Status em tempo real para toda equipe"].map((item) => (
            <p key={item} className="flex items-center gap-2"><span className="text-primary">●</span>{item}</p>
          ))}
        </div>
        <Card className="border-slate-200">
          <p className="font-semibold text-slate-800">Painel de pedidos</p>
          <div className="mt-4 space-y-3">
            {["Novo pedido · #7821", "Em preparo · #7819", "Pronto para retirada · #7818"].map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

export function CourierSection() {
  return (
    <Section id="motoboy" title="Para o motoboy" subtitle="Uma experiência mobile clara para acelerar cada entrega.">
      <div className="mx-auto max-w-md">
        <Card className="border-slate-200">
          <p className="text-sm text-slate-500">Pedido pronto</p>
          <p className="mt-1 font-semibold text-slate-900">#9154 · Burger House</p>
          <p className="mt-4 text-sm text-slate-500">Endereço</p>
          <p className="font-medium text-slate-800">Rua das Flores, 120 - Centro</p>
          <div className="mt-5 grid gap-3">
            <button className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">Abrir rota</button>
            <button className="rounded-xl bg-primary px-4 py-3 font-semibold text-white">Finalizar entrega</button>
          </div>
          <p className="mt-4 text-sm text-emerald-600">Status: Entrega em andamento</p>
        </Card>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="precos" title="Planos" subtitle="Escolha o plano ideal para a fase atual da sua operação.">
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col gap-4 border-slate-200 ${plan.highlight ? "relative ring-2 ring-primary/25" : ""}`}>
            {plan.highlight ? <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">Mais escolhido</span> : null}
            <p className="text-xl font-bold text-slate-900">{plan.name}</p>
            <p className="text-3xl font-extrabold text-primary">{plan.price}</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <button className={`mt-auto rounded-xl px-4 py-2.5 font-semibold ${plan.highlight ? "bg-primary text-white" : "bg-slate-900 text-white"}`}>
              Começar agora
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <div className="rounded-3xl bg-slate-900 px-8 py-14 text-white shadow-2xl shadow-slate-300">
        <h3 className="text-3xl font-bold">Leve seu delivery para outro nível.</h3>
        <p className="mt-3 max-w-2xl text-slate-300">Comece com uma plataforma moderna, simples e pronta para crescer com sua operação.</p>
        <button className="mt-7 rounded-xl bg-primary px-6 py-3 font-semibold text-white">Quero conhecer a Moven</button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-xl font-extrabold text-primary">Moven</p>
          <p className="mt-1 text-sm text-slate-500">Delivery em movimento.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-500">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} className="hover:text-slate-800">{item.label}</a>
          ))}
        </div>
        <div className="text-sm text-slate-500">
          <p>Contato temporário:</p>
          <p>contato@moven.app</p>
          <p>(11) 99999-0000</p>
          <p className="mt-4">© {new Date().getFullYear()} Moven. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
