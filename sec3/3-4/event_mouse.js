/**
 * Created by Hironobu.Abe on 2016/10/19.
 */

angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		// 初期画像
		$scope.path = 'http://www.web-deli.com/image/linkbanner_l.gif';

		// 画像にマウスポインターが乗った時
		$scope.onmouseenter = function($event){
			console.log($event)
			$scope.path = 'http://www.web-deli.com/image/home_chara.gif';
		}

		// 画像からマウスポインターが外れた時
		$scope.onmouseleave = function(){
			$scope.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
		}
	}])
