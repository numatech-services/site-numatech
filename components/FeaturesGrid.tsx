import { Shield, Headset, Zap, Award, Users, TrendingUp } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Garantie 3 ans', desc: 'Sur tout le matériel fourni. Remplacement ou réparation inclus.', color: 'from-blue-500 to-cyan-500' },
  { icon: Headset, title: 'Support Premium', desc: 'Hotline dédiée du lun-ven 8h-18h. Intervention sur site <4h.', color: 'from-green-500 to-emerald-500' },
  { icon: Zap, title: 'Installation Express', desc: 'Déploiement rapide avec zéro interruption de vos cours.', color: 'from-yellow-500 to-orange-500' },
  { icon: Award, title: 'Certifié ISO 9001', desc: 'Qualité de service certifiée et auditée chaque année.', color: 'from-purple-500 to-pink-500' },
  { icon: Users, title: 'Formation Incluse', desc: 'Formation complète de vos équipes enseignantes et techniques.', color: 'from-red-500 to-rose-500' },
  { icon: TrendingUp, title: 'Évolutif', desc: 'Solutions qui grandissent avec vos besoins et vos effectifs.', color: 'from-indigo-500 to-blue-500' },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Gradient blob background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">L'Excellence Numatech</h2>
          <p className="text-xl text-gray-600">Ce qui nous différencie depuis 5 ans</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} 
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 
                hover:bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}>
                
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${f.color} blur-xl -z-10`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 
                  group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>

                {/* Decorative dot */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-primary transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
