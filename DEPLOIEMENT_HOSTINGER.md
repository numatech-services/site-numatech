# 🚀 Guide de Déploiement Hostinger - Numatech Services

## ⚠️ Prérequis Hostinger

Hostinger propose deux types d'hébergement pour Next.js :

### Option 1 : VPS Hostinger (RECOMMANDÉ pour Next.js)
- ✅ Support complet de Node.js
- ✅ Performance optimale
- ✅ Contrôle total
- 💰 À partir de 4.99€/mois

### Option 2 : Hébergement Web avec Node.js
- ✅ Support Node.js limité
- ⚠️ Peut nécessiter une configuration statique
- 💰 Moins cher

**Ce guide couvre les deux options.**

---

## 🎯 Option 1 : Déploiement sur VPS Hostinger (Recommandé)

### Étape 1 : Préparer le VPS

1. **Commander un VPS** sur Hostinger
2. **Se connecter en SSH** :
```bash
ssh root@votre-ip-vps
```

### Étape 2 : Installer Node.js sur le VPS

```bash
# Mettre à jour le système
apt update && apt upgrade -y

# Installer Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Vérifier l'installation
node --version  # Doit afficher v18.x
npm --version
```

### Étape 3 : Installer MongoDB

**Option A : MongoDB sur le VPS**
```bash
# Installer MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt update
apt install -y mongodb-org

# Démarrer MongoDB
systemctl start mongod
systemctl enable mongod
```

**Option B : MongoDB Atlas (Plus simple)**
1. Créer un compte gratuit sur https://mongodb.com/cloud/atlas
2. Créer un cluster M0 (gratuit)
3. Whitelist l'IP de votre VPS
4. Récupérer la chaîne de connexion

### Étape 4 : Uploader le Projet

**Méthode 1 : Via Git (Recommandé)**
```bash
# Sur le VPS
cd /var/www
git clone votre-repo-git numatech
cd numatech
```

**Méthode 2 : Via FTP/SFTP**
- Utiliser FileZilla ou WinSCP
- Uploader tous les fichiers dans `/var/www/numatech`

### Étape 5 : Configurer le Projet

```bash
cd /var/www/numatech

# Installer les dépendances
npm install

# Créer le fichier .env.production
nano .env.production
```

Contenu de `.env.production` :
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/numatech
# Ou MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/numatech

# Site URL
NEXT_PUBLIC_SITE_URL=https://votredomaine.com

# Node Environment
NODE_ENV=production
```

### Étape 6 : Build du Projet

```bash
npm run build
```

### Étape 7 : Configurer PM2 (Process Manager)

```bash
# Installer PM2
npm install -g pm2

