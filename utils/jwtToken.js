
var jwt = require('jsonwebtoken');
const secretKey = process.env.jwtSecretKet
const jwtToken = async(user,password)=>{
let token =await jwt.sign({user,password},secretKey)
return token;
}
module.exports = {jwtToken};