const Web3 = require("web3");
const isTokenHolder = require("../Helper/isTokenHolder");
const WalletModal = require("../models/WalletModal");
const { readFileSync } = require("fs");

const WalletCrtl = {
  getWallet: async (req, res) => {
    try {
      const walletModal = await WalletModal.find();

      return res.status(200).json(walletModal);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createWallet: async (req, res) => {
    try {
      const { name, address, collectionToken } = req.body;

      // const user = await UserModel.findOne({ email });

      const newWallet = new WalletModal({ name, address, collectionToken });
      console.log(newWallet);
      newWallet.save();

      return res.status(200).json({ msg: "Add new Wallet!" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  updateToken: async (req, res) => {
    try {
      const address = await WalletModal.find(req.address);
      console.log(address);
      if (!address) return res.status(400).json({ msg: "Address not found" });

      const updatedWalet = await WalletModal.findOneAndUpdate(
        { _id: address._id },
        { collectionToken: req.body.collectionToken }
      );
      return res.status(200).json({ msg: updatedWalet });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  addcheckWeb3: async (req, res) => {
    const w3 = new Web3(process.env.RPC_URL);
    // console.log(req.body.address);
    try {
      let jsData = JSON.parse(readFileSync("./Helper/test.json"));
      console.log(jsData);
      const object = Object.keys(jsData);
      const arr = [];
      await isTokenHolder(w3, object[4], req.body.address);
      // for (var i = 0; i < object.length; i++) {
      //   var singleData = await isTokenHolder(w3, object[i], req.body.address);
      //   if (singleData) {
      //     arr.push(object[i]);
      //   }
      // }

      // console.log(jsData[object[]]);
      res.status(200).send(arr);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
module.exports = WalletCrtl;
