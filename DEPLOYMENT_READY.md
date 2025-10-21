# ✅ Proyecto Listo para Deployment en cPanel

## 🎉 ¡Todo está configurado!

Tu proyecto **FANA Milling Center** está completamente preparado para ser desplegado en tu servidor cPanel.

---

## 📋 Información del Servidor

```
🌐 Servidor:  fanamillingcenter.com
👤 Usuario:   fanawfcg
🔌 Puerto:    21098
🔑 Password:  c3gAN(Om7Fk;
📁 Web Root:  /home/fanawfcg/public_html/
```

---

## 🚀 DEPLOYMENT EN 3 PASOS

### Paso 1️⃣: Ejecutar Script de Deployment

```bash
./deploy-to-cpanel.sh
```

Este script hará:
- ✅ Commit de cambios pendientes (si los hay)
- ✅ Push a GitHub (opcional)
- ✅ Push automático a cPanel
- ✅ Deployment automático en el servidor

### Paso 2️⃣: Verificar en el Servidor

```bash
# Conectarse al servidor
ssh -p 21098 fanawfcg@fanamillingcenter.com

# Verificar estado de PM2
pm2 status

# Ver logs
pm2 logs fana-milling-center
```

### Paso 3️⃣: ¡Listo! 🎊

Tu aplicación estará disponible en: **http://fanamillingcenter.com**

---

## 📁 Archivos de Configuración Creados

### 🔧 Configuración de Deployment
- ✅ `.cpanel.yml` - Deployment automático con optimizaciones de memoria
- ✅ `ecosystem.config.js` - PM2 con límites de memoria (1500MB)
- ✅ `server.js` - Servidor de producción de Next.js
- ✅ `.node-version` - Node.js v24.6.0
- ✅ `.gitignore` - Actualizado con carpeta docs/ y logs/
- ✅ `deploy-to-cpanel.sh` - Script de deployment automatizado

### 📚 Documentación Completa
- ✅ `docs/CPANEL_DEPLOYMENT.md` - Guía completa de deployment
- ✅ `docs/QUICK_START_CPANEL.md` - Guía rápida
- ✅ `docs/CPANEL_FANA_SERVER.md` - **Configuración específica de tu servidor**
- ✅ `docs/CPANEL_MEMORY_FIX.md` - Optimizaciones de memoria
- ✅ `install.sh` - Script de instalación para el servidor

### 🎨 Documentación de Proyecto (Movida a docs/)
- ✅ `docs/COMO_AGREGAR_IMAGENES.md`
- ✅ `docs/DEPLOY.md`
- ✅ `docs/IMAGENES_NECESARIAS.md`
- ✅ `docs/LEGAL_INFO_UPDATE.md`
- ✅ `docs/TYPOGRAPHY_IMPROVEMENTS.md`

---

## 🔄 Git Remotes Configurados

```bash
origin  → https://github.com/AngelvisYanez/fana.git
cpanel  → ssh://fanawfcg@fanamillingcenter.com:21098/home/fanawfcg/repositories/fana
```

---

## 🧠 Optimizaciones de Memoria Aplicadas

### En `next.config.js`:
- ✅ Deshabilitar `swcMinify` para reducir memoria en runtime
- ✅ Reducir workers (`workerThreads: false`, `cpus: 1`)
- ✅ Optimizar imágenes (solo WebP, menos tamaños)
- ✅ Deshabilitar source maps de producción
- ✅ Deshabilitar optimización de fuentes

### En `ecosystem.config.js`:
- ✅ Modo `fork` en lugar de `cluster`
- ✅ Límite de memoria: 1500MB
- ✅ Variables NODE_OPTIONS optimizadas
- ✅ Auto-restart configurado

### En `.cpanel.yml`:
- ✅ Variables de entorno para limitar memoria
- ✅ Limpiar caché antes de build
- ✅ Reinicio automático de PM2

---

