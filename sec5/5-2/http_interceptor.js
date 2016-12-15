/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(
			['$q', '$log', '$window',
				function ($q, $log, $window) {
					return {
						// リクエストの前処理
						'request': function (config) {
							// リクエストの開始時刻を記録
							config.startTime = (new Date()).getTime();
							// 構成オブジェクトをログ出力
							$log.info('request...');
							$log.info(config);
							return config;
						},
						// リクエストのエラー処理
						'requestError': function (rejection) {
							// 応答オブジェクトをログ出力
							$log.info('requestError...');
							$log.info(rejection);
							return $q.reject(rejection);
						},
						// レスポンスの前処理
						'response': function (response) {
							// リクエストの終了時刻を記録
							// 開始時刻と差分を計算／ログ出力
							response.config.endTime = (new Date()).getTime();
							$log.info('Process Time(sec): ' + (response.config.endTime - response.config.startTime) / 1000);

							$log.info('response...');
							$log.info(response);
							return response;
						},
						// レスポンスのエラー処理
						'responseError': function (rejection) {
							// 応答ステータスが500の場合にダイアログを
							// 表示＆ページ移動
							if (rejection.status === 500) {
								$window.alert('$http service failed !');
								location.href = 'top.html';
							}
							//応答オブジェクトをログ出力
							$log.info('responseError...');
							$log.info(rejection);
							return rejection;
						}
					}
				}
			]
		)
	}])
	.controller('MyController', ['$scope', '$http', function($scope, $http) {
		$scope.onclick = function () {
			$http({
				method: 'POST',
				url: 'http_intercepter.php',
				data: {name: $scope.name}
			})
			.success(function (data, status, header, config) {
				$scope.result = data;
			})
			.error(function (data, status, header, config) {
				$scope.result = '!!通信に失敗しました。'
			})
		}
	}])
