const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  getOptions,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/options", getOptions);
router.post("/", createUsers);

module.exports = router;
