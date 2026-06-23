import { useEffect, useState } from 'react'

const JOKES = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why do cows wear bells? Because their horns don't work.",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Did you hear about the claustrophobic astronaut? He just needed a little space.",
  "Why did the scarecrow win an award? He was outstanding in his field.",
  "I used to hate facial hair, but then it grew on me.",
  "What do you call cheese that isn't yours? Nacho cheese.",
]

export default function App() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const handleClick = () => {
    const joke = JOKES[Math.floor(Math.random() * JOKES.length)]
    setToast({ time: Date.now(), text: joke })
  }

  return (
    <main className="page">
      <img src="/ace-logo.png" alt="Ace 2.0" className="logo" />
      <h1 className="headline">Hello World V3</h1>
      <button className="cta" onClick={handleClick}>
        Click Me!
      </button>
      {toast && (
        <div key={toast.time} className="toast" role="status" aria-live="polite">
          👋 {toast.text}
        </div>
      )}
    </main>
  )
}
