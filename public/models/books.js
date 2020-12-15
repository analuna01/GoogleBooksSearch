const mongoose = require("mongoose");
const books = new mongoose.Schema({
    id: {
        type: String,
    },

    title: {
        type: String,
    },

    authors: {
        type: String,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
    },

    link: {
        type: String,
    }

});

module.exports = mongoose.model("Books", books);