const userModel = require("./../models/user");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;


    const isUserAvailable=await userModel.findOne({
      $or:[{email},{fullName}]
    })
    console.log(isUserAvailable);

    console.log('hi');
    if(isUserAvailable){
      return res.json('hi')
    }

    const newUser = await userModel.create({
      fullName,
      email,
      password,
    });

    return res.json({ newUser });
  } catch (err) {
    console.log(err);
  }
};
exports.login = async (req, res) => {
  const allUser = await userModel.find({});
  return res.json({ allUser });
};
exports.getMe = async (req, res) => {
  return res.json({ message: "register" });
};
