'use client'
import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  name: string
  category: string
  price: number
  url: string
}

export default function SearchBar({ className = '' }: { className?: string }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    clearTimeout(timer.current)
    if (query.length < 2) { setResults([]); setOpen(false); return }
    setLoading(true)
    timer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setResults(data.results || [])
        setOpen(true)
      } catch { setResults([]) }
      finally { setLoading(false) }
    }, 300)
    return () => clearTimeout(timer.current)
  }, [query])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl px-4 py-2 gap-2 focus-within:border-primary transition">
        <Search size={18} className="text-gray-400 flex-shrink-0" />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Rechercher un produit, une solution…"
          className="flex-1 outline-none text-sm text-gray-900 bg-transparent"
          aria-label="Recherche"
        />
        {loading && <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />}
        {query && !loading && (
          <button onClick={() => { setQuery(''); setResults([]); setOpen(false) }}>
            <X size={16} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
          <div className="p-2">
            {results.map(r => (
              <Link key={r.id} href={r.url} onClick={() => { setOpen(false); setQuery('') }}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition group">
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.category}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-primary">{r.price}€</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-primary transition" />
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 px-4 py-2">
            <Link href={`/catalogue?q=${encodeURIComponent(query)}`} onClick={() => setOpen(false)}
              className="text-xs text-primary hover:underline">
              Voir tous les résultats pour « {query} »
            </Link>
          </div>
        </div>
      )}

      {open && results.length === 0 && !loading && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-center text-sm text-gray-500 z-50">
          Aucun résultat pour « {query} »
        </div>
      )}
    </div>
  )
}
