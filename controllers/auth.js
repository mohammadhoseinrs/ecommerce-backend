const userModel = require("./../models/user");
const { hashPassword, generateToken } = require("./../utils/helperFunctions");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    if (
      fullName.length < 4 ||
      email.length < 5 ||
      password != confirmPassword
    ) {
      return res.status(400).json({
        message: "please fill the requiremnets",
      });
    }

    const isUserAvailable = await userModel.findOne({
      $or: [{ email }, { fullName }],
    });
    if (isUserAvailable) {
      return res.json({
        message: "the user is already exit",
      });
    }
    const hashedPassword = await hashPassword(password);

    const allUser = await userModel.find({});
    const newUser = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
      role: allUser.length > 0 ? "USER" : "ADMIN",
    });

    const token = generateToken(email);

    return res.json({ newUser, token });
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
