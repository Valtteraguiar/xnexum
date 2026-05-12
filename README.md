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

**Domínio na Vercel:** no projeto → **Settings** → **Domains** → adiciona **`www.xnexum.com.br`** (e, se quiseres, também **`xnexum.com.br`** sem `www`). A Vercel mostra os valores exactos de DNS — copia-os tal qual.

**Variável de ambiente (recomendado):** **Settings** → **Environment Variables** → `NEXT_PUBLIC_SITE_URL` = `https://www.xnexum.com.br` (ambiente **Production**). Assim metadados e Open Graph usam sempre o `www`.

**Deploy automático:** cada `git push` para `main` volta a fazer deploy sozinho (vem ligado por defeito).

### Domínio `www.xnexum.com.br` a dar erro — checklist DNS

O site no código assume **`https://www.xnexum.com.br`** como endereço principal; o apex **`xnexum.com.br`** redireciona para o `www` (configuração no `next.config.ts`).

1. **Na Vercel** (Domains): tens **`www.xnexum.com.br`** (e opcionalmente `xnexum.com.br`) associados **a este projecto**? Remove domínios duplicados noutro projecto Vercel.
2. **No registo do domínio** (Registro.br, Hostinger DNS, Cloudflare, etc.), cria os registos que a **Vercel indica** naquele ecrã (não inventes o alvo). Em geral:
   - **`www`** → registo **CNAME** → alvo tipo **`cname.vercel-dns.com`** ou o valor que a Vercel mostrar (pode variar; usa sempre o da tua conta).
   - **`xnexum.com.br`** (raiz, sem `www`) → normalmente **A** para o IP que a Vercel indicar (ex.: **`76.76.21.21`**) ou **ALIAS/ANAME** se o painel tiver — **não uses CNAME na raiz** (não é permitido na especificação DNS).
3. **CAA:** se existirem registos CAA no domínio, tem de existir permissão para a Let’s Encrypt (a Vercel usa isso para o certificado). Ex.: `0 issue "letsencrypt.org"` ou remove CAA restritivos até o certificado gerar.
4. **Propagação:** DNS pode demorar **minutos a horas**. No painel da Vercel, abre o domínio e vê se passa de *Invalid* / *Pending* para *Valid*.

Se depois disto ainda falhar, no ecrã do domínio na Vercel copia a **mensagem de erro exacta** (ou um print) — “Invalid Configuration” vs “Certificate Error” têm causas diferentes.

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
