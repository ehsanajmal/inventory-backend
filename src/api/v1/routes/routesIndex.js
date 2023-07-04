const router = require("express").Router();

router.use("/roles", require("./rolesRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/groups", require("./groupRoutes"));
router.use("/products", require("./productRoutes"));
module.exports = router;