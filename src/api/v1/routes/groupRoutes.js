const router = require("express").Router();

const group = require("../controllers/groupController");
const {body} = require('express-validator');

router.post("/addGroup",[
    body('name').notEmpty().withMessage("Group Name is Required"),
    body('description').notEmpty().withMessage("Group Description is Required"),
], group.addGroup);

router.get("/viewAllGroups", group.viewAllGroups);

module.exports = router