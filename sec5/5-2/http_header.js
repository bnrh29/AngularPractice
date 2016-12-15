/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	}])

	.controller('MyController', ['$scope', '$http', function($scope, $http) {
		$scope.onclick = function () {
			$http({
				method: 'POST',
				url: 'http.php',
				data: {name: $scope.name}
			})
				.success(function (data, status, header, config) {
					$scope.result = data;
				})
				.error(function (data, status, header, config) {
					$scope.result = '!!通信に失敗しました。'
				})
		}
	}]);
