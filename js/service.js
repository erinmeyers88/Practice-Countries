angular.module("worldApp").service("myService", function($http) {
	
	this.getCountries = function() {
		
	var baseUrl = "https://restcountries.eu/rest/v1/all";	
	return $http({
			method: "GET",
			url: baseUrl
		}).then(function(responseFromCall) {
			console.log(responseFromCall);
			return responseFromCall.data;
		})
	};
	
})