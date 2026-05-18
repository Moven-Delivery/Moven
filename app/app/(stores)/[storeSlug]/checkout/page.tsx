import { ArrowLeft, CreditCard, Home, ReceiptText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/client/app-header";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getStoreBySlug, mockStores } from "@/data/mockStores";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return mockStores.map((store) => ({ storeSlug: store.slug }));
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ storeSlug: string }>;
}) {
  const { storeSlug } = await params;
  const store = getStoreBySlug(storeSlug);

  if (!store) {
    notFound();
  }

  const items = store.products.slice(0, 2);
  const subtotal = items.reduce((total, product) => total + product.price, 0);
  const total = subtotal + store.deliveryFee;

  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <AppHeader
        backHref={`/${store.slug}`}
        backLabel="Voltar para loja"
        cartHref="#resumo"
        showSearch={false}
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary"
          href={`/${store.slug}`}
        >
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Voltar para {store.name}
        </Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-primary">
                  <Home aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <h1 className="text-2xl font-bold text-dark">Checkout</h1>
                  <p className="text-sm text-slate-500">Estrutura visual para finalizar pedido.</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <h2 className="text-lg font-bold text-dark">Endereço de entrega</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Rua</p>
                  <p className="mt-2 font-semibold text-dark">Rua das Palmeiras, 120</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Bairro
                  </p>
                  <p className="mt-2 font-semibold text-dark">Centro</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <h2 className="text-lg font-bold text-dark">Forma de pagamento</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Pix", "Cartão", "Dinheiro"].map((method, index) => (
                  <div
                    className={
                      index === 0
                        ? "rounded-xl border border-orange-300 bg-orange-50 p-4"
                        : "rounded-xl border border-slate-200 p-4"
                    }
                    key={method}
                  >
                    <CreditCard aria-hidden className="h-5 w-5 text-primary" />
                    <p className="mt-3 font-bold text-dark">{method}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside
            className="h-max rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            id="resumo"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Resumo</p>
                <h2 className="mt-1 text-xl font-bold text-dark">{store.name}</h2>
              </div>
              <ReceiptText aria-hidden className="h-6 w-6 text-orange-500" />
            </div>
            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div className="flex justify-between gap-3" key={item.id}>
                  <div>
                    <p className="font-semibold text-dark">1x {item.name}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                  <strong className="text-slate-700">{formatCurrency(item.price)}</strong>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Taxa de entrega</span>
                <strong>{formatCurrency(store.deliveryFee)}</strong>
              </div>
              <div className="flex justify-between text-lg font-bold text-dark">
                <span>Total</span>
                <strong>{formatCurrency(total)}</strong>
              </div>
            </div>
            <Badge className="mt-5 w-full justify-center" variant="warning">
              Checkout demonstrativo, sem pagamento real
            </Badge>
            <ButtonLink className="mt-5 w-full" href="/app">
              Finalizar visualmente
            </ButtonLink>
          </aside>
        </div>
      </section>
    </main>
  );
}
