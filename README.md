# Peliculas App

Aplicación Ionic + Angular que consume la API de TMDB para listar cartelera, populares y detalles de películas, con opción de favoritos en almacenamiento local y búsqueda avanzada.

## Características

- Angular 20 + Ionic 8
- Swiper para carruseles responsivos (posters, pares y backdrops)
- Pipes personalizados: `imagen` (URLs y fallback), `pares`, `filtroImagen`
- Service Worker habilitado (PWA) + manifest
- Fallback de imágenes (sin avatar / sin banner)
- Búsqueda con sugerencias y disparo por Enter o click
- Netlify ready (\_redirects para SPA routing)

## Scripts

```bash
npm start        # Servir en desarrollo
npm run build    # Build producción (salida en /www)
npm test         # Ejecutar tests
npm run lint     # Linter
```

## PWA

- `manifest.webmanifest` con iconos.
- `ngsw-config.json` para cache de assets y llamadas a TMDB.
- Se genera `ngsw.json` y `ngsw-worker.js` tras build producción.

## Despliegue en Netlify

1. Build: `npm run build`.
2. Configurar Publish directory: `www`.
3. Confirmar archivo `_redirects` en la raíz del deploy.

## Estructura principal

```
src/app/components/          # Componentes UI (sliders, detalle)
src/app/services/            # Servicios de datos y TMDB
src/app/pipes/               # Pipes personalizados
src/app/interfaces/          # Interfaces TS
src/assets/                  # Imágenes y recursos
```

## Entorno

Editar claves/URLs en `src/environments/` según sea necesario.

## Próximos pasos sugeridos

- Página offline personalizada.
- Íconos dedicados 192x192 y 512x512.
- Tests adicionales para pipes y servicios.

---

© 2025 Peliculas App
