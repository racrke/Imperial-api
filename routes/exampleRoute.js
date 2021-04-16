// Se declara como una ruta
const exampleRoute = require('express').Router();

// Manejo de metodos HTTP
exampleRoute.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    //Working with class and DAO
    .get((req, res, next) => {
        res.send('Example Page')
    });

module.exports = exampleRoute;