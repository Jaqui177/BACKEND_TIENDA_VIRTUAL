const categoriaController = require('../Controller/controller_catejorias');

module.exports = (app) => {
    app.get('/api/categorias', categoriaController.list);
    app.get('/api/categorias/:id', categoriaController.findById);
    app.get('/api/categorias/nombre/:nombre', categoriaController.findByNombre);
    app.post('/api/categorias', categoriaController.create);
    app.put('/api/categorias/:id', categoriaController.update);
    app.delete('/api/categorias/:id', categoriaController.delete);
};