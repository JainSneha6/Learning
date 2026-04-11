const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    const products = Product.getAllProducts();
    return res.status(200).json(products);
}

exports.getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = Product.getProductById(id);
    if(!product){
        return res.status(404).json({message: 'Product not found'});
    }
    return res.status(200).json(product);
}

exports.createProduct = (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    if(!title){
        return res.status(400).json({message: 'Title is required'});
    }
    if(!price){
        return res.status(400).json({message: 'Price is required'});
    }
    const product = Product.createProduct(title, price);
    return res.status(201).json({message: 'Product created successfully', product});
}

exports.deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const success = Product.deleteProduct(id);
    if(!success){
        return res.status(404).json({message: 'Product not found'});
    }
    return res.status(200).json({message: 'Product deleted successfully'});
}