import { useState } from 'react'

const KEYWORDS = [
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
  'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
  'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
  'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
  'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
  'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
  'try', 'var', 'void', 'volatile', 'while', 'record', 'yield', 'true', 'false', 'null',
]

// Resaltador de Java a medida (sin dependencias).
// Estrategia: se "guardan" comentarios/strings/etc. como caracteres del área de
// uso privado de Unicode para que las regex posteriores (números, keywords, tipos)
// no los vuelvan a tocar; al final se restauran.
function highlight(code) {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const tokens = []
  const stash = (cls, text) => {
    const placeholder = String.fromCharCode(0xe000 + tokens.length)
    tokens.push(`<span class="tok-${cls}">${text}</span>`)
    return placeholder
  }

  html = html.replace(/\/\/[^\n]*/g, (m) => stash('comment', m))
  html = html.replace(/\/\*[\s\S]*?\*\//g, (m) => stash('comment', m))
  html = html.replace(/"""[\s\S]*?"""/g, (m) => stash('string', m))
  html = html.replace(/"(?:[^"\\]|\\.)*"/g, (m) => stash('string', m))
  html = html.replace(/'(?:[^'\\]|\\.)'/g, (m) => stash('string', m))
  html = html.replace(/@\w+/g, (m) => stash('annotation', m))
  html = html.replace(/\b\d[\d_]*\.?\d*[fFlLdD]?\b/g, (m) => stash('number', m))
  html = html.replace(
    new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'g'),
    (m) => stash('keyword', m),
  )
  // Tipos / clases: palabras que empiezan en mayúscula.
  html = html.replace(/\b[A-Z]\w*\b/g, (m) => stash('type', m))
  // Llamadas a métodos: identificador seguido de "(".
  html = html.replace(/\b([a-z_]\w*)(?=\s*\()/g, (m) => stash('fn', m))

  // Restaurar lo guardado.
  html = html.replace(/[-]/g, (ch) => tokens[ch.charCodeAt(0) - 0xe000])
  return html
}

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <div className="codeblock">
      <button className="copy-btn" onClick={copy} aria-label="Copiar código">
        {copied ? '✓ Copiado' : 'Copiar'}
      </button>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </div>
  )
}
