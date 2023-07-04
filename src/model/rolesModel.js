module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define("roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validiate: {
        notNull: {
          msg: "Name must be required",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validiate: {
        notNull: {
          msg: "Name must be required",
        },
      },
    },
  });
  return roles;
};
