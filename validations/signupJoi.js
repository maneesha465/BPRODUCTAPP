const Joi = require('joi');

const SignupJoi = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().required(),
   confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
     'any.only': 'Passwords do not match'
  }),
});

module.exports = SignupJoi;
