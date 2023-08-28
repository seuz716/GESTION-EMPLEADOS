const mongoose = require('mongoose');

// URL de conexión a la base de datos
const dbURI = 'mongodb+srv://cesar:cesar@cluster0.wtlfm.mongodb.net/empleados';

// Conectando a la base de datos
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });

// Manejar eventos de conexión
const dbConnection = mongoose.connection;
dbConnection.on('connected', () => {
  console.log('Connected to the MongoDB Atlas cluster');
});
dbConnection.on('error', error => {
  console.error('MongoDB Atlas connection error:', error);
});
dbConnection.on('disconnected', () => {
  console.log('Disconnected from the MongoDB Atlas cluster');
});

// Exportar la instancia de mongoose para reutilización
module.exports = mongoose;
