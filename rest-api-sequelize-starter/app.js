const express = require('express');
const app = express();
const db = require('./config/db');

const productRoutes = require('./routes/productRoutes');

app.use(express.json());

db.sync()
    .then(()=> console.log("Database connected and synced"))
    .catch((err) => console.error("Error syncing database:", err));

app.use(productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

