const express=require('express')
const authController=require('./../controllers/auth')
const router=express.Router()


router.route('/register').post(authController.register)
router.route('/login').get(authController.login)

module.exports=router