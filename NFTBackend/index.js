require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/wallet", require("./routes/WalletRoute"));

mongoose.connect(
  process.env.MONGOOSE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running port: " + process.env.PORT);
});
