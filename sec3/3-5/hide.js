angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		// デフォルト設定
		$scope.show = true;

		$scope.onclick = function () {
			angular.element(document.getElementById('panel'))
				.css({
					backgroundColor: '#000',
					color: '#fff'
				})
			
		};
	}])
