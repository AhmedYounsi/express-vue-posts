const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
     CreatedAt: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model("Post", schema);

module.exports = Post;
