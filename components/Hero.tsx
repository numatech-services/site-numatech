import Link from 'next/link'
import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#0d2d6b] to-secondary pt-20 pb-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animationDuration: '20s'
        }} />
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-white space-y-8">
            
            {/* Badge */}
            <div className="inline-block animate-in slide-in-from-top-4 duration-700">
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 
                hover:bg-white/30 transition cursor-default flex items-center gap-2">
                <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                Noté 4.9/5 par 10+ école et université
              </div>
            </div>
            
            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] font-heading animate-in slide-in-from-top-8 duration-700 delay-100">
              Transformez votre<br />
              <span className="text-accent-yellow inline-block hover:scale-105 transition-transform duration-300">
                école numérique
              </span><br />
              avec Numatech
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl animate-in slide-in-from-top-12 duration-700 delay-200">
              Infogérance, matériel et solutions logicielles. 
              <strong className="text-accent-yellow"> Un partenaire unique</strong> de la salle de classe au data center.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in slide-in-from-top-16 duration-700 delay-300">
              <Link 
                href="/contact?type=demo" 
                className="group relative overflow-hidden bg-accent-yellow text-primary px-8 py-4 rounded-xl font-bold 
                  shadow-2xl hover:shadow-accent-yellow/50 transition-all duration-300 flex items-center justify-center gap-2
                  hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Play className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Voir une démo gratuite</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              
              <Link
                href="/contact?type=audit"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold
                  hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                Audit gratuit
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-in slide-in-from-bottom-8 duration-700 delay-500">
              {[
                { value: '10+', label: 'écoles et université' },
                { value: '100+', label: 'postes gérés' },
                { value: '98%', label: 'satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-3xl font-bold text-accent-yellow group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-in slide-in-from-right-12 duration-1000 delay-400">
            
            {/* Main card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-0 rotate-2 transition-all duration-700 group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                <img 
  src="/images/labo6.png"
  alt="Classe moderne"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Université Abdou Moumouni</div>
                  <div className="text-sm text-gray-500">ENS UAM • 2000 étudiants</div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl 
              animate-bounce font-bold text-sm">
              ✓ Projet réussi
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
