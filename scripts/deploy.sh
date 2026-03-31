#!/bin/bash
# Script de déploiement automatique pour Hostinger VPS
# Usage: ./deploy.sh

set -e  # Arrêter en cas d'erreur

echo "🚀 Déploiement Numatech Services sur Hostinger VPS"
echo "=================================================="

# Variables
APP_DIR="/var/www/numatech"
APP_NAME="numatech"

# Vérifier si on est root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Veuillez exécuter en tant que root (sudo ./deploy.sh)"
    exit 1
fi

# 1. Aller dans le répertoire de l'application
echo "📁 Navigation vers $APP_DIR..."
cd $APP_DIR

# 2. Sauvegarder le .env
echo "💾 Sauvegarde des variables d'environnement..."
if [ -f .env.production ]; then
    cp .env.production .env.production.backup
fi

# 3. Pull des dernières modifications (si Git est utilisé)
if [ -d .git ]; then
    echo "📥 Récupération des dernières modifications..."
    git pull origin main
fi

# 4. Installer/Mettre à jour les dépendances
echo "📦 Installation des dépendances..."
npm ci --production=false

# 5. Build de l'application
echo "🔨 Build de l'application..."
npm run build

# 6. Redémarrer l'application avec PM2
echo "♻️  Redémarrage de l'application..."
pm2 restart $APP_NAME

# 7. Vérifier le statut
echo "✅ Vérification du statut..."
pm2 status

# 8. Afficher les logs récents
echo ""
echo "📋 Derniers logs (Ctrl+C pour quitter) :"
pm2 logs $APP_NAME --lines 20

echo ""
echo "🎉 Déploiement terminé avec succès !"
echo "🌐 Votre site : https://votredomaine.com"
