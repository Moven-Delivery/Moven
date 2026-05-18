import type { Store } from "@/types/store";
import { mockProducts } from "./mockProducts";

const productsByStore = (storeId: string) =>
  mockProducts.filter((product) => product.storeId === storeId);

export const mockStores: Store[] = [
  {
    id: "store-burger-house",
    name: "Burger House",
    slug: "burger-house",
    description: "Hambúrgueres artesanais, combos completos e batatas crocantes.",
    banner:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=400&q=80",
    category: "Hamburgueria",
    deliveryFee: 5.9,
    deliveryTime: "35-45 min",
    rating: 4.8,
    isOpen: true,
    neighborhood: "Centro",
    minimumOrder: 18,
    categories: [
      { id: "cat-burgers", name: "Hambúrgueres" },
      { id: "cat-combos", name: "Combos" },
    ],
    products: productsByStore("store-burger-house"),
  },
  {
    id: "store-bella-massa",
    name: "Pizzaria Bella Massa",
    slug: "pizzaria-bella-massa",
    description: "Pizzas assadas em alta temperatura, massas leves e sabores clássicos.",
    banner:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=400&q=80",
    category: "Pizzaria",
    deliveryFee: 6.9,
    deliveryTime: "45-60 min",
    rating: 4.7,
    isOpen: true,
    neighborhood: "Jardim Europa",
    minimumOrder: 35,
    categories: [
      { id: "cat-pizzas", name: "Pizzas" },
      { id: "cat-bebidas", name: "Bebidas" },
    ],
    products: productsByStore("store-bella-massa"),
  },
  {
    id: "store-acai-tropical",
    name: "Açaí Tropical",
    slug: "acai-tropical",
    description: "Açaí cremoso, vitaminas geladas e combinações com frutas frescas.",
    banner:
      "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=400&q=80",
    category: "Açaí",
    deliveryFee: 4.9,
    deliveryTime: "25-35 min",
    rating: 4.9,
    isOpen: true,
    neighborhood: "Vila Nova",
    minimumOrder: 15,
    categories: [
      { id: "cat-acai", name: "Açaí" },
      { id: "cat-vitaminas", name: "Vitaminas" },
    ],
    products: productsByStore("store-acai-tropical"),
  },
  {
    id: "store-marmitaria-caseira",
    name: "Marmitaria Caseira",
    slug: "marmitaria-caseira",
    description: "Comida de verdade para o dia a dia, com marmitas bem servidas.",
    banner:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    logo:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80",
    category: "Marmitaria",
    deliveryFee: 3.9,
    deliveryTime: "30-40 min",
    rating: 4.6,
    isOpen: false,
    neighborhood: "São José",
    minimumOrder: 16,
    categories: [
      { id: "cat-marmitas", name: "Marmitas" },
      { id: "cat-pratos-do-dia", name: "Pratos do dia" },
    ],
    products: productsByStore("store-marmitaria-caseira"),
  },
];

export const getStoreBySlug = (slug: string) =>
  mockStores.find((store) => store.slug === slug);
