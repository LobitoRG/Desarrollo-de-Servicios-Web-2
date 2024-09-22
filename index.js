// Funcionalidad inicial
// Antes de iniciar correr los comandos siguientes:
// npm install express body-parser
// npm install --save-dev mocha chai@4.2.0 supertest sinon

const express = require('express')
const bodyParser = require('body-parser')
const rutasProyecto = require('./routes/proyecto.route')
const app = express();
app.use(bodyParser.json());

app.use('/projects', rutasProyecto);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
});

module.exports = app;