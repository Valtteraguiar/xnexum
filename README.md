# xNexum — site institucional

Este repositório é o **site público** da xNexum (páginas, textos e identidade visual).

## O que fazer na tua máquina

```bash
cd xNexum
npm install
npm run dev
```

Abre o navegador em **http://localhost:3000**.

## Deploy na Vercel (passo a passo)

1. Abre **[vercel.com](https://vercel.com)** e entra (recomendado: **Continue with GitHub**).
2. **Add New…** → **Project** → **Import** o repositório **`Valtteraguiar/xnexum`** (autoriza a Vercel a ver os teus repos se pedir).
3. Deixa os valores por defeito: **Framework Preset** = Next.js, **Build Command** = `npm run build`, **Output** = (vazio).
4. Clica em **Deploy**. Ao fim de 1–2 minutos tens um link tipo `xnexum-xxx.vercel.app`.

**Domínio próprio:** no projeto → **Settings** → **Domains** → adiciona `xnexum.com.br` (ou outro) e segue as instruções de DNS que a Vercel mostra.

**Deploy automático:** cada `git push` para `main` volta a fazer deploy sozinho (vem ligado por defeito).

**URL canónica (opcional):** em **Settings** → **Environment Variables** → cria `NEXT_PUBLIC_SITE_URL` = `https://seudominio.com` (produção), para links e Open Graph usarem sempre esse endereço.

Atalho: **[Abrir importação na Vercel](https://vercel.com/new/import?s=https://github.com/Valtteraguiar/xnexum)** (escolhe o repo e faz *Deploy*).

## Brand kit (logos)

Os ficheiros estão em `public/brand/`. Para copiar de novo a pasta oficial ao lado do projeto:

```bash
npm run sync-brand
```

---

**Resumo:** GitHub **Valtteraguiar/xnexum** → na **Vercel** importas o repo → **Deploy**. Em casa: `npm run dev`.

### Outro hosting (ex.: VPS na Hostinger)

Precisas de **Node.js** no servidor (VPS), não basta alojamento partilhado só com PHP. Se um dia fores por aí: `git clone` → `npm ci` → `npm run build` → `npm start` (idealmente com **PM2** + **Nginx** à frente).
