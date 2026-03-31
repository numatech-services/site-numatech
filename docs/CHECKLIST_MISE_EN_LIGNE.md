# ✅ Checklist Mise en Ligne — Numatech Services

## 🔴 CRITIQUE (AVANT tout déploiement)

### Informations légales
- [ ] Remplacer `01 XX XX XX XX` par le vrai numéro dans **TOUS** les fichiers
- [ ] Remplacer `XXX XXX XXX XXXXX` (SIRET) dans `/app/mentions-legales/page.tsx`
- [ ] Vérifier email `info@numatechservices.net` partout
- [ ] Vérifier adresse physique dans mentions légales et CGV

### Configuration .env
```bash
# Copier le template
cp .env.example .env.local

# Remplir avec les vraies valeurs
MONGODB_URI=mongodb+srv://USER:PASS@cluster.mongodb.net/numatech
NEXT_PUBLIC_SITE_URL=https://numatechservices.net
RESEND_API_KEY=re_xxxxxxxxxxxx  # Gratuit 3000 emails/mois sur resend.com
ADMIN_EMAIL=admin@numatechservices.net
FROM_EMAIL=contact@numatechservices.net
ADMIN_SECRET_TOKEN=GENERER_TOKEN_SECURISE_64_CARACTERES
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optionnel
```

### Générer token sécurisé
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Base de données MongoDB
1. Créer compte gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer cluster (M0 gratuit)
3. Créer utilisateur base de données
4. Whitelist IP `0.0.0.0/0` (ou IP du serveur)
5. Copier la connection string dans `MONGODB_URI`

### Emails Resend
1. Créer compte sur [resend.com](https://resend.com) (gratuit 3000/mois)
2. Vérifier le domaine `numatechservices.net` (ajouter records DNS)
3. Créer API key
4. Copier dans `RESEND_API_KEY`

### Médias
- [ ] Remplacer le logo SVG `/public/favicon.svg` par le vrai logo Numatech
- [ ] Générer icons PWA (192x192, 512x512) avec `scripts/generate-pwa-icons.sh`
- [ ] Créer `/public/images/og-image.jpg` (1200x630) avec logo/slogan réels
- [ ] Remplacer images Unsplash par photos produits réelles (si disponibles)

## 🟠 IMPORTANT (Semaine 1)

### SEO & Analytics
- [ ] Créer propriété Google Analytics
- [ ] Copier GA_ID dans `.env.local`
- [ ] Créer propriété Google Search Console
- [ ] Vérifier ownership (meta tag ou DNS)
- [ ] Soumettre sitemap : `https://numatechservices.net/sitemap.xml`

### Sécurité
- [ ] Vérifier HTTPS actif (certificat SSL)
- [ ] Tester headers sécurité : https://securityheaders.com/
- [ ] Changer tous les mots de passe par défaut
- [ ] Configurer firewall serveur
- [ ] Activer fail2ban ou équivalent

### Tests
- [ ] Tester tous les formulaires (contact, newsletter, devis)
- [ ] Vérifier réception emails (confirmation + notification admin)
- [ ] Tester sur mobile (iOS + Android)
- [ ] Tester sur navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Vérifier page admin `/admin` avec le token

### Performances
- [ ] Run Lighthouse audit (score >90)
- [ ] Vérifier Core Web Vitals
- [ ] Tester temps de chargement (GTmetrix, Pingdom)
- [ ] Optimiser images si besoin (compression)

## 🟢 BON À AVOIR (Mois 1)

### Contenu
- [ ] Rédiger 3-5 articles de blog
- [ ] Créer cas clients PDF téléchargeables
- [ ] Ajouter photos équipe (page À propos)
- [ ] Créer vidéo démo réelle (remplacer placeholder YouTube)

### Marketing
- [ ] Configurer Google My Business
- [ ] Créer/optimiser profils réseaux sociaux
- [ ] Mettre en place newsletter welcome email
- [ ] Créer campagne emailing de lancement

### Outils externes
- [ ] Intégrer Calendly pour prise de RDV
- [ ] Ajouter chatbot (Crisp, Intercom, Tawk.to)
- [ ] Configurer hotjar/heatmaps
- [ ] Mettre en place tracking conversions

## 📋 Commandes de déploiement

```bash
# 1. Build production
npm run build

# 2. Tester build localement
npm start

# 3. Déployer sur Hostinger
# Voir DEPLOIEMENT_HOSTINGER.md pour instructions complètes
```

## 🔍 Tests post-déploiement

```bash
# Test API leads
curl -X POST https://numatechservices.net/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","type":"general"}'

# Test admin (remplacer TOKEN)
curl https://numatechservices.net/api/leads \
  -H "Authorization: Bearer VOTRE_TOKEN"

# Test sitemap
curl https://numatechservices.net/sitemap.xml

# Test robots
curl https://numatechservices.net/robots.txt
```

## 🎯 KPIs à suivre

- Trafic organique (Google Analytics)
- Taux de conversion formulaires
- Temps de chargement pages
- Taux de rebond
- Leads générés / semaine
- Emails délivrés vs bounced

## 📞 Support

En cas de problème technique :
- Logs serveur : `/var/log/numatech/`
- Logs Next.js : `.next/server/`
- MongoDB logs : Dashboard Atlas
- Resend logs : Dashboard Resend

---

**Dernière mise à jour :** Février 2026
