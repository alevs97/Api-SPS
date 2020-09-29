'use strict'

//Funciones para el funcionesmiento de la api

//importamos 
//Usar nuestro Modelo Persona-mongoose
const Persona = require('../Modelos/personas.js')

//Creamos funcion get que nos permite obtener la informacion de una persona por el ID
function getPersona(req, res) {
    //variable del id, se obtiene de la URL
    let personaId = req.params.personaId

    //BUscamos que exista el id correspondiente
    Persona.findById(personaId, (err, persona) => {
        //Tramos los posibles errores
        if (err) return res.status(500).send({ message: 'Error al realizar la peticion' })
        if (!persona) return res.status(400).send({ message: 'La persona no existe' })

        //regresamos el producto
        res.status(200).send({ persona })
        
    })
}


//Creamos funcion get que nos permite obtener la informacion de todas las personas almacenadas
function getPersonas(req, res) {

    //Funcion que nos busque todas las personas
    Persona.find({}, (err, persona) => {
        //Mensajes de error en caso de que la persona no exista o haya un problema en la peticion al servidor
        if (err) return res.status(500).send({ message: 'Error al realizar la peticion' })
        if (!persona) return res.status(404).send({ message: 'No existen personas' })

        //Devuelve lista de productos
        res.status(200).send({ persona })
        
    })
}

//Funcion metodo POST que nos permite guardar nuevas personas en nuestra base de datos
function savePersona(req, res) {
    
    //mensaje de para indicar que es el metodo POST en consola
    console.log('POST/api/personas');
    //imprima el puerto de la peticion 
    console.log(req.body);

    //Almacenar persona en la base de datos
    //variable de persona. Modulos
    let persona = new Persona()

    //informacion de nuestra persona, en el cuerpo de la peticion
    persona.nombre = req.body.nombre
    persona.calificacion = req.body.calificacion
    persona.materia = req.body.materia
    
    //guardar producto
    persona.save((err, personaStored) => {
        //En caso de que haya un error
        if (err) res.status(500).send({ message: 'Hubo un error al salvar a la persona' })
        
        //envio de datos que enviamos
        res.status(200).send({ persona: personaStored })
        
    })
}

//Funcion para actualizar los datos de una persona por medio del Id
function updatePersona(req, res) {
    //Recuperamos en id de la URL
    let personaId = req.params.personaId

    //En vio de datos a atualizar, estan en el body del mensaje
    let update = req.body

    //Explicacion de la funcion findByIdAndUpdate()
    //1° parametro - id(persona a quien actualizaremos )
    //2° parametro - parametros a actualizar esto se envia desde nuestra api(body)
    Persona.findByIdAndUpdate(personaId, update, (err, personaUpdated) => {
        if (err) res.status(500).send({ message: 'Error al actualizar a la persona ' })

        //Regresamos lso datos de la persona actualizada
        res.status(200).send({ persona: personaUpdated })
        
    })
}


//Funcion para borrar a una persona por su correspondiente Id
function deletePersona(req, res) {
    //Obtenemos id 
    let personaId = req.params.personaId

    //Buscamos a la persona por su Id correspondiente
    Persona.findById(personaId, (err, persona) => {
        //Error al ingresar a la base de datos
        if (err) res.status(500).send({ message: 'Error al borrar a la persona' })

        //Accion de borrado de persona
        persona.remove(err => {
            if (err) res.status(500).send({ message: 'Error al borrar a la persona ' })
            res.status(200).send({ message: 'Se ha eliminado a la persona correctamente' })
        })
    })
}

//Exportamos funciones
module.exports = {
    getPersona,
    getPersonas,
    savePersona,
    updatePersona,
    deletePersona
}