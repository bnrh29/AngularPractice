/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.memo = '<p onmouseover="alert(\'OK!\')">ようこそ</p>'
			+ '<a href="http://www.wings.msn.to">WINGSへ</a>'
			+ '<script>var x = 1;</script>'
			+ '<button>応募</button>'
	}])
