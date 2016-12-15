/**
 * Created by Hironobu.Abe on 2016/10/06.
 */

/*
angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.books = [
			{
				isbn: '978-4-7741-7078-7',
				title: 'サーブレット & JSPポケットリファレンス',
				price: 2680,
				publish: '技術評論社',
				published: new Date(2015, 0 ,8)
			},
			{
				isbn: 'XXX-X-XXXX-XXXX-X',
				title: 'サンプル書籍',
				price: 9840,
				publish: 'サンプル出版',
				published: new Date(2016, 1 ,29)
			}
		];
	}])
*/
angular.module('myApp', [])
	.controller('MyController', function($scope, BookList){
		$scope.books = BookList();
	})
	.value('BookList', function () {
		return [
			{
				isbn: '978-4-7741-7078-7',
				title: 'サーブレット & JSPポケットリファレンス',
				price: 2680,
				publish: '技術評論社',
				published: new Date(2015, 0 ,8)
			},
			{
				isbn: 'XXX-X-XXXX-XXXX-X',
				title: 'サンプル書籍',
				price: 9840,
				publish: 'サンプル出版',
				published: new Date(2016, 1 ,29)
			}
		]
	})
