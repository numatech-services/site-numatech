# ✅ Checklist de Déploiement Hostinger

## 📋 Avant de Commencer

### Compte Hostinger
- [ ] VPS Hostinger commandé (recommandé : KVM 2)
- [ ] Accès SSH reçu (IP, username, password)
- [ ] Domaine configuré et pointant vers l'IP du VPS

### Préparation du Code
- [ ] Variables d'environnement testées en local
- [ ] Coordonnées mises à jour (téléphone, email)
- [ ] Images optimisées et uploadées
- [ ] Tests des formulaires effectués
- [ ] MongoDB Atlas configuré (ou prévu sur VPS)

---

## 🚀 Étapes de Déploiement

### 1. Configuration Initiale du VPS (30 min)

```bash
# Connexion SSH
ssh root@VOTRE_IP_VPS

# Mise à jour du système
apt update && apt upgrade -y

# Installer Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Vérifier
node --version  # v18.x
npm --version   # 9.x
```

**Checklist :**
- [ ] Connexion SSH réussie
- [ ] Node.js 18+ installé
- [ ] npm installé

---

### 2. Installation MongoDB (20 min)

**Option A : MongoDB Atlas (RECOMMANDÉ)**
- [ ] Compte créé sur mongodb.com/cloud/atlas
- [ ] Cluster M0 gratuit créé
- [ ] IP du VPS whitelistée (0.0.0.0/0 pour test)
- [ ] Chaîne de connexion récupérée
- [ ] Test de connexion réussi

**Option B : MongoDB Local**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod
```

**Checklist :**
- [ ] MongoDB accessible
- [ ] Connexion testée
- [ ] Base de données créée

---

### 3. Upload du Code (15 min)

**Méthode Git (Recommandé)**
```bash
cd /var/www
git clone VOTRE_REPO numatech
cd numatech
```

**Méthode FTP**
- [ ] FileZilla ou WinSCP installé
- [ ] Connexion SFTP établie
- [ ] Fichiers uploadés dans `/var/www/numatech`

**Checklist :**
- [ ] Tous les fichiers uploadés
- [ ] Permissions correctes (chown -R www-data:www-data)
- [ ] .env.production créé

---

### 4. Configuration de l'Application (10 min)

```bash
cd /var/www/numatech

# Créer .env.production
nano .env.production
```

Contenu :
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/numatech
NEXT_PUBLIC_SITE_URL=https://votredomaine.com
NODE_ENV=production
```

```bash
# Installer dépendances
npm install

# Build
npm run build
```

**Checklist :**
- [ ] .env.production configuré
- [ ] npm install réussi
- [ ] npm run build réussi
- [ ] Aucune erreur TypeScript

---

### 5. PM2 - Process Manager (10 min)

```bash
# Installer PM2
npm install -g pm2

# Copier ecosystem.config.js (déjà dans le projet)
# Éditer si nécessaire
nano ecosystem.config.js

# Démarrer l'app
pm2 start ecosystem.config.js

# Sauvegarder
pm2 save

# Auto-démarrage
pm2 startup
# Exécuter la commande affichée
```

**Checklist :**
- [ ] PM2 installé
- [ ] Application démarrée
- [ ] `pm2 status` affiche "online"
- [ ] Auto-démarrage configuré

**Test :** `curl http://localhost:3000` doit retourner du HTML

---

### 6. Nginx - Reverse Proxy (15 min)

```bash
# Installer Nginx
apt install -y nginx

# Copier la config fournie
nano /etc/nginx/sites-available/numatech
# Coller le contenu de nginx.conf fourni

# Modifier votredomaine.com
sed -i 's/votredomaine.com/VOTRE_DOMAINE/g' /etc/nginx/sites-available/numatech

# Activer le site
ln -s /etc/nginx/sites-available/numatech /etc/nginx/sites-enabled/

# Désactiver le site par défaut
rm /etc/nginx/sites-enabled/default

# Tester la config
nginx -t

# Redémarrer
systemctl restart nginx
```

**Checklist :**
- [ ] Nginx installé
- [ ] Config créée et activée
- [ ] `nginx -t` sans erreur
- [ ] Site accessible via IP

**Test :** Visiter `http://VOTRE_IP` dans le navigateur

---

