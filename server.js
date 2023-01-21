/*********************************************************************************
*  BTI425 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Tom Bragagnolo Student ID: 139157218 Date: January 20, 2023
*  Cyclic Link: 
*
********************************************************************************/ 

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config;
const MoviesDB = require("./modules/moviesDB");
const db = new MoviesDB;

const app = express();
const port = 8080;

function onStart() {
    console.log("Listening on:", port);
}

app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res)=>{
    res.json({message:"API Listening"});
});

app.post("/api/movies", (req, res)=>{
    db.addNewMovie(req.body).then((data)=>{
        res.json(data);
    }).catch(()=>{
        res.send("Unable to Add Movie");
    });
});

app.get("/api/movies", (req, res)=>{
    //Idk
});

app.get("/api/movies/:id", (req, res)=>{
    db.getMovieById(req.params.id).then((data)=>{
        res.json(data);
    }).catch(()=>{
        res.send("Unable to Find Movie");
    });
});

app.put("/api/movies/:id", (req, res)=>{
    db.updateMovieById(req.body, req.params.id).then(()=>{
        res.send("Movie Update");
    }).catch(()=>{
        res.send("Unable to Update Movie");
    });
})

app.delete("/api/movies/:id", (req, res)=>{
    db.deleteMovieById(req.params.id).then(()=>{
        res.send("Movie Deleted");
    }).catch(()=>{
        res.send("Unable to Delete Movie");
    });
});

db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
    app.listen(port, onStart);
}).catch((err)=>{
    console.log(err);
});

//app.listen(port, onStart);