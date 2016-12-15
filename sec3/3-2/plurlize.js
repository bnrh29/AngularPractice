/**
 * Created by Hironobu.Abe on 2016/10/19.
 */
/*
angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.favs = ['山田 理央', '鈴木 洋平', '腰掛 奈美', '田中 哲市', '佐藤 令'];
//		$scope.favs = [];
	}])
*/
angular.module('myApp', ['ngMessageFormat'])
	.controller('MyController', ['$scope', function($scope) {
		$scope.favs = ['山田 理央', '鈴木 洋平', '腰掛 奈美', '田中 哲市', '佐藤 令'];
//		$scope.favs = [];
	}])
