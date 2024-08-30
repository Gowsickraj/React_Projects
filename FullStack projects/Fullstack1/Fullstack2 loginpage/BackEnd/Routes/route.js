const { postData } = require("../Controllers/data");
const crypto = require("crypto");
const generateHash = require("../jwt/hash");

const routes = require("express").Router();


routes.post("/api/post", generateHash, postData);








module.exports = routes;