import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items]

  // Schema JSON-LD pour SEO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://numatechservices.net${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-3 px-6 bg-neutral-50 border-b border-gray-100">
        <ol className="max-w-7xl mx-auto flex items-center gap-1 text-sm flex-wrap">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index === 0 && <Home className="w-3.5 h-3.5 text-gray-400" />}
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300" />}
              {item.href && index < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
