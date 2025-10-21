# FANA Milling Center - Sitio Web Corporativo

Sitio web profesional para FANA Milling Center, laboratorio dental de precisión B2B especializado en tecnología CAD/CAM.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Heroicons**

## 🎨 Manual de Marca

### Paleta de Colores
- **Primario Fuerte (Navy)**: `#1E2B4F` - Fondos y navegación
- **Primario (Acción)**: `#125DA3` - Botones y elementos de énfasis
- **Secundario (Fondo Claro)**: `#DBEDF9` - Secciones de fondo suave
- **Contraste (Blanco)**: `#FFFFFF` - Texto sobre fondos oscuros

### Tipografía
- **Títulos**: Playfair Display (Serif)
- **Cuerpo de Texto**: Lato (Sans-serif)

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd fana-milling-center
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y configuración Tailwind
│   ├── layout.tsx           # Layout principal con fuentes y metadata
│   └── page.tsx             # Página principal
├── components/
│   ├── HeroSection.tsx      # Sección hero con diseño B2B
│   ├── ValueProposition.tsx # Propuesta de valor (4 elementos)
│   ├── ServiceCategories.tsx # Categorías de servicios
│   └── Footer.tsx           # Footer con información B2B
├── tailwind.config.js       # Configuración de Tailwind con colores personalizados
└── package.json             # Dependencias del proyecto
```

## ✨ Características Principales

### 🎯 Diseño B2B Profesional
- Enfoque corporativo y técnico
- Navegación clara y funcional
- Contenido orientado a profesionales dentales


### 📱 Totalmente Responsivo
- Diseño adaptativo para todos los dispositivos
- Optimizado para móviles, tablets y desktop
- Grid system flexible con Tailwind CSS

### 🎭 Animaciones Suaves
- Animaciones de entrada con Framer Motion
- Transiciones fluidas entre secciones
- Efectos de hover interactivos

### 🔍 SEO Optimizado
- Metadata optimizada para motores de búsqueda
- Títulos y descripciones relevantes
- Estructura semántica HTML5

## 🎨 Componentes Principales

### Hero Section
- Título impactante con tipografía Playfair Display
- Subtítulo descriptivo con fuente Lato
- CTAs principales con iconos Heroicons
- Estadísticas de la empresa

### Propuesta de Valor
- 4 pilares fundamentales del negocio
- Iconos representativos de cada valor
- Diseño en cuadrícula responsiva
- Animaciones de entrada escalonadas

### Categorías de Servicios
- 3 servicios principales del laboratorio
- Tarjetas informativas con características
- Proceso de trabajo paso a paso
- CTAs específicos para cada servicio

### Footer B2B
- Información de contacto completa
- Enlaces a servicios y recursos
- Sección de llamada a la acción
- Información legal y de privacidad

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Servidor de producción (cPanel)
npm run prod

# Linting
npm run lint

# PM2 - Gestión de procesos
npm run pm2:start    # Iniciar con PM2
npm run pm2:stop     # Detener
npm run pm2:restart  # Reiniciar
npm run pm2:logs     # Ver logs
npm run pm2:status   # Ver estado

# Deployment completo
npm run deploy       # Instalar, construir y reiniciar
```

## 🌐 Deployment en cPanel

Este proyecto está configurado para ser desplegado fácilmente en servidores cPanel.

### Instalación Rápida

```bash
# Ejecutar script de instalación automatizado
./install.sh
```

### Deployment Manual

```bash
# 1. Instalar dependencias
npm ci

# 2. Construir la aplicación
npm run build

# 3. Iniciar con PM2
npm run pm2:start
```

### Archivos de Configuración para cPanel

- **`.cpanel.yml`** - Deployment automático con Git
- **`ecosystem.config.js`** - Configuración de PM2
- **`server.js`** - Servidor de producción optimizado
- **`.node-version`** - Versión de Node.js requerida (20.19.0)
- **`.htaccess.example`** - Ejemplo de proxy reverso

### Documentación Completa

Consulta la documentación detallada de deployment en:
- 📖 **Guía Completa**: `docs/CPANEL_DEPLOYMENT.md`
- ⚡ **Inicio Rápido**: `docs/QUICK_START_CPANEL.md`

## 📞 Información de Contacto

**FANA GROUP CORP (Nombre ficticio: FANA MILLING CENTER)**
- **Número de registro:** G25000131466
- **Estado:** ACTIVO
- **Fecha de registro:** 09/10/2025
- **Fecha de vencimiento:** 31/12/2030
- **Teléfono:** +1 (832) 897-6805
- **Email:** info@fanamilling.com
- **Dirección:** 8501 NW 107TH CT. UNIT 3, MIAMI, FL 33178, USA
- **Condado:** MIAMI-DADE

---

Desarrollado con ❤️ para FANA Milling Center
