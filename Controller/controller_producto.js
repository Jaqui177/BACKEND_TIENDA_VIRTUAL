const db = require('../models');

const productos = db.tbb_productos;

module.exports = {
    async create(req, res) {
        try {
            const nuevoProducto = await productos.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                stock: req.body.stock,
                id_categoria: req.body.id_categoria
            });

            return res.status(201).send(nuevoProducto);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async list(_, res) {
        try {
            const listado = await productos.findAll({});
            return res.status(200).send(listado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findById(req, res) {
        try {
            const producto = await productos.findByPk(req.params.id);

            if (!producto) {
                return res.status(404).send({ mensaje: 'Producto no encontrado' });
            }

            return res.status(200).send(producto);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res) {
        try {
            const producto = await productos.findByPk(req.params.id);

            if (!producto) {
                return res.status(404).send({ mensaje: 'Producto no encontrado' });
            }

            await producto.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                stock: req.body.stock,
                id_categoria: req.body.id_categoria
            });

            return res.status(200).send(producto);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res) {
        try {
            const producto = await productos.findByPk(req.params.id);

            if (!producto) {
                return res.status(404).send({ mensaje: 'Producto no encontrado' });
            }

            await producto.destroy();
            return res.status(200).send({ mensaje: 'Datos eliminados correctamente' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
