var express = require("express");
var router = express.Router();
var userCtrl = require("../controllers/users");
var auth = require("../middlewares/auth");
router.get("/",  userCtrl.getUsers); //ok
router.get("/:id", auth, userCtrl.getUserId); //ok
router.post("/signup", userCtrl.addUser); // ok
router.put("/:id", auth,userCtrl.updateUserId);//ok
router.delete("/:id", auth, userCtrl.deleteUserId);//ok
/// connection 
router.post("/login", userCtrl.login);
router.post("/token", userCtrl.token);
router.post("/verify/account", auth, userCtrl.requestVerify);
router.get("/verify/account", userCtrl.verifyUser);
router.post("/reset/password", userCtrl.forgetPass);
router.put("/reset/password", userCtrl.resetPass);

module.exports = router;
