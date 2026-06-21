// Live templates / abreviaciones de código (estilo "sout" → System.out.println()).
// Escribes la abreviatura y la expandes con Tab (IntelliJ) o Ctrl+Space (Eclipse).

export const templateGroups = [
  {
    title: 'Imprimir (sout y familia)',
    featured: true,
    items: [
      { abbr: 'sout', expands: 'System.out.println();', desc: 'El clásico: imprime con salto de línea.' },
      { abbr: 'souf', expands: 'System.out.printf("");', desc: 'Imprime con formato (%d, %s…).' },
      { abbr: 'serr', expands: 'System.err.println();', desc: 'Imprime en la salida de error.' },
      { abbr: 'soutv', expands: 'System.out.println("nombre = " + nombre);', desc: 'Imprime la última variable usada.' },
      { abbr: 'soutp', expands: 'System.out.println("a = " + a + ", b = " + b);', desc: 'Imprime los parámetros del método.' },
      { abbr: 'soutm', expands: 'System.out.println("Clase.metodo");', desc: 'Imprime la clase y el método actual.' },
    ],
  },
  {
    title: 'Estructura y boilerplate',
    items: [
      { abbr: 'psvm', expands: 'public static void main(String[] args) { }', desc: 'Método main. (También sirve "main".)' },
      { abbr: 'psf', expands: 'public static final', desc: '' },
      { abbr: 'psfi', expands: 'public static final int', desc: '' },
      { abbr: 'psfs', expands: 'public static final String', desc: '' },
      { abbr: 'thr', expands: 'throw new ', desc: 'Lanzar una excepción.' },
      { abbr: 'St', expands: 'String ', desc: '' },
    ],
  },
  {
    title: 'Bucles e iteración',
    items: [
      { abbr: 'fori', expands: 'for (int i = 0; i < ; i++) { }', desc: 'Bucle for con índice.' },
      { abbr: 'iter', expands: 'for (Tipo item : coleccion) { }', desc: 'for-each sobre array o colección.' },
      { abbr: 'itar', expands: 'for (int i = 0; i < array.length; i++) { }', desc: 'Recorrer un array con índice.' },
      { abbr: 'ritar', expands: 'for (int i = array.length - 1; i >= 0; i--) { }', desc: 'Recorrer un array al revés.' },
    ],
  },
  {
    title: 'Condicionales',
    items: [
      { abbr: 'ifn', expands: 'if (x == null) { }', desc: 'Comprobar si es null.' },
      { abbr: 'inn', expands: 'if (x != null) { }', desc: 'Comprobar si NO es null.' },
    ],
  },
]

// Postfix completion: escribes la EXPRESIÓN y luego ".abreviatura".
export const postfix = [
  { abbr: 'expr.sout', expands: 'System.out.println(expr);', desc: 'Lo más cómodo: imprime una expresión ya escrita.' },
  { abbr: 'expr.var', expands: 'Tipo x = expr;', desc: 'Crea una variable a partir de la expresión.' },
  { abbr: 'expr.nn', expands: 'if (expr != null) { }', desc: 'También "expr.notnull".' },
  { abbr: 'expr.null', expands: 'if (expr == null) { }', desc: '' },
  { abbr: 'expr.for', expands: 'for (Tipo item : expr) { }', desc: 'for-each sobre la expresión.' },
  { abbr: 'expr.fori', expands: 'for (int i = 0; i < expr; i++) { }', desc: '' },
  { abbr: 'expr.if', expands: 'if (expr) { }', desc: 'Sobre un boolean.' },
  { abbr: 'expr.not', expands: '!expr', desc: 'Niega un boolean.' },
  { abbr: 'expr.return', expands: 'return expr;', desc: '' },
  { abbr: 'expr.new', expands: 'new Tipo()', desc: 'Sobre un nombre de clase.' },
  { abbr: 'expr.try', expands: 'try { expr } catch (Exception e) { }', desc: '' },
]

// Cómo se dispara y dónde se gestionan en cada IDE.
export const ideTriggers = [
  {
    ide: 'IntelliJ IDEA',
    trigger: 'Escribe la abreviatura y pulsa Tab.',
    manage: 'Settings → Editor → Live Templates',
  },
  {
    ide: 'VS Code (ext. Java)',
    trigger: 'Escribe "sysout"/"syserr"/"main" y pulsa Tab. También soporta postfix (expr.).',
    manage: 'Snippets de usuario / configuración de la extensión',
  },
  {
    ide: 'Eclipse',
    trigger: 'Escribe "sysout"/"main"/"for" y pulsa Ctrl+Space.',
    manage: 'Preferences → Java → Editor → Templates',
  },
]

// ¿Coincide algo con la búsqueda? (para mostrar la sección en los resultados)
export function templateMatches(query) {
  const q = query.trim().toLowerCase()
  if (!q) return false
  const inItems = (arr) =>
    arr.some((it) => (it.abbr + ' ' + it.expands + ' ' + it.desc).toLowerCase().includes(q))
  return (
    templateGroups.some((g) => inItems(g.items)) ||
    inItems(postfix) ||
    'plantillas live templates sout print imprimir'.includes(q)
  )
}
