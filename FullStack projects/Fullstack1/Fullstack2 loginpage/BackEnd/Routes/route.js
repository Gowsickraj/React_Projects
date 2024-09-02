const { postData } = require("../Controllers/data");
const crypto = require("crypto");
const generateHash = require("../jwt/hash");
const { getAllData, getDataByName } = require("../Model/Practice");
const { verifyMobileNumber } = require("../s2s/postmethod");

const routes = require("express").Router();


routes.post("/api/post", generateHash, postData);
routes.post("/api/getData", generateHash, verifyMobileNumber)


routes.get("/api/get", getAllData)
routes.get("/api/get/:name", getDataByName)










module.exports = routes;