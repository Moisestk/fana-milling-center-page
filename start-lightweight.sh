#!/bin/bash

# Script de inicio ligero para Next.js en cPanel
# Optimizado para servidores con memoria limitada

echo "🚀 Iniciando Fana Milling Center (Modo Ligero)..."

# Configurar variables de entorno para reducir uso de memoria
export NODE_ENV=production
export PORT=${PORT:-3000}
export NODE_OPTIONS="--max-old-space-size=1536 --max-semi-space-size=64"
export NEXT_TELEMETRY_DISABLED=1

# Mostrar configuración
echo "📋 Configuración:"
echo "   NODE_ENV: $NODE_ENV"
echo "   PORT: $PORT"
echo "   NODE_OPTIONS: $NODE_OPTIONS"

# Verificar que el build existe
if [ ! -d ".next" ]; then
    echo "❌ Error: El directorio .next no existe"
    echo "   Ejecuta 'npm run build' primero"
    exit 1
fi

# Limpiar procesos existentes de PM2 (si existen)
echo "🧹 Limpiando procesos existentes..."
pm2 delete fana-milling-center 2>/dev/null || true

# Esperar un momento
sleep 2

# Iniciar la aplicación con PM2
echo "▶️  Iniciando aplicación con PM2..."
pm2 start ecosystem.config.js

# Verificar el estado
echo ""
echo "✅ Verificando estado..."
pm2 status

# Mostrar logs
echo ""
echo "📜 Últimas líneas de logs:"
pm2 logs fana-milling-center --lines 20 --nostream

echo ""
echo "✨ Aplicación iniciada"
echo "   Para ver logs: pm2 logs fana-milling-center"
echo "   Para detener: pm2 stop fana-milling-center"
echo "   Para monitorear: pm2 monit"

