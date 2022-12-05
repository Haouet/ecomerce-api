var express = require("express");
var router = express.Router();
var imagesCtrl = require("../controllers/file");

router.post("/", imagesCtrl.singleImageUpload);
router.get("/", imagesCtrl.getAllImages);
router.delete("/", imagesCtrl.deleteAllImages);

module.exports = router;
