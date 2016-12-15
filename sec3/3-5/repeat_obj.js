angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		// 著者（author）を準備
		$scope.author = {
			name: 'YAMADA, Yoshihiro',
			gender: 'male',
			birth: new Date(1950, 11, 4)
		};
	}])
