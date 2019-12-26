var mongoose = require("mongoose");


var reviewSchema = new mongoose.Schema({
	name: String,
	text: String
});

module.exports = mongoose.model("review", reviewSchema);