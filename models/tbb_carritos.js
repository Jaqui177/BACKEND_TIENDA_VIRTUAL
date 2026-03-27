'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbb_carritos.belongsTo(models.tbc_usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      tbb_carritos.hasMany(models.tbb_carrito_detalles, {
        foreignKey: 'id_carrito',
        as: 'detalles'
      });
    }
  }
  tbb_carritos.init({
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_carritos',
    tableName: 'tbb_carritos'
  });
  return tbb_carritos;
};
