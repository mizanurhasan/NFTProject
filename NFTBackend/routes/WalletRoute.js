const router = require("express").Router();
const walletCtrl = require("../controller/WalletCrtl");

// get address and token end point
router.get("/:address", walletCtrl.getWallet);

// Save address and token end point
router.post("/", walletCtrl.addcheckWeb3);

module.exports = router;
