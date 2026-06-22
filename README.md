# ☕ JavaReference

App de escritorio para consultar de forma ordenada la sintaxis y el funcionamiento de Java.
Una **herramienta personal** que uso de apoyo mientras trabajo con Java: referencia rápida,
atajos de IDE y plantillas de código a un clic.

> ⚡ Esta app está **vibecodeada**. No es un
> producto pulido ni pretende serlo: es una herramienta práctica para mi día a día (make no mistakes).
> Solamente publico esta herramienta por el hecho de que pueda ser de ayuda a algun usuario, no pienso documentarla mas de lo necesario.
> Tampoco llevo un control estricto de versiones.

## Qué incluye

- **Referencia de Java** ordenada por categorías (fundamentos, POO, colecciones, streams…).
- **Buscador** instantáneo sobre todo el contenido.
- **Atajos de IDE** (IntelliJ IDEA, VS Code, Eclipse) para macOS y Windows/Linux.
- **Plantillas / live templates** (`sout`, `psvm`, `fori`, postfix…).
- Tema **Cyberpunk Neon** en la interfaz; los ejemplos de código usan los colores de IntelliJ (Darcula).

## Stack

React + Vite, empaquetada como app de escritorio con Electron.

## Uso

En el navegador (desarrollo):

```bash
npm install
npm run dev
```

Compilar la app de escritorio (genera el `.dmg` en `release/`):

```bash
npm run dist
```

> La app no está firmada con certificado de Apple. La primera vez:
> clic derecho sobre la app → **Abrir**.

## Notas

- El contenido vive en `src/data/` (`content.js`, `shortcuts.js`, `templates.js`) — fácil de editar.
- La config de empaquetado está en `electron-builder.yml`.
- Si `package.json` pierde la config de Electron, corre `./restore-electron.sh`.
