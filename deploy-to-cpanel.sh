#!/bin/bash

# Script de deployment a cPanel
# Este script facilita el deployment del proyecto al servidor cPanel

echo "🚀 Iniciando deployment a cPanel..."
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que hay cambios para commitear
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠${NC} Hay cambios sin commitear"
    read -p "¿Deseas hacer commit de estos cambios? (s/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[SsYy]$ ]]; then
        echo "Ingresa el mensaje del commit:"
        read commit_message
        git add -A
        git commit -m "$commit_message"
        echo -e "${GREEN}✓${NC} Cambios commiteados"
    else
        echo -e "${RED}✗${NC} Deployment cancelado. Commit tus cambios primero."
        exit 1
    fi
fi

# Hacer push a GitHub (opcional)
echo ""
read -p "¿Deseas hacer push a GitHub también? (s/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[SsYy]$ ]]; then
    echo "Haciendo push a GitHub..."
    git push origin main
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓${NC} Push a GitHub completado"
    else
        echo -e "${RED}✗${NC} Error al hacer push a GitHub"
    fi
fi

# Hacer push a cPanel
echo ""
echo "Haciendo push a cPanel..."
echo -e "${YELLOW}ℹ${NC} Se te pedirá la contraseña: c3gAN(Om7Fk;"
echo ""

git push cpanel main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓${NC} ¡Deployment a cPanel completado!"
    echo ""
    echo "📋 Próximos pasos en el servidor cPanel:"
    echo "   1. El archivo .cpanel.yml ejecutará automáticamente:"
    echo "      - Instalación de dependencias"
    echo "      - Build de la aplicación"
    echo "      - Inicio de PM2"
    echo ""
    echo "   2. Verifica el deployment conectándote por SSH:"
    echo "      ssh -p 21098 fanawfcg@fanamillingcenter.com"
    echo ""
    echo "   3. Una vez conectado, verifica el estado:"
    echo "      cd /home/fanawfcg/public_html"
    echo "      pm2 status"
    echo "      pm2 logs fana-milling-center"
    echo ""
    echo "🌐 Tu aplicación debería estar disponible pronto!"
else
    echo ""
    echo -e "${RED}✗${NC} Error al hacer push a cPanel"
    echo "Verifica:"
    echo "  - Que la contraseña sea correcta: c3gAN(Om7Fk;"
    echo "  - Que el servidor esté accesible"
    echo "  - Que el repositorio remoto exista en cPanel"
    exit 1
fi

