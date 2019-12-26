// Require all models and packages
var mongoose     = require("mongoose"),
	artLinks     = require("../models/artLinks"),
    imageLinks   = require("../models/imageLinks"),
    specialLinks = require("../models/specialLinks"),
	reviews      = require("../models/reviews"),
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
		imageLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("Image Links deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.special == true)) {
		specialLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("Special Links deleted from DB");
		});
	}
	if((clearList.all == true) || (clearList.comment == true)) {
		reviews.deleteMany({}, function(err){
		if(err){console.log(err);}
			console.log("All comments/reviews deleted from DB");
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