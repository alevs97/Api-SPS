'use strict'

//DEfinimos nuestras rutas de nuetra API

//Copiar nuestras rutas de nuestra api
//Intanciames express, para empezar a realizar las rutas
const express = require('express')
const api = express.Router()

//Instanciamos nuestros controladores
const personatCtrl = require('../Controles/personas')

//Ruta de tipo get, con controlador
api.get('/sps/helloworld/v1', personatCtrl.getPersonas)

//Ruta de tipo get, con controlador
api.get('/sps/helloworld/v1/:personaId', personatCtrl.getPersona)

//Ruta de tipo post, con controlador
api.post('/sps/helloworld/v1', personatCtrl.savePersona)

//Ruta de tipo put, con controlador
api.put('/sps/helloworld/v1/:personaId', personatCtrl.updatePersona)

//Ruta de tipo delete, con controlador
api.delete('/sps/helloworld/v1/:personaId', personatCtrl.deletePersona)

//Exportamos api
module.exports = api