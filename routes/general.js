var express = require("express"),
    router  = express.Router({mergeParams: true}),
    Flights = require("../models/flights");

// Index route. Notice it redirects to /seeddb to reset the database.  This is so new visitors
// can see the original version of this website.  The /seeddb route is listed in routes/hidden.js.

router.get("/", function(req, res){
	res.redirect("/seeddb");
});

// View routes

router.get("/flights", function(req, res){
	Flights.find().sort({departTime: "asc"}).exec(function(err, flights){
		if(err){
			console.log(err);
		} else {
			res.render("admin", {flights});
		}
	});
});

router.get("/terminal", function(req, res){
	Flights.find().sort({departTime: "asc"}).exec(function(err, flights){
		if(err){
			console.log(err);
		} else {
			res.render("terminal", {flights});
		}
	});
});

// Create routes

router.get("/flights/new", function(req, res){
	res.render("new");
});

router.post("/flights", function(req, res){
	Flights.create(req.body.flight, function(err, data){
		if(err){
			console.log(err);
		} else {
			res.redirect("/flights");
		}
	});
});

// Edit routes

router.get("/flights/:id/edit", function(req, res){
	Flights.findById(req.params.id, function(err, flight){
		if(err){
			console.log(err);
		} else {
			res.render("edit", {flight});
		}
	})
});

router.put("/flights/:id", function(req, res){
	var newval = {$set: req.body.flight}; 
	Flights.findByIdAndUpdate(req.params.id, newval, function(err, edited){
		if(err){
			console.log(err);
		} else {
			res.redirect("/flights");
		}
	});
});

// Delete route

router.delete("/flights/:id", function(req, res){
	Flights.findByIdAndRemove(req.params.id, function(err, deleted){
		if(err){
			console.log(err);
		} else {
			res.redirect("/flights");
		}
	}); 
});

module.exports = router;