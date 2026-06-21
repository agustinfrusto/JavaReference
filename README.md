# ☕ JavaSpresso

App web para consultar de forma ordenada la sintaxis y el funcionamiento de Java.
Hecha con **React + Vite** sobre **Node**. Es una **PWA**: instalable y funciona sin conexión.

## Características

- **10 categorías** ordenadas de lo básico a lo avanzado (Fundamentos → POO → Streams).
- **Buscador instantáneo** que filtra por título, descripción y código.
- **Resaltado de sintaxis Java** propio (sin dependencias externas).
- **Botón de copiar** en cada ejemplo de código.
- **Modo claro / oscuro** (recuerda tu preferencia).
- **PWA**: botón "Instalar app" y precarga offline (service worker).
- Diseño responsive.

## Cómo ejecutarla

```bash
npm install     # instalar dependencias (solo la primera vez)
npm run dev     # arranca en http://localhost:5173
```

Otros comandos:

```bash
npm run build   # compila para producción en /dist
npm run preview # sirve la versión compilada
```

## Contenido

Fundamentos · Control de flujo · Métodos · POO · Strings · Arrays y Colecciones ·
Excepciones · Genéricos · Programación funcional · E/S y utilidades.

## Cómo agregar o editar temas

Todo el contenido vive en un solo archivo: [`src/data/content.js`](src/data/content.js).
Cada tema tiene esta forma:

```js
{
  id: 'mi-tema',
  title: 'Título del tema',
  body: 'Explicación breve.',
  code: `// ejemplo de código Java`,
  notes: ['Nota opcional 1', 'Nota opcional 2'],
}
```

Agrega objetos a `topics` dentro de la categoría que quieras (o crea una categoría nueva).
La navegación y el buscador se actualizan solos.
