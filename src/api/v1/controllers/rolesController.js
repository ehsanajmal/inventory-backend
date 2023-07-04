const rolesController = {};
const tables = require("../../../model/modelsIndex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

rolesController.validations = (req, res, result) => {
  const errors = result(req);
  if (!errors.isEmpty()) {
    return res
      .status(404)
      .json({ status: false, msg: "Validation Error Occured", data: errors });
  }
  return true;
};

rolesController.addRoles = async (req, res) => {
  try {
    rolesController.validations(req, res, validationResult);
    const role = await tables.roles.create(req.body);
    if (role) {
      return res.status(200).json({
        status: true,
        msg: "Role is created successfully",
        newRole: role,
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
rolesController.viewAll = async (req, res) => {
  try {
    const role = await tables.roles.findAll();

    return res.status(200).json({
      status: true,
      msg: "Role is created successfully",
      newRole: role,
    });
  } catch (error) {
    return res.status(404).json({
      status: false,
      msg: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = rolesController;
