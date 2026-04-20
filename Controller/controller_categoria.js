const db = require('../models');
const categorias = db.tbc_categorias;

module.exports = {
    async create (req, res) {
        try {
            const nuevaCategoria = await categorias.create({
                nombre: req.body.nombre
            });
            return res.status(201).send(nuevaCategoria);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    
    async list (_, res) {
        try {
            const listado = await categorias.findAll({});
            return res.status(200).send(listado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findByNombre (req, res) {
        try {
            const resultado = await categorias.findAll({
                where: { nombre: req.params.nombre }
            });
            return res.status(200).send(resultado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findById (req, res) {
        try {
            const categoria = await categorias.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).send({ mensaje: 'Categoría no encontrada' });
            }
            return res.status(200).send(categoria);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update (req, res) {
        try {
            const categoria = await categorias.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).send({ mensaje: 'Categoría no encontrada' });
            }
            await categoria.update({
                nombre: req.body.nombre
            });
            return res.status(200).send(categoria);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete (req, res) {
        try {
            const categoria = await categorias.findByPk(req.params.id);
            if (!categoria) {
                return res.status(404).send({ mensaje: 'Categoría no encontrada' });
            }
            await categoria.destroy();
            return res.status(200).send({ mensaje: 'Datos eliminados correctamente' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
