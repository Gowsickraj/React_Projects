const express = require("express");
const expressRouter = require("./Router/routes");
require("dotenv").config();
const cors = require("cors");

const app = express()
const port = process.env.port

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",expressRouter);



app.listen(port,()=>{
    console.error(`Server successfully running at port ${port}`);
})