## 📝 Scripts NPM Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Producción
npm run build            # Construir aplicación
npm run start            # Servidor Next.js estándar
npm run prod             # Servidor de producción (server.js)

# PM2
npm run pm2:start        # Iniciar con PM2
npm run pm2:stop         # Detener
npm run pm2:restart      # Reiniciar
npm run pm2:logs         # Ver logs
npm run pm2:status       # Ver estado

# Deployment
npm run deploy           # Instalar, construir y reiniciar
./deploy-to-cpanel.sh   # Deployment completo a cPanel
```

---

## 🔍 Comandos Útiles

### Deployment
```bash
# Deployment automático (recomendado)
./deploy-to-cpanel.sh

# Deployment manual
git push cpanel main
```

### SSH al Servidor
```bash
# Conexión SSH
ssh -p 21098 fanawfcg@fanamillingcenter.com

# Una vez conectado:
cd /home/fanawfcg/public_html
pm2 status
pm2 logs fana-milling-center
pm2 monit  # Monitor de recursos en tiempo real
```

### Verificación
```bash
# Ver estado
pm2 status

# Ver logs
pm2 logs fana-milling-center

# Reiniciar si es necesario
pm2 restart fana-milling-center

# Ver información detallada
pm2 show fana-milling-center
```

---

## 🐛 Solución Rápida de Problemas

### ❌ Deployment falla
```bash
# Verificar conexión
ssh -p 21098 fanawfcg@fanamillingcenter.com

# Verificar repositorio
cd /home/fanawfcg/repositories/fana
git status
```

### ❌ Aplicación no inicia
```bash
# En el servidor
cd /home/fanawfcg/public_html
pm2 delete fana-milling-center
npm run build
npm run pm2:start
```

### ❌ Error de memoria
```bash
# Ver uso de memoria
pm2 monit

# Reiniciar para limpiar memoria
pm2 restart fana-milling-center
```

### ❌ Puerto ocupado
```bash
# Ver qué usa el puerto 3000
lsof -ti:3000

# Matar proceso si es necesario
lsof -ti:3000 | xargs kill -9
```

---

## 📚 Documentación de Referencia

1. **Para deployment**: `docs/CPANEL_FANA_SERVER.md` ⭐ **LEER PRIMERO**
2. **Para problemas**: `docs/CPANEL_MEMORY_FIX.md`
3. **Guía completa**: `docs/CPANEL_DEPLOYMENT.md`
4. **Inicio rápido**: `docs/QUICK_START_CPANEL.md`

---

## ✨ Próximos Pasos

### 1. Hacer Push a GitHub (opcional pero recomendado)
```bash
git push origin main
```

### 2. Deployment a cPanel
```bash
./deploy-to-cpanel.sh
```

### 3. Verificar en el Servidor
```bash
ssh -p 21098 fanawfcg@fanamillingcenter.com
pm2 status
pm2 logs fana-milling-center
```

### 4. Configurar Dominio (si es necesario)
- Usar cPanel → Setup Node.js App
- O configurar proxy reverso con `.htaccess`

---

## 🎯 Checklist de Deployment

- [ ] Todos los cambios commiteados
- [ ] Push a GitHub (opcional)
- [ ] Push a cPanel con `./deploy-to-cpanel.sh`
- [ ] Verificar estado de PM2 en el servidor
- [ ] Verificar logs sin errores
- [ ] Probar la aplicación en el navegador
- [ ] Configurar dominio si es necesario
- [ ] Configurar PM2 startup para auto-inicio

---

## 🎊 ¡Estás listo!

Tu proyecto está completamente configurado y optimizado para cPanel.

**Para hacer el deployment ahora:**

```bash
./deploy-to-cpanel.sh
```

¡Buena suerte! 🚀

---

**Última actualización**: Octubre 2025
**Proyecto**: FANA Milling Center
**Dominio**: fanamillingcenter.com
**Estado**: ✅ LISTO PARA PRODUCCIÓN

