const rolesController = {};
const tables = require("../../../model/modelsIndex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

rolesController.validations = async (req, res, result) => {
  const errors = result(req);
  if (!errors.isEmpty()) {
    return { success: false, errors };
  }
  return { success: true };
};

rolesController.addRoles = async (req, res) => {
  try {
    const validators = await rolesController.validations(
      req,
      res,
      validationResult
    );
    if (!validators.success) {
      console.log("hrllll");
      return res
        .status(404)
        .json({
          status: false,
          msg: "Validation Error Occured",
          data: validators.errors,
        });
    }
    const role = await tables.roles.create(req.body);
    if (role) {
      return res.status(200).json({
        status: true,
        msg: "Role is created successfully",
        newRole: role,
      });
    }
  } catch (error) {
    return res.status(500).json({
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
