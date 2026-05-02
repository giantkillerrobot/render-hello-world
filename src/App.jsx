import { useEffect, useState } from 'react'

const WORDS = ['spectacular', 'brilliant', 'fantastic', 'marvelous', 'electric', 'legendary', 'radiant', 'stellar']

export default function App() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const handleClick = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)]
    setToast({ time: Date.now(), word })
  }

  return (
    <main className="page">
      <img src="/ace-logo.png" alt="Ace 2.0" className="logo" />
      <h1 className="headline">Hello World</h1>
      <button className="cta" onClick={handleClick}>
        Click Me!
      </button>
      {toast && (
        <div key={toast.time} className="toast" role="status" aria-live="polite">
          👋 Hello from Ace 2.0! This works! — {toast.word} — {new Date(toast.time).toLocaleString()}
        </div>
      )}
    </main>
  )
}
