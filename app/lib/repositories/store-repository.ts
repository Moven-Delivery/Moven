import { getStoreBySlug, mockStores } from "@/data/mockStores";

export const storeRepository = {
  list() {
    return mockStores;
  },
  findBySlug(slug: string) {
    return getStoreBySlug(slug);
  },
};
