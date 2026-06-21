import { useState } from 'react'
import { shortcuts } from '../data/shortcuts'

// Renderiza una combinación de teclas como una serie de <kbd>.
function Keys({ combo }) {
  // Separadores: "·" agrupa alternativas, el espacio separa teclas de un combo.
  return (
    <span className="keys">
      {combo.split('·').map((part, i) => (
        <span key={i} className="key-combo">
          {i > 0 && <span className="key-or">o</span>}
          {part.trim().split(/\s+/).map((k, j) => (
            <kbd key={j}>{k}</kbd>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function Shortcuts({ query = '' }) {
  const [activeIde, setActiveIde] = useState(shortcuts[0].id)
  const q = query.trim().toLowerCase()
  const searching = q.length > 0

  const matchesRow = (it, ideName) =>
    !searching ||
    (it.action + ' ' + it.mac + ' ' + it.win + ' ' + ideName).toLowerCase().includes(q)

  // Al buscar, mostramos todos los IDEs con filas que coincidan; si no, solo el activo.
  const idesToShow = searching
    ? shortcuts
    : shortcuts.filter((ide) => ide.id === activeIde)

  return (
    <div className="shortcuts">
      {!searching && (
        <>
          <div className="ide-tabs">
            {shortcuts.map((ide) => (
              <button
                key={ide.id}
                className={ide.id === activeIde ? 'ide-tab active' : 'ide-tab'}
                onClick={() => setActiveIde(ide.id)}
              >
                <span>{ide.icon}</span> {ide.name}
              </button>
            ))}
          </div>
          <p className="ide-note">{shortcuts.find((i) => i.id === activeIde).note}</p>
        </>
      )}

      {idesToShow.map((ide) => {
        const groups = ide.groups
          .map((g) => ({ ...g, items: g.items.filter((it) => matchesRow(it, ide.name)) }))
          .filter((g) => g.items.length > 0)
        if (groups.length === 0) return null

        return (
          <div key={ide.id} className="ide-block">
            {searching && (
              <h3 className="ide-heading">
                {ide.icon} {ide.name}
              </h3>
            )}
            {groups.map((g) => (
              <div key={g.title} className="sc-group">
                <h4 className="sc-group-title">{g.title}</h4>
                <table className="sc-table">
                  <thead>
                    <tr>
                      <th>Acción</th>
                      <th>macOS</th>
                      <th>Windows / Linux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.items.map((it, i) => (
                      <tr key={i}>
                        <td className="sc-action">{it.action}</td>
                        <td><Keys combo={it.mac} /></td>
                        <td><Keys combo={it.win} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
