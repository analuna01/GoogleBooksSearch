// const express = require('express');
// const books = require("../models/books");

// app.post("/login", (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) throw err;
//       if (!user) throw res.send("No User Found");
//       else {
//         req.login(user, err => {
//           if (err) throw err;
//           res.send("User Authenticated!");
//           console.log(req.user);
//         })
//       }
//     })(req, res, next);
//   });