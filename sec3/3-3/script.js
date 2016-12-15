/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		// テンプレート情報（オプションラベルと読込先URL）を準備
		$scope.templates = [
			{title: 'execution', url: 'templates/execution.html'},
			{title: 'tempo', url: 'templates/tempo.html'}
		]

		// テンプレートを読み込んだ際に実行されるコード
		$scope.onload = function(){
			console.log($scope.template);
		}
	}])
