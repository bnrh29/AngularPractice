/**
 * Created by Hironobu.Abe on 2016/10/06.
 */

angular.module('myApp')
	.controller('MainController', ['$scope', '$location', function($scope, $location){
		$scope.msg = 'ようこそWINGSプロジェクトへ!';
		$scope.onclick = function(){
			$location.path('/articles/13');
		}
	}])
	.controller('ArticlesController',['$scope', '$routeParams', function($scope, $routeParams){
		$scope.id = $routeParams.id;
	}])
	.controller('SearchController',['$scope', '$routeParams', function($scope, $routeParams){
		$scope.keyword = $routeParams.keyword;
	}])
	.controller('ResolveController', ['$scope', 'CurrentPosition', function($scope, CurrentPosition){
		$scope.pos = CurrentPosition;
	}])
