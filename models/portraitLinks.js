var mongoose = require("mongoose");


var portaitLinkSchema = new mongoose.Schema({
	title: String,
	link: String
});

module.exports = mongoose.model("portraitLink", portaitLinkSchema, "portraitlinks");