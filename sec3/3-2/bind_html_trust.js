/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', ['ngSanitize'])
	.controller('MyController', ['$scope', '$sce', function($scope, $sce) {
		var memo = '<p onmouseover="alert(\'OK!\')">ようこそ</p>'
			+ '<a href="http://www.wings.msn.to">WINGSへ</a>'
			+ '<script>var x = 1;</script>'
			+ '<button>応募</button>'

		$scope.memo = $sce.trustAs($sce.HTML, memo);
	}])
