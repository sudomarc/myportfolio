/* Vérification structurelle du site statique — Node, sans dépendance.
   Usage : node scripts/verify.mjs */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const ok = (msg) => console.log(`  ok   ${msg}`);
const fail = (msg) => errors.push(msg);

/* ---------- 1. Fichiers requis ---------- */
const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "icon.svg",
  "robots.txt",
  "404.html",
  "vercel.json",
  "mentions-legales.html",
  "confidentialite.html",
  "cookies.html",
  "work/amplio-web.html",
  "work/le-patio.html",
  "work/naya-beauty.html",
  "README.md",
  "AGENTS.md",
  "ROADMAP.md",
  "ARCHITECTURE.md",
];

console.log("\n[1/6] Fichiers requis");
for (const file of requiredFiles) {
  if (existsSync(join(root, file))) ok(file);
  else fail(`fichier manquant : ${file}`);
}

/* ---------- 2. Absence de framework ---------- */
console.log("\n[2/6] Aucun artefact de framework");
const forbidden = [
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "next.config.ts",
  "next.config.js",
  "postcss.config.mjs",
  "eslint.config.mjs",
  "next-env.d.ts",
  ".env.example",
  "node_modules",
  "app",
  "components",
  "data",
  "lib",
  "public",
];
for (const item of forbidden) {
  if (!existsSync(join(root, item))) ok(`absent : ${item}`);
  else fail(`artefact de framework présent : ${item}`);
}

const walk = (dir) => {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    if (entry === ".git" || entry === "node_modules") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
};

const allFiles = walk(root);
const tsx = allFiles.filter((f) => /\.(tsx|jsx|ts|vue|svelte|astro)$/.test(f));
if (tsx.length === 0) ok("aucun fichier .ts/.tsx/.js framework");
else fail(`fichiers framework détectés : ${tsx.join(", ")}`);

/* ---------- 3. Pages HTML : structure de base ---------- */
console.log("\n[3/6] Structure HTML des pages");
const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));
if (htmlFiles.length < 7) fail(`pages HTML inattendues : ${htmlFiles.length}`);

for (const file of htmlFiles) {
  const rel = file.slice(root.length + 1);
  const html = readFileSync(file, "utf8");
  const check = (cond, label) => {
    if (cond) ok(`${rel} : ${label}`);
    else fail(`${rel} : ${label} MANQUANT`);
  };

  check(/^<!doctype html>/i.test(html), "doctype");
  check(/<html lang="fr"/.test(html), "lang fr");
  check(/<title>[^<]+<\/title>/.test(html), "title");
  check(/<meta name="description" content="[^"]+"/.test(html), "meta description");
  check(/<meta name="viewport" content="width=device-width, initial-scale=1"/.test(html), "viewport");
  check(/<link rel="icon" href="\/icon\.svg"/.test(html), "favicon");
  check(/href="\/styles\.css"/.test(html), "stylesheet");
  check(/class="skip-link" href="#main-content">Aller au contenu/.test(html), "skip link");
  check(/<main[^>]*id="main-content"/.test(html), "main landmark");
  check((html.match(/<h1[\s>]/g) || []).length === 1, "exactement un h1");
  check(/<footer[\s>]/.test(html), "footer");
  check(!/style="/.test(html), "pas d'attribut style inline (CSP)");
  check(!/<script(?![^>]*\ssrc=)/.test(html), "pas de script inline (CSP)");
}

/* ---------- 4. Liens internes ---------- */
console.log("\n[4/6] Liens internes");
const hrefs = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    hrefs.add(match[1]);
  }
}

const resolve = (url) => {
  if (/^(https?:|mailto:|tel:)/.test(url)) return "external";
  const clean = url.split("#")[0].split("?")[0];
  if (clean === "") return "anchor-only";
  if (clean === "/") return existsSync(join(root, "index.html")) ? "ok" : "index.html manquant";
  const target = clean.startsWith("/") ? clean.slice(1) : clean;
  const candidates = [target, `${target}.html`, join(target, "index.html")];
  return candidates.some((c) => existsSync(join(root, c))) ? "ok" : `introuvable : ${url}`;
};

for (const href of [...hrefs].sort()) {
  const res = resolve(href);
  if (res === "ok" || res === "external" || res === "anchor-only") {
    if (res === "ok") ok(href);
    else console.log(`  --   ${href} (${res})`);
  } else {
    fail(res);
  }
}

/* ---------- 5. CSS / JS ---------- */
console.log("\n[5/6] CSS & JS");
const css = readFileSync(join(root, "styles.css"), "utf8");
if (/@media \(prefers-reduced-motion: reduce\)/.test(css)) ok("reduced-motion présent");
else fail("prefers-reduced-motion manquant");
if (/@import\s+url\(|url\(https?:/.test(css)) fail("ressource distante dans le CSS");
else ok("aucune ressource distante dans le CSS");
if (/@tailwind|!important/.test(css) === false || !/@tailwind/.test(css)) ok("pas de Tailwind");
else fail("Tailwind détecté");
if ((css.match(/:root/g) || []).length >= 1 && css.includes("--")) ok("tokens :root présents");
else fail("tokens CSS manquants");

const js = readFileSync(join(root, "script.js"), "utf8");
if (!/querySelectorAll\("\\.reveal, \\[data-reveal\\]"\)/.test(js)) {
  fail("script.js : sélecteur reveal incohérent");
} else {
  ok("script.js : sélecteur reveal cohérent");
}
if (!css.includes(".motion-ready .reveal")) {
  fail("styles.css : reveal fail-safe manquant");
} else {
  ok("styles.css : reveal fail-safe présent");
}
if (!/\beval\s*\(/.test(js)) ok("pas d'eval");
else fail("eval détecté");
if (!/\bfetch\s*\(|XMLHttpRequest/.test(js)) ok("aucun appel réseau");
else fail("appel réseau détecté dans script.js");

/* ---------- 6. Sécurité / SEO ---------- */
console.log("\n[6/6] Sécurité & SEO");
const robots = readFileSync(join(root, "robots.txt"), "utf8");
if (/Allow:\s*\//.test(robots)) ok("robots : autorisation");
else fail("robots.txt invalide");
if (/Sitemap:\s*https?:/.test(robots)) fail("robots : sitemap avant vérification du domaine");
else ok("robots : pas de sitemap fantôme");

const vercelRaw = readFileSync(join(root, "vercel.json"), "utf8");
let vercel;
try {
  vercel = JSON.parse(vercelRaw);
  ok("vercel.json : JSON valide");
} catch {
  fail("vercel.json : JSON invalide");
}
if (vercel?.headers?.some((h) => h.headers?.some((x) => x.key === "Content-Security-Policy"))) {
  ok("CSP présente");
} else fail("CSP absente de vercel.json");

const index = readFileSync(join(root, "index.html"), "utf8");
if (/href="https?:\/\//.test(index)) {
  const externals = [...index.matchAll(/href="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  fail(`liens externes à vérifier : ${externals.join(", ")}`);
} else ok("index.html : aucun lien externe");

/* ---------- Bilan ---------- */
console.log("\n----------------------------------------");
if (errors.length === 0) {
  console.log(`VERIFY: PASS (${htmlFiles.length} pages HTML, ${hrefs.size} liens contrôlés)`);
  process.exit(0);
} else {
  console.log(`VERIFY: FAIL — ${errors.length} problème(s)`);
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}