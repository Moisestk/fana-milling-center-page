# Guía de Despliegue en Vercel

Este documento explica cómo configurar el despliegue automático del proyecto FANA Milling Center en Vercel desde GitHub.

## Configuración Inicial

### 1. Preparar el Repositorio en GitHub

El proyecto ya está configurado y listo para desplegarse. Los archivos necesarios ya están en el repositorio:
- `vercel.json` - Configuración de Vercel
- `.gitignore` - Archivos ignorados por Git
- `package.json` - Dependencias y scripts de build

### 2. Conectar Vercel con GitHub

1. Ve a [Vercel](https://vercel.com)
2. Inicia sesión con tu cuenta (o crea una nueva)
3. Haz clic en **"Add New..."** → **"Project"**
4. Selecciona **"Import Git Repository"**
5. Autoriza a Vercel para acceder a tu cuenta de GitHub
6. Busca y selecciona el repositorio `AngelvisYanez/fana`
7. Haz clic en **"Import"**

### 3. Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. La configuración debería verse así:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (raíz del proyecto)
- **Build Command:** `next build` (automático)
- **Output Directory:** `.next` (automático)
- **Install Command:** `npm install` (automático)

**Variables de Entorno:**
Este proyecto no requiere variables de entorno en este momento. Si necesitas agregar alguna en el futuro:
1. Ve a Project Settings → Environment Variables
2. Agrega las variables necesarias

### 4. Deploy

1. Haz clic en **"Deploy"**
2. Espera a que el build se complete (puede tomar 2-5 minutos)
3. Una vez completado, recibirás una URL de producción (ej: `fana.vercel.app`)

## Despliegue Automático

Una vez configurado, **cada push a la rama `main`** en GitHub activará automáticamente un nuevo despliegue en Vercel:

```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

Vercel automáticamente:
1. Detectará el push
2. Descargará el código
3. Instalará las dependencias
4. Ejecutará el build
5. Desplegará la nueva versión

## Ramas y Preview Deployments

- **Rama `main`:** Se despliega a producción automáticamente
- **Otras ramas:** Crean "Preview Deployments" (URLs temporales para testing)
- **Pull Requests:** Generan una URL de preview única para revisar cambios

## Monitoreo

Puedes ver el estado de tus despliegues en:
- Dashboard de Vercel: https://vercel.com/dashboard
- Cada commit en GitHub mostrará el estado del deploy con ✅ o ❌

## Dominios Personalizados

Para conectar tu dominio personalizado:

1. Ve a Project Settings → Domains
2. Agrega tu dominio (ej: `fanamilling.com`)
3. Sigue las instrucciones para configurar los DNS
4. Vercel generará automáticamente certificados SSL

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build local (para testing)
npm run build

# Ejecutar producción local
npm run start

# Linting
npm run lint
```

## Troubleshooting

### El build falla
- Revisa los logs en el dashboard de Vercel
- Asegúrate de que `npm run build` funcione localmente
- Verifica que todas las dependencias estén en `package.json`

### Cambios no se reflejan
- Espera 2-3 minutos después del push
- Verifica en el dashboard que el deploy se completó
- Limpia la caché del navegador (Ctrl/Cmd + Shift + R)

### Errores 404
- Verifica que las rutas dinámicas estén correctamente configuradas
- Revisa el archivo `next.config.js`
- Asegúrate de que `middleware.ts` esté funcionando

## Soporte

Para más información:
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Soporte de Vercel](https://vercel.com/support)

