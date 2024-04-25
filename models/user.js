const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      required:true
    }
  },
  { timeStamps: true }
);

const userModel = mongoose.model("users", schema);

module.exports = userModel;
