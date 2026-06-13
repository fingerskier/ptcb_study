import { useMemo, useState } from 'react'
import { drugs } from '../data/drugs.js'

export default function DrugReference() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const sorted = [...drugs].sort((a, b) =>
      a.generic.localeCompare(b.generic)
    )
    if (!q) return sorted
    return sorted.filter(
      (d) =>
        d.brand.toLowerCase().includes(q) ||
        d.generic.toLowerCase().includes(q) ||
        d.class.toLowerCase().includes(q) ||
        d.use.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div>
      <h1>Top Drugs Reference</h1>
      <p className="muted">
        Search by brand name, generic name, drug class, or use. {drugs.length}{' '}
        high-yield medications.
      </p>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search e.g. 'statin', 'lisinopril', 'diabetes'…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <p className="muted">{filtered.length} result(s)</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Generic</th>
              <th>Brand</th>
              <th>Class</th>
              <th>Common Use</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={`${d.generic}-${i}`}>
                <td>
                  <strong>{d.generic}</strong>
                </td>
                <td>{d.brand}</td>
                <td>{d.class}</td>
                <td>{d.use}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="center muted">
                  No matches — try another term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
