module.exports = (app) => {
    const usuario = require('../controllers/usuario.controller.js');

    // Create a new Note
    app.post('/usuarios', usuario.create);

    // Retrieve all usuario
    app.get('/usuarios', usuario.findAll);

    // Retrieve a single Note with noteId
    app.get('/usuarios/:correo', usuario.findOne);

    // Update a Note with noteId
    app.put('/usuarios/:correo', usuario.update);

    // Delete a Note with noteId
    app.delete('/usuarios/:correo', usuario.delete);
}