const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const hashPassword = async (pass) => {
  const hashedPassword = await bcrypt.hash(pass,10);
  return hashedPassword;
};

const generateToken=(email)=>{
    const token=jwt.sign({email},process.env.SECRET_KEY)
    return token
}
module.exports =  {hashPassword , generateToken} ;
