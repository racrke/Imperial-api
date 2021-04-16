/*
 * This file contains all routes that will be used
 * Any new route defined should be declared here and linked to
 * its corresponding controller
 */

const routes = require('express').Router();

// Route name to controller
// El archivo no esta creado, pero el momento en que se cree un controlador se implementa
const example = require('./exampleRoute');

// Al llamarse la direccion se ejecuta el codigo en la ruta y cambia a ese controlador
routes.use('/example', example)

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>El servidor si esta corriendo</h1></body></html>');
});

module.exports = routes;