const db = require('./models');

async function insertarDatos() {
  try {
    // Sincronizar modelos con BD
    await db.sequelize.sync();

    // 1. Insertar Usuario
    const usuario = await db.tbc_usuario.create({
      nombre: 'Juan Pérez',
      direccion: 'Calle Principal 123, Apt 4',
      telefono: '3001234567',
      email: 'juan@example.com',
      password: 'contraseña123',
      rol: 'cliente',
      fecha_registro: new Date()
    });
    console.log('✓ Usuario creado:', usuario.toJSON());

    // 2. Insertar Categorías
    const categoria1 = await db.tbc_categorias.create({
      nombre: 'Electrónica'
    });
    console.log('✓ Categoría 1 creada:', categoria1.toJSON());

    const categoria2 = await db.tbc_categorias.create({
      nombre: 'Ropa'
    });
    console.log('✓ Categoría 2 creada:', categoria2.toJSON());

    // 3. Insertar Productos
    const producto1 = await db.tbb_productos.create({
      nombre: 'Laptop Dell XPS 13',
      descripcion: 'Laptop ultraportátil de alta performance',
      precio: 999.99,
      stock: 15,
      id_categoria: categoria1.id_categoria,
      imagen: 'http://ejemplo.com/laptop.jpg'
    });
    console.log('✓ Producto 1 creado:', producto1.toJSON());

    const producto2 = await db.tbb_productos.create({
      nombre: 'Mouse Logitech',
      descripcion: 'Mouse inalámbrico ergonómico',
      precio: 29.99,
      stock: 50,
      id_categoria: categoria1.id_categoria,
      imagen: 'http://ejemplo.com/mouse.jpg'
    });
    console.log('✓ Producto 2 creado:', producto2.toJSON());

    const producto3 = await db.tbb_productos.create({
      nombre: 'Camiseta Nike',
      descripcion: 'Camiseta deportiva de algodón',
      precio: 34.99,
      stock: 100,
      id_categoria: categoria2.id_categoria,
      imagen: 'http://ejemplo.com/camiseta.jpg'
    });
    console.log('✓ Producto 3 creado:', producto3.toJSON());

    // 4. Insertar Carrito
    const carrito = await db.tbb_carritos.create({
      id_usuario: usuario.id,
      total: 0.00,
      fecha_creacion: new Date()
    });
    console.log('✓ Carrito creado:', carrito.toJSON());

    // 5. Insertar Detalles del Carrito
    const detalle1 = await db.tbb_carrito_detalles.create({
      id_carrito: carrito.id_carrito,
      id_producto: producto1.id,
      cantidad: 1,
      precio_unitario: producto1.precio
    });
    console.log('✓ Detalle carrito 1 creado:', detalle1.toJSON());

    const detalle2 = await db.tbb_carrito_detalles.create({
      id_carrito: carrito.id_carrito,
      id_producto: producto2.id,
      cantidad: 2,
      precio_unitario: producto2.precio
    });
    console.log('✓ Detalle carrito 2 creado:', detalle2.toJSON());

    console.log('\n✅ ¡TODOS LOS DATOS SE HAN INSERTADO CORRECTAMENTE EN LA BASE DE DATOS!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error al insertar datos:', error.message);
    console.error(error);
    process.exit(1);
  }
}

insertarDatos();
