const express = require("express");
require("dotenv").config()
const app = express();
const port=4000
app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/twitter", (req, res) =>{
    res.send("harsh@")
    
})
app.listen(process.env.PORT, () => {
    console.log(`server is listening at ${port}`);
})
