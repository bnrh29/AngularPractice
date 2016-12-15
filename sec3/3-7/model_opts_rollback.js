angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.onclick = function () {
//			$scope.myForm.myName.$rollbackViewValue();
			$scope.myForm.myName.$commitViewValue();
			console.log($scope.myName);
		};
	}]);
