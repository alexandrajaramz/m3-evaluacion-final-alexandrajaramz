# Evaluación final m3 | Alexandra Jara

<img src="./src/images/Rick-Morty-logo.png" alt="Logo de Rick y Morty" height="200px">
## Directorio de personajes de Rick y Morty

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, el cual puede ser además filtrado y dispone de vista en detalle de cada personaje. 
Se ha realizado en React, utilizando [Create React App](https://github.com/facebook/create-react-app).

La web tiene el listado de personajes de Rick and Morty, usando el servicio de [https://rickandmortyapi.com](https://rickandmortyapi.com/documentation/characters) que nos devuelve información sobre los primeros 20 personajes de la serie.

Debajo del logo tenemos un buscador, en el cual se puede escribir el nombre del personaje tanto en minúscula como mayúscula. Al ir escribiendo un nombre quedan en la interfaz solo los personajes cuyo nombre contiene las letras escritas en ese orden.

Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto se utiliza React router. En la pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si el personaje está vivo o muerto.
La URL del detalle de personaje es compartible, es decir, se puede utilizar esa URL directamente en el navegador.

Para maquetar este proyecto, se ha seguido el concepto 'mobile first', adaptando el diseño en resoluciones mayores con Flexbox y Grid, por tanto, es un diseño responsive.

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

