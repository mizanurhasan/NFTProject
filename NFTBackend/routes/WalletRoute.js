const router = require("express").Router();
const walletCtrl = require("../controller/WalletCrtl");

router.get("/", walletCtrl.getWallet);
// Testing
router.post("/", walletCtrl.addcheckWeb3);
//
router.post("/create", walletCtrl.createWallet);
// router.put("/update", walletCtrl.updateToken);

module.exports = router;
