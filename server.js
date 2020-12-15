const express = require("express");
const mongoose = require("mongoose");
const routes = require("./public/routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku set up
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes 
app.use(routes)

// Set up Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./public/routes");

// app.use(express.json());


// // ----------------------- Set up Mongoose ---------------------------
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     () => {
//         console.log("Mongoose is connected")
//     });

// // ---------------------- Set up middleware --------------------------
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//     cors({
//         origin: "http://localhost:3000", //<--- location of the react app
//         credentials: true,
//     }));

// // ---------------------- Set up PORT & Routes-------------------------

// // const PORT = process.env.PORT || 3001;
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

// // require("./public/routes/api-routes")(app);
// app.use(routes);


// // Send every other request to the React app
// // Define any API routes before this runs
// // app.get('*', (req, res) => {
// //     res.sendFile(path.join(__dirname, './client/index.html'));
// // });

// app.listen(PORT, () => {
//     console.log(`🌎 ==> API server now on port ${PORT}!`);
// });