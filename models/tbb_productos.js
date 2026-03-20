'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbb_productos.belongsTo(models.tbc_categorias, {
        foreignKey: 'id_categoria',
        as: 'categoria'
      });
      tbb_productos.hasMany(models.tbb_carrito_detalles, {
        foreignKey: 'id_producto',
        as: 'carrito_detalles'
      });
    }
  }
  tbb_productos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_productos',
    tableName: 'tbb_productos'
  });

  tbb_productos.associate = function(models) {
    tbb_productos.belongsTo(models.tbc_categorias,
         {
            foreignKey: 'id_categoria',
            as: 'categoria'
         }
    );
  };
    

  return tbb_productos;
};
