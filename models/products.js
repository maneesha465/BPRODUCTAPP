const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, require:true},
        category:String,
        description:String,
        Image:String,
        quantity:Number,
        price:Number,

    },{
        timestamps:true
    }

    
)

const ProductModel = mongoose.model('product',ProductSchema)
module.exports = ProductModel

