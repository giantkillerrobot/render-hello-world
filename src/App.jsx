import { useEffect, useState } from 'react'

export default function App() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <main className="page">
      <img src="/ace-logo.png" alt="Ace 2.0" className="logo" />
      <h1 className="headline">Hello World</h1>
      <button className="cta" onClick={() => setToast(Date.now())}>
        Click Me!
      </button>
      {toast && (
        <div key={toast} className="toast" role="status" aria-live="polite">
          👋 Hello from Ace 2.0!  This works!
        </div>
      )}
    </main>
  )
}
