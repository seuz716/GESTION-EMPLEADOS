const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database'); // Importa solo la conexión de la base de datos

// Configuraciones
const PORT = process.env.PORT || 3000; // Puerto predeterminado

// Middlewares
app.use(morgan('dev')); // Muestra información de las solicitudes en la consola
app.use(express.json()); // Permite interpretar datos JSON en las solicitudes
app.use(cors({ origin: 'http://localhost:4200' })); // Configura CORS para comunicarse con el cliente

// Rutas de la API
const empleadoRoutes = require('./routes/empleado.routes'); // Importa las rutas de empleados
app.use('/api/empleados', empleadoRoutes); // Aplica las rutas bajo el prefijo '/api/empleados'

// Iniciando el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
