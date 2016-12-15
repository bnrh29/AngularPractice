/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {
		$scope.onclick = function () {
			$http({
				method: 'POST',
				headers: {
					'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'
				},
				transformRequest: $httpParamSerializerJQLike,
				url: 'http_request.php',
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
