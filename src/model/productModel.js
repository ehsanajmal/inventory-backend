module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      groupID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

      }
    });
    return product;
  };
  