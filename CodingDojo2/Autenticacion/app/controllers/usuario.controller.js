const Usuario = require('../models/usuario.model.js');

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if(!req.body.correo) {
        return res.status(400).send({
            message: "Usuario content can not be empty"
        });
    }

    // Create a Usuario
    const usuario = new Usuario({
        correo: req.body.correo || "Untitled Usuario", 
        contrasenia: req.body.contrasenia,
        nombre_completo: req.body.nombre_completo
    });
    

    // Save Usuario in the database
    usuario.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while creating the Usuario."
        });
    });
};


// Retrieve and return all usuarios from the database.
exports.findAll = (req, res) => {
    Usuario.find()
    .then(usuarios => {
        res.send(usuarios);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algún error mientras se recuperaban usuarios."
        })
    })
};

// Buscar un único usuario por su correo
exports.findOne = (req, res) => {
    Usuario.find({ 'correo': req.params.correo} )
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "No se encontró el usuario con correo " + req.params.correo
            });
        }
        res.send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error al buscar el usuario con correo " + req.params.correo
            });
        }
        return res.status(500).send({
            message: "Error al recuperar el usuario con correo " + req.params.correo
        });
    });
};

// Update a usuario identified by the usuarioId in the request
exports.update = (req, res) => {
    if(!req.body.correo) {
        return res.status(400).send({
            message: "El correo del usuario no puede estar vacío."
        });
    }
    
    Usuario.findByIdAndUpdate(req.params._id, {
        contrasenia: req.body.contrasenia,
        nombre_completo: req.body.nombre_completo
    }, {new: true})
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "No se encuentra el usuario con correo " + req.params.correo
            });
        }
        res.send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error: no se encuentra el usuario con correo " + req.params.correo
            });
        }
        return res.status(500).send({
            message: "Error al actualizar los datos del usuario con correo " + req.params.correo
        });
    });
};

// Delete a usuario with the specified usuarioId in the request
exports.delete = (req, res) => {

};