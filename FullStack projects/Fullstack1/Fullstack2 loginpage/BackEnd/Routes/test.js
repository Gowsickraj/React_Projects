const routes = require("express").Router();

routes.get("/express/download", (req, res) => {
    console.log("download");
    const filePath = "C:\\Users\\Training\\Desktop\\React\\FullStack projects\\Fullstack1\\Fullstack2 loginpage\\FrontEnd\\project1\\public\\index.html";
    res.download(filePath, "index.html file", (err) => {
        console.log(err);
    })
})


routes.get("/express/jsonp", (req, res) => {
    console.log("jsonp");
    res.jsonp({ "name": "Guru", "dom": "nov" })

})

routes.get("/express/sendfile", (req, res) => {

    const filePath = "C:\\Users\\Training\\Desktop\\React\\FullStack projects\\Fullstack1\\Fullstack2 loginpage\\FrontEnd\\project1\\public\\index.html";
    res.sendFile(filePath, (err) => {
        console.log(err);
    })

})

module.exports=
{routes}