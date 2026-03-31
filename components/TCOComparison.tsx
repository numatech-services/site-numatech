'use client'
import { useState } from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'

const scenarios = [
  {
    label: 'Sans infogérance',
    color: 'from-red-500 to-orange-500',
    items: [
      { nom: 'Technicien temps plein', cout: 200000, icon: '👨‍💻' },
      { nom: 'Interventions externes', cout: 150000, icon: '🔧' },
      { nom: 'Pannes & downtime', cout: 120000, icon: '⚠️' },
      { nom: 'Licences & MAJ', cout: 100000, icon: '📦' },
      { nom: 'Formation ad-hoc', cout: 90000, icon: '📚' },
    ],
    total: 660000,
  },
  {
    label: 'Avec Numatech',
    color: 'from-green-500 to-emerald-500',
    items: [
      { nom: 'Forfait infogérance', cout: 150000, icon: '🛡️' },
      { nom: 'Support inclus', cout: 0, icon: '✅' },
      { nom: 'Prévention pannes', cout: 100000, icon: '🔍' },
      { nom: 'Licences incluses', cout: 0, icon: '✅' },
      { nom: 'Formation continue', cout: 0, icon: '✅' },
    ],
    total: 450000,
  },
]

export default function TCOComparison() {
  const [slider, setSlider] = useState(50)
  const savings = scenarios[0].total - scenarios[1].total
  const savingsPercent = Math.round((savings / scenarios[0].total) * 100)

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden relative">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/20 px-4 py-2 rounded-full text-green-400 text-sm font-bold mb-4">
            💰 Économies Garanties
          </div>
          <h2 className="text-4xl font-bold mb-4 font-heading">
            Calculez vos <span className="text-green-400">économies réelles</span>
          </h2>
          <p className="text-xl text-gray-300">
            Comparez le coût total de possession (TCO) sur 1 an pour plusieur postes
          </p>
        </div>

        {/* Split comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${scenario.color} p-8 rounded-3xl text-white relative overflow-hidden`}>
              {/* Decorative blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {idx === 0 ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                  {scenario.label}
                </h3>

                <div className="space-y-3 mb-8">
                  {scenario.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 backdrop-blur rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm">{item.nom}</span>
                      </div>
                      <span className="font-bold">
                        {item.cout === 0 ? 'Inclus' : `${item.cout.toLocaleString('fr-FR')}FCFA`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-white/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Total annuel</span>
                    <span className="text-3xl font-bold">{scenario.total.toLocaleString('fr-FR')}FCFA</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Savings banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-center shadow-2xl">
          <div className="text-6xl font-bold mb-2">
            -{savings.toLocaleString('fr-FR')}FCFA
          </div>
          <div className="text-2xl font-semibold mb-1">
            soit {savingsPercent}% d'économies par an
          </div>
          <div className="text-white/80">
            Et en bonus : réactivité garantie, formation incluse, sérénité totale
          </div>
        </div>
      </div>
    </section>
  )
}
