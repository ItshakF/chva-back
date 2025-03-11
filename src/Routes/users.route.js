const express = require("express");
const { register, login, getUsers, logout } = require("../Controllers/user.controller");
const authenticate = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authenticate, getUsers);
router.post("/logout", logout);

module.exports = router;