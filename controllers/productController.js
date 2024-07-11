


const ProductModel = require('../models/products')
//add new product
const addProduct = async(req,res) =>{
    const data = req.body
    const saveData = new ProductModel(data);
    if(!saveData)throw new console.Error(400,'Insert all data');
    await saveData.save();
    res.status(201).send({message:'Data saved successfully'})
}

//get all product
const getAllProducts = async(req,res) =>{
   const allData = await ProductModel.find({})
    res.status(200).send({data:allData, message:'ok'})
}
//getby id
const getProductById = async(req,res) =>{
    const id = req.params.id
    const data = await ProductModel.findById(id)
    res.status(200).send({data:data, message:'ok'})
}
//delete product
const deleteProduct = async(req,res) =>{
    const id = req.params.id
    const data = await ProductModel.findByIdAndDelete(id)
    res.status(200).send({data:data, message:'ok'})
}
//update product
const updateProduct = async(req,res) =>{
    const id = req.params.id
    const newData =req.body
    // const checkData = new ProductModel(newData)
    const Data = await ProductModel.findByIdAndUpdate(id,newData)
    res.status(200).send({data:data, message:'ok'})
}

module.exports = {addProduct,getAllProducts,getProductById,deleteProduct,updateProduct}





