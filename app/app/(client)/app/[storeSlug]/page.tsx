import { redirect } from "next/navigation";
import { getStoreBySlug, mockStores } from "@/data/mockStores";

export function generateStaticParams() {
  return mockStores.map((store) => ({ storeSlug: store.slug }));
}

export default async function AppStoreCompatibilityPage({
  params,
}: {
  params: Promise<{ storeSlug: string }>;
}) {
  const { storeSlug } = await params;
  const store = getStoreBySlug(storeSlug);

  redirect(store ? `/${store.slug}` : "/app");
}
