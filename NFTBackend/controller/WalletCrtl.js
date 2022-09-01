const Web3 = require("web3");
const isTokenHolder = require("../Helper/isTokenHolder");
const WalletModal = require("../models/WalletModal");

const walletData = require("../Data/test.json");
const { isSaveWallet, getToken } = require("../Helper/isSaveWallet");

const WalletCrtl = {
  getWallet: async (req, res) => {
    const address = req.params.address;
    try {
      const tokens = await getToken(address);

      return res
        .status(200)
        .json({ tokenName: tokens.collectionToken, address: tokens.address });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },

  addcheckWeb3: async (req, res) => {
    const w3 = new Web3(process.env.RPC_URL);
    const address = req.body.address;
    try {
      const object = Object.keys(walletData);
      // 0x6E84150012Fd6D571C33C266424fcDEcF80E3274 -true
      const validWallet = [];

      for (let i in object) {
        await isTokenHolder(w3, object[i], address)
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
      const tokens = await getToken(address);
      res.status(200).send({ validWallet, tokens: tokens });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
module.exports = WalletCrtl;
