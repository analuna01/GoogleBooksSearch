const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");


// ----------------------- Set up Mongoose ---------------------------
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => {
        console.log("Mongoose is connected")
    });

// ---------------------- Set up middleware --------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", //<--- location of the react app
        credentials: true,
    }));

// ---------------------- Set up PORT & Routes-------------------------

const PORT = process.env.PORT || 3001;

require("./public/routes/api-routes");

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});