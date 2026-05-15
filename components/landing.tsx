import { Card, Section } from "@/components/ui";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Motoboy", href: "#motoboy" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

const benefits = [
  "Pedidos em tempo real",
  "Gestão de motoboys",
  "PIX integrado",
  "App instalável/PWA",
  "Dashboard inteligente",
  "Notificações automáticas",
];

const steps = [
  "Cliente faz o pedido",
  "Loja recebe e prepara",
  "Motoboy abre a rota",
  "Cliente acompanha o status",
];

const plans = [
  { name: "Inicial", price: "R$ 99/mês", highlight: false },
  { name: "Profissional", price: "R$ 149/mês", highlight: true },
  { name: "Premium", price: "R$ 199/mês", highlight: false },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-xl font-black tracking-tight text-primary">Moven</a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-dark">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700">
          Solicitar demonstração
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
      <div>
        <p className="mb-4 inline-flex rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-primary">Delivery em movimento.</p>
        <h1 className="text-4xl font-extrabold leading-tight text-dark md:text-5xl">O delivery moderno para lanchonetes que querem vender mais.</h1>
        <p className="mt-6 text-lg text-gray-600">Pedidos, gestão e entregas em tempo real em uma plataforma simples, bonita e rápida.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-rose-700">Solicitar demonstração</button>
          <a href="#recursos" className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-dark transition hover:bg-gray-50">Ver recursos</a>
        </div>
      </div>
      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Painel em tempo real</h3>
        {["Pedido #2431 · Em preparo", "Pedido #2432 · Saiu para entrega", "Pedido #2433 · Aguardando motoboy"].map((order) => (
          <div key={order} className="rounded-xl border border-gray-100 p-4">
            <p className="font-medium text-dark">{order}</p>
            <p className="text-sm text-gray-500">Atualizado há poucos segundos</p>
          </div>
        ))}
      </Card>
    </section>
  );
}

export function Benefits() {
  return (
    <Section id="recursos" title="Recursos pensados para operação real" subtitle="Tudo o que sua lanchonete precisa para controlar pedidos e entregas sem caos.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => (
          <Card key={item}>
            <p className="font-semibold">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section title="Como funciona" subtitle="Fluxo simples do pedido até a entrega.">
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((step, i) => (
          <Card key={step}>
            <p className="text-sm text-primary">Etapa {i + 1}</p>
            <p className="mt-2 font-semibold">{step}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function RestaurantSection() {
  return (
    <Section id="plataforma" title="Para a lanchonete" subtitle="Menos confusão, mais controle e pedidos organizados em um só lugar.">
      <div className="grid gap-5 md:grid-cols-2">
        {["menos confusão", "mais controle", "pedidos organizados", "status em tempo real"].map((item) => (
          <Card key={item}>
            <p className="font-semibold capitalize">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function CourierSection() {
  return (
    <Section id="motoboy" title="Para o motoboy" subtitle="Entregas claras com o próximo passo sempre visível.">
      <div className="grid gap-5 md:grid-cols-2">
        {["Pedido pronto", "Endereço: Rua Central, 120", "Botão abrir rota", "Finalizar entrega"].map((item) => (
          <Card key={item}>
            <p className="font-semibold">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="precos" title="Preços" subtitle="Planos para cada etapa de crescimento.">
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col gap-4 ${plan.highlight ? "ring-2 ring-primary/20" : ""}`}>
            <p className="text-xl font-bold">{plan.name}</p>
            <p className="text-3xl font-extrabold text-primary">{plan.price}</p>
            <button className="mt-auto rounded-xl bg-dark px-4 py-2 font-semibold text-white">Começar agora</button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
      <Card className="bg-dark text-white">
        <h3 className="text-3xl font-bold">Leve seu delivery para outro nível.</h3>
        <button className="mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-white">Quero conhecer a Moven</button>
      </Card>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-xl font-extrabold text-primary">Moven</p>
          <p className="text-sm text-gray-500">Delivery em movimento.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
