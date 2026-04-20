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
                if (req.accepts('html')) {
                    return res.send(`
                        <!DOCTYPE html>
                        <html lang="es">
                        <head>
                            <meta charset="UTF-8">
                            <title>Carrito no encontrado</title>
                            <style>body{font-family:Arial;text-align:center;padding:50px;} .error{color:red;}</style>
                        </head>
                        <body>
                            <h1>❌ Carrito no encontrado</h1>
                            <p class="error">No se encontró el carrito con ID ${req.params.id}</p>
                            <a href="/index.html">← Volver al Dashboard</a>
                        </body>
                        </html>
                    `);
                }
                return res.status(404).send({ mensaje: 'Carrito no encontrado' });
            }

            if (req.accepts('html')) {
                return res.send(`
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Carrito #${carrito.id_carrito}</title>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
                            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 20px; box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
                            h1 { text-align: center; color: #667eea; margin-bottom: 30px; }
                            .cart-card { background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; }
                            .cart-card h2 { color: #667eea; margin-bottom: 10px; }
                            .cart-card p { margin-bottom: 5px; }
                            .price { color: #27ae60; font-weight: bold; font-size: 1.1em; }
                            .back-link { display: inline-block; margin-top: 20px; color: #667eea; text-decoration: none; }
                            .back-link:hover { text-decoration: underline; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>🛒 Detalles de Carrito</h1>
                            <div class="cart-card">
                                <h2>Carrito #${carrito.id_carrito}</h2>
                                <p><strong>ID:</strong> ${carrito.id_carrito}</p>
                                <p><strong>Usuario ID:</strong> ${carrito.id_usuario}</p>
                                <p><strong>Total:</strong> <span class="price">$${carrito.total}</span></p>
                                <p><strong>Fecha de Creación:</strong> ${new Date(carrito.fecha_creacion).toLocaleDateString()}</p>
                            </div>
                            <a href="/index.html" class="back-link">← Volver al Dashboard</a>
                        </div>
                    </body>
                    </html>
                `);
            }

            return res.status(200).send(carrito);
        } catch (error) {
            if (req.accepts('html')) {
                return res.status(500).send(`
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <title>Error</title>
                        <style>body{font-family:Arial;text-align:center;padding:50px;} .error{color:red;}</style>
                    </head>
                    <body>
                        <h1>❌ Error del servidor</h1>
                        <p class="error">${error.message}</p>
                        <a href="/index.html">← Volver al Dashboard</a>
                    </body>
                    </html>
                `);
            }
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
