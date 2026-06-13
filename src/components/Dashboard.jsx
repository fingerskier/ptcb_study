import { drugs } from '../data/drugs.js'
import { questions } from '../data/quizzes.js'
import { sigCodes } from '../data/sigCodes.js'

const tiles = [
  { id: 'guide', icon: '📚', title: 'Study Guide', desc: 'High-yield notes for every exam domain.' },
  { id: 'flashcards', icon: '🃏', title: 'Flashcards', desc: 'Drugs, sig codes, and key facts — flip to learn.' },
  { id: 'quiz', icon: '📝', title: 'Practice Quiz', desc: 'Domain-by-domain questions with explanations.' },
  { id: 'drugs', icon: '💊', title: 'Top Drugs', desc: 'Searchable brand/generic reference.' },
  { id: 'sig', icon: '🔤', title: 'Sig Codes', desc: 'Pharmacy abbreviations & directions.' },
  { id: 'math', icon: '🧮', title: 'Pharmacy Math', desc: 'Conversions, formulas, and practice.' },
]

export default function Dashboard({ navigate, stats }) {
  return (
    <div>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ marginTop: 0 }}>Welcome to PTCB Study 💊</h1>
        <p className="muted">
          A free, comprehensive prep tool for the Pharmacy Technician Certification
          Exam (PTCE). Work through flashcards, take domain quizzes, and master the
          top medications, sig codes, and pharmacy math — all in your browser, with
          progress saved locally.
        </p>
        <div className="stat-row" style={{ marginTop: '1rem' }}>
          <div className="stat">
            <div className="num">{drugs.length}</div>
            <div className="lbl">Drugs</div>
          </div>
          <div className="stat">
            <div className="num">{questions.length}</div>
            <div className="lbl">Quiz Questions</div>
          </div>
          <div className="stat">
            <div className="num">{sigCodes.length}</div>
            <div className="lbl">Sig Codes</div>
          </div>
          <div className="stat">
            <div className="num">{stats.totalAnswered}</div>
            <div className="lbl">You've Answered</div>
          </div>
        </div>
        {stats.totalAnswered > 0 && (
          <p className="muted" style={{ marginTop: '1rem', marginBottom: 0 }}>
            Lifetime accuracy:{' '}
            <strong>{stats.accuracy}%</strong> ({stats.totalCorrect}/
            {stats.totalAnswered} correct)
          </p>
        )}
      </div>

      <div className="grid cols-3">
        {tiles.map((t) => (
          <button key={t.id} className="tile" onClick={() => navigate(t.id)}>
            <div className="icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
