const express = require("express");
// const path = require("path");
const Books = require("../models/books");
const router = express.Router();


router.post("/book", async (req, res) => {
    const savedBook = new Books({
        id: req.body.id,
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
    });
    savedBook.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json(error)
        })
});

router.get("/books", (req, res) => {
    Books.find({})
        .then((books) => {
            res.json(books);
        })
        .catch((error) => {
            res.json(error)
        })
});

router.delete('/bookid', (req, res) => {
    BookModel.remove(
          {
                id: req.query.id
          },
          function(err) {
                if (err) res.send(err);
                else res.send('Successfully! Book has been Deleted.');
          }
    );
});

module.exports = router;



// module.exports = function (app) {

//     app.post("/book", async (req, res) => {
//         const savedBook = new Books({
//             title: req.body.title,
//             authors: req.body.authors,
//             description: req.body.description,
//             image: req.body.image,
//             link: req.body.link,
//         });
//         await savedBook.save();
//         res.send("Book Saved!");
//     });

//     app.get("/books", (req, res) => {
//         Books.find({})
//             .then((books) => {
//                 res.json(books);
//             }) 
//     });
// }
