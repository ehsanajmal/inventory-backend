const router = require("express").Router();

const Productstock = require("../controllers/stockController");

router.post("/addStock", Productstock.addStock);
router.get("/viewAllStock", Productstock.viewAllStock);

module.exports = router;
