'use client'
import ConfettiEffect from '@/components/ConfettiEffect'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const projectOptions = [
  { value: 'materiel', label: 'Équipement & matériel', emoji: '🖥️' },
  { value: 'infogerance', label: 'Infogérance IT', emoji: '🔧' },
  { value: 'logiciel', label: 'Solutions logicielles', emoji: '💡' },
  { value: 'audit', label: 'Audit gratuit', emoji: '🔍' },
  { value: 'demo', label: 'Démonstration', emoji: '🎯' },
  { value: 'autre', label: 'Autre projet', emoji: '📋' },
]

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showConfetti, setShowConfetti] = useState(false) // ✅ état ajouté
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    projectType: [] as string[],
  })

  const toggleType = (value: string) =>
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter(t => t !== value)
        : [...prev.projectType, value],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email && !formData.phone) {
      setError('Veuillez indiquer un email ou un téléphone.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || `phone-${formData.phone}@noemail.local`,
          phone: formData.phone,
          organisation: formData.organisation,
          type: formData.projectType[0] || 'general',
          projectType: formData.projectType,
          message: `Types de projet : ${formData.projectType.join(', ')}`,
          source: 'homepage-cta',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur serveur')
      setSubmitted(true)
      setShowConfetti(true) // ✅ active les confettis après soumission
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue. Réessayez ou appelez-nous.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <ConfettiEffect active={showConfetti} onComplete={() => setShowConfetti(false)} />
        <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-14 border border-white/20">
              <CheckCircle className="w-20 h-20 text-green-300 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Demande reçue !</h2>
              <p className="text-xl text-white/90 mb-2">
                Un conseiller vous contacte sous <strong>24h ouvrées</strong>.
              </p>
              <p className="text-white/70 text-sm">
                Urgence ? Appelez-nous directement au{' '}
                <a href="tel:+22796556984" className="underline font-semibold">
                 +227 96 55 69 84
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <ConfettiEffect active={showConfetti} onComplete={() => setShowConfetti(false)} />
      {/* ... reste de ton code inchangé ... */}
    </>
  )
}