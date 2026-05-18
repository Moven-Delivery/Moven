import { AppHeader } from "@/components/client/app-header";
import { CityFavorites } from "@/components/client/marketplace/city-favorites";
import { CompactCategoryList } from "@/components/client/marketplace/compact-category-list";
import { StoreGrid } from "@/components/client/marketplace/store-grid";
import { TodayPicks } from "@/components/client/marketplace/today-picks";
import {
  compactDeliveryCategories,
  deliveryPromotions,
  deliveryStores,
} from "@/data/mock-delivery";

export default function ClientAppPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <AppHeader cartHref="/app" />
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <CompactCategoryList categories={compactDeliveryCategories} />
        <TodayPicks picks={deliveryPromotions} />
        <CityFavorites stores={deliveryStores} />
        <StoreGrid stores={deliveryStores} />
      </section>
    </main>
  );
}
