/*

    Agente Routes
    /api/agentes

*/

const { Router } = require('express');
const { getAgentes, crearAgente, actualizarAgente, eliminarAgente } = require('../controller/agente');

const router = Router();

// Obtener equipos
router.get('/', getAgentes );

//Crear equipo
router.post('/', crearAgente);

//Actualizar equipo
router.put('/:id', actualizarAgente);

//Eliminar equipo
router.delete('/:id', eliminarAgente);

module.exports = router;