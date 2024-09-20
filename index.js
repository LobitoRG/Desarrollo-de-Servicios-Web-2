// Funcionalidad inicial
const express = require('express')
const bodyParser = require('body-parser')
const rutasProyecto = require('./routes/proyecto.route')
const app = express();
app.use(bodyParser.json());

app.use('/proyecto', rutasProyecto);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
});

module.exports = app;