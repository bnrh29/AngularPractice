angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.articles = [
			{
				title: 'サーブレット＆JSPポケットリファレンス',
				body: 'JAVAエンジニアには欠かせないサーブレット＆...',
				author: '山田祥寛'
			},
			{
				title: 'iPhone／iPad開発ポケットリファレンス',
				body: 'スマホやタブレットの代名詞といえるiPhone／iPad...',
				author: '片渕彼富'
			},
			{
				title: 'Javaポケットリファレンス',
				body: '忘れてしまいがちな基本情報をコンパクトなサイズ...',
				author: '高江賢'
			}
		]
	}])

