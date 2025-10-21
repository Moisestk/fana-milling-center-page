# ✅ Checklist de Producción - FANA Milling Center

## 📋 Estado del Proyecto para Producción en cPanel

---

## ✅ CONFIGURACIÓN COMPLETADA

### 🔧 Archivos de Configuración

- ✅ **`.cpanel.yml`** - Deployment automático con optimizaciones de memoria
- ✅ **`ecosystem.config.js`** - PM2 configurado (fork mode, 1500MB límite)
- ✅ **`server.js`** - Servidor de producción personalizado
- ✅ **`next.config.js`** - Optimizado para bajo uso de memoria
- ✅ **`.node-version`** - Node.js v24.6.0 especificado
- ✅ **`package.json`** - Engines configurados (node >=24.6.0)
- ✅ **`.gitignore`** - Configurado correctamente (excluye .env, logs, docs)
- ✅ **`.env.example`** - Plantilla de variables de entorno

### 🚀 Scripts de Deployment

- ✅ **`deploy-to-cpanel.sh`** - Script automatizado de deployment
- ✅ **`install.sh`** - Script de instalación en servidor
- ✅ Scripts npm configurados (pm2:start, pm2:stop, etc.)

### 📚 Documentación

- ✅ **`README.md`** - Actualizado con instrucciones de deployment
- ✅ **`docs/CPANEL_DEPLOYMENT.md`** - Guía completa
- ✅ **`docs/CPANEL_FANA_SERVER.md`** - Configuración del servidor específico
- ✅ **`docs/QUICK_START_CPANEL.md`** - Guía rápida
- ✅ **`docs/CPANEL_MEMORY_FIX.md`** - Optimizaciones de memoria

### 🔒 Seguridad

- ✅ **`poweredByHeader: false`** - Oculta header X-Powered-By
- ✅ **`.env` en .gitignore** - No se suben secrets al repositorio
- ✅ **`removeConsole`** - Consola deshabilitada en producción
- ✅ **`.htaccess.example`** - Headers de seguridad incluidos
- ✅ **Secrets en docs** - Documentados de forma segura

### 🧠 Optimizaciones de Memoria

- ✅ **PM2 fork mode** - Usa menos memoria que cluster
- ✅ **NODE_OPTIONS** - Límites de heap configurados (1536MB)
- ✅ **swcMinify: false** - Reduce uso de memoria en runtime
- ✅ **workerThreads: false** - Sin threads adicionales
- ✅ **cpus: 1** - Un solo CPU para limitar recursos
- ✅ **Imágenes optimizadas** - Solo WebP, menos tamaños
- ✅ **Source maps deshabilitados** - No genera archivos .map
- ✅ **Auto-restart configurado** - Se reinicia si excede 1500MB

### 🎨 Optimizaciones de Performance

- ✅ **compress: true** - Compresión Gzip habilitada
- ✅ **optimizePackageImports** - Framer Motion, Heroicons, Lucide
- ✅ **reactStrictMode** - Modo estricto de React
- ✅ **Image optimization** - Next.js image component configurado
- ✅ **i18n configurado** - next-intl para múltiples idiomas

### 🌐 Deployment

- ✅ **Git remote "cpanel"** - Configurado
- ✅ **Git remote "origin"** - GitHub configurado
- ✅ **Vercel deshabilitado** - No hace deployments automáticos
- ✅ **Deployment automático** - .cpanel.yml ejecuta todo

---

## ⚠️ PENDIENTES ANTES DEL PRIMER DEPLOYMENT

### 1. Variables de Entorno en Servidor

En el servidor cPanel, crear archivo `.env` basado en `.env.example`:

```bash
ssh -p 21098 fanawfcg@fanamillingcenter.com
cd /home/fanawfcg/public_html
nano .env
```

Configurar:
```env
NODE_ENV=production
PORT=3000
NODE_OPTIONS=--max-old-space-size=1536 --max-semi-space-size=64
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=http://fanamillingcenter.com
```

### 2. Verificar Node.js en Servidor

```bash
node --version  # Debe ser >= 24.6.0
npm --version   # Debe ser >= 10.0.0
```

Si la versión no es correcta, contactar soporte de cPanel.

### 3. Instalar PM2 en Servidor

```bash
npm install -g pm2
pm2 --version
```

### 4. Configuración de Dominio

Decidir estrategia:

**Opción A: Dominio Principal**
- Configurar proxy reverso con `.htaccess`
- Copiar `.htaccess.example` y ajustar puerto

**Opción B: Usar cPanel Node.js App Manager**
- Configurar desde cPanel → Setup Node.js App
- Especificar `server.js` como startup file

### 5. SSL/HTTPS (Recomendado)

- Instalar certificado SSL en cPanel
- Habilitar HTTPS
- Descomentar HSTS en `.htaccess` si usas SSL

---

## 🎯 LISTA DE VERIFICACIÓN FINAL

### Antes de Deployment

- [ ] ✅ Todos los cambios commiteados
- [ ] ✅ Push a GitHub exitoso
- [ ] ✅ `.env.example` actualizado con todas las variables
- [ ] ⚠️ Variables de entorno documentadas
- [ ] ⚠️ Verificar que no haya datos sensibles en código
- [ ] ✅ Build local exitoso (`npm run build`)
- [ ] ⚠️ Probar aplicación local en modo producción (`npm run prod`)

