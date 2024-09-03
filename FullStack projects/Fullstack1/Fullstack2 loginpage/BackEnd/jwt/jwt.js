const jwt = require("jsonwebtoken")
const crypto = require("crypto");

const secretKey = "your-secret-key";
const payload = {
    username: "Guru",
    role: "admin"
}

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Generated token", token);

const hash = crypto.createHash('sha256').update(token).digest('hex');

console.log("SHA-256 hash of jwt", hash);
