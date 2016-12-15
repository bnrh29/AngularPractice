angular.module('myApp', ['ngMessages'])
	.controller('MyController', ['$scope', function($scope) {
		$scope.errors = [
			{type: 'required', message: '入力は必須です。'},
			{type: ['minlength','maxlength'], message: ['入力値が短すぎます。','入力値が長すぎます。']},
			{type: 'email', message: '正しいメール形式で入力してください。'}
		]
	}])
