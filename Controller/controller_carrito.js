const db = require('../models');

const carritos = db.tbb_carritos;

module.exports = {
    async create(req, res) {
        try {
            const nuevoCarrito = await carritos.create({
                id_usuario: req.body.id_usuario,
                total: req.body.total,
                fecha_creacion: req.body.fecha_creacion
            });

            return res.status(201).send(nuevoCarrito);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async list(_, res) {
        try {
            const listado = await carritos.findAll({});
            return res.status(200).send(listado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findById(req, res) {
        try {
            const carrito = await carritos.findByPk(req.params.id);

            if (!carrito) {
                return res.status(404).send({ mensaje: 'Carrito no encontrado' });
            }

            return res.status(200).send(carrito);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res) {
        try {
            const carrito = await carritos.findByPk(req.params.id);

            if (!carrito) {
                return res.status(404).send({ mensaje: 'Carrito no encontrado' });
            }

            await carrito.update({
                id_usuario: req.body.id_usuario,
                total: req.body.total,
                fecha_creacion: req.body.fecha_creacion
            });

            return res.status(200).send(carrito);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res) {
        try {
            const carrito = await carritos.findByPk(req.params.id);

            if (!carrito) {
                return res.status(404).send({ mensaje: 'Carrito no encontrado' });
            }

            await carrito.destroy();
            return res.status(200).send({ mensaje: 'Datos eliminados correctamente' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
