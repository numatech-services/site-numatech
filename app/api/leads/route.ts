import { NextResponse } from "next/server"
import clientPromise from '@/lib/mongodb'


// =========================
// ENREGISTRER UN LEAD (FORMULAIRE)
// =========================
export async function POST(req: Request) {

  try {

    const body = await req.json()

    const client = await clientPromise
    const db = client.db()

    const lead = {
      ...body,
      createdAt: new Date()
    }

    await db.collection("leads").insertOne(lead)

    return NextResponse.json({
      success: true,
      message: "Demande envoyée avec succès"
    })

  } catch (error) {

    console.error("Erreur POST leads :", error)

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}


// =========================
// RECUPERER LES LEADS (ADMIN)
// =========================
export async function GET(req: Request) {

  const authHeader = req.headers.get("authorization")

  if (!authHeader) {
    return NextResponse.json({ error: "Token manquant" }, { status: 401 })
  }

  const token = authHeader.replace("Bearer ", "")

  if (token !== process.env.ADMIN_SECRET_TOKEN) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 })
  }

  try {

    const client = await clientPromise
    const db = client.db()

    const leads = await db
      .collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    console.log("Leads:", leads)

    return NextResponse.json({ leads })

  } catch (error) {

    return NextResponse.json(
      { error: "Erreur MongoDB" },
      { status: 500 }
    )
  }
}
