var mongoose = require("mongoose");


var artLinkSchema = new mongoose.Schema({
	title: String,
	description: String,
	link: String
});

module.exports = mongoose.model("artLink", artLinkSchema, "artlinks");