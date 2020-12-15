const express = require("express");
const mongoose = require("mongoose");
const routes = require("./public/routes");

const app = express();

// Set up Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books",
{
    useNewUrlParser: true
},
() => {
    console.log("Mongoose is connected")
});

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku set up
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes 
app.use(routes)

// Port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});