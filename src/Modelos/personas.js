'use strict'

//Definimos el documento, por medio de nuestro esquema

//Instanciamos mongoose, requerimiento 
const mongoose = require('mongoose')

//Instanciamos esquema, requerimiento 
const Schema = mongoose.Schema

//Creamos nuestro esquema 
const PersonaSchema = Schema({
    //Campos en el esquema
    //Variable string para nombre de la persona
    nombre: String,
    //Calificacion de la persona
    calificacion: { type: Number, default: 0 },
    //Materia, solo esta restringido para seleccionar cualquiera de las materias que se muetran
    materia: { type: String, enum: ['matematicas', 'ciencias', 'historia'] },
})

//exporta este modelo, accesible desde toda la aplicacion
module.exports = mongoose.model('Persona', PersonaSchema)