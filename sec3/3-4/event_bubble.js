/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.onclick1 = function(){
			console.log("outerをクリックしました！");
		}
		$scope.onclick2 = function ($event){
			$event.stopPropagation();
			console.log("innerをクリックしました！");
		}
	}])
