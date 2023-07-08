module.exports = (sequelize, DataTypes) => {
    const stock = sequelize.define("stock", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stock_date: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      stock_purchasing_price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

      }
    });
    return stock;
  };
  