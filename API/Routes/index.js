const express = require('express');
const router = express.Router();
const pacienteController = require('../Controllers/pacienteControllers');

module.exports = function () {
    
    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Obtiene un paciente en especifico (ID)
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    return router;
}