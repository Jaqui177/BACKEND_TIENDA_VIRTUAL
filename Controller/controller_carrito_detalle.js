const Sequelize = require('sequelize');
const carrito_detalle = require('../models/tbd_carrito_detalle');

module.exports = {
    create (req, res) {
        return carrito_detalle
        .create({
            id_carrito: req.params.id_carrito,
            id_producto: req.params.id_producto,
            precio_unitario: req.params.precio_unitario,
            cantidad: req.params.cantidad
        })
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
    list (_, res) {
        return carrito_detalle.findAll({})
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return carrito_detalle.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
    update (req, res) {
        return carrito_detalle.update({
            id_carrito: req.params.id_carrito,
            id_producto: req.params.id_producto,
            precio_unitario: req.params.precio_unitario,
            cantidad: req.params.cantidad
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return carrito_detalle.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
};
