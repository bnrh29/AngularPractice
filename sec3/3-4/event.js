/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		// 変数greetingを初期化
		$scope.greeting = "こんにちは、権兵衛さん";

		$scope.onclick = function(){
			$scope.greeting = 'こんにちは、' + $scope.myName + 'さん！';
		}
	}])
