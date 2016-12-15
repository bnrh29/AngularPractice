/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.onpress = function($event){
			var k = $event.which
			console.log(k)
			if(!((k >= 48 && k <=57) || k === 45 || k === 8 || k === 0)){
				$event.preventDefault();
			}
		}
	}])
