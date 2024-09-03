const express = require("express");
require("dotenv").config();


const cors = require("cors");
const PORT = process.env.PORT
const routes  = require("./Routes/route");
const { test_routes } = require("./Routes/test");
const app = express();
const cors_options = {
    origin: "http://localhost:3000"
}
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extends: true }))

///////

app.use("/", routes,test_routes)

app.listen(PORT, () => {
    console.log(`Server running successfully at port ${PORT}`);
})

