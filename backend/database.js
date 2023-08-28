const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB a través de Mongoose
mongoose.connect('mongodb+srv://cesar:cesar@cluster0.wtlfm.mongodb.net/', {
  useNewUrlParser: true, // Usar el nuevo analizador de URL
  useUnifiedTopology: true, // Usar el nuevo motor de topología unificada
})
.then(() => {
  console.log('Conexión a la base de datos exitosa'); // Mensaje si la conexión es exitosa
})
.catch(error => {
  console.error('Error en la conexión a la base de datos:', error); // Mensaje si hay un error en la conexión
});


// Exportar la instancia de mongoose para reutilización
module.exports = mongoose;
