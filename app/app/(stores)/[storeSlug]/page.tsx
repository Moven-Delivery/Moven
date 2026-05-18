import { notFound } from "next/navigation";
import { AppHeader } from "@/components/client/app-header";
import { StoreHeader } from "@/components/store/store-header";
import { StoreOrderExperience } from "@/components/store/store-order-experience";
import { getStoreBySlug, mockStores } from "@/data/mockStores";

export function generateStaticParams() {
  return mockStores.map((store) => ({ storeSlug: store.slug }));
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ storeSlug: string }>;
}) {
  const { storeSlug } = await params;
  const store = getStoreBySlug(storeSlug);

  if (!store) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fffaf7] pb-24 lg:pb-0">
      <AppHeader
        backHref="/app"
        backLabel="Voltar para lojas"
        cartHref="#carrinho"
        showSearch={false}
      />
      <StoreHeader store={store} />
      <StoreOrderExperience store={store} />
    </main>
  );
}
