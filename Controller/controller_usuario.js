const Sequelize = require('sequelize');
const usuario = require('../models/tbc_usuario');

module.exports = {
    create (req, res) {
        return usuario
        .create({
            nombre: req.params.nombre,
            direccion: req.params.direccion,
            telefono: req.params.telefono,
            email: req.params.email,
            password: req.params.password,
            rol: req.params.rol,
            fecha_registro: req.params.fecha_registro
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    list (_, res) {
        return usuario.findAll({})
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return usuario.findAll({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    update (req, res) {
        return usuario.update({
            nombre: req.params.nombreNuevo,
            direccion: req.params.direccion,
            telefono: req.params.telefono,
            email: req.params.email,
            password: req.params.password,
            rol: req.params.rol,
            fecha_registro: req.params.fecha_registro
        }, {
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return usuario.destroy({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
};
