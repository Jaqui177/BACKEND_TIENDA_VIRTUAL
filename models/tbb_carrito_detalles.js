'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carrito_detalles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbb_carrito_detalles.belongsTo(models.tbb_carritos, {
        foreignKey: 'id_carrito',
        as: 'carrito'
      });
      tbb_carrito_detalles.belongsTo(models.tbb_productos, {
        foreignKey: 'id_producto',
        as: 'producto'
      });
    }
  }
  tbb_carrito_detalles.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito_detalles',
    tableName: 'tbb_carrito_detalles'
  });
  return tbb_carrito_detalles;
};
