const mongoose = require("mongoose");
const books = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Books", books);