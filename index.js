const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGO_URL || "mongodb://localhost:27017/ecommerce";

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGOURL);
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};

connectToDB();

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
