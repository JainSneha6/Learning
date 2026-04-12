const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.getAllProducts();
        return res.status(200).json(products);
    }
    catch (err){
        return res.status(500).json({message: 'Error fetching products', error: err});
    }
}

exports.getProductById = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const product = await Product.getProductById(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        return res.status(200).json(product);
    }
    catch (err){
        return res.status(500).json({message: 'Error fetching product', error: err});
    }
};

exports.createProduct = async (req, res) => {
    try{
        const title = req.body.title;
        const price = req.body.price;
        if(!title){
            return res.status(400).json({message: 'Title is required'});
        }
        if(!price){
            return res.status(400).json({message: 'Price is required'});
        }
        const product =await Product.createProduct(title, price);
        return res.status(201).json({message: 'Product created successfully', product});
    }
    catch (err){
        return res.status(500).json({message: 'Error creating product', error: err});
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const results = await Product.deleteProduct(id);
        if(!results){
            return res.status(404).json({message: 'Product not found'});
        }
        return res.status(200).json({message: 'Product deleted successfully'});
    }
    catch (err){
        return res.status(500).json({message: 'Error deleting product', error: err});
    }
}