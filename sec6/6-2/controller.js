angular.module('myApp')
	.controller('MainController', ['$scope', '$location', function ($scope, $location) {
		$scope.msg = 'ようこそWINGSプロジェクトへ!';
		$scope.onclick = function () {
			$location.path('/articles/13');
		}
	}])
	.controller('ArticlesController', ['$scope', '$routeParams', '$location', '$anchorScroll', function ($scope, $routeParams, $location, $anchorScroll) {
		$scope.id = $routeParams.id;
		$scope.$on('$routeChangeSuccess', function (e, new_r, old_r) {
			console.log(e)
			console.log(new_r)
			console.log(old_r)
			$location.hash($routeParams.scroll);
			$anchorScroll();
		})
	}])
	.controller('SearchController', ['$scope', '$routeParams', function ($scope, $routeParams) {
		$scope.keyword = $routeParams.keyword;
	}])
	.controller('ResolveController', ['$scope', 'CurrentPosition', function ($scope, CurrentPosition) {
		$scope.pos = CurrentPosition;
	}])
