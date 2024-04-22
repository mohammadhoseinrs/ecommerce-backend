const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};

connectToDB();

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
