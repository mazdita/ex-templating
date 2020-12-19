# Ex Templating

- Ejemplos de templates y helpers con hbs
- Formularios GET, POST
- Request: path params, query params & body

##  Iteración 1
### Nodemon
- Instalar nodemon como dependencia de desarrollo `npm i --save-dev nodemon`
- Configurar script de dev y arrancar el servidor con `npm run dev`

### Templates
- Configurar en app.js hbs como motor de vistas (app.set(...) establece propiedad en nuestra aplicación)
- Crear en `layout.hbs`:
  - una barra de navegación con enlaces a:
    - Home => /
    - Tweets => /tweets
  - footer pegado al final de la página
- Crear la vista de `home`: añadir un mensaje de bienvenida

### Controlador
- Crear el controlador de common `controllers/common.controller.js`
- Renderizar la vista de `home` en el método home.
- Enlazar el controlador con la ruta `config/router.conf.js`

##  Iteración 2
- Configurar las vistas parciales de hbs en `hbs.config.js`
- Refactorizar tanto la barra de navegación como el footer usando vistas parciales `{{> navbar}}` `{{> footer}}`
- Crear un helper de hbs para activar las rutas de la barra de navegación:
  - Registrar el helper en `hbs.config.js`
  - Tendrá 2 argumentos, el path actual (configurar res.locals.path en app.js) y la palabra que tiene que contener para que se active esa ruta
  - `{{active path '/' }}`


## Iteración 3

- Crear el controlador de tweets `controllers/tweets.controller.js`
- Renderizar la vista de `list` en el método list:
  - Hay que pasarle a la vista la lista de tweets ordenados por fecha descendente
- Enlazar el controlador con la ruta `config/router.conf.js`
- Crear la vista de `tweets`, tendrá que recorrer cada tweet y pintar una card de bootstrap mostrando el usuario, mensaje  y fecha.

## Iteración 4

- Crear un buscador en la vista de `tweets`
- El controlador de `list` tweets tendrá que comprobar si existe el query parameter `user` y si existe filtrar los tweets que sean de ese usuario (o contengan la palabra)
- El nombre buscado no debe desaparecer del input del formulario, debemos devolverlo a la vista.


## Iteración 5

- Crear un buscador formulario de crear tweet en la vista de `tweets`
- El controlador de `create` tweets tendrá que leer el body de la petición, validar que los campos son correctos y añadir el nuevo tweet al array, si hay algún error deberá mostrarlo en el formulario.
- NO IMPORTA QUE NO SE VEA EL LISTADO DE TWEETS AL PINTAR LOS ERRORES (ya trabajaremos esto más adelante)


## Iteración 6 (BONUS)
- Borrar tweet! =D
