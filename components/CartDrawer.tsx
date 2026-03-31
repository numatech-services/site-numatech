'use client'
import { useCart } from '@/contexts/CartContext'
import { X, ShoppingCart, Trash2, Plus, Minus, FileText } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, count, total, remove, updateQty, clear } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-8 z-50 bg-secondary text-white w-14 h-14 rounded-full shadow-2xl hover:bg-secondary-light transition flex items-center justify-center"
        aria-label="Voir mon devis"
      >
        <ShoppingCart size={22} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {count}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[9999] shadow-2xl transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText size={20} className="text-primary" /> Mon devis ({count})
          </h2>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-xl transition">
            <X size={20} />
          </button>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-30" />
              <p>Votre devis est vide</p>
              <Link href="/catalogue" onClick={() => setOpen(false)}
                className="mt-4 inline-block text-primary text-sm hover:underline">
                Parcourir le catalogue →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-gray-100">
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{item.category}</div>
                    <div className="text-primary font-bold">{(item.price * item.qty).toLocaleString('fr-FR')}CFA HT</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border rounded-lg hover:border-primary transition">
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border rounded-lg hover:border-primary transition">
                        <Plus size={12} />
                      </button>
                    </div>
                    <button onClick={() => remove(item.id)} className="text-gray-400 hover:text-red-500 transition">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total estimé HT</span>
              <span className="text-2xl font-bold text-primary">{total.toLocaleString('fr-FR')}€</span>
            </div>
            <p className="text-xs text-gray-400">Prix indicatifs. Un devis personnalisé vous sera transmis sous 24h.</p>
            <Link href="/contact?type=devis" onClick={() => setOpen(false)}
              className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-primary-dark transition">
              Demander ce devis
            </Link>
            <button onClick={clear} className="w-full text-sm text-gray-400 hover:text-red-500 transition">
              Vider le devis
            </button>
          </div>
        )}
      </div>
    </>
  )
}
