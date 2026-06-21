// Atajos de teclado de los IDEs más usados para Java.
// Cada IDE tiene grupos de atajos; cada atajo trae la combinación en
// macOS y en Windows/Linux. Símbolos macOS: ⌘ Cmd · ⌥ Option · ⌃ Control · ⇧ Shift.

export const shortcuts = [
  {
    id: 'intellij',
    name: 'IntelliJ IDEA',
    icon: '🟧',
    note: 'Keymap por defecto. El IDE de referencia para Java (Android Studio comparte la mayoría).',
    groups: [
      {
        title: 'Navegación',
        items: [
          { action: 'Buscar en todo (Search Everywhere)', mac: '⇧ ⇧', win: 'Shift Shift' },
          { action: 'Buscar acción / comando', mac: '⌘ ⇧ A', win: 'Ctrl Shift A' },
          { action: 'Ir a clase', mac: '⌘ O', win: 'Ctrl N' },
          { action: 'Ir a archivo', mac: '⌘ ⇧ O', win: 'Ctrl Shift N' },
          { action: 'Ir a símbolo', mac: '⌘ ⌥ O', win: 'Ctrl Alt Shift N' },
          { action: 'Archivos recientes', mac: '⌘ E', win: 'Ctrl E' },
          { action: 'Ir a la declaración / fuente', mac: '⌘ B', win: 'Ctrl B' },
          { action: 'Atrás / Adelante', mac: '⌘ [ · ⌘ ]', win: 'Ctrl Alt ← · →' },
          { action: 'Estructura del archivo', mac: '⌘ F12', win: 'Ctrl F12' },
          { action: 'Ir a línea', mac: '⌘ L', win: 'Ctrl G' },
        ],
      },
      {
        title: 'Edición',
        items: [
          { action: 'Autocompletar', mac: '⌃ Espacio', win: 'Ctrl Space' },
          { action: 'Autocompletar inteligente (por tipo)', mac: '⌃ ⇧ Espacio', win: 'Ctrl Shift Space' },
          { action: 'Generar (getters, constructor…)', mac: '⌘ N', win: 'Alt Insert' },
          { action: 'Sobrescribir métodos', mac: '⌃ O', win: 'Ctrl O' },
          { action: 'Implementar métodos', mac: '⌃ I', win: 'Ctrl I' },
          { action: 'Acciones rápidas / quick-fix', mac: '⌥ Enter', win: 'Alt Enter' },
          { action: 'Reformatear código', mac: '⌘ ⌥ L', win: 'Ctrl Alt L' },
          { action: 'Optimizar imports', mac: '⌃ ⌥ O', win: 'Ctrl Alt O' },
          { action: 'Comentar línea', mac: '⌘ /', win: 'Ctrl /' },
          { action: 'Duplicar línea', mac: '⌘ D', win: 'Ctrl D' },
          { action: 'Borrar línea', mac: '⌘ ⌫', win: 'Ctrl Y' },
          { action: 'Mover línea arriba / abajo', mac: '⌥ ⇧ ↑ · ↓', win: 'Alt Shift ↑ · ↓' },
          { action: 'Ampliar / reducir selección', mac: '⌥ ↑ · ⌥ ↓', win: 'Ctrl W · Ctrl Shift W' },
          { action: 'Rodear con (if, try…)', mac: '⌘ ⌥ T', win: 'Ctrl Alt T' },
          { action: 'Documentación rápida', mac: 'F1', win: 'Ctrl Q' },
        ],
      },
      {
        title: 'Refactorización',
        items: [
          { action: 'Refactor this (menú)', mac: '⌃ T', win: 'Ctrl Alt Shift T' },
          { action: 'Renombrar', mac: '⇧ F6', win: 'Shift F6' },
          { action: 'Extraer variable', mac: '⌘ ⌥ V', win: 'Ctrl Alt V' },
          { action: 'Extraer método', mac: '⌘ ⌥ M', win: 'Ctrl Alt M' },
          { action: 'Extraer campo', mac: '⌘ ⌥ F', win: 'Ctrl Alt F' },
          { action: 'Extraer constante', mac: '⌘ ⌥ C', win: 'Ctrl Alt C' },
          { action: 'Insertar en línea (inline)', mac: '⌘ ⌥ N', win: 'Ctrl Alt N' },
        ],
      },
      {
        title: 'Ejecutar y depurar',
        items: [
          { action: 'Ejecutar', mac: '⌃ R', win: 'Shift F10' },
          { action: 'Depurar', mac: '⌃ D', win: 'Shift F9' },
          { action: 'Compilar proyecto', mac: '⌘ F9', win: 'Ctrl F9' },
          { action: 'Punto de interrupción', mac: '⌘ F8', win: 'Ctrl F8' },
          { action: 'Step over / into', mac: 'F8 · F7', win: 'F8 · F7' },
          { action: 'Reanudar programa', mac: '⌥ ⌘ R', win: 'F9' },
        ],
      },
      {
        title: 'Búsqueda',
        items: [
          { action: 'Buscar / Reemplazar', mac: '⌘ F · ⌘ R', win: 'Ctrl F · Ctrl R' },
          { action: 'Buscar en proyecto', mac: '⌘ ⇧ F', win: 'Ctrl Shift F' },
          { action: 'Reemplazar en proyecto', mac: '⌘ ⇧ R', win: 'Ctrl Shift R' },
          { action: 'Buscar usos', mac: '⌥ F7', win: 'Alt F7' },
        ],
      },
    ],
  },

  {
    id: 'vscode',
    name: 'VS Code',
    icon: '🟦',
    note: 'Con la extensión "Extension Pack for Java". Muy usado por su ligereza.',
    groups: [
      {
        title: 'General',
        items: [
          { action: 'Paleta de comandos', mac: '⌘ ⇧ P', win: 'Ctrl Shift P' },
          { action: 'Abrir archivo rápido', mac: '⌘ P', win: 'Ctrl P' },
          { action: 'Ir a símbolo', mac: '⌘ ⇧ O', win: 'Ctrl Shift O' },
          { action: 'Ir a línea', mac: '⌃ G', win: 'Ctrl G' },
          { action: 'Ajustes', mac: '⌘ ,', win: 'Ctrl ,' },
          { action: 'Mostrar/ocultar terminal', mac: '⌃ `', win: 'Ctrl `' },
        ],
      },
      {
        title: 'Edición',
        items: [
          { action: 'Autocompletar (IntelliSense)', mac: '⌃ Espacio', win: 'Ctrl Space' },
          { action: 'Quick fix', mac: '⌘ .', win: 'Ctrl .' },
          { action: 'Formatear documento', mac: '⇧ ⌥ F', win: 'Shift Alt F' },
          { action: 'Comentar línea', mac: '⌘ /', win: 'Ctrl /' },
          { action: 'Copiar línea arriba / abajo', mac: '⇧ ⌥ ↑ · ↓', win: 'Shift Alt ↑ · ↓' },
          { action: 'Mover línea arriba / abajo', mac: '⌥ ↑ · ↓', win: 'Alt ↑ · ↓' },
          { action: 'Borrar línea', mac: '⌘ ⇧ K', win: 'Ctrl Shift K' },
          { action: 'Cursor extra arriba / abajo', mac: '⌘ ⌥ ↑ · ↓', win: 'Ctrl Alt ↑ · ↓' },
          { action: 'Seleccionar todas las coincidencias', mac: '⌘ ⇧ L', win: 'Ctrl Shift L' },
        ],
      },
      {
        title: 'Código y navegación',
        items: [
          { action: 'Renombrar símbolo', mac: 'F2', win: 'F2' },
          { action: 'Ir a definición', mac: 'F12', win: 'F12' },
          { action: 'Ver definición (peek)', mac: '⌥ F12', win: 'Alt F12' },
          { action: 'Buscar / Reemplazar', mac: '⌘ F · ⌥ ⌘ F', win: 'Ctrl F · Ctrl H' },
          { action: 'Buscar en archivos', mac: '⌘ ⇧ F', win: 'Ctrl Shift F' },
        ],
      },
      {
        title: 'Ejecutar y depurar',
        items: [
          { action: 'Iniciar depuración', mac: 'F5', win: 'F5' },
          { action: 'Ejecutar sin depurar', mac: '⌃ F5', win: 'Ctrl F5' },
          { action: 'Punto de interrupción', mac: 'F9', win: 'F9' },
          { action: 'Step over / into / out', mac: 'F10 · F11 · ⇧ F11', win: 'F10 · F11 · Shift F11' },
        ],
      },
    ],
  },

  {
    id: 'eclipse',
    name: 'Eclipse',
    icon: '🟪',
    note: 'IDE clásico de Java, muy usado en entornos académicos y empresariales.',
    groups: [
      {
        title: 'Edición y código',
        items: [
          { action: 'Autocompletar (content assist)', mac: '⌃ Espacio', win: 'Ctrl Space' },
          { action: 'Quick fix', mac: '⌘ 1', win: 'Ctrl 1' },
          { action: 'Organizar imports', mac: '⌘ ⇧ O', win: 'Ctrl Shift O' },
          { action: 'Formatear código', mac: '⌘ ⇧ F', win: 'Ctrl Shift F' },
          { action: 'Comentar línea', mac: '⌘ /', win: 'Ctrl /' },
          { action: 'Generar getters/setters (Source)', mac: '⌥ ⌘ S', win: 'Alt Shift S' },
          { action: 'Mover línea arriba / abajo', mac: '⌥ ↑ · ↓', win: 'Alt ↑ · ↓' },
          { action: 'Duplicar línea', mac: '⌘ ⌥ ↓', win: 'Ctrl Alt ↓' },
        ],
      },
      {
        title: 'Navegación',
        items: [
          { action: 'Abrir tipo (clase)', mac: '⌘ ⇧ T', win: 'Ctrl Shift T' },
          { action: 'Abrir recurso (archivo)', mac: '⌘ ⇧ R', win: 'Ctrl Shift R' },
          { action: 'Abrir declaración', mac: 'F3', win: 'F3' },
          { action: 'Última posición de edición', mac: '⌘ Q', win: 'Ctrl Q' },
          { action: 'Buscar', mac: '⌘ F', win: 'Ctrl F' },
        ],
      },
      {
        title: 'Refactorización',
        items: [
          { action: 'Renombrar', mac: '⌥ ⌘ R', win: 'Alt Shift R' },
          { action: 'Extraer método', mac: '⌥ ⌘ M', win: 'Alt Shift M' },
          { action: 'Extraer variable local', mac: '⌥ ⌘ L', win: 'Alt Shift L' },
        ],
      },
      {
        title: 'Ejecutar y depurar',
        items: [
          { action: 'Ejecutar', mac: '⌘ F11', win: 'Ctrl F11' },
          { action: 'Depurar', mac: 'F11', win: 'F11' },
          { action: 'Step over / into', mac: 'F6 · F5', win: 'F6 · F5' },
          { action: 'Reanudar', mac: 'F8', win: 'F8' },
        ],
      },
    ],
  },
]

// ¿Hay atajos que coincidan con la búsqueda? (para mostrarlos en los resultados)
export function shortcutMatches(query) {
  const q = query.trim().toLowerCase()
  if (!q) return false
  return shortcuts.some((ide) =>
    ide.groups.some((g) =>
      g.items.some((it) =>
        (it.action + ' ' + it.mac + ' ' + it.win + ' ' + ide.name)
          .toLowerCase()
          .includes(q),
      ),
    ),
  )
}
