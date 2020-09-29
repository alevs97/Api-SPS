//Aqui ira la cunfionalidad del express

//Importamos express
const express = require('express')

//Importamos body-parser
const bodyParser = require('body-parser')

//Creamos nuestro servidor
const app = express()

//Llamamos las rutas
const api = require('./Routes')

//Añadimos middleword, capas a nuestra app
app.use(bodyParser.urlencoded({ extended: false }))

//Recibiremos peticiones en formato JSON
app.use(bodyParser.json())

//Que usemos api de nuestros controladores
app.use('/api', api)

//exportamos 
module.exports = app