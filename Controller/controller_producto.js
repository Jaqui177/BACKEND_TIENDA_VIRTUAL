const Sequelize = require('sequelize');
const producto = require('../models/tbb_producto');

module.exports = {
    create (req, res) {
        return producto
        .create({
            nombre: req.params.nombre,
            descripcion: req.params.descripcion,
            precio: req.params.precio,
            stock: req.params.stock,
            id_categoria: req.params.id_categoria
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
    list (_, res) {
        return producto.findAll({})
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return producto.findAll({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
    update (req, res) {
        return producto.update({
            nombre: req.params.nombreNuevo,
            descripcion: req.params.descripcion,
            precio: req.params.precio,
            stock: req.params.stock,
            id_categoria: req.params.id_categoria
        }, {
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return producto.destroy({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
    },
};
