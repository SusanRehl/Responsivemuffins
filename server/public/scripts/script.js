var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("navCtrl", ["$scope", "$location", function($scope, $location){ // controller for navigation
		$scope.isActive = function(route) {
    console.log("location path is ", $location.path());
		  return route === $location.path();
		};
}]);

myApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {   //  controller for routes
	console.log("in scripts in config function");
	$routeProvider.
	  when("/home", {
			templateUrl: "/views/routes/home.html",
      controller: "homeController"
		}).
		when("/about", {
			templateUrl: "/views/routes/about.html",
      controller: "aboutController"
		}).
		when("/contact", {
			templateUrl: "/views/routes/contact.html",
      controller: "contactController"
		}).
		when("/muffins", {
			templateUrl: "/views/routes/muffins.html",
			controller: "muffinsController"
		}).
		otherwise({
			redirectTo: "/home"
		});
    $locationProvider.html5Mode(true);
	}]);

  myApp.controller("homeController", ["$scope", function($scope){
      console.log("Loaded home controller");
  }]);

  myApp.controller("aboutController", ["$scope", function($scope){
      console.log("Loaded about controller");
  }]);

  myApp.controller("contactController", ["$scope", function($scope){
      console.log("Loaded contact controller");
  }]);

  myApp.controller("muffinsController", ["$scope", function($scope){
      console.log("Loaded muffins controller");
  }]);
