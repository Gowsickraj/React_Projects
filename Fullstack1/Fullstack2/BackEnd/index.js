const express = require("express");
require("dotenv").config();


const cors = require("cors");
const PORT = process.env.PORT
const routes = require("./Routes/route");
const app = express();



app.use("/",routes);

app.listen(PORT,()=>{
    console.log(`Server running successfully at port ${PORT}`);
})