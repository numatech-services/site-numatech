# 🚀 Guide de Démarrage Rapide - Numatech Services

## Installation en 5 minutes

### 1. Installer Node.js
Télécharger et installer Node.js 18+ depuis [nodejs.org](https://nodejs.org/)

Vérifier l'installation :
```bash
node --version  # Doit afficher v18.x ou plus
npm --version   # Doit afficher 9.x ou plus
```

### 2. Installer les dépendances
```bash
cd numatech-nextjs
npm install
```

### 3. Configuration MongoDB

#### Option A : MongoDB Atlas (Cloud - RECOMMANDÉ pour débuter)

1. Aller sur [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un compte gratuit
3. Créer un cluster gratuit (M0)
4. Cliquer sur "Connect" → "Connect your application"
5. Copier la chaîne de connexion

6. Créer le fichier `.env.local` :
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/numatech?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Option B : MongoDB Local

```bash
# Installation (macOS)
brew tap mongodb/brew
brew install mongodb-community

# Démarrer MongoDB
brew services start mongodb-community

# Créer .env.local
echo "MONGODB_URI=mongodb://localhost:27017/numatech" > .env.local
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" >> .env.local
```

### 4. Lancer le serveur
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) 🎉

## 🧪 Tester le formulaire

1. Aller sur http://localhost:3000/contact?type=audit
2. Remplir le formulaire
3. Soumettre
4. Vérifier dans MongoDB que le lead a été créé

### Voir les leads dans MongoDB

#### MongoDB Atlas
1. Aller dans "Browse Collections"
2. Sélectionner la base `numatech`
3. Voir la collection `leads`

#### MongoDB Local (avec MongoDB Compass)
1. Télécharger [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Se connecter à `mongodb://localhost:27017`
3. Ouvrir la base `numatech` → collection `leads`

## 📝 Personnalisation Rapide

### Changer les couleurs

Éditer `tailwind.config.js` :
```javascript
colors: {
  primary: '#FF0000',    // Votre couleur primaire
  secondary: '#00FF00',  // Votre couleur secondaire
}
```

### Modifier le contenu de la homepage

Éditer `app/page.tsx` et `components/Hero.tsx`

### Ajouter vos coordonnées

Éditer `components/Footer.tsx` :
```tsx
<Phone size={16} />
<span>01 23 45 67 89</span>  // Votre numéro

<Mail size={16} />
<span>votre@email.fr</span>  // Votre email
```

## 🎯 Pages Disponibles

| URL | Description |
|-----|-------------|
| `/` | Page d'accueil |
| `/services-informatiques` | Services IT |
| `/materiel-infrastructure` | Matériel |
| `/solutions-logicielles` | Logiciels |
| `/clients-realisations` | Réalisations |
| `/ressources` | Ressources |
| `/a-propos` | À propos |
| `/contact` | Contact |
| `/contact?type=audit` | Demande d'audit |
| `/contact?type=materiel` | Devis matériel |
| `/contact?type=logiciel` | Projet logiciel |

## 🐛 Dépannage

### Erreur : "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur : "MongoDB connection failed"
- Vérifier que MongoDB est démarré
- Vérifier la chaîne de connexion dans `.env.local`
- Pour MongoDB Atlas : vérifier l'IP whitelist

### Erreur : "Port 3000 already in use"
```bash
# Tuer le processus sur le port 3000
lsof -ti:3000 | xargs kill -9

# Ou utiliser un autre port
PORT=3001 npm run dev
```

### Le formulaire ne fonctionne pas
- Ouvrir la console développeur (F12)
- Vérifier les erreurs
- Vérifier que MongoDB est connecté
- Tester l'API directement : `curl -X POST http://localhost:3000/api/leads`

## 📦 Build et Déploiement

### Build local
```bash
npm run build
npm run start  # Serveur de production sur port 3000
```

### Déploiement sur Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Configurer les variables d'environnement dans Vercel Dashboard
# Settings → Environment Variables → Ajouter MONGODB_URI
```

## ✅ Checklist avant de déployer

- [ ] Tester tous les formulaires
- [ ] Vérifier les liens de navigation
- [ ] Remplacer les images de démo
- [ ] Mettre vos vraies coordonnées
- [ ] Configurer les variables d'environnement
- [ ] Tester le build de production
- [ ] Configurer le domaine

## 🆘 Besoin d'aide ?

- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Documentation MongoDB : [mongodb.com/docs](https://www.mongodb.com/docs)
- Documentation Tailwind : [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📧 Support

Pour toute question sur ce projet :
- Créer une issue sur GitHub
- Contacter le développeur

Bon développement ! 🚀
