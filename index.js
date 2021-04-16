/*
 * Run app locally
 * node index.js
 * 
 * Dependencies and installation
 * Express: npm install express --save
 */

const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//File containig routes
const routes = require('./routes/routes');
// Este es el ejemplo de la ruta por defecto
// Cualquier ruta que no se encuentre declarada recibira respuesta de 404 Not Found
/*app.get('/', (req, res) => {
    res.send("Hello World");
});*/

// Para organizar usaremos la siguiente funcion nos permite declarar
// la ruta por defecto y el middlware que contiene el resto de las rutas
app.use('/', routes);

// Esta es la aplicacion, unicamente se declara una vez
/*app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});*/

// Creacion del servidor que estara escuchando los requests por http
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listening at port 3000');
})