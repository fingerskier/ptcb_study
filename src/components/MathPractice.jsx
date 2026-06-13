import { useState } from 'react'
import { conversions, formulas, practiceProblems } from '../data/math.js'

export default function MathPractice() {
  const [tab, setTab] = useState('reference')
  const [revealed, setRevealed] = useState({})

  function toggle(i) {
    setRevealed((r) => ({ ...r, [i]: !r[i] }))
  }

  return (
    <div>
      <h1>Pharmacy Math</h1>
      <div className="btn-row" style={{ marginTop: 0 }}>
        <button
          className={`btn ${tab === 'reference' ? '' : 'ghost'}`}
          onClick={() => setTab('reference')}
        >
          Conversions
        </button>
        <button
          className={`btn ${tab === 'formulas' ? '' : 'ghost'}`}
          onClick={() => setTab('formulas')}
        >
          Formulas
        </button>
        <button
          className={`btn ${tab === 'practice' ? '' : 'ghost'}`}
          onClick={() => setTab('practice')}
        >
          Practice
        </button>
      </div>

      {tab === 'reference' && (
        <div className="grid cols-2" style={{ marginTop: '1.25rem' }}>
          {conversions.map((c) => (
            <div key={c.category} className="card">
              <h2 style={{ marginTop: 0, fontSize: '1.05rem' }}>{c.category}</h2>
              <ul className="list-reset">
                {c.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === 'formulas' && (
        <div className="grid" style={{ marginTop: '1.25rem', gap: '0.85rem' }}>
          {formulas.map((f) => (
            <div key={f.name} className="card">
              <h2 style={{ marginTop: 0, fontSize: '1.05rem' }}>{f.name}</h2>
              <p style={{ margin: '0.25rem 0', fontFamily: 'monospace' }}>
                {f.formula}
              </p>
              <p className="muted" style={{ margin: 0 }}>
                <strong>Example:</strong> {f.example}
              </p>
            </div>
          ))}
        </div>
      )}

      {tab === 'practice' && (
        <div className="grid" style={{ marginTop: '1.25rem', gap: '0.85rem' }}>
          <p className="muted">
            Work each problem on paper, then reveal the answer and worked solution.
          </p>
          {practiceProblems.map((p, i) => (
            <div key={i} className="card">
              <p style={{ marginTop: 0 }}>
                <strong>Q{i + 1}.</strong> {p.question}
              </p>
              {revealed[i] ? (
                <div className="explanation" style={{ margin: 0 }}>
                  <div>
                    <span className="pill-correct">Answer:</span> {p.answer}
                  </div>
                  <div style={{ marginTop: '0.4rem' }}>{p.solution}</div>
                </div>
              ) : (
                <button className="btn secondary" onClick={() => toggle(i)}>
                  Show answer
                </button>
              )}
              {revealed[i] && (
                <button
                  className="btn ghost"
                  style={{ marginTop: '0.6rem' }}
                  onClick={() => toggle(i)}
                >
                  Hide
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
