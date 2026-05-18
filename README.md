# Moven

Este repositório está separado em dois projetos Next.js independentes:

- `landing`: landing page pública do Moven.
- `app`: aplicação principal do Moven.

## Comandos

```bash
npm run dev:landing
npm run dev:app
```

A landing roda na porta `3000` e o app roda na porta `3001`.

## Landing em produção

A landing usa uma tela temporária enquanto o produto está em desenvolvimento.

- Produção: exibe a página de “Em breve” por padrão.
- Desenvolvimento: exibe a landing real na rota `/`.
- Desenvolvimento com tela temporária ativa: acesse a landing real em `/dev-preview`.

Variáveis disponíveis para a landing:

```bash
NEXT_PUBLIC_SITE_STATUS=coming_soon
NEXT_PUBLIC_SHOW_COMING_SOON=true
```

Quando a landing estiver pronta para produção, use:

```bash
NEXT_PUBLIC_SITE_STATUS=live
```
