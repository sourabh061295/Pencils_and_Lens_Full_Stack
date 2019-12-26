var mongoose = require("mongoose");


var formSchema = new mongoose.Schema({
	name: String,
	email: String,
	num: Number,
	size: String,
	type: String,
	file: String,
	remarks: String
});

module.exports = mongoose.model("form", formSchema);