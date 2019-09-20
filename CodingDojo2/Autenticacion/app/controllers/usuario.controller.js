const Usuario = require('../models/usuario.model.js');
var Respuesta = require('../models/respuesta.model.js');

// Registrar un nuevo Usuario.
exports.create = (req, res) => {
    // Validate request
    if(!req.body.correo) {
        return res.status(400).send({
            message: "Usuario no puede tener correo vacío."
        });
    }

    // Create a Usuario
    const usuario = new Usuario({
        correo: req.body.correo || "Usuario", 
        contrasenia: req.body.contrasenia,
        nombre_completo: req.body.nombre_completo
    });
    

    // Save Usuario in the database
    usuario.save()
    .then(data => {
        if(data){
            respuesta = new Respuesta(true, "Usuario ingresado correctamente.")
        }
        res.send(respuesta);
    }).catch(err => {
        respuesta = new Respuesta(false, "Error al registrar el usuario.")
        res.status(500).send(respuesta);
    });
};

// Obtener todos los usuarios.
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

// Buscar un único usuario por su correo.
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

// Actualizar usuario por correo.
exports.update = (req, res) => {
    if(!req.body.correo) {
        return res.status(400).send({
            message: "El correo del usuario no puede estar vacío."
        });
    }
    
    Usuario.updateOne({ correo: req.params.correo }, {
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

// Eliminar usuario por correo.
exports.delete = (req, res) => {
    Usuario.deleteOne({correo: req.params.correo}).exec()
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Usuario not found with id " + req.params.correo
            });
        }
        res.send({message: "Usuario deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Usuario not found with id " + req.params.correo
            });                
        }
        return res.status(500).send({
            message: "Could not delete usuario with id " + req.params.correo
        });
    });
};

//Recuperar contraseña
exports.getPassword = (req, res) => {
    Usuario.find({ correo: req.body.correo} )
    .then(usuario => {
        if(usuario.length == 0) {
            return res.status(404).send(respuesta = new Respuesta(false, "No se encontró el usuario con correo "  + req.body.correo));
        } else {
            res.send(respuesta = new Respuesta(true, "Hemos enviado un email al correo indicado para restablecer su contraseña."));
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send(respuesta = new Respuesta(false, "No se encontró el usuario con correo "  + req.body.correo));
        }
        return res.status(500).send(respuesta = new Respuesta(false, "No se encontró el usuario con correo "  + req.body.correo));
    });
};


// Iniciar sesión.
exports.login = (req, res) => {
    Usuario.find({ correo: req.body.correo, contrasenia: req.body.contrasenia } )
    .then(usuario => {
        if(usuario.length == 0) {
            console.log(usuario)
            console.log(req.body)
            return res.status(404).send(respuesta = new Respuesta(false, "El correo o la contraseña no son válidos. Intente de nuevo."));
        } else {
            console.log(usuario)
            console.log(req.body)
            res.send(respuesta = new Respuesta(true, "Acceso concedido."));
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send(respuesta = new Respuesta(false, "Error al validar el acceso para el usuario con correo "  + req.body.correo));
        }
        return res.status(500).send(respuesta = new Respuesta(false, "Error al validar el acceso para el usuario con correo "  + req.body.correo));
    });
};
