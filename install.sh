#!/bin/bash

# Script de instalación automatizado para cPanel
# Este script configura todo lo necesario para correr la aplicación en producción

echo "🚀 Iniciando configuración de FANA Milling Center para cPanel..."
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para imprimir con color
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Verificar Node.js
echo "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado. Por favor instala Node.js 20.x o superior."
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js instalado: $NODE_VERSION"

# Verificar npm
if ! command -v npm &> /dev/null; then
    print_error "npm no está instalado."
    exit 1
fi

NPM_VERSION=$(npm -v)
print_success "npm instalado: $NPM_VERSION"

# Verificar/Instalar PM2
echo ""
echo "Verificando PM2..."
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 no está instalado. Instalando PM2..."
    npm install -g pm2
    if [ $? -eq 0 ]; then
        print_success "PM2 instalado correctamente"
    else
        print_error "Error al instalar PM2. Por favor instálalo manualmente: npm install -g pm2"
        exit 1
    fi
else
    PM2_VERSION=$(pm2 -v)
    print_success "PM2 ya está instalado: $PM2_VERSION"
fi

# Crear directorio de logs
echo ""
echo "Creando directorio de logs..."
mkdir -p logs
print_success "Directorio de logs creado"

# Instalar dependencias
echo ""
echo "Instalando dependencias del proyecto..."
npm ci
if [ $? -eq 0 ]; then
    print_success "Dependencias instaladas correctamente"
else
    print_error "Error al instalar dependencias"
    exit 1
fi

# Build de la aplicación
echo ""
echo "Construyendo la aplicación Next.js..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build completado exitosamente"
else
    print_error "Error al construir la aplicación"
    exit 1
fi

# Preguntar si desea iniciar PM2
echo ""
read -p "¿Deseas iniciar la aplicación con PM2 ahora? (s/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[SsYy]$ ]]; then
    echo "Iniciando aplicación con PM2..."
    pm2 start ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "Aplicación iniciada correctamente"
        
        # Guardar configuración de PM2
        pm2 save
        print_success "Configuración de PM2 guardada"
        
        # Mostrar estado
        echo ""
        echo "Estado de la aplicación:"
        pm2 status
        
        echo ""
        print_success "¡Instalación completada!"
        echo ""
        echo "📋 Comandos útiles:"
        echo "   - Ver logs:     pm2 logs fana-milling-center"
        echo "   - Ver estado:   pm2 status"
        echo "   - Reiniciar:    pm2 restart fana-milling-center"
        echo "   - Detener:      pm2 stop fana-milling-center"
        echo ""
        echo "🌐 La aplicación debería estar corriendo en: http://localhost:3000"
    else
        print_error "Error al iniciar la aplicación con PM2"
        exit 1
    fi
else
    print_warning "Aplicación no iniciada. Para iniciarla manualmente ejecuta:"
    echo "   npm run pm2:start"
fi

echo ""
echo "✨ Para configurar el auto-inicio de PM2 al reiniciar el servidor, ejecuta:"
echo "   pm2 startup"
echo "   pm2 save"
echo ""

print_success "¡Configuración completada!"