### 7. SSL/HTTPS avec Let's Encrypt (10 min)

```bash
# Installer Certbot
apt install -y certbot python3-certbot-nginx

# Obtenir certificat
certbot --nginx -d votredomaine.com -d www.votredomaine.com

# Suivre les instructions
# Choisir : Redirect HTTP to HTTPS
```

**Checklist :**
- [ ] Certificat obtenu
- [ ] HTTPS activé
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Site accessible en HTTPS

**Test :** Visiter `https://votredomaine.com`

---

### 8. Firewall & Sécurité (10 min)

```bash
# Installer UFW
apt install -y ufw

# Autoriser SSH, HTTP, HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# Activer
ufw enable

# Vérifier
ufw status
```

**Checklist :**
- [ ] UFW installé et configuré
- [ ] Ports 22, 80, 443 ouverts
- [ ] SSH toujours accessible

---

### 9. Tests Finaux (15 min)

**Tests à effectuer :**

- [ ] **Homepage** : https://votredomaine.com
- [ ] **Navigation** : Toutes les pages accessibles
- [ ] **Formulaire audit** : /contact?type=audit
- [ ] **Formulaire matériel** : /contact?type=materiel
- [ ] **Formulaire logiciel** : /contact?type=logiciel
- [ ] **Soumission formulaire** : Lead enregistré dans MongoDB
- [ ] **Page merci** : Redirection OK
- [ ] **Version mobile** : Responsive OK
- [ ] **Performance** : Temps de chargement < 3s
- [ ] **SSL** : Cadenas vert dans le navigateur
- [ ] **Robots.txt** : /robots.txt accessible
- [ ] **Sitemap** : /sitemap.xml accessible

**Vérifier les logs :**
```bash
# Logs PM2
pm2 logs numatech

# Logs Nginx
tail -f /var/log/nginx/numatech-access.log
tail -f /var/log/nginx/numatech-error.log
```

---

### 10. Monitoring & Maintenance (5 min)

```bash
# Installer htop pour monitoring
apt install -y htop

# Configurer les alertes PM2
pm2 install pm2-logrotate
```

**Checklist :**
- [ ] PM2 monitoring configuré
- [ ] Logs rotation activée
- [ ] Backup MongoDB programmé
- [ ] Mise à jour auto SSL configurée (Certbot)

---

## 🎯 Post-Déploiement

### Tâches Immédiates
- [ ] Tester tous les formulaires
- [ ] Vérifier réception emails (si configuré)
- [ ] Configurer Google Analytics
- [ ] Soumettre sitemap à Google Search Console
- [ ] Tester sur différents navigateurs

### Tâches à J+7
- [ ] Analyser les premiers leads
- [ ] Vérifier les performances
- [ ] Optimiser si nécessaire
- [ ] Backup de la base de données

### Maintenance Mensuelle
- [ ] Mettre à jour les dépendances npm
- [ ] Vérifier les logs d'erreur
- [ ] Analyser les métriques Google Analytics
- [ ] Backup complet du VPS

---

## 📞 Contacts Utiles

**Hostinger Support :**
- Chat : 24/7 sur hostinger.com
- Email : support@hostinger.com

**MongoDB Atlas Support :**
- Docs : mongodb.com/docs/atlas
- Community : mongodb.com/community/forums

---

## 🆘 En Cas de Problème

### Site inaccessible
```bash
pm2 status          # Vérifier si l'app tourne
systemctl status nginx  # Vérifier Nginx
tail -f /var/log/nginx/numatech-error.log
```

### Erreur 502 Bad Gateway
```bash
pm2 restart numatech
systemctl restart nginx
```

### MongoDB connection failed
```bash
# Vérifier la connexion
mongo "mongodb+srv://cluster.mongodb.net/test" --username user

# Ou si local
systemctl status mongod
```

---

## ✅ Déploiement Réussi !

Si tous les items sont cochés, félicitations ! 🎉

Votre site Numatech Services est en ligne et opérationnel.

**URL de production :** https://votredomaine.com

**Prochaines étapes :**
1. Configurer les emails (SendGrid/Resend)
2. Ajouter Google Analytics
3. Optimiser les images
4. Créer du contenu blog
5. Campagne marketing

Bon succès ! 🚀
