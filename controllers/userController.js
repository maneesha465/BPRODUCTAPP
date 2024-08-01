const bcrypt = require('bcrypt');
const userModel = require('../models/users');
const SignUpJoi = require('../validations/signupJoi');
const LoginJoi = require('../validations/loginJoi');
const SignUp = async (req, res) => {
  const data = req.body;
  console.log(data);

  await SignUpJoi.validateAsync(data);

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  // Create user object with necessary fields
  const toSave = new userModel({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    isAdmin: data.isAdmin || false
  });

  await toSave.save();
  res.status(200).send("Added successfully");
}

const Login = async (req, res) => {
    const data = req.body;
    console.log(data);
  
    // Use the new validation schema for login
    await LoginJoi.validateAsync(data);

   
  
    // Check in MongoDB
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }
   
  
    res.status(200).send({ status: true, message: "Success" });
  };

module.exports = { SignUp, Login };
