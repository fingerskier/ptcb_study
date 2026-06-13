import { useMemo, useState } from 'react'
import { drugs } from '../data/drugs.js'
import { sigCodes } from '../data/sigCodes.js'

const decks = {
  'brand-generic': {
    label: 'Brand → Generic',
    build: () =>
      drugs.map((d) => ({
        frontLabel: 'Brand',
        front: d.brand,
        backLabel: 'Generic',
        back: d.generic,
        sub: `${d.class} · ${d.use}`,
      })),
  },
  'generic-brand': {
    label: 'Generic → Brand',
    build: () =>
      drugs.map((d) => ({
        frontLabel: 'Generic',
        front: d.generic,
        backLabel: 'Brand',
        back: d.brand,
        sub: `${d.class} · ${d.use}`,
      })),
  },
  'drug-class': {
    label: 'Drug → Class',
    build: () =>
      drugs.map((d) => ({
        frontLabel: 'Drug',
        front: `${d.generic} (${d.brand})`,
        backLabel: 'Class',
        back: d.class,
        sub: d.use,
      })),
  },
  'sig-codes': {
    label: 'Sig Codes',
    build: () =>
      sigCodes.map((s) => ({
        frontLabel: 'Abbreviation',
        front: s.abbr,
        backLabel: 'Meaning',
        back: s.meaning,
        sub: s.category,
      })),
  },
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Flashcards() {
  const [deckId, setDeckId] = useState('brand-generic')
  const [order, setOrder] = useState(() => decks['brand-generic'].build())
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = order[index]

  function changeDeck(id) {
    setDeckId(id)
    setOrder(decks[id].build())
    setIndex(0)
    setFlipped(false)
  }

  function go(delta) {
    setFlipped(false)
    setIndex((i) => (i + delta + order.length) % order.length)
  }

  const deckOptions = useMemo(() => Object.entries(decks), [])

  return (
    <div>
      <h1>Flashcards</h1>
      <div className="search-bar">
        <label className="muted" htmlFor="deck">
          Deck
        </label>
        <select
          id="deck"
          value={deckId}
          onChange={(e) => changeDeck(e.target.value)}
        >
          {deckOptions.map(([id, d]) => (
            <option key={id} value={id}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      <p className="center muted">
        Card {index + 1} of {order.length}
      </p>
      <div className="progress-bar">
        <div style={{ width: `${((index + 1) / order.length) * 100}%` }} />
      </div>

      <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
        <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
          <div className="flashcard-face front">
            <div className="label">{card.frontLabel}</div>
            <div className="term">{card.front}</div>
          </div>
          <div className="flashcard-face back">
            <div className="label">{card.backLabel}</div>
            <div className="term">{card.back}</div>
            {card.sub && <div className="sub">{card.sub}</div>}
          </div>
        </div>
      </div>
      <p className="flip-hint">Tap the card to flip</p>

      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <button className="btn secondary" onClick={() => go(-1)}>
          ← Previous
        </button>
        <button className="btn ghost" onClick={() => changeDeck(deckId)}>
          🔀 Reset
        </button>
        <button
          className="btn ghost"
          onClick={() => {
            setOrder((o) => shuffle(o))
            setIndex(0)
            setFlipped(false)
          }}
        >
          Shuffle
        </button>
        <button className="btn" onClick={() => go(1)}>
          Next →
        </button>
      </div>
    </div>
  )
}
