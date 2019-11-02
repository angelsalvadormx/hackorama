const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const passport = require("passport");

router.post("/register", authController.register);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/v1/findog/post"
  }), authController.login
);

router.get("/logout", authController.logout);

module.exports = router;
