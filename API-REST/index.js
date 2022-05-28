const express = require('express');
const cors = require('cors');
const { dbConnection } = require ('./DB/config');
const PORT = 4000;

//Se crea el servidor de express
const app = express();

//Se ejecuta la función de conexión a la BD
dbConnection();

//CORS
app.use(cors())

//Directorio

//Lectura y parseo del body
app.use (express.json());

//Rutas
app.use('/api/agente', require('./routes/agentes'));



//Escuchar peticiones
app.listen ( PORT, () => {
    console.log(`Servidor corriendo en puerto ${ PORT }`);
});