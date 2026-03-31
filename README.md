# Numatech Services — Site Next.js 14

Site web professionnel pour Numatech Services, spécialiste IT & équipement pédagogique pour l'éducation et les collectivités.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS 3.4
- **Base de données** : MongoDB (via Mongoose)
- **Emails** : Resend
- **Langage** : TypeScript strict
- **Déploiement** : Hostinger VPS (Node.js)

## Démarrage rapide

```bash
# 1. Cloner / décompresser le projet
cd numatech-nextjs

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env.local
# → Remplir MONGODB_URI et RESEND_API_KEY

# 4. Lancer en développement
npm run dev
# → http://localhost:3000
```

## Structure du projet

```
numatech-nextjs/
├── app/                     # Pages (Next.js App Router)
│   ├── page.tsx             # Accueil
│   ├── catalogue/           # Catalogue produits (9 catégories)
│   ├── secteurs/            # 4 secteurs (écoles, collèges, universités, collectivités)
│   ├── solutions/           # 4 solutions logicielles
│   ├── services-informatiques/
│   ├── materiel-infrastructure/
│   ├── solutions-logicielles/
│   ├── projets/
│   ├── ressources/
│   ├── contact/
│   ├── a-propos/
│   ├── admin/               # Interface admin (protégée par token)
│   ├── mentions-legales/
│   ├── confidentialite/
│   ├── api/
│   │   ├── leads/           # POST: créer lead, GET: lister (auth)
│   │   ├── leads/export/    # GET: exporter CSV (auth)
│   │   ├── newsletter/      # POST: inscription
│   │   └── search/          # GET: recherche produits
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── sitemap.ts
├── components/              # 18 composants React
├── contexts/
│   └── CartContext.tsx      # Panier/devis (Context API)
├── lib/
│   ├── mongodb.ts           # Connexion MongoDB avec cache
│   └── utils.ts             # Utilitaires (cn, formatPrice…)
├── models/
│   └── Lead.ts              # Modèle Mongoose
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── images/og-image.svg
└── .env.example
```

## Variables d'environnement

| Variable | Description | Requis |
|---|---|---|
| `MONGODB_URI` | URI de connexion MongoDB Atlas | ✅ |
| `NEXT_PUBLIC_SITE_URL` | URL de production | ✅ |
| `RESEND_API_KEY` | Clé API Resend (emails) | Recommandé |
| `ADMIN_EMAIL` | Email de notification des leads | Recommandé |
| `ADMIN_SECRET_TOKEN` | Token pour accès à /admin | ✅ |
| `NEXT_PUBLIC_GA_ID` | ID Google Analytics | Optionnel |

## Pages

| Route | Description |
|---|---|
| `/` | Accueil |
| `/catalogue` | Catalogue produits (9 catégories) |
| `/catalogue/ecrans-interactifs` | Sous-catégorie avec produits |
| `/secteurs/ecoles` | Secteur écoles primaires |
| `/secteurs/colleges-lycees` | Secteur collèges & lycées |
| `/secteurs/universites` | Secteur universités |
| `/secteurs/collectivites` | Secteur collectivités |
| `/solutions/bibliomaker` | Solution BiblioMaker |
| `/solutions/cairn` | Solution Cairn.info |
| `/solutions/dalloz` | Solution Dalloz |
| `/solutions/compilatio` | Solution Compilatio |
| `/contact` | Formulaire de contact |
| `/admin` | Admin leads (token requis) |

## API Endpoints

```
POST /api/leads           → Créer un lead (public, rate limited)
GET  /api/leads           → Lister les leads (Bearer token requis)
GET  /api/leads/export    → Exporter CSV (Bearer token requis)
POST /api/newsletter      → Inscription newsletter
GET  /api/search?q=...    → Recherche produits (autocomplete)
```

## Déploiement Hostinger

```bash
npm run build
# Copier .next/standalone/ sur le VPS
# Configurer Nginx comme reverse proxy
# Voir DEPLOIEMENT_HOSTINGER.md
```

## Accès admin

```
URL: https://numatechservices.net/admin
Token: valeur de ADMIN_SECRET_TOKEN dans .env.local
Export CSV: GET /api/leads/export (avec Bearer token)
```

---

Développé par Numatech Services • 2026
