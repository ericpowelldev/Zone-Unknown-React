// Dependencies
const router = require("express").Router();
const userRoutes = require("./users");
const messageRoutes = require("./messages");

// User routes
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
