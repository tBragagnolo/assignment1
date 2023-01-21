const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config;

const app = express();
const port = 8080;

function onStart() {
    console.log("Listening on:", port);
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message:"API Listening"});
});

app.listen(port, onStart);