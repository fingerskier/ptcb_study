import { useState } from 'react'
import { domains, getQuestions } from '../data/quizzes.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Quiz({ recordAnswer }) {
  const [domainId, setDomainId] = useState(null) // null = selection screen
  const [deck, setDeck] = useState([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function start(id) {
    setDomainId(id)
    setDeck(shuffle(getQuestions(id)))
    setIndex(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  function choose(i) {
    if (selected !== null) return
    setSelected(i)
    const correct = i === deck[index].answer
    if (correct) setScore((s) => s + 1)
    recordAnswer(deck[index].domain, correct)
  }

  function next() {
    if (index + 1 >= deck.length) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }

  // ----- Domain selection screen -----
  if (domainId === null) {
    return (
      <div>
        <h1>Practice Quiz</h1>
        <p className="muted">
          Choose a domain to focus your practice, or take a mixed exam across all
          four. Every question includes an explanation.
        </p>
        <div className="grid cols-2">
          <button className="tile" onClick={() => start('all')}>
            <div className="icon">🎯</div>
            <h3>Mixed Exam</h3>
            <p>All domains · {getQuestions('all').length} questions</p>
          </button>
          {domains.map((d) => (
            <button key={d.id} className="tile" onClick={() => start(d.id)}>
              <div className="icon">📋</div>
              <h3>{d.name}</h3>
              <p>
                Exam weight {d.weight} · {getQuestions(d.id).length} questions
              </p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ----- Results screen -----
  if (finished) {
    const pct = Math.round((score / deck.length) * 100)
    const passed = pct >= 75
    return (
      <div className="card center">
        <h1>{passed ? '🎉 Nice work!' : '📈 Keep studying!'}</h1>
        <div className="stat" style={{ maxWidth: 240, margin: '1rem auto' }}>
          <div className="num">{pct}%</div>
          <div className="lbl">
            {score} of {deck.length} correct
          </div>
        </div>
        <p className="muted">
          {passed
            ? 'You scored at or above a typical passing threshold for this set.'
            : 'Aim for 75%+. Review explanations and the study guide, then retry.'}
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <button className="btn" onClick={() => start(domainId)}>
            Retry
          </button>
          <button className="btn secondary" onClick={() => setDomainId(null)}>
            Choose Another
          </button>
        </div>
      </div>
    )
  }

  // ----- Question screen -----
  const q = deck[index]
  const answered = selected !== null
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="badge">
          {domains.find((d) => d.id === q.domain)?.name ?? 'Mixed'}
        </span>
        <span className="muted">
          Question {index + 1} / {deck.length} · Score {score}
        </span>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${((index + 1) / deck.length) * 100}%` }} />
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>{q.prompt}</h2>
        {q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (answered && i === q.answer) cls += ' correct'
          else if (answered && i === selected) cls += ' incorrect'
          return (
            <button
              key={i}
              className={cls}
              disabled={answered}
              onClick={() => choose(i)}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          )
        })}

        {answered && (
          <>
            <div className="explanation">
              {selected === q.answer ? (
                <span className="pill-correct">Correct! </span>
              ) : (
                <span className="pill-wrong">Not quite. </span>
              )}
              {q.explanation}
            </div>
            <button className="btn" onClick={next}>
              {index + 1 >= deck.length ? 'See Results' : 'Next Question →'}
            </button>
          </>
        )}
      </div>

      <div className="btn-row">
        <button className="btn ghost" onClick={() => setDomainId(null)}>
          ← Exit quiz
        </button>
      </div>
    </div>
  )
}
