const express = require('express');

const path = require('path');

const router = express.Router();

router.get("/", (req, res, next) => {
    const indexPath = path.join(__dirname, "..", "views", "index.html");
    res.sendFile(indexPath);
});

router.get("/users", (req, res, next) => {
    const usersPath = path.join(__dirname,"..", "views", "users.html");
    res.sendFile(usersPath);
});

module.exports = router;