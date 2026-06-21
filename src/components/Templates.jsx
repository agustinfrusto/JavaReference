import { templateGroups, postfix, ideTriggers } from '../data/templates'

function TemplateTable({ items }) {
  return (
    <table className="tpl-table">
      <thead>
        <tr>
          <th>Abreviatura</th>
          <th>Se expande a</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {items.map((it, i) => (
          <tr key={i}>
            <td><code className="tpl-abbr">{it.abbr}</code></td>
            <td><code className="tpl-expand">{it.expands}</code></td>
            <td className="tpl-desc">{it.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Templates() {
  return (
    <div className="templates">
      <div className="sout-hero">
        <div className="sout-demo">
          <code className="tpl-abbr big">sout</code>
          <span className="sout-arrow">＋ Tab →</span>
          <code className="tpl-expand big">System.out.println();</code>
        </div>
        <p>
          Las <strong>live templates</strong> son abreviaturas que se expanden a código completo.
          En vez de escribir <code>System.out.println()</code>, escribes <code>sout</code> y pulsas
          <strong> Tab</strong>. El cursor queda dentro de los paréntesis, listo para escribir.
        </p>
      </div>

      {templateGroups.map((g) => (
        <div key={g.title} className={g.featured ? 'tpl-group featured' : 'tpl-group'}>
          <h4 className="tpl-group-title">
            {g.featured && <span className="star">★</span>} {g.title}
          </h4>
          <TemplateTable items={g.items} />
        </div>
      ))}

      <div className="tpl-group">
        <h4 className="tpl-group-title">Postfix completion (expr.abrev)</h4>
        <p className="tpl-group-note">
          Escribes la <em>expresión primero</em> y luego un punto con la abreviatura. Ideal para
          imprimir algo que ya escribiste: <code>usuario.getNombre().sout</code> → imprime esa llamada.
        </p>
        <TemplateTable items={postfix} />
      </div>

      <div className="tpl-group">
        <h4 className="tpl-group-title">Cómo activarlas en cada IDE</h4>
        <table className="tpl-table">
          <thead>
            <tr>
              <th>IDE</th>
              <th>Cómo se dispara</th>
              <th>Dónde se gestionan</th>
            </tr>
          </thead>
          <tbody>
            {ideTriggers.map((t, i) => (
              <tr key={i}>
                <td className="tpl-desc"><strong>{t.ide}</strong></td>
                <td className="tpl-desc">{t.trigger}</td>
                <td className="tpl-desc">{t.manage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
