export default function SkipLinks() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-6 py-3 rounded-lg z-[9999] font-semibold shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
    >
      Aller au contenu principal
    </a>
  )
}
