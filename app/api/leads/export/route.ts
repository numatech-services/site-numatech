import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import Lead from '@/models/Lead'

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization')
  if (!process.env.ADMIN_SECRET_TOKEN || authHeader !== `Bearer ${process.env.ADMIN_SECRET_TOKEN}`) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  try {
    const client = await clientPromise
const db = client.db()
    const leads = await Lead.find().sort({ createdAt: -1 }).lean()
    const headers = ['Date','Nom','Email','Téléphone','Organisation','Type','Statut','Message']
    const rows = leads.map((l: any) => [
      new Date(l.createdAt).toLocaleDateString('fr-FR'),
      l.name, l.email, l.phone || '', l.organisation || '',
      l.type, l.status, (l.message || '').replace(/[\r\n,]/g, ' '),
    ])
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n')
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
