const { getDB } = require('../config/db');
const { ObjectId } = require('mongodb');

exports.getAllProducts = async () => {
    const db = getDB();
    return await db.collection('products').find().toArray();
};

exports.getProductById = async (id) => {
    const db = getDB();
    return await db.collection('products').findOne({_id: new ObjectId(id)});
}

exports.createProduct = async (title, price) => {
    const db = getDB();
    const result = await db.collection('products').insertOne({title, price});
    return {
        _id: result.insertedId,
        title,
        price
    };
}

exports.updateProduct = async (id, title, price) => {
    const db = getDB();
    const result = await db.collection('products').updateOne(
        {_id: new ObjectId(id)},
        {$set: {title, price}
    });
    return result.modifiedCount > 0 ? {_id: id, title, price} : null;
};

exports.deleteProduct = async (id) => {
    const db = getDB();
    const result = await db.collection('products').deleteOne({_id: new ObjectId(id)});
    return result.deletedCount > 0; 
}