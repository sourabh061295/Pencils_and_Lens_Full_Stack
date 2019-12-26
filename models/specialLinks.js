var mongoose = require("mongoose");


var specialLinkSchema = new mongoose.Schema({
	title: String,
	link: String
});

module.exports = mongoose.model("specialLink", specialLinkSchema);