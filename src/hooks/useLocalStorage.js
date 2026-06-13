import { useState, useEffect } from 'react'

// Persist a piece of state to localStorage so study progress survives reloads.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignore write errors (e.g., private mode) */
    }
  }, [key, value])

  return [value, setValue]
}
