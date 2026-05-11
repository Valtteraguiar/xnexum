# xNexum — site institucional

Este repositório é o **site público** da xNexum (páginas, textos e identidade visual).

## O que fazer na tua máquina

```bash
cd xNexum
npm install
npm run dev
```

Abre o navegador em **http://localhost:3000**.

## O que fazer para publicar na internet

1. Entra em **https://github.com/Valtteraguiar/xnexum** (é aqui que está o código).
2. Usa um serviço como **Vercel** (grátis): importa este repositório e carrega em **Deploy**. Ele liga ao GitHub e gera o endereço do site.

Cada vez que fizeres **push** para o GitHub, o site pode atualizar sozinho (se tiveres isso ligado no Vercel).

## Brand kit (logos)

Os ficheiros estão em `public/brand/`. Para copiar de novo a pasta oficial ao lado do projeto:

```bash
npm run sync-brand
```

---

**Resumo:** o código está no GitHub. Para ver localmente → `npm run dev`. Para ter URL na internet → ligar o repositório ao Vercel (ou outro hosting) com alguns cliques.
