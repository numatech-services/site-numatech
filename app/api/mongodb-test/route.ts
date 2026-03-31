import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // utilise la base définie dans MONGODB_URI

    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      message: "Connexion MongoDB réussie !",
      collections: collections.map((c) => c.name),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur de connexion à MongoDB" }, { status: 500 });
  }
}
