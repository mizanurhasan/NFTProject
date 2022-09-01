const router = require("express").Router();
const walletCtrl = require("../controller/WalletCrtl");

router.get("/", walletCtrl.getWallet);

router.post("/", walletCtrl.addcheckWeb3);

module.exports = router;