# Créer le fichier ecosystem
nano ecosystem.config.js
```

Contenu de `ecosystem.config.js` :
```javascript
module.exports = {
  apps: [{
    name: 'numatech',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/numatech',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

```bash
# Démarrer l'application
pm2 start ecosystem.config.js

# Sauvegarder la config PM2
pm2 save

# Auto-démarrage au boot
pm2 startup
```

### Étape 8 : Configurer Nginx (Reverse Proxy)

```bash
# Installer Nginx
apt install -y nginx

# Créer la configuration
nano /etc/nginx/sites-available/numatech
```

Contenu de la config Nginx :
```nginx
server {
    listen 80;
    server_name votredomaine.com www.votredomaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Activer le site
ln -s /etc/nginx/sites-available/numatech /etc/nginx/sites-enabled/

# Tester la config
nginx -t

# Redémarrer Nginx
systemctl restart nginx
```

### Étape 9 : Installer SSL (HTTPS) avec Let's Encrypt

```bash
# Installer Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir le certificat SSL
certbot --nginx -d votredomaine.com -d www.votredomaine.com

# Le renouvellement est automatique
```

### Étape 10 : Vérification

Visitez `https://votredomaine.com` 🎉

---

## 🎯 Option 2 : Hébergement Web Hostinger (Version Statique)

Si vous utilisez l'hébergement web classique, vous devez générer une version statique.

### Modifications Nécessaires

**1. Modifier `next.config.js`** :
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export statique
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

**2. Supprimer les fonctionnalités serveur** :
⚠️ **Limitation** : L'API `/api/leads` ne fonctionnera pas en mode statique.

**Solutions** :
- Utiliser un service externe comme Formspree, Netlify Forms, ou Google Forms
- Utiliser une API serverless (Vercel Functions, AWS Lambda)

**3. Build statique** :
```bash
npm run build
```

Cela crée un dossier `out/` avec les fichiers statiques.

**4. Upload sur Hostinger** :
- Uploader le contenu du dossier `out/` dans `public_html/`

---

## 🔧 Améliorations Recommandées Avant Déploiement

### 1. Sécurité

**Créer `.env.production`** avec des valeurs sécurisées :
```env
MONGODB_URI=mongodb+srv://prod_user:STRONG_PASSWORD@cluster.mongodb.net/numatech
NEXT_PUBLIC_SITE_URL=https://votredomaine.com
```

**Ajouter rate limiting** dans `app/api/leads/route.ts` :
```typescript
// TODO: Ajouter un rate limiter pour éviter le spam
// Exemple avec Redis ou in-memory cache
```

### 2. Performance

**Optimiser les images** :
- Convertir en WebP
- Compresser avec TinyPNG
- Utiliser les bonnes dimensions

**Ajouter un fichier `robots.txt`** :
```bash
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://votredomaine.com/sitemap.xml
```

### 3. SEO

**Créer `app/sitemap.ts`** :
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://votredomaine.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://votredomaine.com/services-informatiques',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... autres pages
  ]
}
```

### 4. Analytics

**Ajouter Google Analytics dans `app/layout.tsx`** :
```tsx
import Script from 'next/script'

// Dans le <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 5. Email Notifications

**Intégrer SendGrid ou Resend pour les emails** :
```bash
npm install resend
```

**Créer `app/api/leads/route.ts` version améliorée** :
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  // ... créer le lead
  
  // Envoyer email notification
  await resend.emails.send({
    from: 'contact@numatech.fr',
    to: 'admin@numatech.fr',
    subject: 'Nouveau lead reçu',
    html: `<p>Nouveau lead de ${body.name}</p>`
  })
  
  // Envoyer email confirmation au client
  await resend.emails.send({
    from: 'contact@numatech.fr',
    to: body.email,
    subject: 'Votre demande a été reçue',
    html: `<p>Merci ${body.name}, nous reviendrons vers vous sous 24h.</p>`
  })
}
```

---

## 📋 Checklist de Déploiement

### Avant le Build
- [ ] Variables d'environnement configurées
- [ ] MongoDB accessible depuis le serveur
- [ ] Toutes les coordonnées sont à jour
- [ ] Images optimisées et uploadées
- [ ] Tests en local réussis

### Configuration Serveur
- [ ] Node.js 18+ installé
- [ ] MongoDB installé/configuré
- [ ] PM2 installé et configuré
- [ ] Nginx installé et configuré
- [ ] SSL/HTTPS configuré
- [ ] Firewall configuré (ports 80, 443, 22)

### Après le Déploiement
- [ ] Site accessible en HTTPS
- [ ] Formulaires fonctionnent
- [ ] Leads enregistrés dans MongoDB
- [ ] Emails de notification fonctionnent
- [ ] Navigation complète testée
- [ ] Version mobile testée
- [ ] Google Analytics configuré

---

## 🆘 Dépannage Hostinger

### Problème : "Cannot find module"
```bash
cd /var/www/numatech
rm -rf node_modules
npm install
npm run build
pm2 restart numatech
```

### Problème : MongoDB connection failed
```bash
# Vérifier que MongoDB tourne
systemctl status mongod

# Redémarrer MongoDB
systemctl restart mongod

# Vérifier la connexion
mongo --eval "db.adminCommand('ping')"
```

### Problème : Site inaccessible
```bash
# Vérifier PM2
pm2 status

# Vérifier les logs
pm2 logs numatech

# Vérifier Nginx
nginx -t
systemctl status nginx
```

### Problème : Port 3000 occupé
```bash
# Trouver le processus
lsof -i :3000

# Tuer le processus
kill -9 PID
```

---

## 💰 Coûts Estimés

| Service | Prix |
|---------|------|
| VPS Hostinger (2 vCPU, 4GB RAM) | 4.99€/mois |
| Domaine .fr | 8.99€/an |
| MongoDB Atlas M0 | Gratuit |
| SSL Let's Encrypt | Gratuit |
| **Total mensuel** | ~**5-6€/mois** |

---

## 📞 Support

**Documentation Hostinger** :
- https://support.hostinger.com/
- Chat en direct 24/7

**Support MongoDB** :
- https://www.mongodb.com/docs/

**Besoin d'aide ?**
Contactez le support Hostinger pour :
- Configuration SSH
- Installation Node.js
- Configuration domaine

---

## ✅ Prêt à Déployer !

Suivez ce guide étape par étape et votre site sera en ligne en 1-2 heures ! 🚀
