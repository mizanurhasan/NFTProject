const UserModel = require("../models/UserModel");

const middleWare = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (user.role === 0)
      return res.status(400).json({ msg: "Admin resource access control" });
    next();
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = middleWare;
