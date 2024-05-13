const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  signupController,
  signinController,
  verifyController,
  resetController,
} = require("../controller/userController");
const session = require("express-session");

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

// // POST route for user signin

router.post(
  "/signin",
  [
    check("username").notEmpty().withMessage("Username is required"),
    check("password").notEmpty().withMessage("Password is required"),
  ],
  signinController
);

// verify user Route

router.get("/verify", verifyController);

// Reset password route

router.post("/reset", resetController);

module.exports = router;
