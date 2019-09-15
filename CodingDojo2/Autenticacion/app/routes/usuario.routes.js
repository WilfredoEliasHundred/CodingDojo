module.exports = (app) => {
    const usuario = require('../controllers/usuario.controller.js');

    // Registrar nuevo usuario.
    app.post('/usuarios', usuario.create);

    // Obtener usuarios.
    app.get('/usuarios', usuario.findAll);

    // Obtener usuario por correo.
    app.get('/usuarios/:correo', usuario.findOne);

    // Actualizar usuario por correo.
    app.put('/usuarios/:correo', usuario.update);

    // Eliminar usuario por correo.
    app.delete('/usuarios/:correo', usuario.delete);

    // Restablecer contraseña.
    app.post('/usuarios/getpassword', usuario.getPassword);
    
    // Restablecer contraseña.
    app.post('/usuarios/login', usuario.login);
}