
const express = require('express');
const { addProduct, getAllProducts, updateProduct, deleteProduct, getProductById } = require('../../controllers/productController');
const asyncHandler = require('../../utils/asyncHandler');


const router = require('express').Router();
//crud

router.post('/',asyncHandler(addProduct))
.get('/',asyncHandler(getAllProducts))
.put('/:id',asyncHandler(updateProduct))
.delete('/:id',asyncHandler(deleteProduct))
 .get('/:id',asyncHandler(getProductById))







module.exports = router