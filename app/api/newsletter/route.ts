import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import Lead from '@/models/Lead'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }
    const client = await clientPromise
const db = client.db()
    // Éviter les doublons
    const existing = await Lead.findOne({ email: email.toLowerCase(), type: 'newsletter' })
    if (existing) {
      return NextResponse.json({ success: true, message: 'Déjà inscrit' })
    }
    await Lead.create({
      name: name?.trim() || 'Newsletter',
      email: email.toLowerCase().trim(),
      type: 'newsletter',
      source: 'newsletter-popup',
      status: 'new',
    })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
