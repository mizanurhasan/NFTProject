const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    address: { type: String, required: true, trim: true },
    collectionToken: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Wallet", walletSchema);
