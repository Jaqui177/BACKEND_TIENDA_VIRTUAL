const db = require('../models');

const carritoDetalles = db.tbb_carrito_detalles;

module.exports = {
    async create(req, res) {
        try {
            const nuevoDetalle = await carritoDetalles.create({
                id_carrito: req.body.id_carrito,
                id_producto: req.body.id_producto,
                precio_unitario: req.body.precio_unitario,
                cantidad: req.body.cantidad
            });

            return res.status(201).send(nuevoDetalle);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async list(_, res) {
        try {
            const listado = await carritoDetalles.findAll({});
            return res.status(200).send(listado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findById(req, res) {
        try {
            const detalle = await carritoDetalles.findByPk(req.params.id);

            if (!detalle) {
                return res.status(404).send({ mensaje: 'Detalle de carrito no encontrado' });
            }

            return res.status(200).send(detalle);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findByCarritoId(req, res) {
        try {
            const detalles = await carritoDetalles.findAll({
                where: { id_carrito: req.params.id_carrito }
            });

            return res.status(200).send(detalles);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res) {
        try {
            const detalle = await carritoDetalles.findByPk(req.params.id);

            if (!detalle) {
                return res.status(404).send({ mensaje: 'Detalle de carrito no encontrado' });
            }

            await detalle.update({
                id_carrito: req.body.id_carrito,
                id_producto: req.body.id_producto,
                precio_unitario: req.body.precio_unitario,
                cantidad: req.body.cantidad
            });

            return res.status(200).send(detalle);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res) {
        try {
            const detalle = await carritoDetalles.findByPk(req.params.id);

            if (!detalle) {
                return res.status(404).send({ mensaje: 'Detalle de carrito no encontrado' });
            }

            await detalle.destroy();
            return res.status(200).send({ mensaje: 'Datos eliminados correctamente' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
