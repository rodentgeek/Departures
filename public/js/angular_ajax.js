var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("/ajax")
  .then(function(response) {
    var theData = response.data;

    // Need to create two new fields called flightNumCombined and status_show, the latter for CSS purposes 
    // since in "Last Call", css names cannot contain a space

    theData.forEach(function(val, index){
    	if(val.status == "LastCall"){
    		theData[index].status_shown = "Last Call";
    	} else {
        theData[index].status_shown = val.status;
      }

      theData[index].flightNumCombined = val.carrier + val.flightNum;
    });

    $scope.flights = theData;

    // Sorting functions...

    $scope.sortDir = false;
    $scope.sortField = "departTime";

    $scope.reSort = function(field){
      if(field != $scope.sortField){
        $scope.sortDir = false;
        $scope.sortField = field;
      } else {
        $scope.sortDir = !$scope.sortDir;
      }
    };

  });
});

