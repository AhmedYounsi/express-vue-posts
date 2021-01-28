const express = require("express");
const route = express.Router();
const Post = require("../model/model");

// CREATE POST
route.post("/", (req, res) => {
	if (!req.body) {
		res.status(400).send("body empty");
		return;
	}
    var today = new Date();
    today = today.getDate() + "/" +  today.getMonth() + "/" + today.getFullYear()
	const post = new Post({
		text: req.body.text,
		CreatedAt: today,
	});

	post.save(post).then((post) => {
		res.send(post);
	});
});

module.exports = route;

// GET ALL POST
route.get("/", (req, res) => {
	Post.find().then((post) => {
		res.send(post);
	});
});

// DELET POST
route.delete("/:id", (req, res) => {
	var id = req.params.id;
	Post.findByIdAndDelete(id).then(res.send("deleted !"));
});
