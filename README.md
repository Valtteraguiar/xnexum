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

### Opção mais simples — Vercel (recomendado)

1. Repositório: **https://github.com/Valtteraguiar/xnexum**
2. Em **https://vercel.com** → criar conta → **Add New Project** → importar o GitHub **xnexum** → **Deploy**.
3. Ficas com um endereço tipo `xnexum.vercel.app` e podes ligar o teu domínio nas definições do projeto.

Cada **push** para `main` pode fazer deploy automático (activar em *Git* nas definições do projeto).

### Hostinger — usar na prática

**Alojamento partilhado “normal” (só ficheiros + PHP):** não serve para este site tal como está, porque é **Next.js** (precisa de **Node.js** a correr no servidor).

**O que usar na Hostinger:** **VPS** (KVM), onde instalas Ubuntu, Node e serviços à tua medida.

Resumo do fluxo na VPS:

1. No painel Hostinger, contrata/cria uma **VPS** e escolhe **Ubuntu** (22.04 ou 24.04).
2. Liga-te por **SSH** (o painel mostra IP e palavra-passe ou chave).
3. No servidor, instala **Node.js 20 LTS** (via NodeSource ou `nvm`), **Git** e opcionalmente **Nginx** + **Certbot** (HTTPS).
4. Clona o repositório (precisas de um **Personal Access Token** do GitHub se o repo for privado; se for público, `git clone` com a URL HTTPS basta):

   ```bash
   git clone https://github.com/Valtteraguiar/xnexum.git
   cd xnexum
   npm ci
   npm run build
   ```

5. Corre o site em produção (exemplo com **PM2**, para não parar quando fechas o SSH):

   ```bash
   npm install -g pm2
   pm2 start npm --name xnexum -- start
   pm2 save
   pm2 startup
   ```

   O Next escuta na porta **3000** por defeito.

6. **Nginx** como “proxy” na porta 80/443 para a porta 3000, e certificado SSL com **Certbot** (para teres `https://seudominio.pt`).

7. No painel da Hostinger (ou do registo do domínio), aponta o **DNS** do domínio (registo **A**) para o **IP público** da VPS.

Para **atualizar** o site depois de mudanças no GitHub:

```bash
cd ~/xnexum   # ou o caminho onde clonaste
git pull
npm ci
npm run build
pm2 restart xnexum
```

Se preferires não gerir servidor, usa **Vercel** com o mesmo GitHub — é menos trabalho do que VPS.

## Brand kit (logos)

Os ficheiros estão em `public/brand/`. Para copiar de novo a pasta oficial ao lado do projeto:

```bash
npm run sync-brand
```

---

**Resumo:** o código está no GitHub. Em casa → `npm run dev`. Na internet → **Vercel** (mais fácil) ou **Hostinger VPS** com Node + Nginx (passos acima).
