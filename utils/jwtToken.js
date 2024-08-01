
var jwt = require('jsonwebtoken');

const jwtToken = async(user,password)=>{
    const secretKey = process.env.jwtSecretKet
let token =await jwt.sign({user,password},secretKey)
return token;
}
module.exports = {jwtToken};