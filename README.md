# Moven

Plataforma local de delivery multiestabelecimento para restaurantes, lanchonetes,
pizzarias, açaí, marmitarias e outros negócios de comida.

## Estrutura principal

O projeto publicado fica em `app/`. Dentro dele, as rotas usam grupos do App Router
para separar responsabilidades sem alterar as URLs públicas.

```txt
app/
  app/
    (landing)/       Landing comercial pública
    (client)/        Vitrine do cliente em /app
    (stores)/        Páginas públicas das lojas e checkout
    (panel)/         Painel do estabelecimento em /painel
    (admin)/         Administração da plataforma em /admin
    layout.tsx       Layout raiz
    globals.css      Estilos globais
  components/
    landing/         Componentes da landing
    client/          Header e vitrine do app cliente
    store/           Página da loja e modal de produto
    cart/            Carrinho desktop e mobile
    panel/           Shell e componentes do painel
    admin/           Componentes do admin da plataforma
    cards/           Cards reutilizáveis
    ui/              Componentes base
  data/              Dados mockados
  lib/               Hooks, utils, serviços e repositórios
  types/             Tipos TypeScript compartilhados
```

## Rotas principais

- `/`: landing comercial oficial do Moven.
- `/app`: vitrine local para clientes.
- `/app/[storeSlug]`: rota de compatibilidade que redireciona para a loja pública.
- `/[storeSlug]`: página pública de cada loja.
- `/{storeSlug}/checkout`: checkout demonstrativo.
- `/painel`: redireciona para o painel do estabelecimento.
- `/painel/login`: login demonstrativo do painel.
- `/painel/dashboard`: dashboard do estabelecimento.
- `/admin`: visão administrativa da plataforma.

## Comandos

```bash
npm run dev
npm run build
npm run lint
```

Comandos específicos da aplicação principal:

```bash
npm run dev:app
npm run build:app
npm run start:app
npm run lint:app
```

## Observações

A base ainda não implementa backend real, autenticação, banco de dados, pagamento
ou checkout funcional. A estrutura já separa dados mockados, serviços, repositórios,
hooks e tipos para evoluir essas camadas com segurança.
