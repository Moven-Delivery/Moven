import { mockStores } from "@/data/mockStores";

export const deliveryStores = mockStores;

export type DeliveryCategory = {
  id: string;
  name: string;
  icon: string;
};

export type DeliveryPromotion = {
  id: string;
  storeName: string;
  storeSlug: string;
  title: string;
  description: string;
  badge: string;
  image: string;
};

export const compactDeliveryCategories: DeliveryCategory[] = [
  { id: "hamburguer", name: "Hambúrguer", icon: "🍔" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "acai", name: "Açaí", icon: "🥤" },
  { id: "marmita", name: "Marmita", icon: "🍱" },
  { id: "lanches", name: "Lanches", icon: "🥪" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
];

export const deliveryPromotions: DeliveryPromotion[] = [
  {
    id: "promo-burger-house",
    storeName: "Burger House",
    storeSlug: "burger-house",
    title: "Frete grátis hoje",
    description: "Combos selecionados com entrega por conta da casa.",
    badge: "Oferta local",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "promo-bella-massa",
    storeName: "Pizzaria Bella Massa",
    storeSlug: "pizzaria-bella-massa",
    title: "Pizza grande com desconto",
    description: "Sabores clássicos para dividir no jantar.",
    badge: "Mais pedida",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "promo-acai-tropical",
    storeName: "Açaí Tropical",
    storeSlug: "acai-tropical",
    title: "Combo de açaí em destaque",
    description: "Açaí cremoso em tamanho grande com acompanhamentos.",
    badge: "Gelado agora",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=900&q=80",
  },
];
