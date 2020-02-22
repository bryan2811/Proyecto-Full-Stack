const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes');

// Crear el servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar routing
app.use('/', routes())

// Puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})