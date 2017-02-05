var myApp = angular.module("myApp", ["ngRoute", "ui.bootstrap", "ngAnimate"]);

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

		$(document).on('click.nav','.navbar-collapse.in',function(e) {  // collapses navbar after click
		    if( $(e.target).is('a') ) {
		        $(this).removeClass('in').addClass('collapse');
		    }
		});

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

	// UIB MODAL FOR DESIGN PAGE

	angular.module('myApp').controller('modalCtrl', function ($uibModal, $log) {
	  var $ctrl = this;
	  $ctrl.items = ['item1', 'item2', 'item3'];

	  $ctrl.animationsEnabled = true;

	  $ctrl.pumpkin = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $ctrl.animationsEnabled,
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'pumpkin.html',
	      controller: 'ModalInstanceCtrl',
	      controllerAs: '$ctrl',
	      windowClass: 'app-modal-window',
	      size: size,
	      resolve: {
	        items: function () {
	          return $ctrl.items;
	        }
	      }
	    });
	  };  // end pumpkin

		$ctrl.banana = function (size) {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaDescribedBy: 'modal-body',
				templateUrl: 'banana.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				windowClass: 'app-modal-window',
				size: size,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});
		};  // end banana

		$ctrl.french = function (size) {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaDescribedBy: 'modal-body',
				templateUrl: 'french.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				windowClass: 'app-modal-window',
				size: size,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});
		};  // end french

		$ctrl.blueberry = function (size) {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaDescribedBy: 'modal-body',
				templateUrl: 'blueberry.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				windowClass: 'app-modal-window',
				size: size,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});
		};  // end blueberry

		$ctrl.oatmeal = function (size) {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaDescribedBy: 'modal-body',
				templateUrl: 'oatmeal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				windowClass: 'app-modal-window',
				size: size,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});

		modalInstance.result.then(function (selectedItem) {
			$ctrl.selected = selectedItem;
				}, function () {
					$log.info('Modal dismissed at: ' + new Date());
				});

	}; // end last muffin (Oatmeal)

	$ctrl.toggleAnimation = function () {
		$ctrl.animationsEnabled = !$ctrl.animationsEnabled;
		};



});  //  end modalCtrl

angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}); // end ModalInstanceCtrl

angular.module('myApp').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}); // end modalComponent

// end UIB Modal
