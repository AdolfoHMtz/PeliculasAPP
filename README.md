# 🎬 Peliculas App

Aplicación Ionic + Angular que consume la API de TMDB para mostrar cartelera, peliculas populares y detalles de la pelicula, con guardado de favoritos locales y barra de búsqueda.

<p align="center">
	<a href="https://peliculasappahm.netlify.app" target="_blank" rel="noopener">
		<img src="https://img.shields.io/badge/%F0%9F%9A%80%20Abrir%20PWA%20en%20vivo-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Abrir PWA en Netlify" />
	</a>
</p>

## 🧩 Tecnologías y características

- Angular 20 + Ionic 6
- Swiper 12 para carruseles responsivos
- Pipes personalizados: `imagen`, `filtroImagen`
- Service Worker habilitado (para subirlo como PWA)
- Búsqueda con por Enter o click
- Ionic Storage (localforage) para guardar localmente elementos favoritos

[![Angular](https://img.shields.io/badge/Angular-20-EA4335?logo=angular&logoColor=white)](https://angular.dev)
[![Ionic](https://img.shields.io/badge/Ionic-8-3880FF?logo=ionic&logoColor=white)](https://ionicframework.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)](https://rxjs.dev)
[![Swiper](https://img.shields.io/badge/Swiper-12-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)


## 🚀 Instalación y ejecución local

```bash
# Instalar dependencias
npm install

# Abrir en desarrollo
ionic serve -o

# Build producción (genera www/ con PWA)
npm run build

# Ejecutar tests
npm test

```

Requisitos: Node 18+, npm 9+. Configura tu apiKey en `src/environments/` .
API de `https://www.themoviedb.org`


## 📂 Estructura principal

```
src/app/components/          # Componentes UI
src/app/services/            # Servicios de datos y TMDB
src/app/pipes/               # Pipes personalizados
src/app/interfaces/          # Interfaces TS
src/assets/                  # Imágenes y recursos
```

## 🔐 Entorno

Editar API/URLs en `src/environments/` según sea necesario.

## 📷 Capturas de pantalla

| Inicio | Detalles |
|------|-----------|
| <img src="docs/screens/Inicio.jpeg" width="400" /> | <img src="docs/screens/Detalles.jpeg" width="400" /> |

| Búsqueda | Favoritos |
|--------|----------|
| <img src="docs/screens/Busqueda.jpeg" width="400" /> | <img src="docs/screens/Favoritos.jpeg" width="400" /> |


## 🙌 Créditos

- Curso de Ionic de Fernando Herrera (Udemy).
  
  https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/?kw=Ionic+6%3A&src=sac&couponCode=PMNVD2525
  
- TMDB por la API y recursos.

  https://www.themoviedb.org


> “This product uses the TMDB API but is not endorsed or certified by TMDB.”

Hecho por Adolfo Huerta Martinez.

© 2025 GALCEX
