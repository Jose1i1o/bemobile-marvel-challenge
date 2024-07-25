# BeMobile Marvel Challenge

## Descripción

Este proyecto es una aplicación web creada con **Next.js** y **TypeScript** que utiliza la API de Marvel para mostrar información sobre personajes. La aplicación está optimizada para tiempos de carga y rendimiento, utilizando **Cypress** para pruebas end-to-end y **Vitest** para pruebas unitarias. La gestión del estado se realiza con **useContext** y **useReducer**, y el estilado se maneja con **CSS puro**. La aplicación está desplegada en [Vercel](https://bemobile-marvel-challenge.vercel.app).

## Arquitectura y Estructura

### Arquitectura

- **Next.js**: Framework de React utilizado para el desarrollo del frontend y la gestión de server components y route handlers.
- **TypeScript**: Lenguaje de programación utilizado para asegurar la calidad del código.
- **CSS puro**: Para el estilado de la aplicación.
- **useContext y useReducer**: Para la gestión del estado de la aplicación.
- **API Folder**: Para gestionar la carga de datos desde la API de Marvel, con optimización de la carga a través de la precarga de la homepage.

### Estructura del Proyecto

- **pages/**: Contiene las páginas de la aplicación.
- **components/**: Componentes reutilizables.
- **contexts/**: Contextos para la gestión del estado.
- **reducers/**: Reducers para la lógica del estado.
- **styles/**: Archivos CSS puros para estilado.
- **api/**: Carpeta para gestionar las peticiones a la API y el manejo de datos.

## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Jose1i1o/bemobile-marvel-challenge.git
   ````

2. **Instalar dependencias:**
``bash
bun install
pnpm install
npm install
```

