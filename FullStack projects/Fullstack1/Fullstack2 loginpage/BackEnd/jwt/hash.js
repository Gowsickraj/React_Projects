
const crypto = require("crypto");
// const generateHash = require("../jwt/hash");

const generateHash = (req, res, next) => {
    const { name, mobilenumber } = req.body;
    let create_hash;
    // if (mobilenumber) {
    //     create_hash = mobilenumber;
    // }
    req.hash = crypto.createHash('sha256').update(mobilenumber).digest('hex');
    console.log(req.hash,"hashed");
    next();

}

module.exports = generateHash