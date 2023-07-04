const user = {};
const tables = require("../../../model/modelsIndex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

user.addUser = async (req, res) => {
  try {
    //   const roleID = await tables.roles.findOne({where:{id:req.body.roleID}});
    const roleID = await tables.roles.findByPk(req.body.roleID);
    if (!roleID) {
      return res.status(404).json({
        status: false,
        msg: "RoleID does not found,Please enter a valid roleID to create user",
        data: null,
      });
    }
    const salth = await bcrypt.genSalt(10);
    const password = req.body.password;
    let newPassword = await bcrypt.hash(password, salth);
    req.body.password = newPassword;
    const user = await tables.user.create(req.body);
    if (user) {
      return res.status(200).json({
        status: true,
        msg: "New User created successfully",
        newUser: user,
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: false,
      msg: "Something went wrong",
      error: error.message,
    });
  }
};

user.viewAllUser = async (req, res) => {
  try {
    const user = await tables.user.findAll();

    return res.status(200).json({
      status: true,
      msg: "User is created successfully",
      newUsers: user,
    });
  } catch (error) {
    return res.status(404).json({
      status: false,
      msg: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = user;
