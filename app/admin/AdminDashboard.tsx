"use client"

import { useState } from 'react'
import { Eye, EyeOff, RefreshCw, Mail, Phone, Building2, Clock } from 'lucide-react'

interface Lead {
  _id: string
  name: string
  email: string
  phone?: string
  organisation?: string
  type: string
  message?: string
  status: string
  createdAt: string
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  qualified: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-700',
  lost: 'bg-red-100 text-red-700',
}

export default function AdminDashboard() {
  const [token, setToken] = useState('')
  const [tokenInput, setTokenInput] = useState('')
  const [showToken, setShowToken] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchLeads = async (t: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${t}` }
      })

      if (!res.ok) throw new Error('Token invalide ou accès refusé')

      const data = await res.json()
      setLeads(data.leads)
      setToken(t)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔐</span>
            </div>
            <h1 className="text-2xl font-bold">Admin Numatech</h1>
            <p className="text-gray-500 text-sm mt-2">Espace réservé à l'équipe</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <div className="relative mb-4">
            <input
              type={showToken ? 'text' : 'password'}
              value={tokenInput}
              onChange={e => setTokenInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && fetchLeads(tokenInput)}
              placeholder="Token d'accès admin"
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl outline-none"
            />
            <button
              onClick={() => setShowToken(!showToken)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showToken ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={() => fetchLeads(tokenInput)}
            disabled={loading || !tokenInput}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition disabled:opacity-50"
          >
            {loading ? 'Connexion…' : 'Accéder'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">📊 Admin Leads — {leads.length}</h1>

        <button
          onClick={() => fetchLeads(token)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Actualiser
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
        {leads.map(lead => (
          <div key={lead._id} className="bg-white rounded-xl border p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{lead.name}</h3>

                <div className="text-sm text-gray-600 flex gap-4 flex-wrap mt-2">
                  <span><Mail size={14} /> {lead.email}</span>
                  {lead.phone && <span><Phone size={14} /> {lead.phone}</span>}
                  {lead.organisation && <span><Building2 size={14} /> {lead.organisation}</span>}
                  <span className="flex items-center gap-1">
  <Clock size={14} />
  {lead.createdAt
    ? new Date(lead.createdAt).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : "Date inconnue"}
</span>

                </div>
              </div>

              <span className={`text-xs px-3 py-1 rounded-full ${STATUS_COLORS[lead.status] || STATUS_COLORS.new}`}>
                {lead.status}
              </span>
            </div>

            {lead.message && (
              <div className="mt-4 bg-neutral-50 p-3 rounded">
                {lead.message}
              </div>
            )}
          </div>
        ))}

        {leads.length === 0 && !loading && (
          <div className="text-center text-gray-400 py-10">
            Aucun lead pour l'instant
          </div>
        )}
      </div>
    </div>
  )
}
