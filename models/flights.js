var mongoose = require("mongoose");

var flightSchema = new mongoose.Schema({
	carrier: String,
	flightNum: String,
	departTime: String,
	status: String,
	gate: String,
	destination: String
});

module.exports = mongoose.model("Flight", flightSchema);