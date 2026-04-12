const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    tableName: 'products',
    timestamps: false
})

module.exports = Product;
