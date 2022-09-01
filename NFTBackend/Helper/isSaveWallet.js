const WalletModal = require("../models/WalletModal");

async function isSaveWallet(address, collectionToken) {
  try {
    const checking = await WalletModal.findOne({ address });
    if (checking) {
      await WalletModal.findByIdAndUpdate(
        { _id: checking._id },
        { collectionToken: collectionToken }
      );
    } else {
      const newWallet = new WalletModal({
        address: address,
        collectionToken: collectionToken,
      });
      await newWallet.save();
    }

    return collectionToken;
  } catch (e) {
    throw new Error(e?.message);
  }
}
async function getToken(address) {
  try {
    const token = await WalletModal.findOne({ address });
    if (token) {
      return token;
    }

    return [];
  } catch (e) {
    throw new Error(e?.message);
  }
}

module.exports = { isSaveWallet, getToken };
