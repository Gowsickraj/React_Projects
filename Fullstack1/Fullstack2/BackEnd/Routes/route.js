const { postData } = require("../Controllers/data");

const routes = require("express").Router();

routes.post("/api/post",postData);








module.exports = routes;