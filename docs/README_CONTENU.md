# 📝 Contenu à Personnaliser

Ce document liste **TOUS** les placeholders et contenus génériques à remplacer par vos vraies données.

## 🔴 PRIORITÉ 1 - Informations légales

### Numéro de téléphone
**Rechercher :** `01 XX XX XX XX`  
**Remplacer par :** Votre vrai numéro  
**Fichiers concernés :**
- `app/contact/page.tsx`
- `app/contact/merci/page.tsx`
- `components/CTA.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/SchemaOrg.tsx`
- `app/mentions-legales/page.tsx`
- `app/cgv/page.tsx`
- `emails/contact-confirmation.ts`

### SIRET
**Rechercher :** `XXX XXX XXX XXXXX`  
**Remplacer par :** Votre SIRET réel  
**Fichiers :** `app/mentions-legales/page.tsx`

### Emails
**Vérifier partout :**
- `info@numatechservices.net` (général)
- `contact@numatechservices.net` (formulaires)
- `commercial@numatechservices.net` (CGV)
- `privacy@numatechservices.net` (RGPD)

## 🟠 PRIORITÉ 2 - Médias

### Logo
**À remplacer :**
- `/public/favicon.svg` → Logo Numatech réel
- `/public/icons/icon-192.png` → Icon PWA 192×192
- `/public/icons/icon-512.png` → Icon PWA 512×512
- `/public/icons/apple-touch-icon.png` → Icon iOS 180×180

### OG Image
**À remplacer :**
- `/public/images/og-image.svg` → Image sociale 1200×630 avec logo réel

### Photos produits
**Actuellement :** Images Unsplash génériques  
**À faire :** Remplacer par photos réelles des produits Numatech dans :
- `components/ProductShowcase.tsx`
- `components/Hero.tsx`
- `components/ProjectsGallery.tsx`

### Vidéo
**Actuellement :** Placeholder YouTube (Rick Astley 😅)  
**À faire :** Remplacer l'URL dans `components/VideoHero.tsx` ligne 96 :
```typescript
src="https://www.youtube.com/embed/VOTRE_VIDEO_ID?autoplay=1"
```

## 🟡 PRIORITÉ 3 - Contenu marketing

### Témoignages clients
**Fichier :** `components/Confiance.tsx`  
**Action :** Remplacer les 3 témoignages génériques par de vrais avis clients avec :
- Nom et prénom réels
- Fonction exacte
- Établissement réel
- Photo si possible (remplacer emoji avatar)

### Statistiques
**Fichiers :** `components/ChiffresCles.tsx`, `components/Hero.tsx`  
**Vérifier :**
- Nombre d'établissements équipés (actuellement 10+)
- Nombre de postes gérés (100+)
- Années d'expertise (5 ans)
- Taux de satisfaction (98%)

### Projets réalisés
**Fichier :** `components/ProjectsGallery.tsx`  
**Action :** Les 6 projets exemples sont fictifs. Remplacer par :
- Vrais noms établissements
- Budgets réels
- Photos avant/après si disponibles
- Descriptions précises des livrables

### Logos clients
**Fichier :** `components/InfiniteMarquee.tsx`  
**Action :** Actuellement des emojis. Remplacer par :
- Vrais logos clients (format PNG/SVG)
- Avec accord clients pour affichage

## 🟢 NICE TO HAVE - Enrichissement

### Équipe
**Page :** `app/a-propos/page.tsx`  
**Ajouter :**
- Photos des membres clés de l'équipe
- Biographies courtes
- Rôles et expertises

### Cas clients détaillés
**Créer :** Pages ou PDF pour les 3-5 meilleurs projets avec :
- Contexte et problématique
- Solution déployée
- Résultats chiffrés
- Témoignage détaillé

### Blog/Actualités
**Créer :** `/app/blog/` avec 5-10 articles sur :
- Transformation numérique éducation
- Retours d'expérience clients
- Nouveaux produits/services
- Conseils IT pour écoles

### Ressources PDF
**Créer :** Guides téléchargeables mentionnés dans `/app/ressources/guides/page.tsx` :
- Guide transformation numérique (PDF)
- Guide choix écran interactif (PDF)
- Checklist salle informatique (PDF)
- Guide WiFi haute densité (PDF)

## 🔍 Commande de recherche globale

```bash
# Trouver tous les placeholders téléphone
grep -r "01 XX XX XX XX" .

# Trouver SIRET
grep -r "XXX XXX XXX" .

# Trouver images Unsplash (à éventuellement remplacer)
grep -r "images.unsplash.com" .

# Trouver placeholder vidéo YouTube
grep -r "dQw4w9WgXcQ" .
```

---

**Note :** Une fois tous ces éléments remplacés, votre site sera 100% personnalisé et prêt production !
