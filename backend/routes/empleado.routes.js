/**
 * Se importa Express para crear un enrutador.
 */
const express = require('express');
const router = express.Router();

/**
 * Se importa el controlador de empleados.
 */
const empleadoCtrl = require('../controllers/empleado.controller');

/**
 * Rutas para las operaciones relacionadas con los empleados.
 */
router.get('/', empleadoCtrl.getEmpleados);      // Obtener todos los empleados
router.post('/', empleadoCtrl.createEmpleados);  // Crear un nuevo empleado
router.get('/:id', empleadoCtrl.getUnicoEmpleado);  // Obtener un empleado por su ID
router.put('/:id', empleadoCtrl.editarEmpleado);     // Actualizar información de un empleado
router.delete('/:id', empleadoCtrl.eliminarEmpleado); // Eliminar un empleado por su ID

/**
 * Se exporta el enrutador para su uso en la aplicación.
 */
module.exports = router;
