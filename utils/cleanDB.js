// Require all models and packages
var mongoose     = require("mongoose"),
	artLinks     = require("../models/artLinks"),
    photoLinks   = require("../models/photoLinks"),
    portraitLinks = require("../models/portraitLinks"),
	testimonials      = require("../models/testimonials"),
    Forms        = require("../models/forms");

// Clean Database function
function cleanDB(clearList) {
	if((clearList.all == true) || (clearList.art == true)) {
		artLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("Art Links deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.image == true)) {
		photoLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("Image Links deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.special == true)) {
		portraitLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("Special Links deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.comment == true)) {
		testimonials.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("All testimonials deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.form == true)) {
		Forms.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("All form data deleted from DB");
		});
	}
}

module.exports = cleanDB;