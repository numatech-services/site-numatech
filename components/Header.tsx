'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import SearchBar from '@/components/SearchBar'

const navLinks = {
  services: [
    { href: '/services-informatiques', label: 'Infogérance & Maintenance', icon: '🖥️' },
    { href: '/materiel-infrastructure', label: 'Matériel & Infrastructure', icon: '📦' },
    { href: '/solutions-logicielles', label: 'Solutions Logicielles', icon: '💡' },
    { href: '/catalogue', label: 'Catalogue Produits', icon: '📋' },
  ],
  secteurs: [
    { href: '/secteurs/ecoles', label: 'Écoles Primaires', icon: '🎒' },
    { href: '/secteurs/colleges-lycees', label: 'Collèges & Lycées', icon: '📚' },
    { href: '/secteurs/universites', label: 'Universités', icon: '🎓' },
    { href: '/secteurs/collectivites', label: 'Collectivités', icon: '🏛️' },
  ],
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile si on redimensionne vers desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-200'
      }`}
    >
      {/* Bandeau info */}
      <div className="bg-primary text-white text-xs text-center py-1.5 hidden md:block">
        ✨ Audit informatique gratuit pour tout établissement — 
        <Link href="/contact?type=audit" className="underline ml-1 hover:text-accent-yellow transition">
          Réserver maintenant
        </Link>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow">
    <img
      src="/images/logo.png"
      alt="Logo Numatech"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="hidden sm:block">
    <div className="font-bold text-base leading-tight text-gray-900">
      Numatech Services
    </div>
    <div className="text-xs text-gray-500">
      IT & Équipement pédagogique
    </div>
  </div>
</Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition text-sm font-medium">
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {navLinks.services.map(link => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition group/item">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Secteurs dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition text-sm font-medium">
                Secteurs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {navLinks.secteurs.map(link => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projets" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition text-sm font-medium">Projets</Link>
            <Link href="/ressources" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition text-sm font-medium">Ressources</Link>
            <Link href="/a-propos" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition text-sm font-medium">À propos</Link>
          </div>

          {/* Recherche desktop */}
          <div className="hidden lg:block flex-1 max-w-xs">
            <SearchBar />
          </div>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="tel:+33100000000" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition">
              <Phone size={15} /><span className="font-medium">+227 96 55 69 84</span>
            </a>
            <Link href="/contact" className="bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary-dark transition shadow-lg text-sm font-semibold">
              Demander un devis
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-1">

            {/* Services */}
            <button
              onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 text-left font-medium"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'services' && (
              <div className="pl-4 space-y-1">
                {navLinks.services.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary/5 hover:text-primary transition text-sm">
                    <span>{link.icon}</span><span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Secteurs */}
            <button
              onClick={() => setMobileSection(mobileSection === 'secteurs' ? null : 'secteurs')}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 text-left font-medium"
            >
              Secteurs
              <ChevronDown size={16} className={`transition-transform ${mobileSection === 'secteurs' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'secteurs' && (
              <div className="pl-4 space-y-1">
                {navLinks.secteurs.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary/5 hover:text-primary transition text-sm">
                    <span>{link.icon}</span><span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {['Projets:/projets', 'Ressources:/ressources', 'À propos:/a-propos'].map(item => {
              const [label, href] = item.split(':')
              return (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-gray-50 font-medium">{label}</Link>
              )
            })}

            <div className="pt-3 space-y-2">
              <a href="tel:+33100000000"
                className="flex items-center justify-center gap-2 w-full border-2 border-gray-200 py-3 rounded-xl font-medium text-sm">
                <Phone size={16} /> +227 96 55 69 84
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="block w-full bg-primary text-white py-3 rounded-xl text-center font-semibold">
                Demander un devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
