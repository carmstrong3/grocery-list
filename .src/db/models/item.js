'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    purchased: DataTypes.BOOLEAN
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};