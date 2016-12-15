/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', '$sce', function($scope, $sce) {
//		$scope.url = 'http://www.wings.msn.to/';
//		$scope.url = $sce.trustAs($sce.RESOURCE_URL, 'http://www.wings.msn.to/');
		$scope.url = $sce.trustAsResourceUrl('http://www.wings.msn.to/');
	}])
