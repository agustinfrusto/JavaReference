#!/bin/bash
# Restaura la configuración de Electron en package.json si se revirtió,
# y reinstala las dependencias si faltan. Uso:  ./restore-electron.sh
cd "$(dirname "$0")" || exit 1

node -e '
const fs = require("fs");
const p = JSON.parse(fs.readFileSync("package.json", "utf8"));
let changed = false;

if (p.main !== "electron/main.cjs") { p.main = "electron/main.cjs"; changed = true; }

p.scripts = p.scripts || {};
const scripts = {
  electron: "electron .",
  "app:dev": "npm run build && electron .",
  dist: "npm run build && electron-builder --mac dmg",
};
for (const k in scripts) if (p.scripts[k] !== scripts[k]) { p.scripts[k] = scripts[k]; changed = true; }

p.devDependencies = p.devDependencies || {};
const deps = { electron: "^42.4.1", "electron-builder": "^26.15.3" };
for (const k in deps) if (!p.devDependencies[k]) { p.devDependencies[k] = deps[k]; changed = true; }

if (changed) {
  fs.writeFileSync("package.json", JSON.stringify(p, null, 2) + "\n");
  console.log("✓ package.json restaurado");
} else {
  console.log("✓ package.json ya estaba correcto");
}
'

if [ ! -d node_modules/electron ] || [ ! -d node_modules/electron-builder ]; then
  echo "Instalando dependencias de Electron…"
  npm install
fi

echo "Listo. Para compilar el instalable:  npm run dist"
