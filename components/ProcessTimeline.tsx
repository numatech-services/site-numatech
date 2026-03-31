'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'

const steps = [
  { num: 1, titre: 'Audit Initial', desc: 'Analyse de vos besoins, de votre parc existant et de vos objectifs pédagogiques. Audit gratuit sur site ou en visio.', duree: '2h', icon: '🔍' },
  { num: 2, titre: 'Proposition Technique', desc: 'Devis détaillé avec choix de matériel, planning d\'installation et proposition tarifaire. Validé avec vos équipes.', duree: '48h', icon: '📋' },
  { num: 3, titre: 'Commande & Livraison', desc: 'Commande du matériel, préparation en atelier (MDM, image système), livraison sur site avec installation réseau.', duree: '2-4 sem', icon: '📦' },
  { num: 4, titre: 'Installation & Config', desc: 'Installation physique, câblage, configuration logicielle, tests de bon fonctionnement. Tout est opérationnel.', duree: '1-3 jours', icon: '🔧' },
  { num: 5, titre: 'Formation Équipes', desc: 'Formation des enseignants et personnels techniques. Documentation et guides utilisateurs inclus.', duree: '1 jour', icon: '🎓' },
  { num: 6, titre: 'Support Continu', desc: 'Hotline prioritaire, interventions sur site <4h, maintenance préventive et mises à jour incluses.', duree: 'Illimité', icon: '💬' },
]

export default function ProcessTimeline() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading">Notre Méthode Éprouvée</h2>
          <p className="text-xl text-gray-600">6 étapes pour un projet réussi, de A à Z</p>
        </div>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          {/* Ligne de progression */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full">
            <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
              style={{ width: `${(active / (steps.length - 1)) * 100}%` }} />
          </div>

          <div className="grid grid-cols-6 gap-2 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => setActive(i)}
                  className={`w-full transition-all duration-300 ${i <= active ? 'scale-100' : 'scale-90 opacity-60'}`}
                >
                  {/* Cercle étape */}
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    i <= active
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg scale-110'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                  }`}>
                    {i < active ? <Check size={20} /> : <span className="text-lg">{step.num}</span>}
                  </div>
                  
                  {/* Titre */}
                  <div className={`font-bold text-sm mb-1 transition-colors ${i <= active ? 'text-primary' : 'text-gray-400'}`}>
                    {step.titre}
                  </div>
                  <div className="text-xs text-gray-400">{step.duree}</div>
                </button>

                {/* Card détails */}
                {i === active && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl p-2 border-2 border-primary/20 animate-in slide-in-from-top-4 z-10">
                    <div className="text-4xl mb-1">{step.icon}</div>
                    <h3 className="font-bold text-lg mb-1">{step.titre}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                    <div className="mt-4 text-xs font-semibold text-primary">⏱ {step.duree}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline mobile */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  i <= active ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {i < active ? <Check size={16} /> : <span>{step.num}</span>}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
              </div>
              <div className="flex-1 pb-6">
                <div className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-primary/30 transition cursor-pointer"
                  onClick={() => setActive(i)}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-2xl">{step.icon}</div>
                    <div className="text-xs text-gray-400">{step.duree}</div>
                  </div>
                  <h3 className="font-bold mb-1">{step.titre}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
