// Configure environment variables
require('dotenv').config();

// Require all modules
var express       = require('express'),
	artLinks      = require('../models/artLinks'),
	imageLinks    = require('../models/imageLinks'),
	specialLinks  = require('../models/specialLinks'),
	Forms         = require('../models/forms'),
	reviews       = require('../models/reviews'),
	sendMail      = require('../utils/sendMail'),
    router        = express.Router();

// Home route
router.get("/", function(req, res){
	res.locals.currPage = "home";
	res.render("home");
});

// Art gallery page
router.get("/art", function(req, res){
    res.locals.currPage = "art";
    // Read all art links from the database
    artLinks.find({}, (err, links) => {
		if (err){ 
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/");
			console.log(err);
		} else { 
			res.render("gallery", {link_arr: links}); 
		}
	});
});

// Image gallery page
router.get("/image", function(req, res){
	res.locals.currPage = "image";
	// Read all image links from the database
	imageLinks.find({}, (err, links) => {
		if (err){ 
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/");
			console.log(err);
		} else {
			res.render("gallery", {link_arr: links});
		}
    });
});

// Portraits page
router.get("/portrait", function(req, res){
	res.locals.currPage = "portrait";
	// Read all image links from the database
	specialLinks.find({}, (err, links) => {
		if (err){ 
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/");
			console.log(err);
		} else {
			res.render("gallery", {link_arr: links});
		}
    });
});

// Order Page
router.get("/order", function(req, res){
	res.locals.currPage = "order";
	// Read all special links from the database
	specialLinks.find({}, (err, links) => {
		if (err){ 
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/");
			console.log(err);
		} else { 
			// Read all reviews from the database
			reviews.find({}, (err, allReviews) => {
				if (err){ 
					req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
					res.redirect("/");
					console.log(err);
				} else { 
					res.render("order", {link_arr: links, review_list: allReviews});
				}
		    }); 
		}
	}); 
});

// Create comment route
router.get("/order/review", function(req, res){
	res.locals.currPage = "";
	res.render('addComment');
});

// Comment post route
router.post("/order", function(req, res){
	// Get the new comment
	var newReview = req.body.review;
	// Add the new comment to the database
	reviews.create(newReview, function(err, data) {
		if (err){
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/order/review");
			console.log(err);
		} else {
			req.flash('success','Comment added successfully.')
			res.redirect('/order');
		}
	});
});

// Edit comment route
router.get("/order/review/:id/edit", function(req, res) {
	res.locals.currPage = "";
	// Get the comment to be updated and pass to the render page
	reviews.findById(req.params.id, function(err, foundComment){
		if(err) {
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect('/order');
		} else {
			res.render('editComment', {comment: foundComment});
		}
	});	   
});

// Update comment route
router.put("/order/review/:id", function(req, res){
	// Find the comment and update it with new data
	reviews.findOneAndUpdate({_id: req.params.id}, req.body.review, {new: true}, function(err, updatedComment){
		if(err) {
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect('back');
		} else {
			req.flash('success','Comment updated successfully.');
			res.redirect('/order');
		}
	});
});

// Delete comment route
router.delete("/order/review/:id", function(req, res) {
	// Get the comment from the database and delete the comment
	reviews.deleteOne({_id: req.params.id}, function(err){
		if(err) {
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect('/order');
		} else {
			req.flash('success',"Comment deleted successfully.");
			res.redirect('/order');
		}
	});
});

// Quotation request post route
router.post("/order/quote", function(req, res){
	// Get info from the form
	var newForm = req.body;
	newForm['file'] = req.files.file.name;
	// Add the form details to the database
	Forms.create(newForm, function(err, data) {
		if (err){
			req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
			res.redirect("/order/review");
			console.log(err);
		}
	});
	// Send out an email with the quotation request details
	sendMail(req.body, req.files).then(function(status){
		if(status == 'error'){
			req.flash('error',"Oops, something went wrong. Please provide valid details and try again.");
		} else {
			req.flash('success',"Quotation request sent successfully. You will get a notification soon on your email-id, don't forget to follow up your emails. Have a great day ahead.");
		}
		res.redirect('/order');
	});
	
});

// Games page
router.get("/games", function(req, res){
   res.locals.currPage = "color";
   res.render("games"); 
});

// Color Guessing game
router.get("/games/colorGuess", function(req, res){
   res.render("colorGuess"); 
});

// Musical circles UI
router.get("/games/musicalCircles", function(req, res){
   res.render("musicalCircles"); 
});

// Create Upload route
router.get("/upload", function(req, res){
	res.locals.currPage = "";
	res.render('uploadPhoto');
});

// Upload post route
router.post("/upload", function(req, res){
	// Get the new comment
	var newUpload = req.body.upload;
	// Validate the password
	if (process.env.PASS == newUpload['password'])
	{
		// Check and use the correct database to add the instance
		if (newUpload['type'] == 'sketch')
		{
			var dbElement = {'title':newUpload['title'], 'description':newUpload['description'], 'link':newUpload['link']};
			artLinks.create(dbElement, function(err, data) {
				if (err){
					req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
					res.redirect("/upload");
					console.log(err);
				} else {
					req.flash('success','Instance added successfully.');
					res.redirect('/art');
				}
			});
		}
		else if (newUpload['type'] == 'photo')
		{
			var dbElement = {'title':newUpload['title'], 'description':newUpload['description'], 'link':newUpload['link']};
			imageLinks.create(dbElement, function(err, data) {
				if (err){
					req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
					res.redirect("/upload");
					console.log(err);
				} else {
					req.flash('success','Instance added successfully.');
					res.redirect('/image');
				}
			});
		}
		else if (newUpload['type'] == 'portrait')
		{
			var dbElement = {'title':newUpload['title'], 'link':newUpload['link']};
			specialLinks.create(dbElement, function(err, data) {
				if (err){
					req.flash('error','Oops!!, something went wrong. Please refresh and try again.');
					res.redirect("/upload");
					console.log(err);
				} else {
					req.flash('success','Instance added successfully.');
					res.redirect('/portrait');
				}
			});
		}
	}
	else
	{
		req.flash('error', 'Incorrect password. Please try again.');
		res.redirect("/upload");
	}
});

module.exports = router;
