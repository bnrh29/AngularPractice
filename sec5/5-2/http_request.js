/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.config(['$httpProvider', function($httpProvider) {
		// HTTP POST 時のコンテンツタイプを設定
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

		// リクエスト本体の変換関数を追加
		$httpProvider.defaults.transformRequest.push(function(data){
			data = JSON.parse(data);
			var query = [];

			//JavaScriptオブジェクトからキー／値を順に取得＆「キー=値」に整形
			for(var key in data) {
				query.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
			}
			return query.join("&");
		});
	}])

	.controller('MyController', ['$scope', '$http', function($scope, $http) {
		$scope.onclick = function () {
			$http({
				method: 'POST',
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
