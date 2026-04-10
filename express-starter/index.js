const express = require('express');

const app = express();

app.use("/users", (req, res, next) =>{
    console.log("Users");
    res.send("Users");
});

app.use("/", (req, res, next) =>{
    console.log("Hello World");
    res.send("Hello World");
});

app.listen(3000);