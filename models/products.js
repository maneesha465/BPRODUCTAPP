const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;

