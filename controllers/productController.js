const ProductModel = require('../models/products');
const ProductJoi = require('../validations/productJoi');



// Add new product
const addProduct = async (req, res) => {
    try {
        const data = req.body;
        await ProductJoi.validateAsync(data);

        const saveData = new ProductModel(data);
        await saveData.save();

        res.status(201).send({ message: 'Data saved successfully' });
    } catch (error) {
        console.error("Validation Error:", error.details); // Log detailed error
    res.status(400).send({ message: error.message });
    }
}

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const allData = await ProductModel.find({});
        res.status(200).send({ data: allData, message: 'ok' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// Get product by id
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ProductModel.findById(id);
        if (!data) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ data: data, message: 'ok' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ProductModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ data: data, message: 'ok' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// Update product
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await ProductJoi.validateAsync(newData);

        const data = await ProductModel.findByIdAndUpdate(id, newData, { new: true });
        if (!data) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ data: data, message: 'ok' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = { addProduct, getAllProducts, getProductById, deleteProduct, updateProduct };
