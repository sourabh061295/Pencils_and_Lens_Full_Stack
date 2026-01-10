// Configure environment variables
require('dotenv').config();

// Require needed dependencies
var express       = require('express'),
    path           = require('path'),
    bodyParser     = require('body-parser'),
    methodOverride = require("method-override"),
    mongoose       = require('mongoose'),
    routes         = require("./routes"),
    seedDB         = require("./utils/seedDB"),
	cleanDB         = require("./utils/cleanDB"),
    flash          = require("connect-flash"),
    cookieParser   = require('cookie-parser'),
    upload         = require("express-fileupload");

// Initialize express app
var app = express();

// View engine setup
app.set('view engine', 'ejs');

// Connect to database
// Silence Mongoose strictQuery deprecation warning and prepare for Mongoose v7
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL);

// Seeding the database
// seedDB();

// Cleaning respective collections in DB
// cleanDB({form: true, comment: true});

// Configure the express app
// JSON parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// For file upload and transfer
app.use(upload());
// Setup public directory
app.use(express.static(path.join(__dirname, '/public')));
// For PUT and DELETE methods
app.use(methodOverride('_method'));
// Session configuration
app.use(cookieParser());
app.use(require("express-session")({
    secret: "My first express project",
    resave: false,
    saveUninitialized: false
}));
// Flash messages setup
app.use(flash());


app.use(function(req, res, next){
	res.locals.currPage = "";
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Setup routes
app.use(routes);

// Start the server
app.listen(process.env.PORT || 3000, process.env.IP, () => console.log('Pencils and Lens is online.....'));

module.exports = app;
