const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const { connectDB } = require('./config/db');

app.use(express.json());

connectDB();

app.use(productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

