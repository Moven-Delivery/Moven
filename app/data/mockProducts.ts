import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "prod-burger-01",
    storeId: "store-burger-house",
    categoryId: "cat-burgers",
    name: "Clássico House",
    description: "Pão brioche, hambúrguer artesanal, queijo, alface, tomate e molho especial.",
    price: 29.9,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-burger-02",
    storeId: "store-burger-house",
    categoryId: "cat-burgers",
    name: "Duplo Bacon",
    description: "Dois hambúrgueres, cheddar cremoso, bacon crocante e cebola caramelizada.",
    price: 38.9,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-burger-03",
    storeId: "store-burger-house",
    categoryId: "cat-combos",
    name: "Combo Smash",
    description: "Smash burger, batata rústica e refrigerante lata.",
    price: 34.9,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    availability: "disponivel",
  },
  {
    id: "prod-pizza-01",
    storeId: "store-bella-massa",
    categoryId: "cat-pizzas",
    name: "Pizza Margherita",
    description: "Molho de tomate, muçarela, tomate fresco, manjericão e azeite.",
    price: 49.9,
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-pizza-02",
    storeId: "store-bella-massa",
    categoryId: "cat-pizzas",
    name: "Calabresa Especial",
    description: "Calabresa fatiada, cebola roxa, muçarela e orégano.",
    price: 54.9,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-pizza-03",
    storeId: "store-bella-massa",
    categoryId: "cat-bebidas",
    name: "Refrigerante 2L",
    description: "Opções geladas para acompanhar sua pizza.",
    price: 12.9,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
    availability: "disponivel",
  },
  {
    id: "prod-acai-01",
    storeId: "store-acai-tropical",
    categoryId: "cat-acai",
    name: "Açaí Tropical 500 ml",
    description: "Açaí cremoso com banana, leite em pó, granola e leite condensado.",
    price: 24.9,
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-acai-02",
    storeId: "store-acai-tropical",
    categoryId: "cat-acai",
    name: "Copo Energia 700 ml",
    description: "Açaí, morango, paçoca, castanha e creme de ninho.",
    price: 32.9,
    image:
      "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-acai-03",
    storeId: "store-acai-tropical",
    categoryId: "cat-vitaminas",
    name: "Vitamina de Morango",
    description: "Morango, leite gelado e toque de mel.",
    price: 17.9,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
    availability: "disponivel",
  },
  {
    id: "prod-marmita-01",
    storeId: "store-marmitaria-caseira",
    categoryId: "cat-marmitas",
    name: "Marmita Executiva",
    description: "Arroz, feijão, bife acebolado, salada fresca e farofa.",
    price: 22.9,
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-marmita-02",
    storeId: "store-marmitaria-caseira",
    categoryId: "cat-marmitas",
    name: "Frango Grelhado",
    description: "Arroz integral, feijão, frango grelhado, legumes e salada.",
    price: 21.9,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    featured: true,
    availability: "disponivel",
  },
  {
    id: "prod-marmita-03",
    storeId: "store-marmitaria-caseira",
    categoryId: "cat-pratos-do-dia",
    name: "Feijoada da Casa",
    description: "Feijoada completa com arroz, couve, farofa e laranja.",
    price: 28.9,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    availability: "disponivel",
  },
];