### En el Servidor (Primera Vez)

- [ ] ⚠️ Node.js v24.6.0 instalado
- [ ] ⚠️ PM2 instalado globalmente
- [ ] ⚠️ Crear archivo `.env` en servidor
- [ ] ⚠️ Crear directorio `/logs`
- [ ] ⚠️ Verificar permisos de archivos
- [ ] ⚠️ Configurar dominio/proxy

### Deployment

- [ ] ⚠️ Ejecutar `./deploy-to-cpanel.sh`
- [ ] ⚠️ Verificar deployment exitoso
- [ ] ⚠️ Verificar PM2 corriendo (`pm2 status`)
- [ ] ⚠️ Revisar logs sin errores (`pm2 logs`)
- [ ] ⚠️ Probar sitio en navegador
- [ ] ⚠️ Verificar todas las rutas funcionan
- [ ] ⚠️ Verificar cambio de idioma (es/en)
- [ ] ⚠️ Verificar imágenes se cargan
- [ ] ⚠️ Verificar responsive design

### Post-Deployment

- [ ] ⚠️ Configurar PM2 startup (`pm2 startup`, `pm2 save`)
- [ ] ⚠️ Configurar SSL/HTTPS
- [ ] ⚠️ Configurar backup automático
- [ ] ⚠️ Monitorear uso de memoria (`pm2 monit`)
- [ ] ⚠️ Configurar alertas de downtime (opcional)

---

## 🔍 VERIFICACIÓN DE FUNCIONALIDAD

### Rutas a Probar

```
✓ /es                          - Página principal (español)
✓ /en                          - Página principal (inglés)
✓ /es/nosotros                 - Página nosotros
✓ /es/servicios                - Página servicios
✓ /es/materiales               - Página materiales
✓ /es/contacto                 - Página contacto
✓ /es/politica-privacidad      - Política de privacidad
✓ /es/politica-cookies         - Política de cookies
✓ /es/terminos-servicio        - Términos de servicio
```

### Elementos a Verificar

- [ ] ⚠️ Logo se muestra correctamente
- [ ] ⚠️ Navegación funciona
- [ ] ⚠️ Cambio de idioma funciona (es ↔ en)
- [ ] ⚠️ Imágenes de servicios cargan
- [ ] ⚠️ Animaciones Framer Motion funcionan
- [ ] ⚠️ Footer con información correcta
- [ ] ⚠️ Responsive en móvil
- [ ] ⚠️ Responsive en tablet
- [ ] ⚠️ Responsive en desktop

---

## 📊 MONITOREO POST-DEPLOYMENT

### Comandos Útiles

```bash
# Ver estado
pm2 status

# Ver logs en tiempo real
pm2 logs fana-milling-center

# Ver uso de recursos
pm2 monit

# Ver información detallada
pm2 show fana-milling-center

# Reiniciar si es necesario
pm2 restart fana-milling-center
```

### Métricas a Monitorear

- **Memoria**: No debe exceder 1500MB
- **CPU**: Debe estar bajo (<80%)
- **Uptime**: Debe mantener tiempo activo estable
- **Restarts**: No debe reiniciarse constantemente

---

## 🚨 EN CASO DE PROBLEMAS

### Memoria Alta
```bash
pm2 restart fana-milling-center
# O aumentar límite en ecosystem.config.js
```

### Aplicación No Inicia
```bash
cd /home/fanawfcg/public_html
rm -rf .next
npm ci
npm run build
pm2 restart fana-milling-center
```

### Errores en Logs
```bash
pm2 logs fana-milling-center --err --lines 100
# Revisar y corregir según el error
```

---

## ✅ ESTADO ACTUAL

**Fecha**: Octubre 21, 2025

### Completado ✅
- Configuración de archivos
- Scripts de deployment
- Optimizaciones de memoria
- Documentación completa
- Git configurado
- Push a GitHub

### Pendiente ⚠️
- Primer deployment al servidor
- Configuración de variables de entorno en servidor
- Verificación de Node.js en servidor
- Instalación de PM2 en servidor
- Configuración de dominio
- Pruebas en producción

---

## 🎯 PRÓXIMOS PASOS

1. **Verificar servidor**:
   ```bash
   ssh -p 21098 fanawfcg@fanamillingcenter.com
   node --version
   npm --version
   ```

2. **Instalar PM2 si es necesario**:
   ```bash
   npm install -g pm2
   ```

3. **Hacer deployment**:
   ```bash
   ./deploy-to-cpanel.sh
   ```

4. **Verificar y configurar**:
   - Revisar PM2 status
   - Configurar dominio
   - Probar sitio

---

## 📞 INFORMACIÓN DE CONTACTO

- **Servidor**: fanamillingcenter.com:21098
- **Usuario**: fanawfcg
- **Directorio**: /home/fanawfcg/public_html/
- **Documentación**: Ver `docs/CPANEL_FANA_SERVER.md`

---

**Estado del Proyecto**: 🟡 **LISTO PARA DEPLOYMENT - PENDIENTE CONFIGURACIÓN EN SERVIDOR**

**¿El código está listo?**: ✅ **SÍ**
**¿Falta configuración en servidor?**: ⚠️ **SÍ**

