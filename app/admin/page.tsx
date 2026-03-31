import type { Metadata } from "next"
import AdminDashboard from "./AdminDashboard"

export const metadata: Metadata = {
  title: "Administration | Numatech Services",
  description: "Tableau de bord administrateur pour la gestion des leads",
  robots: {
    index: false,
    follow: false
  }
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminDashboard />
    </main>
  )
}
