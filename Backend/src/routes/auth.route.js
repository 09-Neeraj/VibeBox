const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")
const isAdmin = require("../middleware/admin-middleware")
const authController = require("../controller/auth.controller")

const musicController = require("../controller/musicController");
const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);




//    router.get(
//      "/admin-test",
//      authMiddleware,
//      isAdmin,
//      (req, res) => {
//        res.status(200).json({
//          message: "Welcome Admin"
//        });
//      }
//    );

module.exports = router