const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;

const connectDB = async () => {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('productdb');
}

const getDB = () => db;

module.exports = { connectDB, getDB };