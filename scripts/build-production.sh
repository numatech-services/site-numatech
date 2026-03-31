#!/bin/bash
# Script de build pour déploiement Hostinger

echo "🚀 Build du site Numatech pour production..."

# Nettoyer les builds précédents
echo "🧹 Nettoyage..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache

# Installer les dépendances de production
echo "📦 Installation des dépendances..."
npm ci --production=false

# Build Next.js
echo "🔨 Build Next.js..."
npm run build

echo "✅ Build terminé !"
echo ""
echo "📁 Fichiers à uploader sur Hostinger :"
echo "  - .next/"
echo "  - node_modules/"
echo "  - public/"
echo "  - package.json"
echo "  - package-lock.json"
echo "  - next.config.js"
echo ""
echo "⚠️  N'oubliez pas de configurer les variables d'environnement sur Hostinger !"
