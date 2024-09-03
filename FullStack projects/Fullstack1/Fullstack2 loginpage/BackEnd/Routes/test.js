const test_routes = require("express").Router();

test_routes.get("/express/download", (req, res) => {
    console.log("download");
    const filePath = "C:\\Users\\Training\\Desktop\\React\\FullStack projects\\Fullstack1\\Fullstack2 loginpage\\FrontEnd\\project1\\public\\index.html";
    res.download(filePath, "index.html file", (err) => {
        console.log(err);
    })
})


test_routes.get("/express/jsonp", (req, res) => {
    console.log("jsonp");
    res.jsonp({ "name": "Guru", "dom": "nov" })

})

test_routes.get("/express/sendfile", (req, res) => {

    const filePath = "C:\\Users\\Training\\Desktop\\React\\FullStack projects\\Fullstack1\\Fullstack2 loginpage\\BackEnd\\Routes\\test.js"
    res.sendFile(filePath, (err) => {
        console.log(err);
    })

})

module.exports=
{test_routes}