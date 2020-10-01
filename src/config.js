//Configuraciones de conexion

module.exports = {
    //Instanciamos el puerto como una constante
    //Escogemos el puerto 8090
    port: process.env.PORT || 8091,
    //conexion a la base de datos. Defecto: 27017. Enlazamos al servicio de mongo DOcker
    db: process.env.MONGODB || 'mongodb://mongo/registro'
}