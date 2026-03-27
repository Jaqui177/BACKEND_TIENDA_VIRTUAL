const Sequelize = require('sequelize');
const carrito = require('../models/tbb_carrito');

module.exports = {
    create (req, res) {
        return carrito
        .create({
            id_usuario: req.params.id_usuario,
            total: req.params.total,
            estado: req.params.estado,
            fecha_creacion: req.params.fecha_creacion
        })
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
    list (_, res) {
        return carrito.findAll({})
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return carrito.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
    update (req, res) {
        return carrito.update({
            id_usuario: req.params.id_usuario,
            total: req.params.total,
            estado: req.params.estado,
            fecha_creacion: req.params.fecha_creacion
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return carrito.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
};
