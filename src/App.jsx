import { useMemo, useState, useEffect } from 'react'
import { content } from './data/content'
import CodeBlock from './components/CodeBlock'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState(content[0].id)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('java-ref-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('java-ref-theme', dark ? 'dark' : 'light')
  }, [dark])

  // Prompt de instalación de la PWA: el navegador dispara beforeinstallprompt
  // cuando la app es instalable. Guardamos el evento para lanzarlo al pulsar el botón.
  const [installPrompt, setInstallPrompt] = useState(null)
  useEffect(() => {
    const onPrompt = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    const onInstalled = () => setInstallPrompt(null)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const installApp = async () => {
    if (!installPrompt) return
    installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }

  // Filtrado por búsqueda: conserva categorías y temas que coincidan.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return content
    return content
      .map((cat) => {
        const topics = cat.topics.filter((t) =>
          (t.title + ' ' + t.body + ' ' + t.code).toLowerCase().includes(q),
        )
        return { ...cat, topics }
      })
      .filter((cat) => cat.topics.length > 0)
  }, [query])

  const searching = query.trim().length > 0
  const visible = searching ? filtered : filtered.filter((c) => c.id === activeCat)
  const totalTemas = content.reduce((n, c) => n + c.topics.length, 0)

  const goTo = (id) => {
    setQuery('')
    setActiveCat(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">☕</span>
          <div>
            <h1>Java Reference</h1>
            <p>{totalTemas} temas de consulta</p>
          </div>
        </div>

        <nav className="nav">
          {content.map((cat) => (
            <button
              key={cat.id}
              className={!searching && cat.id === activeCat ? 'nav-item active' : 'nav-item'}
              onClick={() => goTo(cat.id)}
            >
              <span className="nav-icon">{cat.icon}</span>
              <span>{cat.title}</span>
              <span className="nav-count">{cat.topics.length}</span>
            </button>
          ))}
        </nav>

        {installPrompt && (
          <button className="install-btn" onClick={installApp}>
            ⬇️ Instalar app
          </button>
        )}

        <button className="theme-toggle" onClick={() => setDark((d) => !d)}>
          {dark ? '🌙 Modo oscuro' : '☀️ Modo claro'}
        </button>
      </aside>

      <main className="main">
        <div className="topbar">
          <input
            className="search"
            type="search"
            placeholder="Buscar… (p. ej. 'HashMap', 'lambda', 'try')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className="content">
          {searching && (
            <p className="search-info">
              {visible.reduce((n, c) => n + c.topics.length, 0)} resultado(s) para “{query}”
            </p>
          )}

          {visible.length === 0 && (
            <div className="empty">
              <p>Sin resultados para “{query}”.</p>
              <button onClick={() => setQuery('')}>Limpiar búsqueda</button>
            </div>
          )}

          {visible.map((cat) => (
            <section key={cat.id} className="category">
              <h2 className="cat-title">
                <span>{cat.icon}</span> {cat.title}
              </h2>
              {cat.topics.map((t) => (
                <article key={t.id} className="topic" id={t.id}>
                  <h3>{t.title}</h3>
                  <p className="topic-body">{t.body}</p>
                  <CodeBlock code={t.code} />
                  {t.notes && (
                    <ul className="notes">
                      {t.notes.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </section>
          ))}
        </div>

        <footer className="footer">
          Java Reference · referencia rápida de sintaxis · construido con React + Vite
        </footer>
      </main>
    </div>
  )
}
