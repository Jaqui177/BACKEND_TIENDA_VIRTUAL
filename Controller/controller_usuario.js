const db = require('../models');

const usuarios = db.tbc_usuario;

module.exports = {
    async create(req, res) {
        try {
            const nuevoUsuario = await usuarios.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                password: req.body.password,
                rol: req.body.rol,
                fecha_registro: req.body.fecha_registro
            });

            return res.status(201).send(nuevoUsuario);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async list(_, res) {
        try {
            const listado = await usuarios.findAll({});
            return res.status(200).send(listado);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async findById(req, res) {
        try {
            const usuario = await usuarios.findByPk(req.params.id);

            if (!usuario) {
                return res.status(404).send({ mensaje: 'Usuario no encontrado' });
            }

            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res) {
        try {
            const usuario = await usuarios.findByPk(req.params.id);

            if (!usuario) {
                return res.status(404).send({ mensaje: 'Usuario no encontrado' });
            }

            await usuario.update({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                password: req.body.password,
                rol: req.body.rol,
                fecha_registro: req.body.fecha_registro
            });

            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res) {
        try {
            const usuario = await usuarios.findByPk(req.params.id);

            if (!usuario) {
                return res.status(404).send({ mensaje: 'Usuario no encontrado' });
            }

            await usuario.destroy();
            return res.status(200).send({ mensaje: 'Datos eliminados correctamente' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
