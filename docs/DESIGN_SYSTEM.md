# Numatech Services — Design System

## Palette de couleurs

### Primaire
- `primary` : #123A7D (Bleu profond éducation)
- `primary-dark` : #0F172A (Bleu nuit)
- `primary-light` : #1FB6FF (Bleu ciel)

### Secondaire  
- `secondary` : #176B87 (Teal professionnel)
- `secondary-light` : #38BDF8 (Bleu clair)

### Accents
- `accent-yellow` : #FFC857 (Jaune doux — CTAs)
- `accent-coral` : #F97362 (Corail — badges urgence)
- `accent-purple` : #7C3AED (Violet électrique)
- `accent-green` : #58B368 (Vert doux — success)

### Neutres
- 50 : #F8FAFC
- 100 : #F5F7FA
- 200 : #E5E7EB
- 300 : #E2E8F0
- 400 : #8A94A6

## Typographie

### Fonts
- **Heading** : Poppins (500, 600, 700, 800)
- **Body** : Inter (400, 500, 600)

### Scale
- `text-7xl` : Hero titles (72px)
- `text-5xl` : Section titles (48px)
- `text-4xl` : Subsection titles (36px)
- `text-xl` : Lead paragraphs (20px)
- `text-base` : Body (16px)

## Composants

### Hero
- Gradient background : `from-primary via-primary-dark to-secondary`
- Badge avec blur : `bg-white/20 backdrop-blur-sm`
- CTAs : jaune pour primaire, white/10 pour secondaire
- Stats : 3 colonnes avec séparateur `border-t border-white/20`

### Cards
- Glassmorphism : `bg-white/60 backdrop-blur-sm`
- Hover : `hover:shadow-2xl hover:scale-105 hover:-translate-y-2`
- Border : `border-2 border-gray-100`
- Radius : `rounded-2xl` ou `rounded-3xl`

### Buttons
- Primaire : `bg-primary text-white hover:bg-primary-dark`
- Secondaire : `bg-white/10 border-2 border-white hover:bg-white`
- Accent : `bg-accent-yellow text-primary hover:bg-white`
- Shadow : `shadow-xl hover:shadow-2xl`
- Transform : `hover:scale-105 transition-all duration-300`

### Animations
- Staggered reveals : `animate-in slide-in-from-top-{4,8,12,16} duration-700 delay-{100,200,300}`
- Hover scale : `hover:scale-110 transition-transform duration-500`
- Gradient blobs : `blur-3xl animate-pulse` (duration 6-8s)
- Counter : Intersection Observer + easeOut cubic

## Sections

### Background patterns
1. **Gradient mesh** : Primary → Secondary avec opacity 10%
2. **Grid pattern** : SVG pattern 60x60 avec animation translateY
3. **Blobs animés** : 2-3 rounded-full blur-3xl avec animate-pulse décalé

### Spacing
- Section padding : `py-24`
- Container : `max-w-7xl mx-auto px-6`
- Gap grille : `gap-6` (cards), `gap-12` (colonnes)

### Hover effects
- Cards : `-translate-y-2 scale-105 shadow-2xl`
- Images : `scale-110` (7-10s duration)
- Icons : `rotate-6 scale-110`
- Links : `translate-x-1` ou `-translate-y-1`

## Images

### Sources
- Unsplash (éducation, tech, bureaux)
- Aspect ratios : `4/3` (standard), `16/9` (video)
- Object-fit : `cover` avec `hover:scale-110`

### Overlays
- Gradient : `from-black/80 via-black/20 to-transparent`
- Backdrop blur : `backdrop-blur-sm`

## Accessibility

- Focus visible : `ring-4 ring-primary/10`
- Skip links : composant dédié
- ARIA labels sur tous les boutons icon-only
- Alt text descriptif sur toutes les images

## Performance

- Images lazy : `loading="lazy"`
- Animations : CSS-only quand possible
- Intersection Observer pour révélations scroll
- Tailwind JIT pour bundle minimal
