import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Numatech Services | IT & Équipement pédagogique pour l'éducation",
  description: "Infogérance, matériel informatique et solutions logicielles pour écoles, collèges, lycées, universités et collectivités. Livraison, installation, formation incluses.",
}

import Hero from '@/components/Hero'
import QuatrePiliers from '@/components/QuatrePiliers'
import InfiniteMarquee from '@/components/InfiniteMarquee'
import ProductShowcase from '@/components/ProductShowcase'
import TypesEtablissements from '@/components/TypesEtablissements'
import VideoHero from '@/components/VideoHero'
import TCOComparison from '@/components/TCOComparison'
import ProcessTimeline from '@/components/ProcessTimeline'
import ProjectsGallery from '@/components/ProjectsGallery'
import Confiance from '@/components/Confiance'
import ChiffresCles from '@/components/ChiffresCles'
import FeaturesGrid from '@/components/FeaturesGrid'
import PourquoiNumatech from '@/components/PourquoiNumatech'
import FAQ from '@/components/FAQ'
import Ressources from '@/components/Ressources'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero principal avec animations staggered */}
      <Hero />

      {/* 2. 4 Piliers pour moderniser */}
      <QuatrePiliers />

      {/* 3. Marquee infini logos clients */}
      <InfiniteMarquee />

      {/* 4. Showcase produits avec carousel */}
      <ProductShowcase />

      {/* 5. Par type d'établissement */}
      <TypesEtablissements />

      {/* 6. Vidéo présentation */}
      <VideoHero />

      {/* 7. Comparaison TCO (avant/après économies) */}
      <TCOComparison />

      {/* 8. Notre méthode (Timeline interactive) */}
      <ProcessTimeline />

      {/* 9. Galerie projets filtrée */}
      <ProjectsGallery />

      {/* 10. Confiance (témoignages) */}
      <Confiance />

      {/* 11. Chiffres clés animés */}
      <ChiffresCles />

      {/* 12. Features grid glassmorphism */}
      <FeaturesGrid />

      {/* 13. Pourquoi Numatech */}
      <PourquoiNumatech />

      {/* 14. FAQ accordéon */}
      <FAQ />

      {/* 15. Ressources */}
      <Ressources />

      {/* 16. CTA final avec formulaire + confetti */}
      <CTA />
    </>
  )
}
