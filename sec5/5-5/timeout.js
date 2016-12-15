/**
 * Created by Hironobu.Abe on 2016/10/06.
 */

angular.module('myApp', [])
	.controller('MyController',['$scope', '$timeout', function($scope, $timeout){
		var timer = $timeout(function(message){
			$scope.greeting = message;
		}, 1000, true, 'ようこそ、世界！');

		$scope.onclick = function(){
			$timeout.cancel(timer);
		}
	}])
