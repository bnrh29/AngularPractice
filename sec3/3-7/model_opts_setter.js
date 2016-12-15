angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.my = {
			a: '権兵衛',
			name: function(name){
				if(angular.isUndefined(name)){
					return this.a;
				}else{
					this.a = name;
				}
			}
		}
	}])
