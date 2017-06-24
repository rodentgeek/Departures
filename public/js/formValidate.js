// Validates the form

document.querySelector("#submitbutton").addEventListener("click", function(){
	
	var v = document.querySelector("#carrier").value;
	var w = document.querySelector("#destination").value;
	var x = document.querySelector("#flightNum").value;
	var y = document.querySelector("#departTime").value;
	var z = document.querySelector("#gate").value;

	var icon = " <span class='glyphicon glyphicon-remove-circle'></span> ";
	var theMsg = "";

	// If passes all validation, submit the form.

	if(!validateFlightNum(x)){
		theMsg = icon + "Please provide a valid flight number of four or less digits."
	} else if(!validateDepartTime(y)){
		theMsg = icon + "Please provide a valid four digit military time (no colon).";
	} else if (!validateGate(z)){
		theMsg = icon + "Please provide a valid gate between 1 and 3 characters."
	} else if (!validateOther(v)){
		theMsg = icon + "Please select a valid airline prefix."
	} else if (!validateOther(w)){
		theMsg = icon + "Please select a valid destination."
	} else {
		document.querySelector("#theForm").submit();
	}

	// Any failure in validation and an appropriate message is rendered to the page

	document.querySelector("#theMsg").innerHTML = theMsg;

});

// Validates whether provided Flight Number is a number and contains 4 or less digits

function validateFlightNum(val){
	return (/^\d+$/.test(val) && val.length < 5); 
}

// Validates whether time provided is in military time

function validateDepartTime(val){
  var re = /(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)(0|1|2|3|4|5)\d{1}/;
  return (re.test(val) && val.length == 4);
}

// Validates whether gate number provided is less than 3 digits

function validateGate(val){
	return (val.length < 4 && val.length > 0);
}

// Validates someone selected an airline prefix from the dropdown

function validateOther(val){
	return (val != "XX");
}