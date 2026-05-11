/**
 * Copia o brand kit oficial para public/brand e atualiza app/icon.png.
 * Caminho: variável XNEXUM_BRAND_KIT ou pastas comuns (irmã do repo ou dentro do repo).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const candidates = [
  process.env.XNEXUM_BRAND_KIT,
  path.join(root, "xnexum_brandkit"),
  path.join(root, "xNexum_BrandKit"),
  path.join(root, "..", "xNexum_BrandKit"),
  path.join(root, "..", "xnexum_brandkit"),
].filter(Boolean);

function isBrandDir(dir) {
  try {
    const st = fs.statSync(dir);
    if (!st.isDirectory()) return false;
    const names = fs.readdirSync(dir);
    return names.some((n) => /\.(png|pdf)$/i.test(n));
  } catch {
    return false;
  }
}

const source = candidates.find(isBrandDir);

const destBrand = path.join(root, "public", "brand");
const destIcon = path.join(root, "app", "icon.png");

if (!source) {
  console.warn(
    "[sync-brand] Nenhuma pasta de brand kit encontrada. Defina XNEXUM_BRAND_KIT ou coloque o kit em xnexum_brandkit/ na raiz do projeto.",
  );
  console.warn("[sync-brand] Caminhos tentados:\n  " + candidates.join("\n  "));
  process.exit(0);
}

fs.mkdirSync(destBrand, { recursive: true });

const files = fs.readdirSync(source).filter((f) => /\.(png|pdf)$/i.test(f));
let copied = 0;
for (const name of files) {
  fs.copyFileSync(path.join(source, name), path.join(destBrand, name));
  copied++;
}

const appIcon = path.join(source, "xnexum_app_icon.png");
if (fs.existsSync(appIcon)) {
  fs.copyFileSync(appIcon, destIcon);
  console.log("[sync-brand] app/icon.png ← xnexum_app_icon.png");
}

console.log(`[sync-brand] Origem: ${source}`);
console.log(`[sync-brand] ${copied} ficheiro(s) → public/brand/`);
