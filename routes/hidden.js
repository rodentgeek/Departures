var express  = require("express"),
    router   = express.Router(),
    Flights  = require("../models/flights"),
    seedData = require("../models/seed");

// Hidden route to reset database with original content

router.get("/seeddb", function(req, res){

	Flights.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			Flights.create(seedData, function(err2, added){
				if(err){
					console.log(err2);
				} else {
					console.log("database reset");
					res.redirect("/flights");
				}
			});
		}
	});
});

// Hidden route for data to flow through Angular scripts as an AJAX in the admin view

router.get("/ajax", function(req, res){
	Flights.find({}, function(err, flights){
		if(err){
			console.log(err);
		} else {
			res.send(flights);
		}
	});
});

module.exports = router;