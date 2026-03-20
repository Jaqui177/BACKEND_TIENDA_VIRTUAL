'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbc_categorias.hasMany(models.tbb_productos, {
        foreignKey: 'id_categoria',
        as: 'productos'
      });
    }
  }
  tbc_categorias.init({
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_categorias',
    tableName: 'tbc_categorias'
  });

  tbc_categorias.associate = function(models) {
    tbc_categorias.hasMany(models.tbb_productos,
         {
            foreignKey: 'id_categoria',
            as: 'tbc_productos'
         }
    );
  };

  return tbc_categorias;
};
