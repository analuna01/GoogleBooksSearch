const express = require("express");
const session = require("express-session");
const Books = require ("../models/books");


module.exports = function (app){

app.post("/save", async (req, res) => {
        const savedBook = new Books({
            title: req.body.title,
            authors: req.body.author,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link,
        });
        await savedBook.save();
        res.send("Book Saved!");
    });

    app.get("/books", (req, res) => {
        res.send(req.books);
    
        // ^^^ The user is stored in the req.user. The req object you get 
        // ^^^ from the client now has a user inside and contains all of the sission data. 
      });
}
  