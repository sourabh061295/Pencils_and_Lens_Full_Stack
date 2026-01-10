// Declare environment variables
require('dotenv').config();

// Require dependencies
var nodemailer    = require("nodemailer"),
	mailGun       = require("nodemailer-mailgun-transport");

// Setup mailgun authorization
const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN
	}
};

// Create a transport element
const transporter = nodemailer.createTransport(mailGun(auth));


// Setup promise function for bypassing the asynch feature
var sendMail = function (data, file) {
	return new Promise(function(resolve, reject){
		
		// Setup mail fields
		let mailOptions = {
			from: data.name + ' <' + data.email + '>',
			to: "pencils.and.lens@gmail.com",
			// subject: data.size + ' ' + data.type + ' Sketch',
			// text: 'City: ' + data.city + '\n' + data.remarks + '\nContact number: ' + data.num,
			subject: "Quote request by " + data.name,
			text: data.remarks + '\nEmail: ' + data.email + '\nContact number: ' + data.num
		}

		// Add attachment if file exists
        if (file && file.file) {
            mailOptions.attachments = [
                {
                    filename: file.file.name,
                    content: file.file.data,
                    encoding: file.file.encoding
                }
            ];
        }
		
		// Proceed to send the mail
		transporter.sendMail(mailOptions, function(err, data){
			if(err){
				// console.log(err);
				resolve('error');
			} else {
				// console.log("Email sent");
				resolve('success');
			}
		});
	});
}

module.exports = sendMail;