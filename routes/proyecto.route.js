const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controllers/proyecto.controller');
const { Console } = require('console');

// Obteniendo todos los proyectos
router.get('/', (req, res) => {
    const proyectos = controladorProyecto.obtenerProyectos();
    proyectos.length > 0 ? res.status(200).json(proyectos) : res.status(404).json({ "code": 404, "message": "Elemento no encontrado" });
});

// Buscando un proyecto por id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const proyectoBuscado = controladorProyecto.obtenerProyectoPorID(id);
    proyectoBuscado ? res.status(200).json(proyectoBuscado) : res.status(404).json({ "code": 404, "message": "Elemento no encontrado" });
});

// Creando un nuevo proyecto
router.post('/', (req, res) => {
    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    const nuevoProyecto = controladorProyecto.crearProyecto(name, description, startDate, endDate, status, teamMembers, budget);
    res.status(200).json(nuevoProyecto);
});

// Editar un proyecto
router.put('/:id', (req, res) => {
    const proyectoActualizado = controladorProyecto.editarProyecto(req.body);
    proyectoActualizado ? res.status(201).json(proyectoActualizado) : res.status(404).json({ "code": 404, "message": "Elemento no encontrado" });
});

/* Completar eliminar, actualizar y por ID  hasta el lunes 23:59*/
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const proyectoEliminado = controladorProyecto.eliminarProyecto(id);
    proyectoEliminado != null ? res.status(200).json(proyectoEliminado) : res.status(404).json({ "code": 404, "message": "Elemento no encontrado" });
});

module.exports = router;