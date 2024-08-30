const { postData } = require("../Controllers/data");
const crypto = require("crypto");

const routes = require("express").Router();


const generateHash = (req, res, next) => {
    const { name, mobilenumber } = req.body;
    
    req.hash = crypto.createHash('sha256').update(mobilenumber).digest('hex');
    next();

}


routes.post("/api/post", generateHash, postData);








module.exports = routes;