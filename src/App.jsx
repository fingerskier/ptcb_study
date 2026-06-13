import { useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import Dashboard from './components/Dashboard.jsx'
import StudyGuide from './components/StudyGuide.jsx'
import Flashcards from './components/Flashcards.jsx'
import Quiz from './components/Quiz.jsx'
import DrugReference from './components/DrugReference.jsx'
import SigCodes from './components/SigCodes.jsx'
import MathPractice from './components/MathPractice.jsx'

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'guide', label: 'Study Guide' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'drugs', label: 'Top Drugs' },
  { id: 'sig', label: 'Sig Codes' },
  { id: 'math', label: 'Math' },
]

function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  return TABS.some((t) => t.id === hash) ? hash : 'home'
}

export default function App() {
  const [route, setRoute] = useState(currentRoute())
  const [progress, setProgress] = useLocalStorage('ptcb-progress', {
    totalAnswered: 0,
    totalCorrect: 0,
    byDomain: {},
  })

  // Keep the hash in sync so deep links and back/forward work on GitHub Pages.
  useEffect(() => {
    const onHash = () => setRoute(currentRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  function navigate(id) {
    window.location.hash = `/${id}`
    setRoute(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function recordAnswer(domain, correct) {
    setProgress((p) => {
      const d = p.byDomain[domain] || { answered: 0, correct: 0 }
      return {
        totalAnswered: p.totalAnswered + 1,
        totalCorrect: p.totalCorrect + (correct ? 1 : 0),
        byDomain: {
          ...p.byDomain,
          [domain]: {
            answered: d.answered + 1,
            correct: d.correct + (correct ? 1 : 0),
          },
        },
      }
    })
  }

  const stats = {
    totalAnswered: progress.totalAnswered,
    totalCorrect: progress.totalCorrect,
    accuracy: progress.totalAnswered
      ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
      : 0,
  }

  function render() {
    switch (route) {
      case 'guide':
        return <StudyGuide />
      case 'flashcards':
        return <Flashcards />
      case 'quiz':
        return <Quiz recordAnswer={recordAnswer} />
      case 'drugs':
        return <DrugReference />
      case 'sig':
        return <SigCodes />
      case 'math':
        return <MathPractice />
      default:
        return <Dashboard navigate={navigate} stats={stats} />
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="brand" onClick={() => navigate('home')}>
          💊 PTCB Study
        </div>
        <div className="tagline">
          Pharmacy Technician Certification (PTCE) prep
        </div>
        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={route === t.id ? 'active' : ''}
              onClick={() => navigate(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main>{render()}</main>

      <footer>
        <p>
          PTCB Study · An open-source study aid. Not affiliated with or endorsed
          by the Pharmacy Technician Certification Board (PTCB). Always verify
          drug information with an authoritative source.
        </p>
      </footer>
    </>
  )
}
