'use strict'

//Importamos mongoose
const mongoose = require('mongoose')

//Referencia a nuestro archivo app.js
const app = require('./app')

//Referencia a nuestra configuraciones de conexion
const config = require('./config')

//Usamos las configuraciones de conexion para los puertos a la base de datos
mongoose.connect(config.db, (err, res) => {
    //lanzar un error en caso de que lo haya
    if (err) throw err
        //En caso de que haya conexion
    console.log('Conexion a la base de datos exitosa !!!');
})

//Usamos las configuraciones de conexion para la API
app.listen(config.port, () => {
    //Mensaje que se muestra en nuestra terminal
    console.log(`API REST corriendo en http://localhost:${config.port}/api/sps/helloworld/v1`);
})