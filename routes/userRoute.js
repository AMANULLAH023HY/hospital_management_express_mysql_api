const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { signupController } = require("../controller/userController");

// POST route for user signup
router.post(
  "/signup",
  [
    check("username").notEmpty().withMessage("Username is required"),
    check("password").notEmpty().withMessage("Password is required"),
    check("email").isEmail().withMessage("Please provide a valid email"),
  ],
  signupController
);

module.exports = router;
