angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
//		$scope.data = { book: '978-4-7741-7078-6' };
		$scope.data = { book: '' };

		$scope.books = [
			{
				isbn: '978-4-7741-7078-7',
				title: 'サーブレット&JSPポケットリファレンス',
				price: 2680,
				publish: '技術評論社1',
				published: new Date(2015, 0, 8)
			},
			{
				isbn: '111-2-3333-4444-5',
				title: 'あいうえおあいうえお',
				price: 1234,
				publish: '技術評論社2',
				published: new Date(2016, 0, 10)
			},
			{
				isbn: '666-7-8888-9999-0',
				title: 'かきくけこかきくけこ',
				price: 5678,
				publish: '技術評論社3',
				published: new Date(2014, 2, 5)
			}
		];

	}])
