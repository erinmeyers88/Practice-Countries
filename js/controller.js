angular.module("worldApp").controller("myCtrl", function ($scope, myService) {
	
	$scope.getCountries = myService.getCountries().then(function(responseFromService) {
		$scope.countries = responseFromService;
		console.log($scope.countries);
		});	
	
});