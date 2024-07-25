# BeMobile Marvel Challenge

![Marvel Bemobile Challenge](https://i.makeagif.com/media/7-25-2024/rTBpaA.gif)
![Marvel Bemobile Challenge](https://i.makeagif.com/media/7-25-2024/rXm14Y.gif)

## Descripción

Este proyecto es una aplicación web creada con **Next.js** y **TypeScript** que utiliza la API de Marvel para mostrar información sobre personajes. La aplicación está optimizada para tiempos de carga y rendimiento, utilizando **Cypress** para pruebas end-to-end y **Vitest** para pruebas unitarias. La gestión del estado se realiza con **useContext** y **useReducer**, y el estilado se maneja con **CSS puro**. La aplicación está desplegada en [Vercel](https://bemobile-marvel-challenge.vercel.app).

## Arquitectura y Estructura

### Arquitectura

- **Next.js**: Framework de React utilizado para el desarrollo del frontend y la gestión de server components y route handlers.
- **TypeScript**: Lenguaje de programación utilizado para asegurar la calidad del código.
- **CSS puro**: Para el estilado de la aplicación. Utilizando la metodología BEM y SMACSS.
- **useContext y useReducer**: Para la gestión del estado de la aplicación.
- **API Folder**: Para gestionar la carga de datos desde la API de Marvel, con optimización de la carga a través de la precarga de la homepage.

### Estructura del Proyecto

- **`test/`**: Contiene los tests de la aplicación, incluyendo pruebas unitarias y pruebas end-to-end.

- **`pages/`**: Contiene las páginas de la aplicación, como `/home`, `/favorites`, y `/heroes[id]`.

- **`api/`**: Carpeta para gestionar las peticiones a la API y el manejo de datos mediante Server-Side Rendering (SSR). Incluye la implementación de una API propia para mejorar la carga de la aplicación.

- **`components/`**: Componentes reutilizables de la aplicación. Incluye subcarpetas:
  - **`common/`**: Componentes comunes reutilizables en toda la aplicación.
  - **`layout/`**: Componentes relacionados con el diseño y la estructura de la página.

- **`css/`**: Contiene archivos CSS siguiendo la metodología SMACSS para una mejor organización y modularidad. Subcarpetas:
  - **`/base/`**: Estilos básicos y globales.
  - **`/container-queries/`**: Consultas de contenedor para el diseño responsivo.
  - **`/layout/`**: Estilos relacionados con la estructura y diseño de la página.
  - **`/module/`**: Estilos para componentes modulares.
  - **`/pages/`**: Estilos específicos para cada página.
  - **`/state/`**: Estilos que reflejan el estado de los componentes.
  - **`/theme/`**: Estilos relacionados con la temática general de la aplicación.

- **`utils/`**: Utilidades y funciones auxiliares. Subcarpetas:
  - **`/constants/`**: Constantes utilizadas en la aplicación.
  - **`/fetching/`**: Funciones y helpers para la gestión de peticiones y datos.
  - **`/interfaces/`**: Interfaces TypeScript para tipado.

- **`context/`**: Contextos de React para la gestión del estado global y acciones para el reducer.
    - **`reducers/`**: Reducers para manejar la lógica del estado de la aplicación.


## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Jose1i1o/bemobile-marvel-challenge.git
   ````

2. **Instalar dependencias:**
    ```bash
    bun install
    pnpm install
    npm install
    ```

3. **Configurar variables de entorno**

 Crea un archivo .env.local en la raíz del proyecto con el siguiente contenido:
 ```bash
    NODE_ENV="development" o "production"
    MARVEL_API="https://gateway.marvel.com/v1/public/"
    MARVEL_API_PUBLIC_KEY="your marvel api public key"
    MARVEL_API_PRIVATE_KEY="your marvel api private key"
    PUBLIC_API="tu url de desarrollo o producción"
    MY_PUBLIC_VERCEL_URL="tu url de producción"
    API_TIMEOUT=500000
    DEFAULT_LIMIT="2" # recomendado para desarrollo; usa 10 para producción --> latencia elevada
```
    
4. **Scripts:**

    ```bash
    # Para desarrollo
    bun run dev

    # Para testear build en local
    bun run build

    # Para inicio de build en local
    bun run start

    # Para pruebas unitarias (Vitest)
    bun run test

    # Para cobertura de pruebas (Vitest)
    bun run coverage

    # Para pruebas end-to-end (Cypress - Interfaz gráfica)
    bun run cy:open

    # Para pruebas end-to-end (Cypress - Ejecutar pruebas)
    bun run cy:run

    # Para analizar el tamaño del build
    ANALYZE=true bun run build

    ```
## Despliegue

La aplicación está desplegada en Vercel en el siguiente enlace [Vercel URL](https://bemobile-marvel-challenge.vercel.app)


## Organización del Proyecto

El proyecto se gestionó a través de GitHub Projects y se dividió en 3 sprints. Puedes consultar los todos los detalles en el siguiente [enlace](https://github.com/users/Jose1i1o/projects/10)

![Kanban Github Projects](https://res.cloudinary.com/devrldmmc/image/upload/v1721907849/personal/bemovile_tech_challenge_status_board.webp)


- [Set up - Architecture](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/7)
- [Set up - Linters & Formatters](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/11)
- [Wireframes - Box model mobile](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/5)
- [Set up - Preparación de tema, estilos y componentes de diseño](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/18)
- [Accesibilidad - SP1](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/8)
- [API - Mostrar 50 primeros personajes](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/19)
- [View - Mobile](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/20)
- [Testing - SP1](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/14)
- [Box model desktop](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/6)
- [Búsqueda de personajes](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/17)
- [Set up - Modo desarrollo y modo producción](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/2)
- [Detail View](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/21)
- [View - Favoritos](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/22)
- [Accesibilidad SP2](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/9)
- [Limpiar consola](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/13)
- [Accesibilidad SP3](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/10)
- [Testing SP2](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/15)
- [Testing SP3](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/16)
- [README.md](https://github.com/Jose1i1o/bemobile-marvel-challenge/issues/4)

## Futuras implementaciones

- Implementación de notificaciones utilizando Sonner.
- Expansión del conjunto de pruebas, ya que el tiempo no permitió una cobertura completa.
- Autenticación de usuarios para mejorar la seguridad y personalización.
- Almacenamiento de datos en una base de datos propia para mayor control y eficiencia.
- Integración de SonarQube para la optimización de pruebas.
- Soporte para múltiples idiomas.
- Mejora de la interfaz de usuario para hacerla más accesible.
- Integración con otros servicios de terceros para enriquecer la experiencia del usuario.

## Lecciones Aprendidas

- La capa gratuita de Vercel solo permite requests con un tiempo máximo de 10 segundos.
- La API de Marvel tuvo problemas con tiempos de carga que alcanzaban hasta los 2 minutos para los comics o más de 30 segundos para algunos personajes.
![alta latencia](https://res.cloudinary.com/devrldmmc/image/upload/v1721914549/personal/Screenshot_2024-07-23_at_13.13.36.webp)
Ej: Alta latencia

![Error request](https://res.cloudinary.com/devrldmmc/image/upload/v1721914836/personal/Screenshot_2024-07-23_at_13.18.33.webp)
Ej: Imposibilidad de ejecutar query para 50 personajes

- La necesidad de optimizar la carga de la aplicación y la importancia de gestionar correctamente los tiempos de espera en las peticiones a la API.
- La importancia de tener un buen manejo de estado y optimización en las peticiones de datos para mejorar la experiencia del usuario.


## Recursos

- [Documentación Marvel Developer Portal](https://developer.marvel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Cypress](https://docs.cypress.io)
- [Documentación de Vitest](https://vitest.dev)







