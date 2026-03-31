'use client'
import { useState, useEffect } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Afficher après 30s si pas déjà vu
    const seen = sessionStorage.getItem('nl-seen')
    if (seen) return
    const timer = setTimeout(() => setVisible(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('nl-seen', '1')
    setVisible(false)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setDone(true)
      sessionStorage.setItem('nl-seen', '1')
      setTimeout(dismiss, 2500)
    } catch { /* silencieux */ }
    finally { setLoading(false) }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-end sm:items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) dismiss() }}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-in slide-in-from-bottom-4">
        <button onClick={dismiss} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
          <X size={18} />
        </button>
        {done ? (
          <div className="text-center py-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Parfait !</h3>
            <p className="text-gray-600">Vous recevrez nos actualités et offres exclusives.</p>
          </div>
        ) : (
          <>
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-2">Nos offres exclusives</h3>
            <p className="text-gray-600 mb-6">
              Recevez nos nouveautés produits, conseils IT et offres réservées aux abonnés.
              <strong className="text-primary"> -10% sur votre premier devis.</strong>
            </p>
            <form onSubmit={submit} className="space-y-3">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="votre@email.fr"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"
              />
              <button type="submit" disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send size={16} /> Je m'abonne</>}
              </button>
            </form>
            <button onClick={dismiss} className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 transition">
              Non merci
            </button>
          </>
        )}
      </div>
    </div>
  )
}
