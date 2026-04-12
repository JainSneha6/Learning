const {Sequelize} = require('sequelize');

const db = new Sequelize('productdb', 'root', 'root',{
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    logging: false
});

module.exports = db;