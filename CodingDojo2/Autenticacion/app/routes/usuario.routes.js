module.exports = (app) => {
    const usuario = require('../controllers/usuario.controller.js');

    // Create a new Note
    app.post('/usuario', usuario.create);

    // Retrieve all usuario
    app.get('/usuario', usuario.findAll);

    // Retrieve a single Note with noteId
    app.get('/usuario/:correo', usuario.findOne);

    // Update a Note with noteId
    app.put('/usuario/:correo', usuario.update);

    // Delete a Note with noteId
    app.delete('/usuario/:correo', usuario.delete);
}