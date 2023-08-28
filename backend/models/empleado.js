// Importar la biblioteca mongoose para manejar MongoDB
const mongoose = require('mongoose');

// Desestructurar el objeto Schema de mongoose
const { Schema } = mongoose;

// Definir el esquema para la colección "Empleado"
const empleadoSchema = new Schema({
  name: {
    type: String,
    required: true, // Nombre requerido para un Empleado
  },
  position: {
    type: String,
    required: true, // Posición requerida para un Empleado
  },
  office: {
    type: String,
    required: true, // Oficina requerida para un Empleado
  },
  salary: {
    type: Number,
    required: true, // Salario requerido para un Empleado
  },
});

// Crear el modelo "Empleado" basado en el esquema definido
const Empleado = mongoose.model('Empleado', empleadoSchema);

// Exportar el modelo "Empleado" para su uso en otras partes de la aplicación
module.exports = Empleado;
