const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")
const isAdmin = require("../middleware/admin-middleware")
const multer = require("multer");
const musicController = require("../controller/musicController");
const router = express.Router();

const upload = multer({storage:multer.memoryStorage()})

router.post("/uploadMusic",authMiddleware,isAdmin,upload.fields([
     {name : "audio", maxCount:1},
     {name:'coverImage', maxCount:1}
]),musicController.musicUpload);

router.get('/', authMiddleware,musicController.getAllMusic);
router.get("/:id",authMiddleware,musicController.getMusicById);
router.put("/:id",authMiddleware,musicController.updateMusic);
router.delete('/:id', authMiddleware,musicController.deleteMusic);

module.exports = router