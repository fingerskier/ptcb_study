import { useState } from 'react'
import { studyGuide } from '../data/studyGuide.js'

export default function StudyGuide() {
  const [openId, setOpenId] = useState(studyGuide[0].id)

  return (
    <div>
      <h1>Study Guide</h1>
      <p className="muted">
        Concise, high-yield notes for each PTCE domain. Tap a section to expand.
      </p>
      <div className="grid" style={{ gap: '0.75rem' }}>
        {studyGuide.map((section) => {
          const open = openId === section.id
          return (
            <div key={section.id} className="card">
              <button
                onClick={() => setOpenId(open ? null : section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  font: 'inherit',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <h2 style={{ margin: 0, fontSize: '1.15rem' }}>{section.title}</h2>
                <span className="muted">{open ? '▲' : '▼'}</span>
              </button>
              {open && (
                <div style={{ marginTop: '0.85rem' }}>
                  <p>{section.summary}</p>
                  <ul className="list-reset">
                    {section.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
