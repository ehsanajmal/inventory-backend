const router = require("express").Router();

const product = require("../controllers/productController");
const {body} = require('express-validator');


router.post("/addProduct",[
    body('name').notEmpty().withMessage("Group Name is Required"),
    body('description').notEmpty().withMessage("Group Description is Required"),
], product.addProduct);

router.get("/viewAllProducts", product.viewAllProducts);


module.exports = router