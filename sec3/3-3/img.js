/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.isbn = '978-4-7741-7078-7';
		$scope.path = 'JavaScript:alert("危険危険!")'
	}])
