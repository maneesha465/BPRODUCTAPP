const userModel =require('../models/users')
const SignUpJoi =require('../validations/signupJoi')
const { jwtToken } = require('../utils/jwtToken');


const SignUp = async(req,res)=>{
    const data = req.body
    console.log(data);
    await SignUpJoi.validateAsync(data)
const tosave =new userModel(data)
await tosave.save()
res.status(200).send("Added successfully")

}


const Login = async(req,res)=>{
    const data = req.body
    console.log(data);
    await SignUpJoi.validateAsync(data)
//Check in momgodb
const isExist =await userModel.findOne({email: req.body.email,password:req.body.password})
if(!isExist) throw new Error("user not found")
    const token =  jwtToken( req.body.email, req.body.password)
console.log(token);
res.status(200).send({status:true,message:"Success",token:token})

}
module.exports ={SignUp,Login}