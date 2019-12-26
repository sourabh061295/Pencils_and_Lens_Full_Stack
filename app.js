require('dotenv').config();

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    cookieParser = require("cookie-parser"),
    flash        = require("connect-flash"),
    session = require("express-session"),
    seedDB      = require("./utils/seedDB"),
    methodOverride = require("method-override");


app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

app.use(require("express-session")({
    secret: "Art and Photos",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use(function(req, res, next){
   res.locals.currPage = "";
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

app.use('/routes');

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});