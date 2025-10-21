# 📁 Configuración para Subdirectorio /demo

## 🌐 URL del Sitio

El sitio FANA Milling Center está configurado para funcionar en:

```
http://fanamillingcenter.com/demo
```

## ⚙️ Archivos Configurados

### 1. **next.config.js**
```javascript
basePath: '/demo',
assetPrefix: '/demo',
```

Esto hace que:
- Todas las rutas tengan el prefijo `/demo`
- Los assets (JS, CSS, imágenes) se carguen desde `/demo/_next/...`

### 2. **.cpanel.yml**
```yaml
- export DEPLOYPATH=/home/$USER/public_html/demo
```

Despliega directamente en el subdirectorio `/demo`

### 3. **.env.example**
```env
NEXT_PUBLIC_SITE_URL=http://fanamillingcenter.com/demo
```

### 4. **Directorio en Servidor**
```
/home/fanawfcg/public_html/demo/
```

## 🔗 Rutas de la Aplicación

Con esta configuración, todas las rutas automáticamente tienen el prefijo `/demo`:

```
Español:
- http://fanamillingcenter.com/demo/es
- http://fanamillingcenter.com/demo/es/nosotros
- http://fanamillingcenter.com/demo/es/servicios
- http://fanamillingcenter.com/demo/es/materiales
- http://fanamillingcenter.com/demo/es/contacto

Inglés:
- http://fanamillingcenter.com/demo/en
- http://fanamillingcenter.com/demo/en/about
- http://fanamillingcenter.com/demo/en/services
- http://fanamillingcenter.com/demo/en/materials
- http://fanamillingcenter.com/demo/en/contact
```

## 🚀 Deployment

El deployment automáticamente coloca todo en `/demo`:

```bash
./deploy-to-cpanel.sh
```

O manualmente:
```bash
git push cpanel main
# Deployment automático vía .cpanel.yml → /demo
```

## 🔄 Cambiar a Dominio Raíz

Si en el futuro quieres mover el sitio a la raíz del dominio:

### 1. Actualizar next.config.js
```javascript
// Remover o comentar estas líneas:
// basePath: '/demo',
// assetPrefix: '/demo',
```

### 2. Actualizar .cpanel.yml
```yaml
- export DEPLOYPATH=/home/$USER/public_html/
```

### 3. Actualizar .env
```env
NEXT_PUBLIC_SITE_URL=http://fanamillingcenter.com
```

### 4. Rebuild y redeploy
```bash
npm run build
./deploy-to-cpanel.sh
```

## 📝 Notas Importantes

1. **next-intl**: El plugin de internacionalización funciona correctamente con basePath
2. **Imágenes**: Next.js Image optimization funciona con el prefijo `/demo`
3. **API Routes**: Si usas API routes, también tendrán el prefijo `/demo/api/`
4. **Middleware**: El middleware funciona con el basePath configurado
5. **Links internos**: Usa el componente `Link` de Next.js, automáticamente agrega `/demo`

## ✅ Verificación

Para verificar que todo funciona:

```bash
# Desarrollo local con /demo
npm run dev
# Visitar: http://localhost:3000/demo/es

# Build de producción
npm run build
npm run start
# Visitar: http://localhost:3000/demo/es
```

## 🌐 Proxy Reverso (Alternativa)

Si prefieres que el sitio esté en la raíz pero los archivos en `/demo`, usa proxy en `.htaccess`:

```apache
RewriteEngine On
RewriteRule ^(.*)$ /demo/$1 [L,QSA]
```

Pero **NO** uses `basePath` en `next.config.js` en ese caso.

---

**Configuración Actual**: ✅ Subdirectorio `/demo` activo
**URL del Sitio**: http://fanamillingcenter.com/demo

