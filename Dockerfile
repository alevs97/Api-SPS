#Creamos contenedor

#Instalamos la imagen de Node, la version 12.18.4
FROM node:12.18.4

#Crear carpeta para codigo
RUN mkdir -p /usr/src/app

#Nos movemos a la carpeta
WORKDIR /usr/src/app

#Copiamos los package, para asi tener las dependencias 
COPY package*.json ./

#Installar los modulos
RUN npm install

#Copiar directorio actual dentro del contenedor actual
COPY . .

#Nos enlazamos al puerto 8090
EXPOSE 8090

#Comando para iniciar la API
CMD ["npm","start"]