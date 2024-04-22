const express = require("express");
const cors = require("cors");

const authRouter=require('./routes/auth')



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/auth',authRouter)
module.exports=app
