const statusItems = [
  "Cardápio digital",
  "Pedidos em tempo real",
  "Entrega conectada",
  "Operação local",
];

const orderItems = [
  { label: "Novo pedido", value: "#1284", detail: "Combo artesanal + suco", tone: "bg-primary" },
  { label: "Em preparo", value: "12 min", detail: "Cozinha sincronizada", tone: "bg-amber-400" },
  { label: "Saindo para entrega", value: "2,4 km", detail: "Rota em acompanhamento", tone: "bg-emerald-500" },
];

export function ComingSoonPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fff7f7_0%,#f8fafc_42%,#ffffff_100%)] text-slate-950">
      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-[1fr_0.92fr] md:px-10 md:py-16 lg:px-12">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

        <div className="max-w-2xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-rose-700 text-2xl font-black text-white shadow-xl shadow-rose-200">
              M
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-slate-950">Moven</p>
              <p className="text-sm font-medium text-slate-500">Delivery, tecnologia e operação local</p>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <p className="inline-flex rounded-full border border-rose-200 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm shadow-rose-100">
              Projeto em desenvolvimento
            </p>
            <p className="inline-flex rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Em breve
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Delivery local, simples e inteligente.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A Moven está sendo preparada para conectar restaurantes, pedidos e entregas em uma experiência simples, moderna e eficiente.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {statusItems.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>

          <button
            className="mt-10 inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-slate-950 px-6 py-4 text-sm font-bold text-white opacity-90 shadow-xl shadow-slate-300/60"
            disabled
          >
            Em breve para restaurantes locais
          </button>
        </div>

        <div className="relative">
          <div className="relative rounded-lg border border-white/80 bg-white/90 p-4 shadow-2xl shadow-slate-300/70 backdrop-blur">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-bold">Painel Moven</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">Prévia operacional</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-rose-100">Em construção</span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Pedidos</p>
                  <p className="mt-2 text-2xl font-black">38</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Tempo médio</p>
                  <p className="mt-2 text-2xl font-black">24 min</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">Entregas</p>
                  <p className="mt-2 text-2xl font-black">12</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-slate-950">Fila inteligente</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">Pedidos, preparo e entrega no mesmo fluxo</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200" />
              </div>

              <div className="space-y-3">
                {orderItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                      <div>
                        <p className="text-sm font-bold text-slate-950">{item.label}</p>
                        <p className="mt-0.5 text-xs font-medium text-slate-500">{item.detail}</p>
                      </div>
                    </div>
                    <p className="text-sm font-black text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold uppercase text-slate-400">Status</p>
                <p className="mt-3 text-lg font-black text-slate-950">Preparando</p>
                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-3/4 rounded-full bg-primary" />
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold uppercase text-slate-400">Entrega conectada</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="mt-3 flex justify-between text-xs font-semibold text-slate-500">
                  <span>Loja</span>
                  <span>Rota</span>
                  <span>Cliente</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-rose-100 bg-rose-50/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-slate-800">Estamos preparando algo especial.</p>
                <p className="text-xs font-bold uppercase text-primary">Moven</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
