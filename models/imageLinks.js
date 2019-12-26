var mongoose = require("mongoose");


var imageLinkSchema = new mongoose.Schema({
	title: String,
	description: String,
	link: String
});

module.exports = mongoose.model("imageLink", imageLinkSchema);