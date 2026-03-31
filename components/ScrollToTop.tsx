'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-xl hover:bg-primary-dark hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
