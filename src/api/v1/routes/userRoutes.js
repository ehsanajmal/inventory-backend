const router = require("express").Router();

const user = require("../controllers/userController");

router.post("/addUser", user.addUser);
router.get("/viewAllUser", user.viewAllUser);

module.exports = router;
