const carritoDetalleController = require('../Controller/controller_carrito_detalle');

module.exports = (app) => {
    app.get('/api/carrito-detalles', carritoDetalleController.list);
    app.get('/api/carrito-detalles/:id', carritoDetalleController.findById);
    app.get('/api/carrito-detalles/carrito/:id_carrito', carritoDetalleController.findByCarritoId);
    app.post('/api/carrito-detalles', carritoDetalleController.create);
    app.put('/api/carrito-detalles/:id', carritoDetalleController.update);
    app.delete('/api/carrito-detalles/:id', carritoDetalleController.delete);
};
