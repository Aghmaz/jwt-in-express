const express = require("express");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const users = require("./database");
const router = require("./route");
const app = express();
const authenticateJWT = require("./middleware")


app.use(bodyParser.json());
app.use("/", router);

console.log(books);
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})