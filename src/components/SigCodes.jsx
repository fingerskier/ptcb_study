import { useMemo, useState } from 'react'
import { sigCategories } from '../data/sigCodes.js'

export default function SigCodes() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sigCategories
    return sigCategories
      .map((cat) => ({
        ...cat,
        codes: cat.codes.filter(
          (c) =>
            c.abbr.toLowerCase().includes(q) ||
            c.meaning.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.codes.length > 0)
  }, [query])

  return (
    <div>
      <h1>Sig Codes & Abbreviations</h1>
      <p className="muted">
        Common prescription abbreviations grouped by category. Search to filter.
      </p>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search e.g. 'bid', 'by mouth', 'eye'…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {filtered.map((cat) => (
        <div key={cat.category} style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.1rem' }}>{cat.category}</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Abbreviation</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {cat.codes.map((c) => (
                  <tr key={c.abbr}>
                    <td>
                      <strong>{c.abbr}</strong>
                    </td>
                    <td>{c.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <p className="center muted">No matches — try another term.</p>
      )}
    </div>
  )
}
