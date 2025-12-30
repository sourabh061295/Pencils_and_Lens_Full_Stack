var mongoose = require("mongoose");


var testimonialschema = new mongoose.Schema({
	name: String,
	text: String
});

module.exports = mongoose.model("testimonials", testimonialschema, "testimonials");