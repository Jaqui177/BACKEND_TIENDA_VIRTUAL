const Sequelize = require('sequelize');
const db = require('../models');
const categorias = db.tbc_categorias;


module.exports = {
    create(req, res) {
        return categorias
        .create({
            nombre: req.body.nombre
        
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
        return categorias.findOne({
            where: {
                nombre: req.params.nombre
            }
        })
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));
    },
    delete(req,res){
        return categorias.destroy({
            where: {
                id_categoria: req.params.id
            }
        })
        .then(() => res.status(200).send({mensaje: "Datos eliminados" +" correctamente"}))
        .catch(error => res.status(400).send(error));
    },
    update(req,res){
        return categorias.update(
            {
             nombre: req.body.nombre
        },
        {
            where: {
               id_categoria: req.params.id
            }
        }
    )
        .then(() => res.status(200).send({mensaje: "Datos actualizados" +" correctamente"}))
        .catch(error => res.status(400).send(error))
    }
};