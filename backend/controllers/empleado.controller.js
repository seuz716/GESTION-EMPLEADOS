/**
 * Se importa el modelo "Empleado" para utilizarlo en el controlador.
 */
const Empleado = require('../models/empleado');

/**
 * Objeto empleadoCtrl: Contiene los métodos relacionados con la manipulación de empleados.
 */
const empleadoCtrl = {};

/**
 * Método para obtener todos los empleados.
 */
empleadoCtrl.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};

/**
 * Método para crear un nuevo empleado.
 */
empleadoCtrl.createEmpleados = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar empleado' });
  }
};

/**
 * Método para obtener un único empleado por su ID.
 */
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  try {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleado' });
  }
};

/**
 * Método para actualizar la información de un empleado.
 */
empleadoCtrl.editarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoEdit = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({ status: 'Empleado actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
};

/**
 * Método para eliminar un empleado por su ID.
 */
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar empleado' });
  }
};

/**
 * Se exporta el objeto empleadoCtrl para utilizarlo en otras partes de la aplicación.
 */
module.exports = empleadoCtrl;
