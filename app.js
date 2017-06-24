var express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    Flights        = require("./models/flights");
    generalRoutes  = require("./routes/general");
    hiddenRoutes   = require("./routes/hidden");

// App settings

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Connect the database.  Model and Schema are set in the Flights dependency

mongoose.connect(process.env.DB);
/*mongoose.connect("mongodb://127.0.0.1:27017/departures");*/

// The Routes

app.use(generalRoutes);
app.use(hiddenRoutes);

// Turn on the server

var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("The server is running")
});