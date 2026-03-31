'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { Send, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react'

function ContactClient() {

  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'general'
  const produit = searchParams.get('produit') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
    size: '',
    equipmentType: '',
    softwareNeed: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const config: Record<string, { title: string; description: string; color: string }> = {
    audit: { title: "Demander un audit informatique gratuit", description: "Analyse complète de votre parc IT sans engagement.", color: "from-blue-600 to-blue-800" },
    materiel: { title: "Demande de devis matériel", description: "Recevez une offre personnalisée sous 24h.", color: "from-green-600 to-green-800" },
    demo: { title: "Demander une démonstration", description: `Découvrez ${produit || 'nos solutions'} en action.`, color: "from-purple-600 to-purple-800" },
    catalogue: { title: "Recevoir notre catalogue", description: "Catalogue complet (200+ produits).", color: "from-orange-500 to-orange-700" },
    devis: { title: "Demande de devis", description: `Étude personnalisée pour ${produit || 'votre projet'}.`, color: "from-teal-600 to-teal-800" },
    general: { title: "Contactez-nous", description: "Notre équipe vous répond sous 24h.", color: "from-primary to-secondary" },
  }

  const { title, description, color } = config[type] ?? config.general

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type, produit }),
      })

      const data = await res.json()

      if (res.ok) {
        window.location.href = '/contact/merci'
      } else {
        setError(data.error || 'Une erreur est survenue.')
      }

    } catch {
      setError('Erreur de connexion.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (

    <div className="min-h-screen bg-neutral-50">

      {/* HERO */}
      <div className={`bg-gradient-to-br ${color} text-white py-14 px-6`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">{title}</h1>
          <p className="text-xl text-white/85">{description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* FORMULAIRE */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-lg border p-8">

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom complet *</label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Organisation</label>
                    <input
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Téléphone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                </div>

                {/* champs conditionnels */}

                {type === 'audit' && (

                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl"
                  >
                    <option value="">Nombre de postes</option>
                    <option value="1-20">1 à 20</option>
                    <option value="21-50">21 à 50</option>
                    <option value="51-100">51 à 100</option>
                  </select>

                )}

                {type === 'materiel' && (

                  <input
                    name="equipmentType"
                    placeholder="Type d'équipement"
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl"
                  />

                )}

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl"
                />

                {error && (
                  <div className="text-red-600">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2"
                >

                  {isSubmitting
                    ? <><Loader2 className="animate-spin w-5 h-5" />Envoi...</>
                    : <><Send className="w-5 h-5" />Envoyer ma demande</>
                  }

                </button>

              </form>

            </div>

          </div>

          {/* SIDEBAR */}

          <div className="space-y-5">

            <div className="bg-white rounded-xl p-6 shadow">

              <h3 className="font-bold mb-4">Nos coordonnées</h3>

              <div className="space-y-4 text-sm">

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+227 96 55 69 84</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@numatechservices.net</span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Rue Bk-56 Boukoki Askia Niamey</span>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Lun-Ven : 9h-18h</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Chargement...</div>}>
      <ContactClient />
    </Suspense>
  )
}
