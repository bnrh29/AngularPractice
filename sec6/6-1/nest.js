/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('ParentController', ['$scope', function ($scope) {
		$scope.value = 1;

		$scope.onparent = function () {
			$scope.value++;
		}
	}])
	.controller('ChildController', ['$scope', function ($scope) {
	}])
