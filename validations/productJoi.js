const Joi = require('joi');

const ProductJoi = Joi.object({
    title: Joi.string()
    .min(3)
    .required(),

    category: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(3)
        .required(),

    image: Joi.string()
        .min(3)
        .required(),

    quantity: Joi.number()
        .integer()
        .min(0),

    price: Joi.number()
        .integer()
        .min(0)
});

module.exports = ProductJoi;
