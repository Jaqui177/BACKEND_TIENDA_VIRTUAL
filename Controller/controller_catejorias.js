const Sequelize = require('sequelize');
const categorias = require('../models/tbc_categorias');


module.exports = {
    create(req, res) {
        return categorias.create
        .create({
            nombre: req.params.nombre
        
        })
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));
    },
    list (_,res) {
        return categorias.findAll({})
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));
    },
    find (req, res) {
        return categorias.findByPk({
            where: {
                nombre: req.params.nombre
            }
        })
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));
    }
};
