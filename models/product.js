module.exports = function (sequelize, DataTypes) {
  const product = sequelize.define("Product", {
    number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  });
  return product;
};
