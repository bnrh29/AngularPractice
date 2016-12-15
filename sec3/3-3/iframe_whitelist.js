/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.config(['$sceDelegateProvider', function($sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://www.wings.msn.to/**'
		])
		$sceDelegateProvider.resourceUrlBlacklist([
			'http://www.wings.msn.to/index.php/**'
		]);
	}])
	.controller('MyController', ['$scope', function($scope) {
		$scope.url = 'http://www.wings.msn.to/';
	}])
