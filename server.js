const express = require("express");
const app = express();

const port = 8080;

function onStart() {
    console.log("Listening on:", port);
}

app.get("/", (req, res)=>{
    res.json({message:"API Listening"});
});

app.listen(port, onStart);