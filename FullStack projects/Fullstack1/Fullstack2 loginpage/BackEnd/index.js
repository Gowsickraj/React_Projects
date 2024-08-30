const express = require("express");
require("dotenv").config();


const cors = require("cors");
const PORT = process.env.PORT
const routes = require("./Routes/route");
const app = express();
const cors_options = {
    origin: "http://localhost:3000"
}
app.use(cors(cors_options));
app.use(express.json());

///////

app.use("/",routes);

app.listen(PORT,()=>{
    console.log(`Server running successfully at port ${PORT}`);
})