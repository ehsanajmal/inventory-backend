const router = require("express").Router();

const rolee = require("../controllers/rolesController");
const {body} = require('express-validator');

router.post("/addRoles",[
    body('name').notEmpty().withMessage("Role Name is Required"),
    body('description').notEmpty().withMessage("Role Description is Required"),
], rolee.addRoles);
router.get("/viewAll", rolee.viewAll);

module.exports = router