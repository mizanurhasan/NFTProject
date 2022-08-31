const Web3 = require("web3");
const isTokenHolder = require("../Helper/isTokenHolder");
const WalletModal = require("../models/WalletModal");

const walletData = require("../Data/test.json");
const isSaveWallet = require("../Helper/isSaveWallet");

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
      const { address, collectionToken } = req.body;
      const newWallet = new WalletModal({ address, collectionToken });
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

    try {
      const object = Object.keys(walletData);
      // 0x6E84150012Fd6D571C33C266424fcDEcF80E3274 -true
      const validWallet = [];

      for (let i in object) {
        await isTokenHolder(w3, object[i], req.body.address)
          .then((valid) => {
            if (valid) {
              validWallet.push(...validWallet, walletData[object[i]]);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if (validWallet.length > 0) {
        await isSaveWallet(req.body.address, validWallet);
      }

      res.status(200).send(validWallet);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
module.exports = WalletCrtl;
