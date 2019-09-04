const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    correo: String,
    contrasenia: String,
    nombre_completo: String
});

module.exports = mongoose.model('usuario', UsuarioSchema);