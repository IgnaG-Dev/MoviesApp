# MoviesApp 🎬

MoviesApp es una aplicación móvil desarrollada con React Native y TypeScript que permite a los usuarios explorar, descubrir películas populares y ver detalles de cada película.

![Captura de MoviesApp](https://github.com/user-attachments/assets/a43265c6-7429-452f-8bd3-32b8be8bac6c "Interfaz de MoviesApp")

## Funcionalidades principales 🌟

- **Explorar Películas Populares**: Navega por una lista actualizada de las películas más populares del momento.
- **Detalles de Películas**: Accede a información detallada sobre cada película, incluyendo sinopsis, calificación y fecha de lanzamiento.
- **Navegación Intuitiva**: Interfaz de usuario amigable con navegación mediante Stack y Tabs para una experiencia fluida.

## Tecnologías Utilizadas 🛠️

- **React Native**: Framework para construir aplicaciones móviles nativas.
- **TypeScript**: Superset de JavaScript que añade tipado estático para mejorar la mantenibilidad del código.
- **React Navigation**: Librería para manejar la navegación de forma flexible.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de The Movie Database (TMDB).

## Características de Desarrollo 📐

En el desarrollo de MoviesApp, se implementaron los siguientes elementos clave para garantizar una arquitectura robusta y escalable:

- **Patrones de diseño**: Uso de patrones como separación de capas (UI, lógica de negocio y datos) para facilitar la mantenibilidad.
- **Navegación entre pantallas**: Configuración de navegación fluida utilizando React Navigation.
- **Configuración de API Key de TheMovieDB**: Configuración segura y modular para integrar la API de TMDB.
- **Mappers**: Transformación de datos de la API al modelo interno de la aplicación.
- **Entidades**: Definición clara de modelos y tipos mediante TypeScript para representar los datos de forma consistente.


## Configuración del Proyecto ⚙️

> **Nota:** Asegúrate de tener Node.js, npm o yarn, y un entorno configurado para React Native CLI.

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/IgnaG-Dev/MoviesApp
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd MoviesApp
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn install
   ```

4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API para el servicio de The Movie Database (TMDB):
     ```
     THE_MOVIE_DB_KEY=tu_clave_de_api
     ```
   - Para obtener una clave de API, regístrate en [The Movie Database](https://www.themoviedb.org/) y sigue las instrucciones para generar una.

5. Ejecuta la aplicación en un emulador o dispositivo físico:
   - Para Android:
     ```bash
     npx react-native run-android
     ```
   - Para iOS:
     ```bash
     npx react-native run-ios
     ```

## Contribución 🤝

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta aplicación, abre un issue o envía una pull request con tus propuestas.

## Contacto 📧

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto.
