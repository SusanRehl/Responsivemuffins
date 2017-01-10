var myApp = angular.module("myApp", ["ngRoute"]);



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


	myApp.controller("navCtrl", ["$scope", "$location", function($scope, $location){ // controller for navigation
			$scope.isActive = function(route) {
			  return route === $location.path();
			};
	}]);

	
  myApp.controller("homeController", ["$scope", function($scope){

  }]);

  myApp.controller("aboutController", ["$scope", function($scope){

  }]);

  myApp.controller("contactController", ["$scope", function($scope){

  }]);

  myApp.controller("muffinsController", ["$scope", function($scope){

  }]);
