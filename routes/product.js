// Se declara como una ruta
const dbConfig = require("../db/db.js");
const productRoute = require('express').Router();
var MongoClient = require('mongodb').MongoClient;

// Manejo de metodos HTTP
productRoute.route('/')
    .get((req, res, next) => {
        MongoClient.connect(dbConfig.url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("candles");
  		dbo.collection("products").find({}).toArray(function(err, result) {
   		if (err) throw err;
		    console.log(result);
		    res.status(200)
		       .jsonp(result)
		    db.close();
		  });
		});
    })

productRoute.route("/:id")
    .get((req, res, next) => {
    	var id = req.params.id;
    	console.log(id)
		MongoClient.connect(dbConfig.url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("candles");
  		dbo.collection("products").findOne({name:id},function(err, result) {
   		if (err) throw err;
		    console.log(result);
		    res.status(200)
		       .jsonp(result)
		    db.close();
		  });
		});
    });

module.exports = productRoute;

