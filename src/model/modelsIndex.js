const { Sequelize, DataTypes } = require("sequelize");
const db = {};
const models = require("./mainModel");
const sequelize = new Sequelize("inventory", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.roles = models.roles(sequelize, DataTypes);
    db.user = models.user(sequelize, DataTypes);
    db.group = models.group(sequelize, DataTypes);
    db.product = models.product(sequelize, DataTypes);
    // db.sequelize.sync({ force: true });
    db.sequelize.sync({ alert: true });
    console.log("Database is configured successfully");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(db);
module.exports = db