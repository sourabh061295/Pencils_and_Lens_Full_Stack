var mongoose = require("mongoose");


var photoLinkSchema = new mongoose.Schema({
	title: String,
	description: String,
	link: String
});

module.exports = mongoose.model("photoLink", photoLinkSchema, "photolinks");